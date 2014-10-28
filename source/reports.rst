Understanding Reports
=====================

Using Reports
-------------

In SchoolTool, "Reports" are processes which generate a result, such as a PDF 
or XLS spreadsheet. Generally, a Report result is a downloadable file.

A few Reports may simply return a webpage, but this is rare.

Report Overview
---------------

The Report overview tells you what reports can be run on your system.

Navigate to the Report Overview by clicking the **School** tab and then
selecting **Reports: Overview** in the left sidebar.

   .. image:: images/reports-01.png

The Report Overview displays a table listing the Category, Title, File Type and
Description of all Reports on the system.

   .. image:: images/reports-02.png

Reports are mostly contextual (you go to the Student to generate their report 
card, rather than vice versa).

The Category indicates the scope of the Report, which may be a range of people
(an individual **Person** or a **Group**, a **Student**, a **Section**, or the
entire **School**), a span of time (**Term** or **School Year**), or a
**Resource** report.

The File Type indicates the type of file returned as a Report result, which may
be a printable PDF, an XLS spreadsheet, or a ZIP archive.

The Title and Description should be somewhat self-explanatory.

For example, the "ID Card" Report for a **Person** returns a PDF which "Includes
student name, ID number, birth date, contact name and contact phone number."

Meanwhile, the "ID Cards" Report for a **Grouop** returns a PDF which "Includes
student name, ID number, birth date, contact name and contact phone number.
Prints eight per page."

If you add reports to your system, they will automatically show up here.

Reports are added through packages. It's possible for a developer to design and
add custom reports for your organization, but this is acccomplished through
Python programming rather than the SchoolTool user interface.

:ref:`report-sheet` are customizable by **School Adminatrators** and **Clerks**
through the SchoolTool user interface.

**School Administrators** and **Clerks** should have permissions to generate Reports
for any Students in the system.

**Teachers** should have access to the relevant data needed to generate Reports 
for any Students in their Sections.

Example of report input dialog

Background processing

Where you can find reports online

Also in /blobs in file system
