.. _install-2_0:

Installing SchoolTool
=====================

SchoolTool in Ubuntu
--------------------

SchoolTool 2.1 is available in the Ubuntu Universe repository for Ubuntu 12.04 (Precise) and 12.10 (Quantal).

Simply search for "SchoolTool" in the Ubuntu Software Center and click **Install** next to the SchoolTool entry.

Or enter at the command line::

 $ sudo apt-get install schooltool

After installation, the schooltool server can be accessed from the server at http://localhost:7080.  See :ref:`remote`.

.. _ppa:

SchoolTool PPA
--------------

Updates for supported Ubuntu releases, and the latest SchoolTool 2.3_ release for Ubuntu 12.10 (Quantal) are distributed through the `SchoolTool PPA <https://launchpad.net/~schooltool-owners/+archive/ppa>`_.

Open the **Ubuntu Software Center**.  Choose **Edit > Software Sources...**  Click **Other Software > Add...**, enter as the **APT line**::

 ppa:schooltool-owners/ppa

And click **Add Source**.

   .. image:: images/usc-precise.png

Then search for "SchoolTool" in the searchbox at upper right in the Software Center and click **Install** next to the SchoolTool entry.

   .. image:: images/usc-schooltool.png

Or, using the command line::

 $ sudo add-apt-repository ppa:schooltool-owners/ppa
 $ sudo apt-get update

Then install the ``schooltool`` package::

 $ sudo apt-get install schooltool

After installation, the schooltool server will be started at
http://localhost:7080. See :ref:`remote`.

.. _2.3: 2.3-release-notes.html
