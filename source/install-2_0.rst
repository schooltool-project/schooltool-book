Installing SchoolTool 2.0 on Ubuntu 11.04 or 11.10
==================================================

You need to be running Ubuntu 11.10 (oneiric) or 11.04 (natty).
Packages for earlier releases (maverick and lucid) will be built soon.

Using Ubuntu Software Center
----------------------------

Open the **Ubuntu Software Center**.  Choose **Edit > Software Sources...**  Click **Add...**, enter as the **APT line**::

 ppa:schooltool-owners/dev

And click **Add Source**.

   .. image:: images/inst2-0.png


Then search for "SchoolTool" in the searchbox at upper right in the Software Center and click **Install** next to the SchoolTool entry.

Using the Command Line
----------------------

You have to add `SchoolTool flourish PPA
<https://launchpad.net/~schooltool-owners/+archive/dev/>`_
to your software sources::

 $ sudo add-apt-repository ppa:schooltool-owners/dev
 $ sudo apt-get update

Then install ``schooltool`` package::

 $ sudo apt-get install schooltool

After installation, the schooltool server will be started at
http://localhost:7080 .


