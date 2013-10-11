.. _groups:

Groups
======

In SchoolTool, Groups are used to model some default roles in a school, as well as allowing a wide variety of custom groups to be created to suit local needs.

In particular:

  * Groups have their own calendars;
  * you can run reports for the members of a Group;
  * Groups are useful for adding a specific set of students to multiple class sections.

The default roles as defined by the **School Administrators, Site Managers, Students,** **Teachers**, and **Clerks** Groups affect the permissions and access privileges of their members.

Groups are stored by Year.  That is, each school year has its own set of Groups.  For example, you may have one "Students" Group for Year "2008-2009" and a separate "Students" group for Year "2009-2010."

**Note that you must create Years before you can do anything with Groups.**  See :ref:`years`.

Groups can be managed through the web, imported via CSV or by :ref:`spreadsheet`.

Adding People to Existing Groups
--------------------------------

In :ref:`persons`, we imported some People via CSV who have not been assigned to Groups.  We're going to add all of them to the "Students" Group.

In order to add People to a Group, you must be logged in as "manager." Navigate to the **School** tab, and click on the **Groups** link:

   .. image:: images/groups-0.png

From here, select **Students**:

   .. image:: images/groups-1.png

First we will "manually" add a member.  Click on the yellow pencil icon next to **Members**:

   .. image:: images/groups-2.png

Click on the green plus (**+**) icon next to "Sally Brown":

   .. image:: images/groups-3.png

Then click **Done** to get back to the main page for the Group.

Next we will import a list of group members.  Click **Import:  Import Members CSV**.  This form accepts a simple list of Person ID's to be *added* to the Group.  That is, current group members who are not in the list are not *removed* from the existing group membership.  You may create a text file and upload it, or simply type or copy/paste the ID's into the textbox provided:

   .. image:: images/groups-4.png

Hit **Submit** and your completed Group should look like:

   .. image:: images/groups-5.png

If you click on one of the students' names and then their **Groups** slider, you'll see their memberships listed:

   .. image:: images/groups-6.png

Creating a New Group
--------------------

From the main **Groups** view, click **Add: Group**.  Add a relevant title and description:

   .. image:: images/groups-7.png

Add members as above:

   .. image:: images/groups-8.png

You can also assign "Responsible Parties," who will have permission to modify the Group, add members, and edit the calendar.

