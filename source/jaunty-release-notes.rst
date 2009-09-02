2009.04 Release Notes
=====================

2009.04.17
++++++++++

New features 
------------

* New section adding view.  

  - Multiple-term (linked) sections can now be created.
  
  - "New Section" button replaced with a link in action menu in course view.  
  
  - Sections now can also be added from term's "sections" view. 
  
  - See https://bugs.launchpad.net/schooltool/+bug/389283

* You can specify the relationship between a person and a contact from a standard set (parent, guardian, step-parent, etc). See https://bugs.launchpad.net/schooltool/+bug/381412

* There is a new gradebook view for grading a single student.  Please follow ">" next to a student's name in the gradebook.

* Report sheet activities can have comments as their scores now, to allow comments on report cards.  See https://bugs.edge.launchpad.net/bugs/381054

* Administrators can define custom score systems (grading scales) used in the gradebook and report sheets.

* Removed ability to delete calendar events that come from (section) timetables.  See https://bugs.launchpad.net/schooltool/+bug/271391

Douglas Cerna:

* Added missing attributes to the course adding form and the csv import.  See https://bugs.launchpad.net/schooltool/+bug/384945 and https://bugs.launchpad.net/schooltool/+bug/384957

Tweaks and fixes
----------------

* Active year is no longer highlighted in red.  See https://bugs.launchpad.net/schooltool/+bug/317651

* Fixed contact deletion crash. See https://bugs.launchpad.net/schooltool/+bug/382239

* Section and course descriptions are displayed properly now.  See https://bugs.launchpad.net/schooltool/+bug/370581

* Fixed a typo in default ethnicity demographics field.  See https://bugs.launchpad.net/schooltool/+bug/376116

* Graceful handling of incomplete set up in gradebook report card pdfs.  See https://bugs.launchpad.net/schooltool/+bug/379968

* Gradebook: "Update" button renamed to "Save".  See https://bugs.launchpad.net/schooltool/+bug/395272

* Fixed average gradebook score calculation when dealing with invalid scores.  See https://bugs.launchpad.net/schooltool/+bug/391310

* Fixed glitches (events not displayed or displayed in wrong day) in weekly calendar views. See https://bugs.launchpad.net/schooltool/+bug/285514 and https://bugs.launchpad.net/schooltool/+bug/389626  Thanks go to Daniel Höger for the report and part of the fix.

* Cleaned up pre-release ui bugs in "Add a new score system" view.  See https://bugs.launchpad.net/schooltool/+bug/394792, https://bugs.launchpad.net/schooltool/+bug/394805 and https://bugs.launchpad.net/schooltool/+bug/394778

Fixes by Douglas Cerna:

* Fixed keyboard navigation in gradebook.  See https://bugs.launchpad.net/schooltool/+bug/391313

* Improved gradebook XLS export - added First Name, Last Name, ID fields.  See https://bugs.launchpad.net/schooltool/+bug/391787

* Tweaked text in gradebook column set up page.  See https://bugs.edge.launchpad.net/schooltool/+bug/394774

Unicode fixes
-------------

Fixes by Douglas Cerna:

* Contacts views.  See https://bugs.launchpad.net/schooltool/+bug/382251

* Gradebook activities. See https://bugs.launchpad.net/schooltool/+bug/383416

* Course CSV import.  See https://bugs.launchpad.net/schooltool/+bug/375792

2009.04.13
++++++++++

Justas Sadzevičius:

 * SchoolTool no longer supports groups as members of a section.  To add all members of a group, please use the filter in section's "edit individuals" page.  See: https://bugs.launchpad.net/schooltool/+bug/370629

 * Optional "Course ID", "Goverment ID" and "Credits" fields added to a Course.  See:  https://bugs.launchpad.net/schooltool/+bug/381031

Gediminas Paulauskas:

 * Fixed broken packages.  See: https://bugs.edge.launchpad.net/schooltool/+bug/352096

 * Server properly starts after installation or upgrade.  See: https://bugs.edge.launchpad.net/schooltool/+bug/334365



2009.04.12
++++++++++

Major
-----

Translations are back in SchoolTool.

As usual, please select set a preferred language in your browser or
follow instructions in the SchoolTool book:
http://book.schooltool.org/htmlhelp/translations.html#selecting-schooltool-s-language

Tweaks and fixes
----------------

Douglas Cerna:
 * Made CSV importer support blank lines.  See https://bugs.launchpad.net/schooltool/+bug/253663

Justas Sadzevičius:
 * Added section linking to the edit section view.


Gradebook
---------

Alan Elkner:
 * Re-enabled final grades as "summary" view.  See https://bugs.launchpad.net/schooltool/+bug/372557

Alan Elkner:
 * Fixed unicode encoding bug.
   Having unicode characters in activity descriptions prevented access to the gradebook.  See https://bugs.launchpad.net/schooltool/+bug/371577


