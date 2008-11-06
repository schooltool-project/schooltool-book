Overview of Features
====================

Basic Use Cases
---------------

SchoolTool is configured by default to act as what is often called a "student information system" or SIS.  The focus is on tracking information related to students.  It is a subset of a complete "management information system" or MIS for schools, which might also cover systems like accounting.  

SchoolTool is not a "learning managment system," or LMS, such as Moodle, although they share some overlapping components, such as a gradebook.  SchoolTool does not contain curriculum or learning objects.  One way to differentiate between SIS and LMS roles is note that LMS's don't print student report cards, while SIS's do.  SIS data focuses on students; the LMS is organized around courses.

SchoolTool is designed for extensibility, however, so we hope that in collaboration with outside users, governments and vendors SchoolTool will offer more functionality beyond basic SIS components in the future.

Because SchoolTool is free and easy to install, it can also practically be deployed and used within a school by a small subset of teachers, or even installed on a laptop or desktop PC and used by a single teacher as an online gradebook or attendance journal.  Likewise, schools can use individual components of SchoolTool, such as resource booking, without committing to using it as a complete student information system.

Currently, the primary deployment strategy for SchoolTool is for one server instance corresponding to one school.  You can handle multiple schools by running multiple server processes (software) on one physical server (hardware).  Managing multiple schools efficiently is a long-term goal for SchoolTool.  It is possible in some cases to track specific data about several similar schools on one SchoolTool instance.  

School Model
------------

* Persons: Default roles for people are students, teachers, school administrators, and site administrators (technical).  Parent access is planned for future releases.  People can be imported and exported from text files.  By design all people can log in, but currently our development focus has been on teacher and administrator views.  If people are not assigned passwords, they cannot log in.

* Groups: Create arbitrary groups of people representing school organizations, clubs, teams, etc.  Group rosters can be imported from text files.

* Courses and sections: Courses define blocks of curriculum; e.g., 1st grade Math, 9th grade English.  Sections are the groupings of teachers and students working on a course; e.g., Mr. Hoffman's 9:30 Algebra I class, Fall 2009 semester.  Courses and sections can be imported from text files.

* Years and terms: Years are the longest block of time in SchoolTool.  The transition between years represents a regular point of significant reorganization within the school; e.g., when most students are promoted, teachers hired, etc.).  Terms define when sections begin and end.

* Timetables: Timetables define when sections meet during the week.  This is the school's "bell schedule."  SchoolTool handles simple timetables; e.g., classes meet the same time every day; and many complex ones, such as rotating schedules and schedules with different start and end times on different days of the week.  SchoolTool does not currently generate class rosters or automatically schedule sections into rooms and times.  It tracks the timetables you enter or import.

* Resources: SchoolTool allows you to manage and track shared resources.  These are divided into "locations" and "resources," with further user-created types such as "classrooms" or "projectors."  Each has additional meta-data, such as the seating capacity of a location.  Resources can be imported from a text file.

Demographics
------------

SchoolTool 2008.10 has a simple implementation of demographics, tracking the following data: first name, last name, gender, email, phone, birth date and advisor.  Based on user feedback, we will add to this to create a more complete default schema for SchoolTool 2009.04.  We will also help local developers create custom demographic schemas.

In the long run we hope to support end-user customizable demographic fields.

Calendaring
-----------

* SchoolTool automatically creates a web-based calendar for every person, group, resource, and section.  There is also a school-wide calendar that can be displayed on the front page of SchoolTool. 

* Person calendars are private.  By default, group and section calendars are visible only to members.

* Like iCal, Google Calendar, and other popular calendaring applications, SchoolTool allows users to "overlay" events from other calendars on their personal calendar.  For example, by default, a student sees events from all sections they are enrolled in and the school-wide calendar.

* Calendars are aware of the school timetable, so by default new events will start and end at the beginning and end of class periods.

* Users can create single or repeating events.  Teachers can edit section events to note tests, assignment and other class information.

* Calendars can be imported and exported to other popular applications like iCal and Google Calendar using the iCal (.ics) format.

   .. image:: images/intrepid/calendar.png

Resource Booking
----------------

Teachers, administrators and managers can schedule shared resources via their calendar.  This component is fairly mature and stable; some schools may use SchoolTool for this functionality alone.

