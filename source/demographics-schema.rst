Customizing Demographics
========================

SchoolTool allows you to modify the demographic information stored about each person.  Note that currently the same information is stored about both students and teachers.  You do not need to enter optional fields when it is not relevant to the individual's role in the school.

To see the default demographics fields, as "manager," click the **Home** and then the **Edit** button.  

   .. image:: images/demo-fields.png

**Prefix, First name, Middle name, Suffix and Preferred name** are not customizable.  Preferred name is the name which a student prefers to be used by teachers, or for teachers the name they prefer to use in correspondence with parents and students.

**Gender** and **Birthdate** also cannot be changed.  

In the default settings, **ID, Ethnicity, Language, Place of birth, and Citizenship** can be edited or removed.

To customize the demographics fields for your school, click **Manage** and then **Demographics**:

   .. image:: images/demo-container.png

You can delete, edit, and re-order the existing fields and add your own.  There are three types of fields: text, dates, and selection lists.

In this example we will:

  * delete citizenship;
  * change the values in the ethnicity list;
  * add enrollment date;
  * add grade level;
  * reorder fields.

First, we'll simply click the checkbox next to **citizenship** and click **Delete** to remove it.

   .. image:: images/delete-citizenship.png

To change the values in a selection list, like **citizenship**, click on the name of the list, or example **ethnicity**.

   .. image:: images/ethnicity-view.png

To change the list values, hit the **Edit** button and change the values in the **List of values** box.  Each value on a separate line.  I'll change it to a more British list of ethnicities, and hit apply.

   .. image:: images/ethnicity-edit.png

Note that navigation here is currently broken and you have to route back through **Manage** and **Demographics** to move to the next step.

Enrollment date is a date field, which means that a calendar selection widget will be displayed on forms using this field.  Click the **New Date Field** button and enter a title and ID.  The title designates the text that will be displayed on forms using this field.  

   .. image:: images/new-date-field.png

Hit **Apply** and routing back to the **Demographics Container**.  Now we'll add a text field to designate the grade levels of students.  SchoolTool currently does not have a dedicated system for managing grade levels.  It is high on the TODO list.

Grade level will be stored as a text value (SchoolTool does not support integer fields at this time).  Hit **New Text Field** and enter an appropriate title and ID, and hit **Apply**:

   .. image:: images/new-text-field.png

Finally, by changing the numbers at left in the list of fields, you can reorder the fields as they will appear on entry forms, import/export files and basic reports.  They'll rearrange themselves dynamically; hit **Apply** when you're done.

   .. image:: images/reorder-demographics.png