2009.04.11
++++++++++

Person and Demographics
-----------------------

committer: Ignas Mikalajūnas <ignas@pov.lt>

 - Added custom demographics field storage and fields themselves.

committer: Filip Sufitchi <fsufitch@charon>

 - Initial implementation of demographics field management views.

committer: Ignas Mikalajūnas <ignas@pov.lt>
 - Added contacts to schooltool with list/add/edit/display views.
 - Added contact managemenet view and made it possbile to add+assign contact in one go.

committer: Alan Elkner <aelkner@gmail.com>

 - added group to person add form
 - added advisor to person add form
 - added advisor and advisee functionality to BasicPerson
 - basicperson has new fields and some old ones were removed

Gradebook
---------

committer: Ignas Mikalajūnas <ignas@pov.lt>
 - Move gradebook tab to the left.
 - Add i18n domain to the zcml file.
 - Style remove button red.

committer: Douglas Cerna
 - Added gradebook XLS export views.
 - Added capacity to import "external activities" into gradebook.

committer: Chris Carey
 - moved gradebook cell color validity from javascript to css

committer: Alan Elkner <aelkner@gmail.com>
 - got rid of confusing description of requirement title field
 - mygrades (student) view now looks like teacher gradebook
 - spaces now removed from activity column headings
 - report card now handles multi-course sections
 - added capability to deploy a report worksheet to a school year
 - added instructor names to course title in report card pdf
 - fixed javascript bug caused by activity description having newline char
 - added handling of arrow keys for navigating cells
 - added description field to gradebook and set on cell focus and activity mouseover
 - got rid of obselete final grades view
 - added javascript to set focus to first gradebook cell
 - added javascript to allow user to save changes when trying to navigate away from a gradebook with unsaved changes
 - added heading attribute to report card layouts
 - added term drop-down to gradebook overview
 - changed worksheet drop-down to be tabs instead
 - added due date to activities and filtering by due date to gradebook overview
 - moved label from external activity to linked activity where it belongs
 - added label to IActivity, to be used for gradebook column labels
 - got rid of unnecessary student and student/activity grade views
 - made activity grade view look like gradebook overview
 - made Weight Categories button an action button
 - worksheets can no longer be deleted
 - create sheet1 if the section has no worksheets
 - got gradebook to handle switching between sections in different terms
 - created report card pdf view
 - created Report Card Layout view
 - added subscriber to deploy worksheets to newly added sections
 - deployed worksheets and activities are now blocked from deletion
 - created view for deploying report worksheets
 - created simpler add/edit activity views
 - added javascipt for validating input

PDF Reporting improvements
--------------------------

committer: Justas Sadzevicius <justas@pov.lt>

 - Rewrite calendar PDF views to use RML.
 - Added headers and footers to PDF views.


XLS import export
-----------------

committer: Tom Hoffman <tom.hoffman@gmail.com>
 - Creaded empty annotated XLS import template.
 - Updated texts in XLS import view

committer: Ignas Mikalajūnas <ignas@pov.lt>

 - Added ability to import user passwords.

 - Importer now will not complain about missing spreadsheets in the XLS
   file being imported.

 - Added Export to XLS functionality.

 - Split terms into 2 school years in sample data.

 - Fixed a crash in export when no resources are assigned to a timetable
   event.

 - Separated section import/export into separate spreadsheets.

 - Made most if not all the objects in xls import reimportable.

 - Added demographics information to the sample data file.

 - Changed "Excel import" action to "XLS import".

Tweaks and fixes
----------------

committer: Tom Hoffman <tom.hoffman@gmail.com>
 - Updated section import csv file documentation.

committer: Alan Elkner <aelkner@gmail.com>
 - Removed unused identifier field from add forms.

committer: Filip Sufitchi <fsufitch@charon>

 - Made Delete buttons look consistently (Red) all over the system.

committer: Chris Carey <cpcarey@cpcarey-laptop>

 - Unify color color scheme in schooltool.gradebook and
   schooltool.lyceum.journal ajax status indicators.

 - Added School Timetable id display to the School Timetable view page

committer: Ignas Mikalajūnas <ignas@pov.lt>

 - Added headers to some Section views.
 - Do not allow people without schooltool.edit permission on SchoolYears delete terms.
 - Made field descriptions in most of the forms visible.
 - Switched to ISO dates everyehere.
 - Added date picker to all the forms in schooltool.
 - Started using ISO date format (yyyy-mm-dd) in the short date formatter.

 - Removed resource booking link from the section view.

committer: Justas Sadzevicius <justas@pov.lt>

 - Added simple section cross-term copying and linking interface.

 - Fixed a small bug in weekly calendar title - week date range was
   one day too long.

committer: Douglas Cerna

 - Group and section member CSV import views.
