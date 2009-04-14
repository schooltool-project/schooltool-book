Glossary
========

**administrator** - An administrator of the school itself.  This is a school governance role, not a technical role.  For example, the principal or headmaster of a school is an administrator.  Compare with "manager."

**class** - We avoid using "class" as an educational term. It has too many overlapping usages. Plus it has a different meaning in computer science. If someone is using "class" in an educational context, they usually mean a "section."

**period** - A period represents a specific configuration of sections and locations in the school. That is, for any given period, you should be able to identify what sections should be meeting in what locations. Periods occur during one or more slots in the school timetable.  In simple cases, a period simply corresponds to a time; at 9:00, it describes which sections are meeting where.  In more complex cases, periods may not occur at the same time on different days.

**manager** - A person who maintains an instance of SchoolTool.  This is a technical role, not a school governance role.  For example, a systems administrator or webmaster that is responsible for setting up SchoolTool and keeping it running is a manager.  Compare to "administrator."

**schedule** - This is used as a verb in the SchoolTool UI, to refer to the process of assigning a student to his or her sections.

**school administrator** - Longer form of "administrator."  Useful for avoiding ambiguity with "site manager" role.

**school year** - A school year encompasses the annual cycle of a school. For example, most students are promoted at the end of a year. Most teachers start work at the beginning of the year. Terms must be contained within years.  The school year does not have to correspond to calendar year. Whatever suits the processes of your school. It is best to set this up so that every date is part of one school year or another. School years cannot overlap.

**section** - A section is a set of one or more learners who meet over a period of time. There are lots of other optional attributes and relationships associated with sections. They may have instructors, they may be implementations of courses.  Sections take place during terms.  The standard example of a section would be something like "Mr. Hoffman's 9:00 Algebra II class, spring semester, 1995." Less traditional structures like eLearning and internships are still expressed as sections.

**site-manager** - Longer form of "manager."  Useful to avoid ambiguity with the "school administrator" role.

**slot** - Defines a period of time in a school timetable. Just the time and day in the cycle. 8:00 - 9:30 Monday mornings is an example of a slot. Or 8:30 - 9:30 on "B" days. Each slot contains one period.

**term** - A unit of time that defines the beginning and end of sections on the calendar. For example, a semester or trimester.  Students generally recieve evaluations for each section at the end of the term.  SchoolTool does not recognize any hierarchy of terms.  So if in a particualar school some sections last all year, some change by semesters, and some change quarterly, a "term" for this school would be defined as a quarter -- the shortest unit that defines the lifetime of a section.  Terms cannot overlap and must be contained within school years.

**time period** - Synonymous with "term."  Deprecated.

**timetable** - a person's or section's timetable is the automatically generated set of scheduled classes for the person or section.  Generated from the timetable schema.

**timetable schema** - this is a "bell schedule" in US parlance, defining when section meetings (class periods) start and end.  In the case of rotating or modular schedules, which sections meet at various points in the cycle.
