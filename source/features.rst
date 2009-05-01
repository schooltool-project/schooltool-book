Overview of Features
====================

Basic Use Cases
---------------

SchoolTool is configured by default to act as what is often called a "student information system" or SIS.  The focus is on tracking information related to students: demographics, enrollment grades, attendance, reporting.  It is a subset of a complete "management information system" or MIS for schools, which might also cover systems like accounting.  

SchoolTool is not a "learning managment system," or LMS, such as Moodle, although they share some overlapping feature sets, such as a gradebook.  SchoolTool does not contain curriculum or learning objects.

SchoolTool is designed for extensibility, however, so we hope that in collaboration with outside users, governments and vendors SchoolTool will offer more functionality beyond basic SIS components in the future.  SchoolTool's built-in calendaring and resource booking features are an example of non-SIS functionality in SchoolTool.

Currently, the primary deployment strategy for SchoolTool is for one server instance corresponding to one school.  You can handle multiple schools by running multiple server processes (software) on one physical server (hardware).  

Because SchoolTool is free and easy to install, it can be installed on a laptop or desktop PC and used by a single teacher as an online gradebook or attendance journal.  Likewise, schools can use individual components of SchoolTool, such as resource booking, without committing to using it as a complete student information system. 

School Model
------------

* **Persons:** Default groups for people are students, teachers, school administrators, and site administrators (technical).  Parent access is planned for future releases.  Each person in the system can be given a login password with permissions appropriate to their role, but currently our development focus has been on teacher and administrator views.

* **Groups:** Create arbitrary groups of people representing school organizations, clubs, teams, etc.  

* **Courses and sections:** Courses define blocks of curriculum; e.g., 1st grade Math, 9th grade English.  Sections are the groupings of teachers and students working on a course; e.g., Mr. Hoffman's 9:30 Algebra I class, Fall 2009 semester.  

* **Years and terms:** Years are the longest block of time in SchoolTool.  The transition between years represents a regular point of significant reorganization within the school; e.g., when most students are promoted, teachers hired, etc.).  Terms define when sections begin and end.

* **Timetables:** Timetables define when sections meet during the week.  This is the school's "bell schedule."  SchoolTool handles simple timetables; e.g., classes meet the same time every day; and many complex ones, such as rotating schedules and schedules with different start and end times on different days of the week.  

SchoolTool does not currently generate class rosters or automatically schedule sections into rooms and times.  It tracks the timetables you enter or import.

* **Resources:** SchoolTool allows you to manage and track shared resources.  These are divided into "locations" and "resources," with further user-created types such as "classrooms" or "projectors."  Each has additional meta-data, such as the seating capacity of a location.  

* All of the above can be imported via a set of spreadsheets included with SchoolTool.

For more detailed explanations of the above terms, see :ref:`glossary`.

Demographics and Contacts
-------------------------

* A school can customize the fields of demographic and other data stored for each person.

* Each person can be associated with one or more contacts, typically parents or guardians in a primary or secondary school.  Multiple students can be associated with a single contact.

Calendaring
-----------

* SchoolTool automatically creates a web-based calendar for every person, group, resource, and section.  There is also a school-wide calendar that can be displayed on the front page of SchoolTool. 

* Person calendars are private.  By default, group and section calendars are visible only to members.

* Like iCal, Google Calendar, and other popular calendaring applications, SchoolTool allows users to "overlay" events from other calendars on their personal calendar.  For example, by default, a student sees events from all sections they are enrolled in and the school-wide calendar.

* Calendars are aware of the school timetable, so by default new events will start and end at the beginning and end of class periods.

* Users can create single or repeating events.  Teachers can edit section events to note tests, assignment and other class information.

   .. image:: images/intrepid/calendar.png

Resource Booking
----------------

Teachers, administrators and managers can schedule shared resources via their calendar.  Several schools have successfully deployed SchoolTool just for this purpose.

How it works:

* A teacher, administrator or manager selects and existing calendar event or creates a new one.

* He or she can then select the type of resource he needs; SchoolTool returns a list of the resources of that type which are available or already booked. 

* The user can then add an available resource to the event; an event at the same time is added to the resource's calendar.

Users can monitor or print the schedule for each resource by viewing its calendar.

   .. image:: images/intrepid/resource.png

Attendance and Participation Journal
------------------------------------

SchoolTool provides a simple attendance and participation journal allows a teacher to track absences and tardies, and optionally assign each student a numeric score for each class meeting.  Each meeting of a section can also be assigned a description.  The teacher can add a cumulative attendance/participation grade for the term.

Individual entries in the journal grid are stored to the server without requiring a page reload.  The journal displays average participation scores and total absences for the term.  

