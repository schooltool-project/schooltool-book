.. _install-2_0:

Installing SchoolTool
=====================

SchoolTool 2.1
--------------

SchoolTool 2.1 is available in the Ubuntu Universe repository for Ubuntu 12.04 (Precise) and 12.10 (Quantal).

Simply search for "SchoolTool" in the Ubuntu Software Center and click **Install** next to the SchoolTool entry.

Or enter at the command line::

 $ sudo apt-get install schooltool

After installation, the schooltool server can be accessed from the server at http://localhost:7080.  See :ref:`remote`.

SchoolTool 2.3
--------------

SchoolTool 2.3 is available for Ubuntu 12.04 (Precise) and 12.10 (Quantal) through the `SchoolTool repository on Launchpad <https://launchpad.net/~schooltool-owners/+archive/ppa>`_.

Open the **Ubuntu Software Center**.  Choose **Edit > Software Sources...**  Click **Other Software > Add...**, enter as the **APT line**:

for Ubuntu 12.04::  

 ppa:schooltool-owners/dev

for Ubuntu 12.10:: 

 ppa:schooltool-owners/ppa

And click **Add Source**.

   .. image:: images/usc-precise.png

Then search for "SchoolTool" in the searchbox at upper right in the Software Center and click **Install** next to the SchoolTool entry.

   .. image:: images/usc-schooltool.png

Or, using the command line:

for Ubuntu 12.04::

 $ sudo add-apt-repository ppa:schooltool-owners/dev
 $ sudo apt-get update

for Ubuntu 12.10:: 

 $ sudo add-apt-repository ppa:schooltool-owners/ppa
 $ sudo apt-get update

Then install the ``schooltool`` package::

 $ sudo apt-get install schooltool

After installation, the schooltool server will be started at
http://localhost:7080. See :ref:`remote`.
