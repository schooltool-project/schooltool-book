Upgrading SchoolTool After Lucid
================================

After SchoolTool 1.4, released for Ubuntu 10.4, "Lucid Lynx," new stable point versions of SchoolTool will be released only for the new/current version of Ubuntu.  For example, SchoolTool 1.6 will be available only for Ubuntu 10.10, "Maverick Meerkat."  

Security updates and necessary maintenance releases will continue to be made for earlier supported SchoolTool versions.

The main implication of this change is that as long as you do not upgrade the version of your operating system, you will not unexpectedly install a new version of SchoolTool that includes new features, changes in the user interface, or anything else that might confuse current users.  This will also limit the introduction of new bugs to production servers.

This change *does* mean that to upgrade SchoolTool you will have to upgrade the entire system you're running SchoolTool on.  It is another good reason to run SchoolTool on its own dedicated server or virtual server, so that you do not have to upgrade other services at the same time if you don't want to.

See `Upgrade instructions for Ubuntu <https://help.ubuntu.com/10.04/serverguide/C/installing-upgrading.html>`_ for more info on upgrading your system (and thus SchoolTool).

Notes on Upgrading from Hardy Long Term Support (LTS) Release to Lucid LTS
==========================================================================

Before the dist-upgrade (distribution upgrade) from Hardy to Lucid all third-party repositories are disabled, therefore SchoolTool is not upgraded at the same time. Some Zope libraries in Hardy conflict with python (<< 2.6), so they are removed on dist-upgrade, and in turn SchoolTool is removed as well and is not running for the duration of the upgrade. To avoid that, it is possible to upgrade those libraries so that SchoolTool is not removed.

Edit ``/etc/apt/sources.list`` and change schooltool-owners line from "hardy" to "jaunty". Then upgrade several Zope-related packages::

    sudo apt-get install python-paste python-zodb python-zope.app.component python-zope.app.container python-zope.hookable python-zope.i18nmessageid python-zope.interface python-zope.proxy python-zope.security python-zope.ucol

You can then `upgrade Ubuntu <https://help.ubuntu.com/10.04/serverguide/C/installing-upgrading.html>`_ normally.

After the upgrade is complete, edit ``/etc/apt/sources.list`` and change
schooltool-owners line to "lucid". Then ``sudo apt-get update`` and ``sudo apt-get upgrade`` again to get the newest Schooltool and Zope libraries.

