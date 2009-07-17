.. _score-systems:

Managing Score Systems and Total Columns
========================================

The **Total** or **Average** columns next to student names on the gradebook may not be useful to you in their default setting:

   .. image:: images/score-system-1.png

To change them, click **Column Preferences**.  To hide either column, check the box under **Hide**.  If you want the average to be converted to a grade or score, select the relevant score system from the drop down under **Score System**:

   .. image:: images/score-system-2.png

Hit **Update** to save and see your changes:

   .. image:: images/score-system-3.png

SchoolTool ships with a few default score systems.  The site manager can add new score systems and hide the existing ones..  As "manager," go to **Manage** then **Score Systems**:

   .. image:: images/score-system-4.png

If you click on the title of a score system you see a detailed view:

   .. image:: images/score-system-5.png

A score system is a sequence of scores in descending value.  Each score has a label, a numeric value used to calculate grade averages when that is relevant, and a low cut off for percentage values associated with this score.  The cutoff is used to automatically assign a score to a given percentage value.

To create a new score system, press **Add Score System**.  In this case, I'm creating a score system that uses numbers as labels instead of the more traditional letters:

   .. image:: images/score-system-6.png

Start with the highest score and then **Add a lower score** until you get to a score that has a low bound of 0 percent.  

Please note that if neither the point value or minimum percentage score is relevant for your grading system, you still need to add some values there, even if they aren't used in subsequent calculations or reporting.

Hit **Save** when you are done.

You can subsequently go back to the gradebook as a teacher and select your new score system to display in the **Ave.** column:

   .. image:: images/score-system-7.png
