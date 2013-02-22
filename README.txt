The SchoolTool Book
===================

This is the source for the SchoolTool documentation.  The book is written in
reStructured Text, which is the standard markup for Python documentation, and
managed using Sphinx (http://sphinx.pocoo.org/), which handles turning the
markup into HTML, PDF, etc.

To download this source, you'll need the bzr version control system.  On 
Ubuntu, you need to do::

    sudo apt-get install bzr

Then, to fetch the source::

    bzr branch lp:schooltool-book

To grab the rest of the Python dependencies and put them in a nice sandbox away
from your system Python, ``cd`` into the ``schooltool-book`` directory and do::

    make html

The files will appear under ``build/html/``.

That should be enough to get you started.

This project is licensed under the CC-BY-3.0, the full text of which can be
found in COPYING.
