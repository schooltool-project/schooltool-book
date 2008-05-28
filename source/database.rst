Basic Database Administration
=============================

Unlike most web applications, SchoolTool does not use a relational database such as MySQL or PostgreSQL.  It uses the Zope Object Database or ZODB.  The ZODB has some specific characteristics a SchoolTool site manager should be aware of.

Where is the data?
------------------

All the data in a given SchoolTool instance is stored in a file conventionally named ``schooltool-(version)-Data.fs``.  On an Ubuntu system this file can be found in the ``/var/lib/schooltool/`` directory.  For example, in SchoolTool 2008, the database file is at ``/var/lib/schooltool-2008-Data.fs``.  The additional files in that directory ending with ``.index``, ``.lock``, and ``.tmp`` are used by the application in various ways but **do not** contain any data about your school which is not also included in the main ``-Data.fs`` file.  That is, you can back up all your data with just the ``-Data.fs`` file.

How do I do a backup?
---------------------

While it is possible to do a "hot" backup of SchoolTool's database while the application is running, for the sake of simplicity, in this document we will just cover a standard backup.  Basically, just stop SchoolTool, copy Data.fs, and restart the Server::

    sudo /etc/init.d/schooltool-2008 stop
    sudo cp /var/lib/schooltool-2008-Data.fs /media/backups/
    sudo /etc/init.d/schooltool-2008 start

Substitute the actual location of your backup in the place of ``/media/backups``.  Of course, if you've got a more sophisticated backup system than ``cp``, by all means use that!

How do I erase the entire database while I'm experimenting?
-----------------------------------------------------------

Delete the ``-Data.fs`` file.  This is, of course, permanent.  If there is the slightest chance you'll ever want that data, moving rather than deleting the file is advisable.

Packing the database.
---------------------

The ZODB is designed to keep a record of transactions, which can be used by an application to allow "undo" functionality.  One implication of this, however, is that the database file grows in size as it stores a longer and longer list of changes to each object.  To shrink the database back to a more efficient size, one can "pack" it.  

Because SchoolTool does not allow you to undo transactions, you can pack the database at any time.  It does not have to be done very frequently.  Monthly or weekly should suffice, but your mileage may vary.  It may be something you do prior to high demand periods, such as before teachers submit grades.  Backing up your database prior to packing it should not be necessary, but also is not a bad idea.

