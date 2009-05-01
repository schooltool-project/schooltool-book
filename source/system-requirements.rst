System Requirements
===================

School Level Deployments or Greater
-----------------------------------

For production deployment in a school or district, proper server hardware is, of course, recommended.  If SchoolTool is not the only service provided on the server, we recommend running SchoolTool by itself on a virtual server, running the "minimal virtual machine" configuration offered in Ubuntu Server 9.10 and later, or _the JeOS version of `Ubuntu 8.04 LTS <http://www.ubuntu.com/products/whatisubuntu/serveredition/jeos>`_. 

Personal
--------

For personal use, SchoolTool can be installed and used on a personal desktop or laptop computer running Ubuntu Linux, accessing the web interface locally.  This type of installation is not going to be under heavy load, since there is only one user, but it will eat up some memory while running in the background.  

Hardware
--------

The primary bottleneck in SchoolTool's performance is usually memory.  The minimum  RAM requirement is 256 megabytes.  512 megabytes is recommended and if you are setting up dedicated server, adding more than 1 gigabyte of RAM is worth it if you can afford it.

Faster processors will make SchoolTool run faster.  Over 1 gHz is recommended.  SchoolTool is multi-threaded but only one thread can run at one time, so it does not directly benefit from multiple processors or multi-core processors.  

By the scale of modern storage technology, SchoolTool doesn't require significant disk space.  Around 1 gigabyte should handle it.  Speed is more important than volume.

Sample Data
-----------

Note that importing the full set of sample data included in the spreadsheet that accompanies SchoolTool is probably the most demanding task you will ever ask of your SchoolTool instance.  The spreadsheet covers two full years of data for a school of 1000 students, and it tends to swamp computers at the lower limit of the memory requirements.  To make this more manageable, you can edit the sample data worksheet and delete some parts -- cutting down to section enrolments for only one semester, for example.

Why Ubuntu Only?
----------------

SchoolTool is written in Python, a highly portable open source programming language.  SchoolTool can be ported to Mac OS, Windows, or other Linux or Unix versions with a moderate amount of work.  We've done this in the past.

We have created packages for multiple OS's, but the core development team could not *support* them.  The Mac OS version ran slowly and occasionally hung for no discernible reason.  We could copy/paste some code to make SchoolTool run as a Windows service but we didn't understand how it worked or fix it if it didn't.  A helpful volunteer made some RPM packages, but we didn't know much about how they worked and he didn't know much about how SchoolTool worked, so if someone had a problem with them, it wasn't clear who could help.  A student information system is *mission critical* for a school; we don't want schools running systems that nobody understands.

So, we provide one set of packages which we understand very well, and for which we  have a very efficient, automated system to create and push updates and bugfixes.  If a user has a problem, we at least start from a uniform working environment.

We welcome additional ports and packages; the core development team just does not have the capacity to provide and support them ourselves.
