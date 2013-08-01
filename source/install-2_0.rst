.. _install-2_0:

Installing SchoolTool
=====================

SchoolTool in Ubuntu
--------------------

We release a new version of SchoolTool to the "Universe" repository of each new Ubuntu version.  Check the :ref:`release-notes` to see which version of SchoolTool is provided with current and past versions of Ubuntu.

To install one of these "Universe" versions, simply search for "SchoolTool" in the Ubuntu Software Center and click **Install** next to the SchoolTool entry.

Or enter at the command line::

 $ sudo apt-get install schooltool

After installation, the schooltool server can be accessed from the server at http://localhost:7080.  See :ref:`remote`.

.. _ppa:

SchoolTool PPA
--------------

Newer releases and development releases of SchoolTool are available through separate package repositories on Launchpad.  Which SchoolTool versions are available for which Ubuntu releases through our "ppa" and "dev" repositories is described in a table at :ref:`release-notes`.

To switch to one of these releases, open the **Ubuntu Software Center**.  Choose
**Edit > Software Sources**.  Click **Other Software > Add**, enter as the **APT line**::

    ppa:schooltool-owners/ppa

or::

    ppa:schooltool-owners/dev

And click **Add Source**.

    .. image:: images/usc-precise.png

Then search for "SchoolTool" in the searchbox at upper right in the Software Center and click **Install** next to the SchoolTool entry.

    .. image:: images/usc-schooltool.png

Or, using the command line::

    $ sudo add-apt-repository ppa:schooltool-owners/ppa

or::

    $ sudo add-apt-repository ppa:schooltool-owners/dev

If you get an "add-apt-repository not found" error, install it::

    $ sudo apt-get install software-properties-common

Then::

    $ sudo apt-get update

Install the ``schooltool`` package::

    $ sudo apt-get install schooltool

After installation, the schooltool server will be started at
http://localhost:7080. See :ref:`remote`.

Upgrading SchoolTool
--------------------

To upgrade SchoolTool, you can switch to a repository containing a newer SchoolTool in your current version of Ubuntu, as described above.

Or you can upgrade to a new version of Ubuntu with a new SchoolTool version.  See `Upgrade instructions for Ubuntu <https://help.ubuntu.com/10.04/serverguide/C/installing-upgrading.html>`_
for more info on upgrading your system (and thus SchoolTool).
