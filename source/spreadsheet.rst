Importing and Exporting from Spreadsheet
========================================

SchoolTool is mid-transition from the old way of autogenerating sample data to a method based on spreadsheet import.  The new method works, but is a little ugly, as you will see.  We're working on the rough edges.

As of SchoolTool 2008.10.8 the old **Sample data** link is still on the **Manage** index, but it doesn't work.  **Setup data** on the same page will be deprecated soon.

Using the Sample Data Spreadsheet
---------------------------------

If you've updated to 2008.10.8 (using ``sudo apt-get update`` or an automatic update), the sample data spreadsheet is tucked away in an obscure corner of your file system.  To copy the spreadsheet to your desktop, open a terminal and do::

  cp /usr/share/pycentral/python-schooltool/site-packages/schooltool/export/sample_data.xls ~/Desktop/

Of course, you don't have to copy it to your desktop, you can copy it to whatever directory you want.  Also, note that this is the same spreadsheet you'll use to import real data, although we inconveniently don't yet provide you a blank copy.  You can just erase the fake data for now.

Log in as the system manager (by default, **login:manager**, **password:schooltool**) click on the **Manage** link at the top of the screen.  Click on the grey **Excel Import** button under the red bar.

Click **Browse...** select the ``sample_data.xls`` file from your desktop or wherever you put it, and **Submit**.

Note that importing this data create a database file of approximately 230 megabytes, and a temporary file the same size, so you'll need a free half gigabyte of disk space if you want to generate everything at once.

Then, just leave the browser window open until the data generation import.  This view isn't very sophisticated  -- it doesn't update you on its progress or give you any feedback until it completes.  At this point, if everything works smoothly, it just reloads the same form.  Better notification will follow in later updates.

You now have a school of 1000 students.  Users are either "student" or "teacher" followed by a three digit number, for example, "**student001**" or "**teacher001**".  Currently, if you want to log in as a student or teacher, you must give them a password as manager.
