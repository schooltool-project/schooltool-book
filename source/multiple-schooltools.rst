Managing Multiple SchoolTools on One Server
===========================================

Creating multiple SchoolTool web servers on a single server (physical or virtual) based on the Ubuntu packages is a somewhat manual operation at this point.  It should take you about 10 minutes to edit the necessary files if you have some experience with that sort of thing.  In the explanation below bear in mind that you can substitute whatever names you want for "another" and use whatever text editor you prefer if you don't like ``vim``.

SchoolTool instances are defined in /etc/schooltool. Copy the standard one::

 $ sudo cp -r /etc/schooltool/standard /etc/schooltool/another

Edit the configuration file and replace or add prefixes to have
different file names::

 $ sudo vim /etc/schooltool/another/schooltool.conf
 ...
 site-definition /etc/schooltool/another/site.zcml
 ...
 <filestorage>
   path /var/lib/schooltool/another-Data.fs
 </filestorage>
 ...
 error-log-file /var/log/schooltool/another-error.log
 web-access-log-file /var/log/schooltool/another-web-access.log

You do not need to create any of those files.

Change the port to a different one than standard::

 $ sudo vim /etc/schooltool/another/paste.ini
 ...
 port = 7082

Copy and edit the init script::

 $ sudo cp /etc/init.d/schooltool /etc/init.d/schooltool-another
 $ sudo vim /etc/init.d/schooltool-another
 ...
 SERVER_DESC="Another SchoolTool"
 SERVER=another
 INSTANCE=another
 ...
 LOGFILE=/var/log/schooltool/another-paste.log
 ...

Now you can start the new server::

 $ sudo /etc/init.d/schooltool-another start

Look if there are any startup errors::

 $ tail -f /var/log/schooltool/another-paste.log
 Reading configuration from /etc/schooltool/schooltool2/schooltool.conf
 INFO:zope.app.generations:main db: evolving in mode EVOLVEMINIMUM

There is no success message. But the server should have started. Go to
http://localhost:7082 to see it.

To make this server stop/start on reboot, you have to install the
init.d script to runlevels::

 $ sudo update-rc.d schooltool-another defaults
  Adding system startup for /etc/init.d/schooltool-another ...

Now you have two instances of SchoolTool.
