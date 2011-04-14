Basic Database Administration
=============================

Unlike most web applications, SchoolTool does not use a relational database such as MySQL or PostgreSQL.  It uses the Zope Object Database or ZODB.  The ZODB has some specific characteristics a SchoolTool site manager should be aware of.

Where is the data?
------------------

All the data in a given SchoolTool instance is stored in a file conventionally named ``schooltool-(version)-Data.fs``.  On an Ubuntu system this file can be found in the ``/var/lib/schooltool/`` directory.  For example, in SchoolTool 2008, the database file is at ``/var/lib/schooltool-2008-Data.fs``.  The additional files in that directory ending with ``.index``, ``.lock``, and ``.tmp`` are used by the application in various ways but **do not** contain any data about your school which is not also included in the main ``-Data.fs`` file.  That is, you can back up all your data with just the ``-Data.fs`` file.

Automatic backups
-----------------

Whenever SchoolTool is updated to a new version via Ubuntu's update mechanisms, it creates a backup of the current database.  It also compresses and retains previous backups.  The most recent back up in ``/var/lib/schooltool/`` has a ``.0`` appended, like ``schooltool-2008-Data.fs.0``.  Older backups are also gzipped, with increasing numbers as suffixes.  ``schooltool-2008-Data.fs.2.gz`` is older than ``schooltool-2008-Data.fs.1.gz`` for example.

How do I do a manual backup?
----------------------------

While it is possible to do a "hot" backup of SchoolTool's database while the application is running, for the sake of simplicity, in this document we will just cover a standard backup.  Basically, just stop SchoolTool, copy ``Data.fs``, and restart the server::

    sudo /etc/init.d/schooltool-2008 stop
    sudo cp /var/lib/schooltool-2008-Data.fs /media/backups/schooltool-2008-Data.fs-`date +%Y%m%d-%H%M`
    sudo /etc/init.d/schooltool-2008 start

Substitute the actual location of your backup in the place of ``/media/backups``.  The ``date +%Y%m%d-%H%M`` command embedded into the ``cp'' command is a bash command to embed the current date and time into the filename.  That will allow you to keep a bunch of backups by date easily.  Of course, if you've got a more sophisticated backup system than ``cp``, by all means use that!

Restoring from a Backup
------------------------

In most cases, if you need to return to a previous automatic database backup, you should stop SchoolTool, rename the current ``Data.fs`` just in case you *do* need it later, remove the ``.0`` from the most recent backup, and restart the server::

    sudo /etc/init.d/schooltool-2008 stop
    sudo mv /var/lib/schooltool-2008-Data.fs /var/lib/schooltool-2008-Data.fs.bad
    sudo mv /var/lib/schooltool-2008-Data.fs.0 /var/lib/schooltool-2008-Data.fs
    sudo /etc/init.d/schooltool-2008 start

If you need to try an even older backup, ungzip it::

    sudo gunzip /var/lib/schooltool-2008-Data.fs.1.gz 

The procedure for restoring from a previous manual backup is the same, that is, copy the file to the ``Data.fs`` position, except only you know where it is coming from.

What if My Database is Empty After an Upgrade?
----------------------------------------------

If something goes awry during the backup process, it is possible that your current database will be moved ``.0`` first backup position but a blank database will be in the "current" ``Data.fs`` position::

    sudo mv /var/lib/schooltool-2008-Data.fs.0 /var/lib/schooltool-2008-Data.fs

How can I erase the entire database?
------------------------------------

Delete the ``-Data.fs`` file.  This is, of course, permanent.  If there is the slightest chance you'll ever want that data, moving rather than deleting the file is advisable.

Packing the database.
---------------------

The ZODB is designed to keep a record of transactions, which can be used by an application to allow "undo" functionality.  One implication of this, however, is that the database file grows in size as it stores a longer and longer list of changes to each object.  To shrink the database back to a more efficient size, one can "pack" it.  

Because SchoolTool does not allow you to undo transactions, you can pack the database at any time.  It does not have to be done very frequently, not daily.  Monthly or weekly should suffice, but your mileage may vary.  It may be something you do prior to high demand periods, such as before teachers submit grades.  Backing up your database prior to packing it should not be necessary, but also is not a bad idea.

To pack the database via the web, log in as a site manager, click on the **Manage** link at the top of the page, then select the **Application Control** link, and then the **ZODB Control** button:

   .. image:: images/packing.png

By default, all your data will be in one database as shown above.  Check the box in the **pack** column next to the name of the database, and click the **Pack** button.  Packing will take several minutes and puts a load on the server, so do this at an off-peak time.  Leave the browser open until the page re-loads.

