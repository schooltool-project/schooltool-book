Central Authentication Service (CAS) Support
============================================

SchoolTool provides support for using CAS for single sign on with other applications on a school intranet.  If you're already using CAS at your school, this is a no-brainer.  Otherwise, you probably need to do some research on `the CAS website first <http://www.jasig.org/cas>`_.  Note that using CAS authentication requires the installation and maintenance of a CAS authentication server.  There are CAS modules for Moodle and other web applications popular in schools.

To enable CAS in SchoolTool...

Install python-schooltool.cas via Synaptic Package Manager or just::

    sudo apt-get install python-schooltool.cas

Configure CAS authority (add to configuration)::

    $ sudo gedit /etc/schooltool/schooltool-2009/main.conf

And add to the file, where "my.cas.server" is replaced by the URL of your CAS server::

    %import schooltool.cas
    <cas_authority>
     server https://my.cas.server
    </cas_authority>

Enable CAS authentification::

    $ sudo gedit /etc/schooltool/schooltool-2009/plugins/schooltool.cas-configure.zcml

Put this line (only) in that file::

    <include package="schooltool.cas" />

Restart SchoolTool::

    $ sudo /etc/init.d/schooltool-2009 restart

SchoolTool should redirect logins to your CAS server.
