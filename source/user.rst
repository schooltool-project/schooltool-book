.. _user:

Setting Up People
=================

Making Your Teacher Account
---------------------------

You should not use the "manager" account for your day-to-day SchoolTool tasks, 
such as grading and taking attendance.  You need to make a second account for 
yourself in the role of a teacher.  Logged in as "manager," click on the 
**Manage** link at the top of the page, then **Persons** to end up here:

   .. image:: images/person-index.png

Click the **New Person** action button, then fill out the subsequent form:

   .. image:: images/add-person.png

Most of the fields are optional and probably not immediately relevant to your 
personal use of SchoolTool, except for **first name**, **last name**, 
**username** and **password**.  

**Group** isn't essential at this point, but you can select "Teachers."

Click **Add** and you should see:

   .. image:: images/view-user.png

You should now be able to **Log Out** as "manager" by following the link at 
the right end of the red bar and **Log In** as your new user, at which point 
you should see the user's calendar:

    .. image:: images/user-cal.png

Adding Your Students
--------------------

One at a Time
+++++++++++++

You can manually add your students one at a time using the same procedure as 
above, adding each student to the "Students" **Group**. 

Note that since SchoolTool will only be accessible from your computer, and the 
students will not be logging onto SchoolTool themselves, you **do not** need 
to give students **Passwords**, and you can use whatever you want for their 
**Usernames**.  Accounts that don't have passwords set cannot be used to login, 
which is usually the correct behavior when using SchoolTool as a personal 
gradebook.

Do not feel obligated to add contact or demographic information unless doing 
so is useful to you.

    .. image:: images/add-student.png

Importing a List of Students
++++++++++++++++++++++++++++

There are alternate methods of adding multiple persons at one time.  We will 
cover two below.  Note that these methods do not currently allow you to 
automatically add demographic data or group membership, just the username, 
first and last names, and password for each person.

Logged in as "manager," click on the **Manage** link at the top of the page, 
then **Persons** and finally click the **Import Persons** button:

    .. image:: images/import-persons.png

This form gives you two methods of adding a list of students, either by uploading a file or entering data directly into a textbox.  If you have a spreadsheet with the names of the students, you can use that to make the "comma separated value" or CSV file that is used for the import.  Or you can generate the list using any other method that creates a text file in the correct format.

To create the CSV file using a spreadsheet, in this case, using OpenOffice.org Calc, arrange your data in three columns.  The first column is a unique username or id.  These can just be a sequence of numbers (1, 2, 3...), an id used in your school, or whatever you want, as long as no two students have the same username.  The second column is the first name; the third column is the last name.  If you want to create passwords for the accounts, they go in the fourth column.

    .. image:: images/spreadsheet.png

Then select **Save as...** from the **File** menu and choose **Text CSV (.csv)** as the file type:

    .. image:: images/csv-save.png

After you hit **Save**, on the next dialog, set the **Text delimiter** to no character (delete the default character):

    .. image:: images/export-options.png

Now you can **Browse...** to the file you just created on the **Import Persons** form and hit **Submit**.  SchoolTool should create accounts for all your persons.

Alternately, you can simply enter, or copy and paste, properly formatted text into the text box provided in the **Import Persons** form, in the CSV format described above and hit **Submit**.

If all goes well, you'll then see this little message:

    .. image:: images/import-success.png

And if you go back to **Persons** (via **Manage**, this is a navigation bug) you should see your new list of users:

    .. image:: images/longer-index.png

To add the new students to the **Students** group, go to **Manage**, then **Groups**:

    .. image:: images/group-index.png

Click on **Students**:

    .. image:: images/student-group-before.png

And then **edit members**:

    .. image:: images/group-selection.png

Select the persons you want to add to the "Students" group and click **Add**.  When you're done, click **OK** and you should see your newly expanded list of "Students."  

To edit the demographic data about a student click on their name in the group or **Persons** index and select the **Edit** action.

    .. image:: images/view-user.png
