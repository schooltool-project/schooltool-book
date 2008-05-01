Installing SchoolTool
=====================

For the forseeable future we are only supporting deployment on `Ubuntu Linux <http://ubuntu.com>`_ (currently, the Gutsy and Hardy releases).  Jump down for a further discussion of this policy.

#. Add SchoolTool's Launchpad PPA to your Software Sources.

  Either manually edit ``/etc/apt/sources.list``, or go to the **System** menu, select **Software Sources** and select the **Third-Party Software** tab.

  Add these lines:

  If you're running gutsy::

    deb http://ppa.launchpad.net/schooltool-owners/ubuntu gutsy main
    deb-src http://ppa.launchpad.net/schooltool-owners/ubuntu gutsy main

  If you're running hardy::

    deb http://ppa.launchpad.net/schooltool-owners/ubuntu hardy main
    deb-src http://ppa.launchpad.net/schooltool-owners/ubuntu hardy main
    
  .. image:: images/sources.png


