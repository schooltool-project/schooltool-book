.. _sections:

Creating Sections
=================

Creating sections, that is, the actual groupings of students and teachers meeting as classes during the year, is where all the pieces we have constructed thus far come together: years, terms, courses, timetables and people.

In primary and secondary schools, "sections" are often referred to as "classes."  We try to avoid using the term "class" because it has many different meanings in schools as well as programming.  In Moodle and other learning management systems, our "sections" are referred to as "courses."  

The total number of sections in a given school quickly multiplies.  In a school with 20 teachers teaching four classes, there are 80 sections.  In most cases, you will eventually want to use :ref:`spreadsheet` to create sections automatically.  Going through the "manual" process of creating sections using the web interface will help you understand how sections work, however.

Making a New Section Via the Web Interface
------------------------------------------

As "manager," from **School** select **Sections**:

   .. image:: images/sections-1.png

Click **Add: Section**.  Select a course the section should be associated with as well as a starting and ending term.  Note that this section spans two terms Description is optional.

   .. image:: images/sections-2.png

Click **Add**:

   .. image:: images/sections-3.png

Adding and Editing Instructors and Pupils
-----------------------------------------

To add an instructor or instructors for the class click the pencil icon next to **Instructors**.  The subsequent form works like the add form for :ref:`groups`.  Click the green **+** icon to add an instructor, the red **-** to remove one.  Add the user you created in :ref:`user`.

   .. image:: images/sections-5.png

Note that instructors gain elevated privileges in a section (for example, to create and score activities or take attendance) whether or not they are members of the Teacher group.

Likewise, click the pencil icon next to **Students** to add pupils to the section.  Note that the list of people you may add is not limited to members of the Student group.  Any people in the system can be students in a section.  

Add the students one at a time:

   .. image:: images/sections-6.png

When you are ready, click **Done**.  The populated section looks like this:

   .. image:: images/sections-8.png

Note that the application actually stores sections spanning multiple terms as a sequence of linked single-term sections  If you click on the edit pencil next to terms you will see:

   .. image:: images/sections-4.png

Each has its own enrollment data.  You can disassociate the sections by clicking **Unlink**.

Students that are added or removed from a section are added and removed from all linked sections in *later* terms.  That is, if a student is dropped from the fall semester of this section, they are also dropped from the spring semester section.  If a student is added in the spring semester, they are not also added in the fall.

Scheduling the Section into a Timetable
---------------------------------------

If you have set up timetables, you can now assign the section's meeting times.  If you did not create a timetable, you can still use the section gradebook and some other SchoolTool functionality, just not anything that is dependent on knowing when the section meets, like the attendance journal or calendar.

From the main section view, click **Add Schedule: School Timetable** in the left sidebar:

   .. image:: images/sections-9.png

Select the relevant timetable from the menu (we only have one at this point) and the starting and end dates for this particular schedule.  By default this will span the entire term, but you can assign it to a shorter span if you want to, for example, have the class meet Tuesdays and Thursdays for the first half of the term and Mondays and Wednesdays for the second half.

Click **Add**:

   .. image:: images/sections-10.png

This section meets Monday through Thursday at 10:00.  So we check the appropriate boxes:

   .. image:: images/sections-12.png

If in the timetable there are consecutive periods which you would like to be treated as a single long period, check the **Treat consecutive periods as a single meeting** box.  The most obvious reason you would want to do this is to count attendance only once at the beginning of a double period.

Hit **Save**:

   .. image:: images/sections-13.png