How it works:

* A teacher, administrator or manager selects and existing calendar event or creates a new one.

* He or she can then select the type of resource he needs; SchoolTool returns a list of the resources of that type which are available or already booked. 

* The user can then add an available resource to the event; an event at the same time is added to the resource's calendar.

Users can monitor or print the schedule for each resource by viewing its calendar.

   .. image:: images/intrepid/resource.png

Attendance and Participation Journal
------------------------------------

SchoolTool provides a simple attendance and participation journal for each section which allows a teacher to track absences and tardies, and optionally assign each student a numeric score for each class meeting.  Each meeting of a section can also be assigned a description.  The teacher can add a cumulative attendance/participation grade for the term.

Individual entries in the journal grid are stored to the server without requiring a page reload using Ajax.  The journal displays average participation scores and total absences for the term.  

The current system is adequate for teacher record keeping and providing basic data for report cards.  We have not implemented a full workflow to manage excused and unexcused absences for a school with strict legal requirements, such as US public schools.  We will focus on improving the user experience and reports for this simpler case first.

The attendance journal was created in collaboration with faculty from the Vilnius Lyceum in Vilnius, Lithuania.

   .. image:: images/intrepid/journal.png

Gradebook
---------

SchoolTool includes a basic assignment-oriented gradebook for each section.  Each section can have multiple spreadsheet worksheets.  Teachers create assignments (or "activities") that are organized and may be weighted by category, such as "exam" or "presentation."  Grades can be assigned by a variety of systems, including point values and letter grades.  Additional scoring systems can be added in code; suggestions are welcome.

The gradebook is fairly complete in functionality, but still rough around the edges, and gradebooks are imfamously full of edge cases.  Beta testing is strongly encouraged!  Let us know what needs fixing.

   .. image:: images/intrepid/activity.png

Reporting
---------

SchoolTool's printed reports are generated using the free and powerful ReportLab library.  Now that SchoolTool can capture a variety of data for a school, we need your feedback on exactly what kind of reports are needed at your school.  Creating a set of high quality printable and web-viewable reports is a priority for development.  Let us know what you need!

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

* 100% free and open source software stack:
  - Python programming language;
  - Zope 3 component architecture;
  - Zope Object Database (ZODB);
  - ReportLab PDF generation.

* Security: Our custom security model manages permissions based both on role (e.g., teacher, school adminitrator) and relationships (e.g., between a specific teacher and student).  Basic customization of some key aspects of the security policy can be done through the web by the site manager.  Complete customization is possible through XML configuration files.

* Test-driven development: SchoolTool includes a comprehensive test suite, including unit and functional tests.  Python "doctests" double as narrative developer documentation.

* Installation and upgrades: are managed via the Ubuntu packaging system and Launchpad.net.  Two step production server deployment on Ubuntu Linux.  One-step bugfix upgrades within SchoolTool release versions.  Major releases synchronized to Ubunutu releases.

* Internationalization: SchoolTool is completely translatable.  New translations can be contributed via the Rosetta system on Launchpad.net.

* Single-sign on: SchoolTool includes somewhat unpolished implementation of the Central Authentication Service (CAS) for single sign on with other enterprise applications such as Moodle and Drupal.  CAS requires a separate authentication server; we have been using RubyCAS in this role at a test site.  The CAS server can be easily configured to authenticate against your LDAP server or another external database.

* Web server: SchoolTool contains its own server for easy testing and simple deployments.  For sites requiring a encrypted (SSL) connection, we recommend using Apache as a secure proxy.

* Virtual servers: For schools in a predominantly Windows or other non-Ubuntu environment, we recommend running SchoolTool on a dedicated virtual server, running Ubuntu Server Edition JeOS.  Regardless of the host operating system, running SchoolTool on its own virtual server isolated from other services is a good security precaution.

* Developer tools: "devmode" provides object introspection and API documentation via the SchoolTool web interface.

* Sample data: To aid in testing SchoolTool, we provide tools for generating sample data for two years in a school of 1000 students (NOTE: this is temporarily disabled in SchoolTool 2008.10.0).  

* Consistent programming style: For readibility and easier modification, SchoolTool conforms to the official PEP 8 Style Guide for Python Code.


