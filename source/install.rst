.. _install:

Installing SchoolTool on Ubuntu
===============================

We recommend and support installation of SchoolTool on `Ubuntu Linux <http://ubuntu.com>`_ version 10.04, "Lucid Lynx" or 9.10, "Karmic Koala."  With either of these versions you will get SchoolTool 1.4.  

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
