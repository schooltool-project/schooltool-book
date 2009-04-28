.. _install:

Installing SchoolTool on Ubuntu
===============================

For the forseeable future we are only supporting deployment on `Ubuntu Linux <http://ubuntu.com>`_ (currently, the Gutsy, Hardy and Intrepid and Jaunty releases).

#. Add SchoolTool's Launchpad PPA to your Software Sources.

   Either manually edit ``/etc/apt/sources.list``, or go to the **System** menu, then **Administration** and select **Software Sources**.  Select the **Third-Party Software** tab.

   Add these lines:

   If you're running jaunty::

    deb http://ppa.launchpad.net/schooltool-owners/ubuntu jaunty main
    deb-src http://ppa.launchpad.net/schooltool-owners/ubuntu jaunty main

   If you're running intrepid::

    deb http://ppa.launchpad.net/schooltool-owners/ubuntu intrepid main
    deb-src http://ppa.launchpad.net/schooltool-owners/ubuntu intrepid main

   If you're running gutsy::

    deb http://ppa.launchpad.net/schooltool-owners/ubuntu gutsy main
    deb-src http://ppa.launchpad.net/schooltool-owners/ubuntu gutsy main

   If you're running hardy::

    deb http://ppa.launchpad.net/schooltool-owners/ubuntu hardy main
    deb-src http://ppa.launchpad.net/schooltool-owners/ubuntu hardy main
    
   .. image:: images/sources.png

#. Add the digital keys for the SchoolTool-Owner's Personal Package Archive (PPA) to your system.

   This step ensures that you're getting the official version of SchoolTool, that:

   * the packages you're downloading haven't been altered since Launchpad built them;
   * you are downloading from the PPA you wanted. 

   Please follow the instructions to install our key at `Launchpad Help <https://help.launchpad.net/Packaging/PPA#Adding%20a%20PPA%27s%20keys%20to%20your%20system>`_.  You'll need to get the schooltool-owners key from the `SchoolTool-Owners PPA <https://launchpad.net/~schooltool-owners/+archive/ppa>`_.  `Adding the keys in the terminal <https://help.launchpad.net/Packaging/PPA#Adding%20the%20keys%20in%20the%20terminal>`_ is the easier method.

#. Update your software list.

   Either type ``sudo apt-get update`` in a Terminal or, if you've got the Synaptic package manager installed, go to **System > Administration > Synaptic Package Manager**, launch it, and click **Reload**.

#. Install schooltool-2009.

   Either type ``sudo apt-get install schooltool-2009`` in a terminal (and answer "y" to the subsequent questions), or in Synaptic search for "schooltool-2009", select it for installation, and hit **Apply**.  If it doesn't show up in Synaptic try the terminal method.

   If all goes well, many, many small Zope components will be installed and you'll have a SchoolTool server running on http://localhost:7080.  If that doesn't work, try http://127.0.0.1
   
   **The login is "manager" and the default password is "schooltool".**

