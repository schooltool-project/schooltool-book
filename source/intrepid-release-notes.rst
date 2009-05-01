2008.10 Release Notes
=====================

2008-12-06
----------

schooltool 2008.10.8
~~~~~~~~~~~~~~~~~~~~

Ignas Mikalajūnas <ignas@pov.lt>

- Use a locale sensitive date format in add/edit term views.
- SchoolTool import view. (WIP only works with a sample data file)

schooltool.gradebook 0.3.5
~~~~~~~~~~~~~~~~~~~~~~~~~~

Alan Elkner <aelkner@gmail.com>

- fixed weighted category bug when handling multiple activities of the same category

Ignas Mikalajūnas <ignas@pov.lt>

- Remove sample data references from zcml (was causing a traceback
  when sample data was enabled).

Justas Sadzevicius <justas@pov.lt>

- Remove blank row at top of gradebook grid https://bugs.edge.launchpad.net/schooltool/+bug/298671
- Fix column width in gradebook grid https://bugs.edge.launchpad.net/schooltool/+bug/298673
- Fix broken student grade view

schooltool.lyceum.journal 0.2.3
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Ignas Mikalajūnas <ignas@pov.lt>

- Fix a traceback when someone deletes a timetable event from his
  calendar.
