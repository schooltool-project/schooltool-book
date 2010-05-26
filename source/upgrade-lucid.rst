Upgrading SchoolTool After Lucid
================================

After SchoolTool 1.4, released for Ubuntu 10.4, "Lucid Lynx," new stable point versions of SchoolTool will be released only for the new/current version of Ubuntu.  For example, SchoolTool 1.6 will be available only for Ubuntu 10.10, "Maverick Meerkat."  

Security updates and necessary maintenance releases will continue to be made for earlier supported SchoolTool versions.

The main implication of this change is that as long as you do not upgrade the version of your operating system, you will not unexpectedly install a new version of SchoolTool that includes new features, changes in the user interface, or anything else that might confuse current users.  This will also limit the introduction of new bugs to production servers.

This change *does* mean that to upgrade SchoolTool you will have to upgrade the entire system you're running SchoolTool on.  It is another good reason to run SchoolTool on its own dedicated server or virtual server, so that you do not have to upgrade other services at the same time if you don't want to.

See `Upgrade instructions for Ubuntu <https://help.ubuntu.com/10.04/serverguide/C/installing-upgrading.html>`_ for more info on upgrading your system (and thus SchoolTool).
