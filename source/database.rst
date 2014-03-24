Basic Database Administration
=============================

Unlike most web applications, SchoolTool does not use a relational database such as MySQL or PostgreSQL.  Instead, it uses ZODB -- the Zope Object Database.  ZODB has some specific characteristics a SchoolTool site manager should be aware of.

The main drawback to this, from the point of view of a school's systems administrator or programmer, is that you cannot simply directly access data in the form of raw tables.  It has to be done programmatically in Python, either from a module in the main server application, or an external Python script that imports much of SchoolTool's object model.  

If you have specific needs for data reporting, don't hesitate to contact us. 

Where is the data?
------------------

All the data in a given SchoolTool instance is stored in a file named ``Data.fs``.  On an Ubuntu system this file can be found in the ``/var/lib/schooltool/`` directory.  The additional files in that directory ending with ``.index``, ``.lock``, and ``.tmp`` are all used by the application in various ways, but they `do not` contain any data about your school which is not also included in the main ``Data.fs`` file.  

Photos, reports, and other binary files are stored outside the ``Data.fs`` database in a ``blobs`` directory.

Automatic backups
-----------------

Whenever SchoolTool is updated to a new version via Ubuntu's update mechanisms, it creates a backup of the current database.  It also compresses and retains previous backups.  The most recent back up in ``/var/lib/schooltool/`` has a ``.0`` appended, like ``schooltool/Data.fs.0``.  Older backups are also gzipped, with increasing numbers as suffixes.  ``schooltool/Data.fs.2.gz`` is older than ``schooltool/Data.fs.1.gz``, for example.

How do I do a manual backup?
----------------------------

While it is possible to do a "hot" backup of SchoolTool's database while the application is running, for the sake of simplicity this document will just cover an offline "cold" backup.

Basically, just stop the SchoolTool server, copy ``Data.fs`` and the ``blobs`` directory, and restart the server::

    sudo /etc/init.d/schooltool stop
    sudo cp /var/lib/schooltool/Data.fs /media/backups/schooltool/Data.fs-$(date +%Y%m%d-%H%M)
    sudo cp -r /var/lib/schooltool/blobs /media/backups/schooltool/blobs-$(date +%Y%m%d-%H%M)
    sudo /etc/init.d/schooltool start

Substitute the actual location of your backup in the place of ``/media/backups``.  The ``date +%Y%m%d-%H%M`` command embedded into the ``cp`` command is a bash command to embed the current date and time into the filename.  That will allow you to keep a bunch of backups by date easily.  Of course, if you've got a more sophisticated backup system than ``cp``, by all means use that!

Restoring from a backup
------------------------

In most cases, if you need to return to a previous automatic database backup, you should stop SchoolTool, rename the current ``Data.fs`` just in case you *do* need it later, remove the ``.0`` from the most recent backup, and restart the server::

    sudo /etc/init.d/schooltool stop
    sudo mv /var/lib/schooltool/Data.fs /var/lib/schooltool/Data.fs.bad
    sudo mv /var/lib/schooltool/Data.fs.0 /var/lib/schooltool/Data.fs
    sudo /etc/init.d/schooltool start

If you need to try an even older backup, ungzip it::

    sudo gunzip /var/lib/schooltool/Data.fs.1.gz 

The procedure for restoring from a previous manual backup is the same, that is, copy the file to the ``Data.fs`` position, except only you know where it is coming from.

You will also need to backup and restore the files in the blobs directory using standard archiving tools (zip, tar, etc.).

What if My Database is Empty After an Upgrade?
----------------------------------------------

If something goes awry during the backup process, it is possible that your current database will be moved into the first backup position (ending with ``.0``), but a blank database will be in the "current" ``Data.fs`` position::

    sudo mv /var/lib/schooltool/Data.fs.0 /var/lib/schooltool/Data.fs

How can I erase the entire database?
------------------------------------

Delete the ``Data.fs`` file and the ``blobs`` directory.  This is, of course, permanent.  If there is the slightest chance you'll ever want that data, moving rather than deleting the files is advisable.

Packing the database.
---------------------

The ZODB is designed to keep a record of transactions, which can be used by an application to allow "undo" functionality.  One implication of this, however, is that the database file grows in size as it stores a longer and longer list of changes to each object.  To shrink the database back to a more efficient size, one can "pack" it.  Because SchoolTool does not allow you to undo transactions, there is no practical reason not to pack the database.  

Packing the database does not have to be done very frequently -- certainly not daily.  Monthly or weekly should suffice, but your mileage may vary depending on the intensity of usage.  It may be something you do prior to high demand periods, such as before teachers submit grades.  Backing up your database prior to packing it should not be necessary, but nonetheless it is not a bad idea.

To pack the database via the web, you must be logged in as a member of "Site Managers." Navigate to the **Server** tab at the top of the page, then click on **Actions: Pack Database**.  You will see a spinner indicating that packing is in progress.  If you stay on the page, you will get a confirmation dialog:

   .. image:: images/packing.png

Depending on your site's database usage, this process could take several minutes and put a load on the server, so plan to pack the database at an off-peak time.

