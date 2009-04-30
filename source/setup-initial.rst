.. _setup-initial:

Initial Setup Process
=====================

Controlling the Server
----------------------

Once you've installed the SchoolTool server, it will automatically start running and restart itself whenever you start the computer.  Thus, SchoolTool will be running in the background and available at http://localhost:7080 whenever you need it.  

The SchoolTool server process will take up some of your computer's memory.  Whether or not you will notice this depends on how much memory you have on your computer, which other applications you use, and how many applications and server processes you use at the same time.

You can start and stop the process manually if you'd like.  If you aren't used to doing this, you can install the ``sysvconfig`` package to make the commands a little more straightforward::

    $ sudo apt-get install sysvconfig
    
then you can use::

    $ sudo service schooltool-2009 stop
    $ sudo service schooltool-2009 start

Note that there can be a delay of 30 seconds to a minute between when you issue the start command and when SchoolTool's web interface is accessible.

Or, if you are more used to init.d scripts you can still use:: 

    $ sudo /etc/init.d/schooltool-2009 stop
    $ sudo /etc/init.d/schooltool-2009 start

If you want to use SchoolTool over a network or the internet go to :ref:`remote`.

.. _managepass:

Changing the Management Password
--------------------------------

The first step is to log in as the site manager, do a little basic customization and create a user account for yourself.  So first go to http://localhost:7080.  You should see a blank calendar like this:

   .. image:: images/first.png

Click **Log In** at the right end of the red bar, and click the **Log in** button after entering "manager" as the **Username** and "schooltool" as the **Password**:

   .. image:: images/login.png

Next you should change the manager password.  To change the logged in lick on **Home** at the top of the screen:

   .. image:: images/manager-info.png

Then click **Change Password**, enter a new one (twice) and click **Apply**:

   .. image:: images/change-password.png

Evem if you don't plan to make your SchoolTool server's web pages accessible from another computer, but you should set manager and user passwords to prevent another person with physical access to your computer from accessing your SchoolTool data with the default password.

Changing Site Preferences
-------------------------

Now click on **Manage** at the top of the screen:

   .. image:: images/manage.png

Click **Change Site Preferences**.

   .. image:: images/site-prefs.png

SchoolTool is designed to be usable in many different countries, and different parts of the world handle calendars and dates differently, so you may have to change some settings here to suit your local needs.  SchoolTool's calendar uses a more or less European configuration by default.  I've changed it below to suit my American tastes.  

SchoolTool's calendar and timetable supports timezones.  Mostly.  This seemed like a good idea at the time, but has been the source of endless bugs and heartache.  Leaving your timezone set to UTC (essentially Greenwich Mean Time) makes it less likely you'll run into problems internally.  

If you want to exchange calendar information with other applications, you may want to set the proper timezone.  We suggest experimenting with the applications you want to interoperate with and see what works best.

For an individual using SchoolTool (rather than a school), it makes most sense to set the **Title** to your name as you would want it to appear to parents and students.

Hit **Apply** to save your new settings.
