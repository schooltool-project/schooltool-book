System Requirements
===================

Where can I download SchoolTool?
++++++++++++++++++++++++++++++++

You won't find a simple download link for users to install SchoolTool.  

SchoolTool is a full stack web application.  That is, it comes with its own web server and database.  To make sure all the necessary components are installed correctly, we distribute SchoolTool to users as packages, primarily through Ubuntu Linux.  This gives users a simple "app store" one-click installation experience.

What follows is an explanation of this choice, hardware recommendations, and in subsequent pages instructions for installing various versions of SchoolTool on various versions of Ubuntu.

Operating System
++++++++++++++++

Ubuntu
------

The core SchoolTool development team recommends installation of SchoolTool on Ubuntu 12.04 LTS or later.

Why Ubuntu?
-----------

SchoolTool is written in Python, a highly portable open source programming language.  SchoolTool can be ported to Mac OS, Windows, or other Linux or Unix versions with a moderate amount of work.  We've done this in the past.

We have created packages for multiple operating systems, but the core development team could not *support* them.  The Mac OS version ran slowly and occasionally hung for no discernible reason.  We could copy/paste some code to make SchoolTool run as a Windows service, but we didn't understand how it worked or fix it if it didn't.  A student information system is *mission critical* for a school; we don't want schools running systems that nobody is responsible for fixing.

We welcome additional ports and packages; the core development team just does not have the capacity to provide and support them ourselves.

Hardware
++++++++

School Level Deployments or Greater
-----------------------------------

For production deployment in a school or district, dedicated server hardware is recommended.  If SchoolTool is not the only service provided on the server, we recommend running SchoolTool by itself on a virtual server.  

SchoolTool can be hosted in "the cloud" on any server (physical or virtual) that provides root access to the server OS or the equivalent.  You will need to have rights on the server to install software and add SchoolTool as a system service.  A simple "web hosting" service that allows you to add HTML and PHP pages is not sufficient.

We recommend and support installation of SchoolTool on `Ubuntu Linux <http://ubuntu.com>`_ version 12.04 "Precise Pangolin" or later.  Community-provided packages for Fedora Linux are also available.

Personal
--------

For personal use, SchoolTool can be installed and used on a personal desktop or laptop computer running Ubuntu Linux, accessing the web interface locally.  This type of installation is not going to be under heavy load, since there is only one user, but it will eat up some memory while running in the background.  

Technical Specifications
------------------------

The primary bottleneck in SchoolTool's performance is usually memory.  The bare minimum RAM requirement for testing is estimated to be 256 megabytes.  At least 512 megabytes is recommended and if you are setting up for a production server, adding more than 1 gigabyte of RAM is worth it if you can afford it.  More memory equals faster database performance.

Faster processors will make SchoolTool run faster.  Over 1 gHz is recommended.  SchoolTool is multi-threaded, but due to the Python programming language's implementation only one thread will run at one time, so SchoolTool's performance does not directly benefit from multiple processors or multi-core processors.  

Ubuntu SchoolTool packages are available for low-power ARM architecture processors, as well as i386 and AMD64 PC and server processors.

By the scale of modern storage technology, SchoolTool doesn't require significant disk space.  One gigabyte should handle it for quite a while.  Disk speed is more important than volume.

Sample Data
-----------

Note that importing the larger spreadsheet of sample data included with SchoolTool is probably the most demanding task you will ever ask of your SchoolTool instance.  The large spreadsheet covers two full years of data for a school of 1000 students, and it tends to swamp computers at the lower limit of the memory requirements.  A smaller set of sample data is also provided.  

