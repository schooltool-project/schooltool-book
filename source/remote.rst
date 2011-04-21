.. _remote:

Making SchoolTool's Web Interface Accessible to Other Computers (or not)
========================================================================

In SchoolTool 2008.4, a newly installed SchoolTool server is not accessible over the network by default.  Additional steps to make it accessible from other computers are listed below.  We will probably change this behavior in future releases to be more consistent with people's expectations.

To allow all other computers to access SchoolTool's web interface
-----------------------------------------------------------------

Edit ``/etc/schooltool/schooltool-2008/paste.ini`` as root.  For example::

    sudo nano /etc/schooltool/schooltool-2008/paste.ini

Change the ``host =``  line to read::

    host = 0.0.0.0

You will then need to restart SchoolTool following the instructions in :ref:`setup_initial`

To make SchoolTool's web interface only accessible from the server
------------------------------------------------------------------

This is primarily useful while configuring and testing a server before going live, or when SchoolTool is being run on a laptop or desktop PC and only accessed on that machine.

Edit the ``paste.ini`` file as described above, setting it to read::

  host = 127.0.0.1


