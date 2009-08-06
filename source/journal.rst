Using the Attendance Journal
============================

The Journal provides a method of tracking classroom attendance as well as other data attached to specific class meetings, such as class particpation grades.  The current emphasis is on creating a fast and convenient method for teachers to enter this data during class.  More advanced attendance functionality, such as excuse workflows, will follow in subsequent releases.

Finding the Journal
-------------------

Logged in as a teacher, there are two ways to access your journal.  On your calendar view, you can follow the "Journal" link on each section meeting event:

   .. image:: images/journal-1.png

Or, you can follow the "Journal" link at the top of each page to this index of your sections:

   .. image:: images/journal-2.png

Either way, you should end up at the journal page for the section:

   .. image:: images/journal-3.png

Entering and Saving Data
------------------------

The tabs across the top of the grid allow you to switch between months and the column headers correspond to days.  If the section meets multiple times within the same day, there will be multiple columns with the same date listed.

To navigate around the worksheet, you can use the mouse to click directly on a cell or use the arrow keys to move from cell to cell. 

In each cell, you can either enter:

  - an "a" for an absence;
  - a "t" for a tardy (late) student;
  - a number from 0 to 9, where "0" will register as "10."

The "cursor" in the journal is designated by a black cell outline.  Data entered in the cell is saved automatically to the server *when the cursor leaves the cell*.  Navigating to a different cell or hitting the **Enter** key is sufficient to save a cell's data.

In the journal, when the cell turns green, the data in that cell is safe, even if you close the browser, unplug your computer, lose your internet connection, etc., without hitting **Update**.  However, when you hit **Update** or otherwise leave the page before you leave a cell with new data, that is, it has not yet turned green, the data *will not be saved*.  This is considered a bug and will be fixed in an upcoming release.

For example, in the example below, Charles Brown's absence has been saved, Sally Brown's tardy has *not*:

   .. image:: images/journal-4.png

Thus, if you click **Update** without clicking outside the cell in Sally Brown's row, thus turning it green, the results will be this:

   .. image:: images/journal-5.png

The **Update** button refreshes the page and updates the statistics.

Journal Statistics
------------------

   .. image:: images/journal-6.png

The **Absences** column totals the student's absences for the term (not just the current month).  For example, viewing the **October** tab carries across the **September** statistics from above.

   .. image:: images/journal-7.png

The **Average** column provides the average of the numeric scores for the term.  Note that if no score is entered for a given day, it is not included in the calculation.  That is no score does not equal "0" when the average is calculated.

   .. image:: images/journal-8.png

Under the **Term Grading** tab you can view a summary of the scores and absences for each student.  You can also enter a **Term Grade**.  This grade is currently **not** connected to the report card system, so it does not really do anything.  In future releases, both the total number of absences and tardies, and the **Term Grade** entered in the journal will be accessible from the report card layout system.

