Upgrading from schooltool-2008 to schooltool-2009
=================================================

We are experimenting with producing different series of packages for SchoolTool each year, in an effort to make the transition between major releases clear.  Schools generally do not and should not want to deploy new releases during the school year.

Thus we have **schooltool-2008** and **schooltool-2009**.  As of April 2009, the two are exactly the same, and we recommend moving to **schooltool-2009** at your convenience by doing the following::

    $ sudo apt-get remove schooltool-2008
    $ sudo cp /var/lib/schooltool/schooltool-2008-Data.fs /var/lib/schooltool/schooltool-2009-Data.fs
    $ sudo apt-get install schooltool-2009

The second step copies the database to a new location.  If you don't do that, **schooltool-2009** will start with a blank database.  This may cause you to briefly panic.  We do this to help ensure that a bug in the upgrade process will not automatically clobber your existing database.
