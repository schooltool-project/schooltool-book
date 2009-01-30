.. _install:

Installing SchoolTool on Ubuntu
===============================

For the forseeable future we are only supporting deployment on `Ubuntu Linux <http://ubuntu.com>`_ (currently, the Gutsy, Hardy and Intrepid releases).

#. Add SchoolTool's Launchpad PPA to your Software Sources.

   Either manually edit ``/etc/apt/sources.list``, or go to the **System** menu, then **Administration** and select **Software Sources**.  Select the **Third-Party Software** tab.

   Add these lines:

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

#. Update your software list.

   Either type ``sudo apt-get update`` in a Terminal or, if you've got the Synaptic package manager installed, go to **System > Administration > Synaptic Package Manager**, launch it, and click **Reload**.

#. Install schooltool-2008.

   Either type ``sudo apt-get install schooltool-2008`` in a terminal (and answer "y" to the subsequent questions), or in Synaptic search for "schooltool-2008", select it for installation, and hit **Apply**.

   **Note:** The above mentioned error messages are caused because your system is not checking to see if the packages are properly "signed" by the SchoolTool development team.  This is sufficient for testing, but in production, installing the OpenPGP key for the package archive will verify that you are getting the official signed packages direct from us.  If you are using SchoolTool in production, we highly recommend following the instructions to install our key at `Launchpad help <https://help.launchpad.net/Packaging/PPA#Adding%20a%20PPA%27s%20keys%20to%20your%20system>`_.  You'll need to get the schooltool-owners key from `our PPA website <https://launchpad.net/~schooltool-owners/+archive/ppa>`_.

   Note that on intrepid schooltool-2008 does not seem to show up in the initial search on Synaptic, so you should use the terminal method.

   If all goes well, many, many small Zope components will be installed and you'll have a SchoolTool server running on http://localhost:7080.  If that doesn't work, try http://127.0.0.1
   
   **The login is "manager" and the default password is "schooltool".**

