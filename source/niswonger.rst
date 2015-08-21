SchoolTool for Niswonger/CARE
=============================

SIELibre has created for Niswonger/CARE a customized and stripped down version of the SchoolTool SIS for tracking its program data about students.  There are a few places where some additional explanation about how SchoolTool concepts map to the roles and tasks Niswonger/CARE requires.

Key Concepts for Power Users
++++++++++++++++++++++++++++

Group Permissions
-----------------

Some permissions in SchoolTool are based on membership in several standard groups:

* Members of the **Clerks** group can view and edit information about all users, assign any roles to any user.  This would correspond to people administering the project as a whole and supporting use of the software.

* Members of the **Teachers** group have essentially one special permission.  They can add students for whom they will have an advisor role.  As long as that role is not removed, they can view and edit information about the advisee student.  "Advisors" working for Niswonger/CARE need to be members of the **Teachers** group to add their students to the system.

* You may want some top-level administrators to be members of the **School Administrators** group, which has read permission to all the data in the system but limited edit rights.  It is essentially a "safer" version of the **Clerks** role, if there is no reason this person should be *changing* data in the system, but needs access to view everything.

* Members of the **Students** groups do not have permission to view data about other students, and without passwords cannot log into the system.

Relationship-based Permissions
------------------------------

The main way that advisors' access is limited to only their own students is through the advisor/advisee relationship in SchoolTool.

People in the system can have multiple advisor/advisee relationships.  Each advisor can have multiple advisees and each person can have multiple advisors.

When an advisor adds a student to the system, the advisor/advisee relationship is created, giving the advisor permission to view and edit the advisee.  The advisor can then add additional advisors who share the same permissions.  If the advisor accidentally removes him or herself as an advisor, a person in the **Clerks** group or another advisor of the student will be needed to restore the relationship.

Schools as Groups
-----------------

Individual schools are organized as **Groups** in SchoolTool.  That is, when a student is added by an advisor, they are assigned to a school, and in SchoolTool terms, that is tracked by adding them to the corresponding group in the system.  This has no effect on permissions but is important for generating reports by school.

Key Tasks
+++++++++

Adding Advisors
---------------

Advisors must be created by a member of the **Clerks** group.  SIELibre will be happy to import these from a provided list, but to add them manually, first log in as a member of **Clerks**.

Click on the **School** tab:

   .. image:: images/niswonger-0.png

Click on **People**:

   .. image:: images/niswonger-1.png

In the left sidebar click on **Add: Teacher**:

   .. image:: images/niswonger-2.png

Complete the form and click **Submit** or **Submit and add** if you want to go directly to adding another Advisor:

   .. image:: images/niswonger-3.png

Advisors Adding Students
------------------------

Log in as an advisor:

   .. image:: images/niswonger-4.png

Select **Add: Student**:

   .. image:: images/niswonger-5.png

Fill out the (lengthy) form and click **Submit** or **Submit and add** if you want to go directly to adding another student:

   .. image:: images/niswonger-6.png


