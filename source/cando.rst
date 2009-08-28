.. _cando:

Cando Notes
===========

User Installation
-----------------

To install CanDo's Ubuntu packages, follow `the instructions on the Virginia Career and Technical Education Resource Center <http://cando.cteresource.org/phase2install.html>`_.  The CTE site is the main source of CanDo documentation.

Developer Installation
----------------------

CanDo installs slightly differently than schooltool.  CanDo currently does not have packages available and uses a buildout process.

#. Install subversion and build-essential::

    sudo apt-get install subversion build-essential

   We'll be using bzr-ng soon.  The only thing this should change is svn becomes bzr in all our commands.

#. Checkout CanDo Trunk from subversion::
   
    svn co https://svn.schooltool.org/cando/trunk cando

#. Change into the checkout directory and start the build process

   This process will require your sudo password to download::

    cd cando
    make ubuntu-environment
    make

   make ubuntu-environment goes through and installs all of the dpkg dependencies that CanDo requires and make will actually download all the eggs from web and build the application.


Starting the application
------------------------

The build for CanDo automatically creates an instance in the checkout folder called ``instance``.  You'll need to change into the instance directory::

    cd instance

From that directory you'll see the following files

* log

   In the log directory you'll find all of the access and error logs for CanDo

* var

   The var directory is where the zope object database (zodb) for CanDo is stored, it'll be ``var/Data.fs``.

* plugins
* schooltool.conf
* school.zcml

   No edits needed here!

* schooltool.ini

   The schooltool.ini is where you set the ``port`` and IP address (``host``) to listen to::

    [app:main]
    use = egg:schooltool#main
    config_file=schooltool.conf

    [server:main]
    use = egg:Paste#http
    host = 127.0.0.1
    port = 7080

   If you need to see CanDo from anywhere, change host from ``127.0.0.1`` to ``0.0.0.0``.  Port is unlikely to need to be changed unless you are running multiple instances.


Next Steps
----------
Go to the install documentation for SchoolTool and follow :ref:`managepass` on Initial Setup through the end of the :ref:`user` chapter.

Competency XML Import
---------------------

* go to http://127.0.0.1:7080/
* Login as manager (default password schooltool)
* from http://127.0.0.1:7080/manage.html (should be where logging in leaves you) click "Global Competency"
* At the top of this page is an Actions Menu, under the menu is an option "Import Competencies from XML"
* browse and choose your XML file and hit Submit.

 * This process can take up to 10 minutes.  This creates the entire tree for the system.


Score System Setup
------------------

* Login as manager (Or if logged in already, click "Manage" in the top menu)
* Click "Score System"
* Click the Red on White "Edit" button
* From the bottom of the edit page add the scores to the list.

 ============ ======= ========
 Score Name   Value   Weight
 ------------ ------- --------
 No Evidence  0       1.0
 Exposed      1       1.0
 Practicing   2       1.0
 Competent    3       1.0
 Expert       4       1.0
 ============ ======= ========

* Once those are added, Set the Minimum Passing Score to Competent and click Apply

