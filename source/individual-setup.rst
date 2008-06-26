Installation and Site Configuration
===================================

Installation
------------

The first step is :ref:`install`.  The good news is that this is no more difficult than installing a regular desktop application.  The bad news is that it is only this easy on Ubuntu.

Controlling the Server
----------------------

Once you've installed the SchoolTool server, it will automatically start running and restart itself whenever you start the computer.  Thus, SchoolTool will be running in the background and available at http://localhost:7080 whenever you need it.  

The SchoolTool server process will take up some of your computer's memory.  Whether or not you will notice this depends on how much memory you have on your computer, which other applications you use, and how many applications you use at the same time.

You can start and stop the process manually if you'd like.  If you aren't used to doing this, you can install the ``sysvconfig`` package to make the commands a little more straightforward::

    $ sudo apt-get install sysvconfig
    
then you can use::

    $ sudo service schooltool-2008 stop
    $ sudo service schooltool-2008 start

Note that there can be a delay of 30 seconds to a minute between when you issue the start command and when SchoolTool's web interface is accessible.

Changing the Management Password
--------------------------------

The first step is to log in as the site manager, do a little basic customization and create a user account for yourself.  So first go to http://localhost:7080, click **Log In** at the right end of the red bar, and click the **Log in** button after entering "manager" as the **Username** and "schooltool" as the **Password**.

   .. image:: images/login.png

Next you should change the manager password.  To change the logged in lick on **Home** at the top of the screen:

   .. image:: images/manager-info.png

Then click **Change Password**, enter a new one (twice) and click **Apply**:

   .. image:: images/change-password.png

Your SchoolTool server's web pages should not be accessible from another computer, but you should set manager and user passwords to prevent another person with physical access to your computer from accessing your SchoolTool data.

Changing Site Preferences
-------------------------

Now click on **Manage** at the top of the screen:

   .. image:: images/manage.png

Click **Change Site Preferences**.

   .. image:: images/site-prefs.png

SchoolTool is designed to be usable in many different countries, and different parts of the world handle calendars and dates differently, so you may have to change some settings here to suit your local needs.  SchoolTool's calendar uses a more or less European configuration by default.  I've changed it below to suit my American tastes.  

For an individual using SchoolTool (rather than a school), it makes most sense to set the **Title** to your name as you would want it to appear to parents and students.


