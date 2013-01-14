.. _courses:

Setting Up Courses
==================

In SchoolTool, there is a distinction between "courses" and "sections."  A "course" describes what is taught -- the curriculum.  A section is an actual group of students being taught this content.  For example, "1st Grade Mathematics," "British Literature," and "Algebra II" are all courses.  "9:30 Algebra II, Spring 2008" or "Period B Algebra II, 2009 - 2010" are sections.

In particular, this is different from most learning management systems, such as `Moodle <http://moodle.org>`_.  A Moodle "course" is equivalent to our "section." 

Where one teacher teaches all subjects to a single group of kids -- for example, in a kindergarten -- you can either make everything one course ("Kindergarten") or split it up ("Kindergarten Math," etc.).  Whichever makes more sense for you.  Things like "homeroom" or "advisory" or "internship" that are scheduled at a specific time but don't have a set academic curriculum or grades can also be considered courses.

You can't create sections without courses, so any use of SchoolTool that requires students and teachers to be assigned to sections will also require courses.  For larger or more complicated schools, importing courses from a spreadsheet or CSV file will save some time.

Courses are organized by year, so that they can be updated from year to year without overwriting previous courses or changed descriptions.

Entering Courses Through the Web Interface
------------------------------------------

To create courses, you must be logged in as "manager." Select the **School** tab, and click on **Courses**:

   .. image:: images/courses-0.png

Then, click the **Add: Course** link and fill out the form.  A title is required.  The description, extra ID's, and credits are optional:

   .. image:: images/courses-1.png

After you click **Add**, you should see your new course:

   .. image:: images/courses-2.png

Entering Courses Using CSV Format
---------------------------------

You can also import a simple text list of course titles, descriptions and IDs.

From the Courses index, select **Import CSV** from the sidebar.  You can then either upload a text file from your local filesystem, or use a textbox to enter text directly by either copy/pasting from another document or typing the necessary information.  

   .. image:: images/courses-3.png

The format, as described on the form, is simply::

   title, description (optional), id (optional)

We'll just type some in for now.  Clicking the **Enter CSV text** reveals a text box:

   .. image:: images/courses-4.png

When you're ready, press **Submit**, and if the import is successful you'll be sent back to the course index:

   .. image:: images/courses-5.png
