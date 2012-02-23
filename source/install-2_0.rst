Installing SchoolTool 2.0
=========================

`SchoolTool 2.0 <2.0-release-notes.html>`_ is available in upcoming Ubuntu 12.04 LTS, to be released in
April, see :ref:`install-ubuntu`.

On older Ubuntu releases (10.04 LTS through 11.10) you can install it from the
`SchoolTool flourish PPA <https://launchpad.net/~schooltool-owners/+archive/dev/>`_,
using instructions below.

NOTE: For 10.04 and 10.10 you also need the main `SchoolTool PPA
<install-pre-natty.html>`_. But do not install ``schooltool-2009`` or
``msttcorefonts`` packages unless you have them already.

Using Ubuntu Software Center
----------------------------

Open the **Ubuntu Software Center**.  Choose **Edit > Software Sources...**  Click **Other Software > Add...**, enter as the **APT line**::

 ppa:schooltool-owners/dev

And click **Add Source**.

   .. image:: images/inst2-0.png

Then search for "SchoolTool" in the searchbox at upper right in the Software Center and click **Install** next to the SchoolTool entry.

Using the Command Line
----------------------

Add the PPA::

 $ sudo add-apt-repository ppa:schooltool-owners/dev
 $ sudo apt-get update

Then install the ``schooltool`` package::

 $ sudo apt-get install schooltool

After installation, the schooltool server will be started at
http://localhost:7080 .
