.. highlight:: sandbox
.. _sandbox:

Sandbox Configuration
=====================

Using Virtual Servers
---------------------

SchoolTool may be deployed in a "sandbox" (testing environment) for evaluation
purposes by installing Ubuntu Server as a virtual appliance. This approach is
particularly desirable for individuals or organizations who are unfamiliar with
Ubuntu Linux (or those who already use Ubuntu Server, but don't want to add the
schooltool-owners Personal Package Archives to their existing server's sources).

Using virtualization, we can install Ubuntu as a guest operating system (OS) on
a host computer which may be running Windows, Mac OS X, Linux, or another OS --
provided that the host machine has adequate processing power and RAM to allocate
to the virtual SchoolTool guest machine.

The software used to manage guest operating systems is known as a *hypervisor*
or virtual machine monitor (VMM), and there are many options available. We
recommend `VirtualBox <https://www.virtualbox.org>`_, which runs on Windows,
Linux, Macintosh and Solaris hosts and is freely available as Open Source
Software under the terms of the GNU General Public License (GPL) version 2.

Installing VirtualBox 
---------------------

To begin, `download the latest version of VirtualBox
<https://www.virtualbox.org/wiki/Downloads>`_. Be sure to download the
appropriate binary package for your host operating system. Run the installer and
follow the prompts, then start VirtualBox.

Meanwhile, `download the latest Ubuntu Server 14.04 LTS
<http://www.ubuntu.com/download/server>`_ image. Note that a 64-bit host OS
is necessary to support a 64-bit guest OS, so this version of Ubuntu Server will
not run on a 32-bit host platform.

Install Ubuntu as a guest OS by following the instructions in the `Ubuntu
Community Documentation
<https://help.ubuntu.com/community/Ubuntu_as_Guest_OS>`_.

NAT vs. Bridged Adapter
-----------------------

By default, a new VirtualBox guest will be attached to the outside world via
Network Address Translation (NAT), which enables the guest machine to reach the
Internet, but via a private IP address which is not accessible from the host, or
other machines on your local network.

In order to access the SchoolTool server from your local network, you will need
to click on the "Network" section of the VirtualBox administrative interface ...

    .. image:: images/virtualbox-01.png

... and change the network attachment type from NAT to Bridged Adapter.

    .. image:: images/virtualbox-02.png

After doing this, reboot your virtual machine in order for the new network 
configuration to take effect. This will expose the virtual network adapter of
your SchoolTool virtual machine to the local network, just as if it were an
actual physical server.

Log on to the virtual machine and run ``ifconfig`` to determine the new IP
address assigned to the virtual network adapter, then access your SchoolTool
server instance at that IP address on port 7080. For example, if ``ifconfig``
tells you that the IP address for eth0 is ``192.168.1.151``, then you would
access SchoolTool at ``http://192.168.1.151:7080``.

NOTE: Do not attempt to run a Bridged Adapter network setup outside of a trusted 
network environment without taking appropriate steps to secure SchoolTool, such 
as changing your "Default Manager" password!

It is possible for a knowledgable system administrator to deploy SchoolTool as a
virtual server in production, but such a configuration is beyond the scope of
this tutorial.
