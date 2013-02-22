Managing Multiple SchoolTools on One Server
===========================================

Creating multiple SchoolTool web servers on a single server (physical or virtual) based on the Ubuntu packages is a somewhat manual operation at this point.  It should take you about 10 minutes to edit the necessary files if you have some experience with that sort of thing.  In the explanation below, bear in mind that you can substitute whatever names you want for "another" and use whatever text editor you prefer if you don't like ``vim``.

SchoolTool instances are defined in /etc/schooltool. Copy the standard one::

 $ sudo cp -r /etc/schooltool/standard /etc/schooltool/another

Edit the configuration file and replace or add prefixes to have different file names::

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

You do not need to create any of those files -- they will appear automatically when the server begins logging.

By default, SchoolTool's web server listens for connections on port 7080. To prevent collisions, you must configure the duplicate server to listen on a different port::

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

Check the logfiles to see if there are any startup errors::

 $ tail -f /var/log/schooltool/another-paste.log
 Reading configuration from /etc/schooltool/schooltool2/schooltool.conf
 INFO:zope.app.generations:main db: evolving in mode EVOLVEMINIMUM

There is no success message, but the server should have started. Go to
http://localhost:7082 to see if the web interface is up and running.

In order for this server to stop/start automatically on reboot, install
its init.d script to the appropriate runlevels::

 $ sudo update-rc.d schooltool-another defaults
  Adding system startup for /etc/init.d/schooltool-another ...

Congratulations -- you now have two instances of SchoolTool.
