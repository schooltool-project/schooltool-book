.. _fedora:

Installing SchoolTool on Fedora Linux
-------------------------------------

Currently RPM packages, developed and used by `OLE Nepal <http://www.olenepal.org>`_
for Fedora 9, 14, and 15 are mirrored on `ftp.schooltool.org <http://ftp.schooltool.org/rpms/>`_.

To install the standard SchoolTool distribution on Fedora, excecute the
following commands in a terminal as a privileged user::

    yum update
    yum install wget
    cd /etc/yum.repos.d/
    wget http://ftp.schooltool.org/rpms/schooltool.repo
    yum update
    yum install schooltool-intervention

This will include all the standard SchoolTool components, the core
``schooltool`` package, ``schooltool-gradebook``, ``schooltool-lyceum-journal``
as well as the many Zope and Python libraries.  These can be installed
separately if desired.

To make SchoolTool start at every boot, execute this command at the terminal as a privileged user::

    chkconfig --add schooltoold
    chkconfig schooltoold on

The Fedora packages are maintained by Abhishek Singh, aks (at)
fedoraproject.org.  The packaging sources (spec files and patches) are available
from `this git repository
<http://gitorious.org/schooltool-rpm/schooltool-rpm/>`_. 

Continue setup at :ref:`initial-config`
