SchoolTool Core
===============

New Features
------------

* A way to enter contact information of users themselves (as opposed to
  external contacts) https://launchpad.net/bugs/381158

* Outgoing email support for interventions (sent either via specified
  SMTP server or your Gmail account).
  https://launchpad.net/bugs/417029,
  https://launchpad.net/bugs/417101,
  https://launchpad.net/bugs/425759

SchoolTool security
-------------------

* An overview page of user permissions (access rights) in SchoolTool.
  https://launchpad.net/bugs/381698
  (Only SchoolTool core permissions listed - Gradebook, Attendance/Journal
  and Interventions are soon to follow)

* Refined some of the rougher access permission corners, tightened
  permissions where needed.

Bug fixes
---------

* Much better SchoolTool translatability coverage.

* Failed to create sections that span multiple terms.
  https://bugs.launchpad.net/bugs/427321

* Crufty section name display for section.
  https://launchpad.net/bugs/394388

SchoolTool Intervention
=======================

This is the first public release of SchoolTool Intervention, a system to create goals for students in collaboration with key stakeholders, to keep those stakeholders up to date on progress toward the goals, and provide a central interface for reports and communication about a student.

SchoolTool Gradebook
====================

Worksheets
----------

* New summary worksheets. https://launchpad.net/bugs/427997
* Default non-report worksheet. https://launchpad.net/bugs/417929
* Ranged value score support in Report Sheet activity.
  https://launchpad.net/bugs/417926
* Improved multi-worksheet interaction. https://launchpad.net/bugs/417918
* Way to create summary sheets automatically.
  https://launchpad.net/bugs/427994

Reporting
---------

* Failure report. https://launchpad.net/bugs/428077
* Student detail report. https://launchpad.net/bugs/428075
* Section attendance information in the report card layout.
  https://launchpad.net/bugs/410005

Translations
------------

* Gradebook translations are now separate from schooltool.
* Many fixes to make it translatable.

Tweaks and fixes
----------------

* Abbrevations in gradebook scoring system. https://launchpad.net/bugs/409038

* Better category weighting documentation. https://launchpad.net/bugs/447468,
  https://launchpad.net/bugs/417919

* And a lot of small UI / navigation tweaks, fixes for several crashes and
  glitches.  For a full list see
  https://launchpad.net/schooltool.gradebook/+milestone/0.5.0

* Show period in section journal view, https://launchpad.net/bugs/409959

