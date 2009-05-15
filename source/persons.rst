Adding People
=============

Passwords and Logins
--------------------

If you do not set a password for a person, they will not be able to log in.  SchoolTool is designed to allow students to log in and use SchoolTool to manage their calendar, view grades, etc.  

Development has focused primarily on teacher use of SchoolTool, and in most cases, we recommend new users also focus first on teacher use.  The student-facing functionality is still a bit rough, but will receive more attention in upcoming releases, depending on the number of people expressing a need for it.

Thus, at this point we recommend giving passwords to teachers, administrators and site managers, but not to students.  But if you test out the existing student functionality and find it useful, go ahead and give students passwords.

Default Groups
--------------

**Group** allows you to add a person directly to one group without requiring an additional step.  Usually this will be "Students," "Teachers" or "Administrators."  

Note that there is currently no separate "Add Student" or "Add Teacher" method.  They're both considered persons by SchoolTool and designated as "Students" or "Teachers" through group membership.

Advisor
-------

This allows you to designate a teacher as an advisor for another person.  Currently this is primarily used in some unreleased extensions of SchoolTool.

Methods of Adding People
------------------------

Web Forms
+++++++++

You can add one person at a time via the web interface using the same procedure covered in :ref:`user`.

    .. image:: images/add-charlie.png

CSV Import
++++++++++

This is a simple way to import person usernames, first names, last names and passwords.  It does not add any other demographic data.

As "manager," Go to **Manage** and **Persons**.  Click the **Import Persons** button.  As explained on this form, you can either upload a CSV file or use the textbox to directly type or paste your data:

    .. image:: images/import-persons.png

**Submit** and return to the persons index:

    .. image:: images/longer-index.png

XLS Import
++++++++++

:ref:`spreadsheet` is another method of importing people.  The one trick here is that if you have changed the demographic schema, you should first do an **XLS Export** to get a worksheet that has your new fields in the correct sequence.  Add your people and re-import the form.
