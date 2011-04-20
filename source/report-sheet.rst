Report Sheets and Report Cards
==============================

You can use SchoolTool to generate report cards using traditional grades, scores on a list of standards, or other measures.

SchoolTool provides a mechanism called "report sheets" for collecting data about each student in each section in a school.  Most commonly, this is one or more grades for a section, which will subsequently be published as a report card (and stored for other use, of course).  

However, the system is designed to be very flexible.  It leverages the features of the SchoolTool gradebook.  You can use it for any data you'd like to collect regularly about student performance or behavior in all classes.  You can use SchoolTool's customizable score systems to gather non-traditional grading or assessment data.  Support for comments in the report sheet system is partially implemented -- currently you can save comments but not include them in the default printed report cards.

The printed report cards are currently *very* simple.  The intention is to develop them further based on feedback, so `please let us know what you'd like to see <http://bugs.launchpad.net/schooltool>`_ on report cards and how they ought to look.  We *will* respond to feedback.  Also, we are transitioning to a system where the report cards will be laid out using an HTML-like markup, which in the medium term will allow schools to design custom printed reports.

Also, based on user feedback we shall develop other web and printed reports.  `Let us know what you need. <http://bugs.launchpad.net/schooltool>`_

There are several steps involved in getting from the initial design of a report sheet to a printed report card.  

 #. As "manager" define a report sheet template.  This describes what scores will be collected on this report sheet.  Typically, the template describes a report card that can be re-used in subsequent terms or years.
 
 #. As "manager" deploy the report sheet to the appropriate term or year.  This places a copy of that sheet in each teacher's gradebook for each section for that term or year.
 
 #. As "manager" define the layout of the report card for the year.
 
 #. Teachers enter scores in the relevant report sheet in each section's gradebook.
 
 #. Generate report card PDFs by group or student.

Defining a Report Sheet Template
--------------------------------

In our ongoing example, we've defined a year and one semester within the year.  At the example school, each semester the teachers report three grades: first quarter, second quarter and a final grade.  So each report sheet will contain columns for these values.

Note that you can deploy multiple report sheets.  So if you wanted you could deploy three sheets with one value per sheet.  Or if you also had interim reports every three weeks, you could also deploy those on the same report sheet, or on a separate one.  You should experiment on a test server and see what maps best to your school's operation.  Having said that, a basic report card is pretty straightforward.

To define a report sheet template, as "manager" go to **Manage** then **Report Sheet Templates**:

   .. image:: images/report-sheet-1.png

Click **New Report Worksheet** and give the sheet a descriptive title (although avoid referring to the year if you want to re-use it):

   .. image:: images/report-sheet-2.png

Then click on the sheet title to edit it:

   .. image:: images/report-sheet-3.png

And **New Report Activity**:

   .. image:: images/report-sheet-4.png

Now we'll define the first column on the report sheet -- the first quarter grade.  We'll use the HAMS score system defined in :ref:`score-systems`:

   .. image:: images/report-sheet-5.png

Click **Add** when your ready.  Thus:

   .. image:: images/report-sheet-6.png

We'll repeat the process for the second quarter and final grades:

   .. image:: images/report-sheet-7.png

Deploying a Report Sheet
------------------------

Once you define a report sheet, you then want to place a copy of it in every teacher's gradebook for each section they teach.  We call this "deploying" the template.  Once you deploy a template, subsequent changes to the template will *not* change the already deployed sheets.  So make sure you've got the template the way you want it before you deploy it.

You can deploy sheets to terms, or to the years, which automatically includes all contained terms.

As "manager," go to the relevant year (in this case 2009-2010):

   .. image:: images/report-sheet-8.png

And then click the Deploy Report Worksheet button, select the relevant template from the drop-down (in this case there's only one) and click **Deploy**:

   .. image:: images/report-sheet-9.png

Laying Out a Report Card
------------------------

While we're here and logged in as "manager," we might as well lay out the final report card.  Click **Report Card Layout**:

   .. image:: images/report-sheet-10.png

The basic report card layout is a grid.  Each row in the grid corresponds to a section the student attends, each column to an activity from a report sheet.  So for a traditional report card containing our 1st and 2nd marking period grades and a final grade, we want this:

   .. image:: images/report-sheet-11.png

Click **Update** after entering each column.  Remember to **Update** after adding your last column.  You can subsequently navigate away from the page.

Entering Scores into a Report Sheet
-----------------------------------

**Log out** as "manager," **Log in** as a teacher, and to the **Gradebook**:

   .. image:: images/report-sheet-12.png

We now have a new tab for our report sheet, **Quarterly**:

   .. image:: images/report-sheet-13.png

Enter the grades as you would in a regular gradebook and hit **Save**.

   .. image:: images/report-sheet-14.png

That's it.  Repeat for each of the teacher's sections in the term.  In real life, if this was the end of the first quarter, only the first quarter grades would be entered.

Printing Report Cards
---------------------

You can print report cards either for individual students or groups.

**Log out** as a teacher and **Log in** as "manager."  Go to **Manage** and **Persons** and select a person.  

   .. image:: images/report-sheet-15.png

Click **Print Report Card**.  A .pdf file will be downloaded.  Open it and it looks like this:

   .. image:: images/report-sheet-16.png

Basic, but it is a good start.  Let us know what to add!

To generate a single .pdf with all the report cards for the members of a group (e.g., students), navigate to the group and hit the **Print Report Card** button.