The current system is sufficient for teacher record keeping and providing basic data for report cards.  We have not implemented a full workflow to manage excused and unexcused absences for a school with strict legal requirements, such as US public schools.  We will focus on improving the user experience and reports for this simpler case first.

   .. image:: images/intrepid/journal.png

Gradebook
---------

SchoolTool includes a assignment-oriented gradebook for each section.  Each section can have multiple spreadsheet worksheets.  Teachers create assignments (or "activities") that are organized and may be weighted by category, such as "exam" or "presentation."  Grades are assigned by numerical point values.  

   .. image:: images/intrepid/activity.png

Gradebook scores can be exported to .xls spreadsheet format.

Reporting
---------

SchoolTool's printed reports are generated using the free and powerful ReportLab library, including support for reports defined in RML, an HTML-like markup language.

Now that SchoolTool can capture a variety of data for a school, we need your feedback on exactly what kind of reports are needed at your school.  Creating a set of high quality printable and web-viewable reports is a priority for development.  Let us know what you need!

Report Cards
------------

Administrators can define what grades and other data are collected for report cards and other regular assessments.  Teachers enter scores via special sheets in their gradebook, giving them a consistent and user-friendly interface.

Interoperability Between SchoolTool Components
----------------------------------------------

SchoolTool 2008.10.1 does not support some rather obvious kinds of interaction between components, such as displaying the attendance journal grade in the gradebook, or adding gradebook assignments to student calendars.  We will be working on adding "low hanging fruit" like this to the 2009.4 release.

Additional Components Under Development
---------------------------------------

There are two additional SchoolTool components being tested at two US high schools.  Each is a powerful and compelling application in its own right, and an example of the kind of user-driven extensions we hope to see as part of a growing SchoolTool ecosystem.  We hope to have them packaged for general use with SchoolTool in 2009.

* CanDo is a full-featured competency tracking system developed primarily by students in and around Arlington, Virginia for use initially at the Arlington Career Center.  It has been under development in various iterations for almost five years; the current SchoolTool-based version is cleanly integrated into SchoolTool and running stably with a production installation tracking 8000 students.  CanDo development has been funded by the Arlington School District, State of Virginia, and Mark Shuttleworth.

* At Science Leadership Academy in Philadelphia, Pennsylvania, we have developed a student intervention tracking system.  This provides a workflow for managing a set of goals for a student, coordinating the process between relevant stakeholders. 

Technical
---------

* **100% free and open source software stack:**
  * Python programming language;
  * Zope 3 component architecture;
  * Zope Object Database (ZODB);
  * ReportLab PDF generation.

* **Importing and Exporting Data:**  SchoolTool provides a variety of ways to import data into the system, in addition to its web interface.  The all the major components of the school, including people, timetables, courses and section enrollment, can be imported from and exported to .xls spreadsheets.  People, groups, section enrollments and other objects can also be imported from comma separated value (CSV) files.  For testing and evaluation, a spreadsheet of fake data for a school of 1000 students is provided. 

* **Security:** Our custom security model manages permissions based both on role (e.g., teacher, school adminitrator) and relationships (e.g., between a specific teacher and student).  Basic customization of some key aspects of the security policy can be done through the web by the site manager.  Complete customization is possible through XML configuration files.

* **Test-driven development:** SchoolTool includes a comprehensive test suite, including unit and functional tests.  Python "doctests" double as narrative developer documentation.

* **Installation and upgrades:** are managed via the Ubuntu packaging system and Launchpad.net.  Two step production server deployment on Ubuntu Linux.  One-step bugfix upgrades within SchoolTool release versions.  Major releases synchronized to Ubunutu releases.

* **Internationalization:** SchoolTool is completely translatable.  New translations can be contributed via the Rosetta system on Launchpad.net.

* **Single-sign on:** SchoolTool includes somewhat unpolished implementation of the Central Authentication Service (CAS) for single sign on with other enterprise applications such as Moodle and Drupal.  CAS requires a separate authentication server; we have been using RubyCAS in this role at a test site.  The CAS server can be easily configured to authenticate against your LDAP server or another external database.  If you are interested in using CAS or LDAP authentication, contact the SchoolTool team via Launchpad, email or IRC.

* **Web server:** SchoolTool contains its own server for easy testing and simple deployments.  For sites requiring a encrypted (SSL) connection, we recommend using Apache as a secure proxy.

* **Virtual servers:** For schools in a predominantly Windows or other non-Ubuntu environment, we recommend running SchoolTool on a dedicated virtual server, running Ubuntu Server Edition.  Regardless of the host operating system, running SchoolTool on its own virtual server isolated from other services is a good security precaution.

* **Developer tools:** "devmode" provides object introspection and API documentation via the SchoolTool web interface. 

* **Consistent programming style:** For readibility and easier modification, SchoolTool conforms to the official PEP 8 Style Guide for Python Code.


