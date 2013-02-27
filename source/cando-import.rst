Importing Skills
================

We recommend beginning this process by first manually creating a document structure and at least one example of the items in your heirarchy down to skills as described in :ref:`cando`.

Following that, return to the **School** page and select **Reports > Skills Export**.

   .. image:: images/cando-import-1.png
   
   .. image:: images/cando-import-2.png

This will cause your browser to open a spreadsheet with several worksheets.

The **Documents** worksheet contains a row for each document in the system, including the one we created on the previous page:

   .. image:: images/cando-import-3.png

The **Layers** worksheet defines the layers in the document hierarchies.  In this case, the "Course" layer we previously created, plus the default SkillSet and Skill.

   .. image:: images/cando-import-4.png

Data for any additional layers above SkillSets and Skills are in the **Nodes** worksheet, in this case our example Course.  

   .. image:: images/cando-import-5.png

The **Skillsets** worksheet contains the skillsets, including our single example.  Note that the External ID column should be considered deprecated for skillsets.

   .. image:: images/cando-import-6.png

The more complicated **Skills** worksheet contains the single example skill.

   .. image:: images/cando-import-7.png

We will cover the **CourseSkills** worksheet when we begin associating skills with courses.

The next step is to get your skills data into this spreadsheet, following the example data you entered through the web interface.  

Depending on what format your exising data is in, you might be able to simply cut and paste into the spreadsheet cells.  Depending on your skills (or access to people with skills) you might be able to write a script that will parse your skills document and either directly insert the data into the spreadsheet, for example, using `Python <http://python.org>`_ and `python-excel <http://www.python-excel.org/>`_.

The end result will look something like this:

   .. image:: images/cando-import-9.png

and this:

   .. image:: images/cando-import-8.png

Once this is done, you can import the spreadsheet by selecting **Import Skill Data** from the **School** page:

   .. image:: images/cando-import-10.png

   .. image:: images/cando-import-11.png

The newly populated Skill Sets:

   .. image:: images/cando-import-12.png
