Customizing Demographics
========================

SchoolTool allows you to modify the demographic information stored about each person.  If you are using SchoolTool as the primary student information system for a school, you will probably need to customize the demographics fields to meet your local government's reporting requirements.

Note that **Prefix, First name, Middle name, Suffix and Preferred name** are not customizable.  Preferred name is the name which a student prefers to be used by teachers, or for teachers the name they prefer to have used in correspondence with parents and students.

**Gender** and **Birthdate** also cannot be changed.  

You can limit fields to specific groups: Students, Teachers or Administrators.  For example, this would allow you to have a "Certification" field for teachers that did not appear when you edited any other people.

Contact information -- parents' names, address, phone, email, etc. -- is stored separately.

To edit the default demographics fields, you must be logged in as "manager." Select the **School** tab, and then click on the **Customize: Demographics** link in the sidebar.  

   .. image:: images/demographics-schema-0.png

In the default settings, **ID, Ethnicity, Language, Place of birth, and Citizenship** can be edited or removed.  In this case, **ID** is just a generic text field which you can use for any student ID or number you might need to keep track of.

You can delete, edit, and re-order the existing fields and add your own.

In this example we will:

  * delete citizenship;
  * reorder fields.
  * change the values in the ethnicity list;
  * add enrollment date.

To delete a field, click **Actions: Reorder or Delete Fields** in the sidebar, and then click the red minus (-) icon next to the field you'd like to delete.  You can also reorder the fields here by changing the numbers in the first column of the table.  In both cases the changes are applied immediately.

   .. image:: images/demographics-schema-1.png

To edit the values in a selection list from the main **Demographics and Personal Information** screen, click on the title of field -- for example, **Ethnicity**:

   .. image:: images/demographics-schema-2.png

To change the list values, simply edit the values in the **Selection List** text box.  Each line defines one value.  You can also specify whether the field is required, and if it should be limited to Students, Teachers and/or Administrators.

You can add five different types of fields:

  * Text Field: for a single line of text;
  * Description Field: for longer text entered through a textbox;
  * Date Field: entered through a calendar widget;
  * Yes/No Field: for a true/false boolean value;
  * Selection List: a list of string selected through a drop-down menu;

For our example we will add an Enrollment Date for students.  Click on **Add: Date Field**:

   .. image:: images/demographics-schema-3.png

And thus:

   .. image:: images/demographics-schema-4.png

