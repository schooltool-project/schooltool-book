.. _install:

Installing SchoolTool on Ubuntu
===============================

Start by installing the server or desktop edition of `Ubuntu Linux <http://ubuntu.com>`_ version 10.10, "Maverick Meerkat," or 10.04, "Lucid Lynx."  With Lucid you will get SchoolTool 1.4; with Maverick you will get SchoolTool 1.5.  

SchoolTool 1.5 is considered a maintenance release.  If you are creating a dedicated system to run SchoolTool, using Maverick will give you a few extra features, but if you have some reason to prefer Lucid, the overall differences between SchoolTool 1.4 and 1.5 are small.

SchoolTool 1.6 for Ubuntu 11.04 "Natty Narwhal" is slated for more substantial changes and improvements.  You will need to upgrade your distribution from Lucid or Maverick to get SchoolTool 1.6 when the time comes.

#. Add `SchoolTool PPA <https://launchpad.net/~schooltool-owners/+archive/ppa/>`_ to your Software Sources.

   If you're using the command line, enter::

    sudo add-apt-repository ppa:schooltool-owners/ppa
    sudo apt-get update

   If you'd prefer to use the graphical interface, go to the **System** menu, **Administration** submenu and select **Software Sources**.  Select the **Other Software** tab, then **Add** and enter::
   
    ppa:schooltool-owners/ppa

   .. image:: images/sources.png

#. Install schooltool-2009.

   In the terminal type::

    sudo apt-get install schooltool-2009

   Or access the **Ubuntu Software Center** from the **Applications** menu.  Search for "schooltool-2009", and then click **Install** and enter your password. 

   .. image:: images/uss.png

   If all goes well, many, many small Zope components will be installed and you'll have a SchoolTool server running on http://localhost:7080.  If that doesn't work, try http://127.0.0.1:7080
   
   **The login is "manager" and the default password is "schooltool".**

Installing TrueType Fonts for PDF Reports
-----------------------------------------

   To create pdf reports, you currently need to enable the Ubuntu "multiverse" software repositories.  Go to the **System** menu, then **Administration** and select **Software Sources**.  Check the box that says **Software restricted by copyright or legal issues (multiverse)**.  You can also do this by uncommenting the multiverse entries in ``/etc/apt/sources.list``.
   
   Then ``sudo apt-get install msttcorefonts`` or install the ``msttcorefonts`` package via Synaptic.  We're working on replacing this with completely free and unencumbered fonts that will eliminate these extra steps.

Controlling the Server
----------------------

Once you've installed the SchoolTool server, it will automatically start running and restart itself whenever you start the computer.  Thus, SchoolTool will be running in the background and available at http://localhost:7080 whenever you need it.  

The SchoolTool server process will take up some of your computer's memory.  Whether or not you will notice this depends on how much memory you have on your computer, which other applications you use, and how many applications and server processes you use at the same time.

You can start and stop the process manually if you'd like::

    $ sudo service schooltool-2009 stop
    $ sudo service schooltool-2009 start

Note that there can be a delay of 30 seconds to a minute between when you issue the start command and the prompt returns, and when SchoolTool's web interface is actually accessible from a browser.

Or, if you are more used to init.d scripts you can still use:: 

    $ sudo /etc/init.d/schooltool-2009 stop
    $ sudo /etc/init.d/schooltool-2009 start

**Note:** If you want to use SchoolTool over a network or the internet go to :ref:`remote`.

.. _managepass:
