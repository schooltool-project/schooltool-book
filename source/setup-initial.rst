.. _setup-initial:

Initial Setup Process
=====================

Changing the Management Password
--------------------------------

The first step is to log in as the site manager, do a little basic customization and create a user account for yourself.  So first go to http://localhost:7080.  You should see a blank calendar like this:

   .. image:: images/setup-initial-0.png

Click **Log In** at the right end of the red bar, and click the **Log in** button after entering "manager" as the **Username** and "schooltool" as the **Password**:

   .. image:: images/login.png

Next you should change the manager password.  To change the password, click on **Home** at the top of the screen:

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
