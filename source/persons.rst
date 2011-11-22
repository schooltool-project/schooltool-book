.. _persons:

Adding People
=============

Passwords and Logins
--------------------

If you do not set a password for a person, they will not be able to log in.  SchoolTool is designed to allow students to log in and use SchoolTool to manage their calendar, view grades, etc.  Whether or not students are given passwords determines if they can log into your SchoolTool instance.

Advisor
-------

This allows you to designate a teacher as an advisor for another person.  This may give the Advisor more access to information about this student and is used in the Intervention component.

Methods of Adding People
------------------------

Web Forms
+++++++++

You can add one person at a time via the web interface using the same procedure covered in :ref:`user`.  In this case we'll use the **Add: Student** link:

    .. image:: images/persons-0.png

    .. image:: images/persons-1.png

Note that the **Submit and Add** button takes you directly to another Add form of the same type.  Use this when you're adding many people to the system at once.  **Submit** will take you to the new person's page:

    .. image:: images/persons-2.png

The main content area for a person is an "accordion" with different sections that slide open vertically.  We'll cover each section in turn as we continue through more aspects of SchoolTool.

CSV Import
++++++++++

This is a simple way to import person usernames, first names, last names and passwords.  It does not add any other demographic data.

As "manager," Go to **School** and **People**.  Click the **Import: Import CSV** link.  As explained on this form, you can either upload a CSV file or use the textbox to directly type or paste your data:

    .. image:: images/persons-3.png

**Submit** and return to the persons index:

    .. image:: images/persons-4.png

XLS Import
++++++++++

:ref:`spreadsheet` is another method of importing people.  The one trick here is that if you have changed the demographic schema, you should first do an **XLS Export** to get a worksheet that has your new fields in the correct sequence.  Add your people and re-import the form.
