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

Click the **New Section** button under the red bar:

   .. image:: images/sections-3.png

In the above form, the **Description** is optional.  The relevant **Course** should be pre-selected.  In this case, we only have one term set up, but if the section continues across multiple terms, you can create "linked" sections across multiple terms in this form.

Hit **Add**:

   .. image:: images/sections-4.png

And click on the new section title, **English 9 (1) (Fall 2009)** to view the main page for the section:

   .. image:: images/sections-4.5.png

Adding and Editing Instructors and Pupils
-----------------------------------------

To add an instructor or instructors for the class click **edit instructor**.  The subsequent form works like the add form for :ref:`groups`.  Use the user you created in :ref:`user`.

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

From the main section view, click **Schedule**:

   .. image:: images/sections-9.png

Then **Add Timetable**:

   .. image:: images/sections-10.png

Since we just have one timetable defined for the year, we don't have to change that field.  If your school has two different timetables (i.e., some classes start and end at overlapping times), you can select which one to use for this section.  For now, we've just got the "default" one we created in :ref:`timetables`.

By default, the beginning and end of the span of days the section meets is the same as the beginning and the end of the term.  You can change this to a shorter span within the term if you'd like.  Click **Add**:

   .. image:: images/sections-11.png

This section meets Monday through Thursday at 10:00.  So we check the appropriate boxes:

   .. image:: images/sections-12.png

You can apply this And hit **Save**.  If you want to apply this timetable to only a specific span of dates within the term, you can changes the **Apply from:** and **Apply to:** dates, which by default begin and end with the term.

If in the timetable there are consecutive periods which you would like to be treated as a single long period, check the **Treat consecutive periods as a single meeting** box.  The most obvious reason you would want to do this is to count attendance only once at the beginning of a double period.

Hit **Save**:

   .. image:: images/sections-13.png

At this point, to demonstrate what all this adds up to, we'll **Log Out** (upper right), and **Log In** as the instructor of the section, with the username and password created in :ref:`user` (if you're running the selenium scripts that's "hoffman" and "passwd"): 

   .. image:: images/sections-14.png

You can see the term and the section we created appear at the color legend for the calendar at left:

   .. image:: images/sections-15.png

If the current day in real life is not a day when our fake section is meeting, you will want to navigate to a day during the term when the section meets.  The easiest way to do this is to click **Yearly** at the top of the calendar and then click on a highlighted date that indicates a term is in session.  In this case a Monday through Thursday since that's when our section meets:

   .. image:: images/sections-16.png

As you can see, an event has been created for the meeting of the section:

   .. image:: images/sections-17.png

Also note that the hourly rows in the calendar are adjusted automatically to conform to the start and end times in the timetable.

