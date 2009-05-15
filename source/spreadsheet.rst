.. _spreadsheet:

Importing and Exporting from Spreadsheet
========================================

Logged in as "manager," select **Manage** and then the **XLS Import** button:

   .. image:: images/xls-import.png

The upload form explains how it works and contains links to both an empty spreadsheet and one populated with sample data.  The empty spreadsheet also has complete tooltips -- hover the mouse pointer over a row or column header for further explanation of its function.

Note that importing sample data create a database file of approximately 230 megabytes, and a temporary file the same size, so you'll need a free half gigabyte of disk space if you want to generate everything at once.  This is also much more memory intensive than routine use of SchoolTool.   

After you click **Submit** to upload the data, keep the browser window open until the page reloads.  This view isn't very sophisticated  -- it doesn't update you on its progress or give you any feedback until it completes.  Just wait for it.  A full set of sample data could take fifteen minutes or more.  

If your computer seems to grind to a halt during this process, or doesn't complete after an hour, you have probably completely run out of memory and swap space.  This shouldn't happen on most systems.  It is possible that SchoolTool would run adequately in a small deployment on a system that can't handle the full sample data set.

Sample data creates a school of 1000 students and two years of section enrollments.  Users are either "student" or "teacher" followed by a three digit number, for example, "**student001**" or "**teacher001**".  Teacher001 through Teacher005 have passwords that are the same as their ID's, as do the first five students.
