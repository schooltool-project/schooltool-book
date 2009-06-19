.. _sections:

Creating Sections
=================

Creating sections, that is, the actual groupings of students and teachers meeting as classes during the year, is where all the pieces we have constructed thus far come together: years, terms, courses, timetables and people.

The total number of sections in a given school quickly multiplies.  In a school with 20 teachers teaching four classes, there are 80 sections.  In most cases, you will eventually want to use :ref:`spreadsheet` to create sections automatically.  Going through the "manual" process of creating sections using the web interface will help you understand how sections work, however.

Making a New Section Via the Web Interface
------------------------------------------

As "manager," navigate to the year the section is to take place, and then select **Courses**:

   .. image:: images/sections-1.png

We will create a new section of the **English 9** course, so click that link:

   .. image:: images/sections-2.png

Next to the **New Section** button is a drop-down menu which allows you to select the term within the current year in which the section will take place.  In this case, there is only one term defined, **Fall 2009**, so we can simply click **New Section**.  This creates a new, empty section, with a default name:

   .. image:: images/sections-3.png

If you'd like to change the name and/or add a description, click **edit info**, change the relevant fields and hit **Apply**:

   .. image:: images/sections-4.png

The **Linked sections** information at the bottom of the form indicates which sections in preceeding or following terms are "linked," and will be treated as extensions of the current section in different terms (i.e., a multi-term section).  The user interface for this functionality is not yet completely developed.

Adding and Editing Instructors and Pupils
-----------------------------------------

Back at the main section page, to add an instructor or instructors for the class click **edit instructor**.  The subsequent form works like the add form for :ref:`groups`.  Use the user you created in :ref:`user`.

   .. image:: images/sections-5.png

   .. image:: images/sections-6.png

Likewise, click **edit individuals** to add pupils to the section.  The terminology in this page is a bit misleading.  The list of people you may add is not limited to available "students."  It can display all people in the system.  In this case, we know all the students we want to add to the section are part of the "Cats" team, so :ref:`search` we can narrow the selection down to that group's members and **Invert Selection** to check all their boxes with one click:

   .. image:: images/sections-7.png

The populated section looks like this:

   .. image:: images/sections-8.png

Note that the display glitch for the description (it displays vertically) will be fixed in the next release.

Scheduling the Section into a Timetable
---------------------------------------

If you have set up timetables, you can now assign the section's meeting times.  If you did not create a timetable, you can still use the section gradebook and some other SchoolTool functionality, just not anything that is dependent on knowing when the section meets, like the attendance journal or calendar.

From the main section view, click **Schedule** (the **Timetable** view is redundant and will be removed):

   .. image:: images/sections-9.png

Since we just have one timetable defined for the year, we don't need to pick one.  If your school has two different timetables (i.e., some classes start and end at overlapping times), you can select which one to use for this section.  For now, we've just got the "default" one we created in :ref:`timetable`.

This section meets Monday through Thursday at 10:00.  So we check the appropriate boxes:

   .. image:: images/sections-10.png

And hit **Save**.  Unfortunately, this leaves you at one of our navigational dead ends.  Back-arrowing out or routing back through the year link are your best options until we fix this bug.

At this point, to demonstrate what all this adds up to, we'll **Log Out** (upper right), and **Log In** as the instructor of the section, with the username and password created in :ref:`user` (if you're running the selenium scripts that's "hoffman" and "passwd"): 

   .. image:: images/sections-11.png

You can see the term and the section we created appear at the color legend for the calendar at left:

   .. image:: images/sections-12.png

If the current day in real life is not a day when our fake section is meeting, you will want to navigate to a day during the term when the section meets.  The easiest way to do this is to click **Yearly** at the top of the calendar and then click on a highlighted date that indicates a term is in session.  In this case a Monday through Thursday since that's when our section meets:

   .. image:: images/sections-13.png

As you can see, an event has been created for the meeting of the section:

   .. image:: images/sections-14.png

Also note that the hourly rows in the calendar are adjusted automatically to conform to the start and end times in the timetable.

