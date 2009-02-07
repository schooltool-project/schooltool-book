Modeling Your School's Timetable
================================

Certain functionality, such as attendance, is dependent on your creating a timetable in SchoolTool, so that the application knows when sections meet.

SchoolTool is designed to understand a wide variety of school timetables.  This, unfortunately, makes set up somewhat complex.  In this section we will walk you through one common example.  The most important thing in getting through this process is this: if you are asked to choose between something that seems obvious and something that makes no sense to you, take the obvious route.

In this case, each section meets either at a specific time on Monday, Wednesday or Friday, or at a specific time on Tuesday and Thursday.  There are three one hour periods on Mon./Wed./Fri. and two hour and a half long periods Tue./Thurs.

   .. image:: images/tt-table.png

To start creating a timetable, logged in as "manager," select **Manage** and then **School Timetables**:

   .. image:: images/empty-timetables.png

Click the **New Timetable** button.

Give the timetable a name.  It is a good idea to name it after the school year, in case the timetable changes next year.

   .. image:: images/tt-name.png

Our schedule is based on the actual days of the week on the calendar.  That is, certain classes meet on Mondays, Wednesdays and Fridays, others meet Tuesdays and Thursdays, so we choose **Days of the week**.

   .. image:: images/tt-cycle.png

Because Tuesday and Thursday classes start at different times than Mon./Wed./Fri. classes, on the next page we select **Different times**:

   .. image:: images/tt-begin.png

Now we enter the start and end times of each class on each day.  This form is finicky and wants the times in 24 hour (military) format:

   .. image:: images/tt-times.png

At our school, periods don't **Have names** (for example "A," B," etc.), but are simply **Designated by time** (e.g., the 9:00 class):

   .. image:: images/tt-names.png

The homeroom functionality is not really implemented in SchoolTool yet, so you can just say **No** to this question:

   .. image:: images/tt-homeroom.png

If everything has worked you should see this:

   .. image:: images/tt-success.png

And when you click on the **09-10** link (that is, the title of the timetable you created) you should see a simple representation of it:

   .. image:: images/tt-table.png
