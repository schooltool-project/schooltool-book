System Requirements
===================

Hardware
++++++++

School Level Deployments or Greater
-----------------------------------

For production deployment in a school or district, dedicated server hardware is recommended.  If SchoolTool is not the only service provided on the server, we recommend running SchoolTool by itself on a virtual server. 

We recommend and support installation of SchoolTool on `Ubuntu Linux <http://ubuntu.com>`_ version 10.04, "Lucid Lynx" or later.

Personal
--------

For personal use, SchoolTool can be installed and used on a personal desktop or laptop computer running Ubuntu Linux, accessing the web interface locally.  This type of installation is not going to be under heavy load, since there is only one user, but it will eat up some memory while running in the background.  

Technical Specifications
------------------------

The primary bottleneck in SchoolTool's performance is usually memory.  The bare minimum RAM requirement is estimated to be 256 megabytes.  At least 512 megabytes is recommended and if you are setting up for a production server, adding more than 1 gigabyte of RAM is worth it if you can afford it.

Faster processors will make SchoolTool run faster.  Over 1 gHz is recommended.  SchoolTool is multi-threaded but due to the Python programming language's implementation only one thread will run at one time, so SchoolTool's performance does not directly benefit from multiple processors or multi-core processors.  

By the scale of modern storage technology, SchoolTool doesn't require significant disk space.  One gigabyte should handle it for quite a while.  Disk speed is more important than volume.

Sample Data
-----------

Note that importing the full set of sample data included in the spreadsheet that accompanies SchoolTool is probably the most demanding task you will ever ask of your SchoolTool instance.  The spreadsheet covers two full years of data for a school of 1000 students, and it tends to swamp computers at the lower limit of the memory requirements.  To make this more manageable, you can edit the sample data worksheet and delete some parts -- cutting down to section enrolments for only one semester, for example.

Operating System
++++++++++++++++

Ubuntu
------

The core SchoolTool development team recommends and supports installation of SchoolTool on Ubuntu Linux version 10.04, “Lucid Lynx” or later.

Fedora Linux & OLPC Server
--------------------------

`OLE Nepal <http://www.olenepal.org>`_ has created a set of RPM packages for `Fedora Linux <http://fedoralinux.org>`_ versions 9 (used by the OLPC server) and 13 for use in local pilots in Nepal as part of their `OLPC <http://laptop.org>`_ deployments.

We have actively collaborated with OLE Nepal's developers to create these packages and keep them up to date.

See :ref:`Fedora` for instructions on installing SchoolTool on Fedora Linux.

Why Ubuntu?
-----------

SchoolTool is written in Python, a highly portable open source programming language.  SchoolTool can be ported to Mac OS, Windows, or other Linux or Unix versions with a moderate amount of work.  We've done this in the past.

We have created packages for multiple OS's, but the core development team could not *support* them.  The Mac OS version ran slowly and occasionally hung for no discernible reason.  We could copy/paste some code to make SchoolTool run as a Windows service, but we didn't understand how it worked or fix it if it didn't.  A student information system is *mission critical* for a school; we don't want schools running systems that nobody is responsible for fixing.

We welcome additional ports and packages; the core development team just does not have the capacity to provide and support them ourselves.
