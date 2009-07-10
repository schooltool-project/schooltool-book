.. _gradebook:

Getting Started with the Gradebook
==================================

SchoolTool's standard gradebook allows teachers to track point scores for assigned activities.  That is, the teacher creates activities, assigns a numeric point range for the activity, and then assigns each student a score for that activity.  Activities can also be assigned to categories, which can be weighted for the purpose of calculating an overall average.  "Score systems" or grading scales allow percentage scores to be associated with other types of grades, such as A-F, Pass/Fail, etc.

Activity Categories
-------------------

Activity categories define different types of activities or assignments used in a school.  Their main use is in weighting grade calculations.  For example, a teacher may want exams to count for 60% of a student's grade, with quizzes and class participation counting for 20% each.  Every activity is assigned a category, but if you don't need this feature simply leave everything in the default "Assignment" category.

Activity categories are configurable by the site manager at the school level.  Currently, individual teachers cannot create or delete activity categories.

To add or remove activity categories, as "manager" go to **Manage** and **Activity Categories**:

   .. image:: images/gradebook-1.png

Say the "Journal" activity is not relevant to our school.  To delete it, highlight it in the upper list and click **Delete**:

   .. image:: images/gradebook-2.png

To add a category, simply enter the name of the category next to **New Category** and hit **Add**:

   .. image:: images/gradebook-4.png

To change the default category for all activities, select an activity from the list next to **Default Category** and click **Change**.

Creating an Activity
--------------------

**Log Out** as "manager" and **Log In** as a teacher, if you're following along, as the teacher acting as instructor for the section you made in :ref:`sections`.  

Click on **Gradebook** at the top of the page:

   .. image:: images/gradebook-5.png

The gradebook is organized by term, section, and, within each section, into worksheets, much like the worksheets in a spreadsheet application.  In the working example, we've only got one term and section, but the **Term** and **Section** menus above the worksheets allow the teacher to navigate between sections.  

By default, each section has a single worksheet, named **Sheet1**.

Let's add an activity.  Click **New Activity**:

   .. image:: images/gradebook-6.png

The fields should be self explanatory.  The example is a 20 point vocabulary quiz.  Note that scores in exceeding the "maximum" value are permissible and will be calculated as extra credit.

The worksheet with our new activity:

   .. image:: images/gradebook-7.png

Scoring an Activity
-------------------

Fill in scores by clicking on the relevant cells and entering numbers.  *Unsaved* scores within the proper range show up as green, invalid scores are red, and scores above the maximum (extra credit) show as yellow.  

Note that there is currently a bug that causes the up and down arrows to move in the wrong order, which will be fixed in a future release.

Note that the full title of the activity in the active column appears at the top of the worksheet, in this case, "Vocab Quiz #1."

*Scores are not saved until you click **Update**.*

   .. image:: images/gradebook-8.png

If you accidentally try to navigate away from a worksheet with unsaved changes you *should* be prompted to save them.

Once saved, the cells return to grey and averages and totals are calculated:

   .. image:: images/gradebook-9.png

Sorting by Column
-----------------

To sort by column, click on **(sort)** at the top of that column.  Clicking again toggles between ascending and descending.

   .. image:: images/gradebook-sort.png

