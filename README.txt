The SchoolTool Book
===================

This is the source tree for the SchoolTool documentation.  The docs are 
written in ReStructured Text, which is the standard markup for Python 
documentation, and managed using Sphinx, which handles turning the markup 
into HTML, PDF, etc.

To download this source, you'll need the bzr version control system.  On 
Ubuntu, you need to do::

    sudo apt-get install bzr

Then, to fetch the source::

    bzr branch lp:~schooltool-owners/schooltool/users-guide

To grab the rest of the Python dependencies and put them in a nice sandbox 
away from your system Python, ``cd`` into the ``users-guide/`` directory 
and do::

    make html

The files will appear under ``build/html/``.

That should be enough to get you started.


