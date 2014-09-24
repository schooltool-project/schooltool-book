.. highlight:: sandbox
.. _sandbox:

Testing With VirtualBox 
=======================

Using Virtual Servers
---------------------

If you would like to test SchoolTool but are unfamiliar with the
Ubuntu operating system, or an Ubuntu user who does not want to install 
the SchoolTool package and (many) dependencies on a production system, one
solution is to create a virtual server running Ubuntu.

Using virtualization, we can install Ubuntu as a guest operating system (OS) on
a host computer which may be running Windows, Mac OS X, Linux, or another OS --
provided that the host machine has adequate processing power and RAM to allocate to the virtual SchoolTool guest machine.

There are many options available for running virtual servers. In this case,
we will use `VirtualBox <https://www.virtualbox.org>`_, which runs on Windows,
Linux, and Macintosh hosts and is freely available as open source
software under the terms of the GNU General Public License (GPL) version 2.

Installing VirtualBox 
---------------------

To begin, `download the latest version of VirtualBox
<https://www.virtualbox.org/wiki/Downloads>`_. Be sure to download the
appropriate binary package for your host operating system. Run the installer and
follow the prompts, then start VirtualBox.

Meanwhile, `download the latest Ubuntu Server 14.04 LTS
<http://releases.ubuntu.com/14.04/>`_ image.  Note that if your host 
computer is 32 bit, you must also use the 32 bit version of Ubuntu server
on the virtual server.

Install Ubuntu as a guest OS by following the instructions in the `Ubuntu
Community Documentation
<https://help.ubuntu.com/community/Ubuntu_as_Guest_OS>`_.

Network Adapter Settings
------------------------

In order to configure the virtual network adapters of your new Schooltool server, 
click on the "Network" section of the VirtualBox administrative 
interface.

    .. image:: images/virtualbox-01.png

By default, a new VirtualBox guest should be attached to the outside world via
Network Address Translation (NAT), which enables the guest machine to reach the
Internet, but via a private IP address which is not accessible from the host, or
other machines on your local network.

    .. image:: images/virtualbox-02.png

This will allow you to access the Internet from within the virtual machine, so
you can update your Ubuntu Server packages, and install SchoolTool along with
all of its dependencies. But it won't allow you to access SchoolTool's
adminitrative interface from a browser on the host, or allow multiple virtual
machines to access each other.

In order to access the SchoolTool server from the host computer or any other
computer on your local network, you'll need to add a second network adapter to
the guest machine.

    .. image:: images/virtualbox-03.png

After doing this, reboot your virtual machine in order for the new network 
configuration to take effect.

It is possible to deploy SchoolTool in production on a virtual server
(including one running on Windows or Mac OS X), but the full setup and configuration is 
beyond the scope of this tutorial.

**add setting up multiple vm's that can connect to one another (we have some
multi-site functionality now under development).**
