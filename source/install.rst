.. _install:

Installing SchoolTool on Ubuntu
===============================

For the forseeable future we are only supporting deployment on `Ubuntu Linux <http://ubuntu.com>`_ (currently, Hardy, Intrepid, Jaunty and Karmic releases).

#. Add `SchoolTool PPA <https://launchpad.net/~schooltool-owners/+archive/ppa/>`_ to your Software Sources.

   Either manually edit ``/etc/apt/sources.list`` and add these lines to the end of the file, or go to the **System** menu, then **Administration** and select **Software Sources**.  Select the **Third-Party Software** tab.

   If you're running Hardy add::

    deb http://ppa.launchpad.net/schooltool-owners/ppa/ubuntu hardy main
    deb-src http://ppa.launchpad.net/schooltool-owners/ppa/ubuntu hardy main

   If you're running Intrepid add::

    deb http://ppa.launchpad.net/schooltool-owners/ppa/ubuntu intrepid main
    deb-src http://ppa.launchpad.net/schooltool-owners/ppa/ubuntu intrepid main

   If you're running Jaunty add::

    deb http://ppa.launchpad.net/schooltool-owners/ppa/ubuntu jaunty main
    deb-src http://ppa.launchpad.net/schooltool-owners/ppa/ubuntu jaunty main

   If you're running Karmic and using the **Software Sources** window (recommended), add::
   
    ppa:schooltool-owners/ppa

   If you're running Karmic and editing /etc/apt/sources.list add::

    deb http://ppa.launchpad.net/schooltool-owners/ppa/ubuntu karmic main
    deb-src http://ppa.launchpad.net/schooltool-owners/ppa/ubuntu karmic main

   **Note:** If you previously edited your ``/etc/apt/preferences`` file to install on Karmic, you should now remove the following lines, or delete the file if they are the only entry::

    Explanation: prefer packages from SchoolTool PPA
    Package: *
    Pin: release o=LP-PPA-schooltool-owners
    Pin-Priority: 1001

   .. image:: images/sources.png

#. Add the digital keys of the Launchpad PPA for SchoolTool Owners to your system.

   **Note:** if you are using **Software Sources** on Karmic, you can skip this step.  It is handled automatically.

   This step ensures that you're getting the official version of SchoolTool, that:

   * the packages you're downloading haven't been altered since Launchpad built them;
   * you are downloading from the PPA you wanted. 

    To do this, open a Terminal: go to **Applications > Accessories > Terminal** and run the following command::
 
     sudo apt-key adv --recv-keys --keyserver keyserver.ubuntu.com c95c0e19386b7051


   Full instructions instructions for installing our key can be found at `Launchpad Help <https://help.launchpad.net/Packaging/PPA#Adding%20a%20PPA%27s%20keys%20to%20your%20system>`_.  
   
#. Update your software list.

   Either type ``sudo apt-get update`` in a Terminal or, if you've got the Synaptic package manager installed, go to **System > Administration > Synaptic Package Manager**, launch it, and click **Reload**.

#. Install schooltool-2009.

   Either type ``sudo apt-get install schooltool-2009`` in a terminal (and answer "y" to the subsequent questions), or in Synaptic search for "schooltool-2009", select it for installation, and hit **Apply**.  If it doesn't show up in Synaptic try the terminal method.

   If all goes well, many, many small Zope components will be installed and you'll have a SchoolTool server running on http://localhost:7080.  If that doesn't work, try http://127.0.0.1:7080
   
   **The login is "manager" and the default password is "schooltool".**

Installing TrueType Fonts for PDF Reports
-----------------------------------------

   To create pdf reports, you currently need to enable the Ubuntu "multiverse" software repositories.  Go to the **System** menu, then **Administration** and select **Software Sources**.  Check the box that says **Software restricted by copyright or legal issues (multiverse)**.  You can also do this by uncommenting the multiverse entries in ``/etc/apt/sources.list``.
   
   Then ``sudo apt-get install msttcorefonts`` or install the ``msttcorefonts`` package via Synaptic.  We're working on replacing this with completely free and unencumbered fonts that will eliminate these extra steps.
