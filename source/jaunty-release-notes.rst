2009.04 Release Notes
=====================

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
