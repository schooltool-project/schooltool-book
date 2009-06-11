Groups
======

In SchoolTool groups are used to model some default roles in a school as well as allowing a wide variety of custom groups to be created to suit local needs.

The default roles as defined by the **Clerks, School Administrators, Site Managers, Students,** and **Teachers** groups affect the permissions access privileges of their members.  See :ref:`security` for further explanation.

Groups are stored by year.  That is, each school year has its own set of groups.  For example, you have "Students" for year "2008-2009" and a separate "Students" group for "2009-2010."

Groups can be managed through the web, imported via CSV or by :ref:`spreadsheet`.

Adding People to Existing Groups
--------------------------------

In :ref:`persons`, we imported some people via CSV who have not been assigned to groups.  We're going to add all of them to the "Students" group.

Since they are stored by year, the first step in managing groups is to click as "manager" on the link to the relevant year at the top of the page.

   .. image:: images/groups-1.png

Then click the **Groups** link:

   .. image:: images/groups-2.png

And select **Students**:

   .. image:: images/groups-3.png

First we will "manually" add a member.  Click **edit members**:

   .. image:: images/groups-4.png

Check the box next to "Sally Brown" and hit **Add**:

   .. image:: images/groups-5.png

Then **OK** to get back to the main page for the group.

Next we will import a list of group members.  Click **Import Groups Members** (sic).  This form accepts a simple list of person ID's to be *added* to the group.  That is, people not in the list are not *removed* from the existing group membership.  You may create a text file and upload it, or simply type or copy/paste the ID's into the textbox provided:

   .. image:: images/groups-6.png

Hit **Submit** and you should get a "CSV text imported successfully" message.

At this point you're unfortunately stuck in a navigational dead-end bug.  Selecting the year at the top of the page and **Groups** and **Students** is probably the best route back.  Or using your back arrow/history.  Regardless, here's what your completed group should look like:

   .. image:: images/groups-7.png
