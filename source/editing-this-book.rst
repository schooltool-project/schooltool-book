.. _translate-book:

Editing or Translating This Book
================================

Rationale
---------

We have given a lot of thought to setting up this documentation in a way that will make it easy to maintain translations, allow modification for specific sites, and a clear process for submitting changes to the official version.

A wiki would be the obvious way to make editing easy, but for managing multiple versions, languages and formats over a long period of time, maintaining text files in version control gives us more control and flexibility than a set of wikis stuffing text in databases.  Using files in revision control facilitates including scripts to automatically reproduce the steps in demonstrations in the documentation, like `Selenium <http://seleniumhq.org/>`_ scripts.  Also, it fits in nicely with the rest of our project management systems and code documentation practices.

Even if this system sounds intimidating, please give it a chance.  After you get through the initial setup, the actual editing is very wiki-like.  If you decide you can't deal with the revision control part, go ahead and just email `Tom Hoffman <mailto:hoffman@schooltool.org>`_ with changes, and I'll try to handle your contributions from there.  Simple changes can simply be `filed as bugs on SchoolTool <https://bugs.edge.launchpad.net/schooltool>`_.

Getting the Sources
-------------------

For non-programmers, the weird part will be using the `Bazaar version control system <http://bazaar-vcs.org/>`_ (aka bzr).   

To install bzr on Ubuntu do::

    sudo apt-get install bzr

For all other platforms see `Bazaar downloads <http://bazaar-vcs.org/Download>`_.  The rest of the instructions will assume you're using Ubuntu, other platforms should be similar.  Of course, if you'd like to add instructions for other platforms to this document, just follow these editing process described herein.

Then, to fetch the source::

    bzr branch lp:~schooltool-owners/schooltool/st-book

This will create a directory called **st-book**, which contains a **source** directory with all the marked up text files and images which make up the book, a **selenium** directory which contains a test suite which will reproduce the tutorials in the book, and a Makefile and associated files which automate the process of turning the sources into a publishable document.

Building an HTML Version
------------------------

The set of scripts which turn the sources into a finished product is called `Sphinx <http://sphinx.pocoo.org/>`_.

You'll need some basic software development tools, if you don't have them already::

  sudo apt-get build-essential python-dev

Within the **st-book** directory, do::

  make html

This will first make a sandbox containing the Python packages needed for the process, create a **build/html** directory, and put finished web pages in it. 

**Note:** **make html** is acutally failing on my Jaunty box, but you need to run it once to get the right packages and afterward you can build the html with::

  sphinx-build source/ build/html/

That is working for me as of May 2009.

If you open **build/html/index.html** from your browser, you'll be able to read the book in web form.  You can publish this directory to the web like any other set of HTML pages.

Building a PDF Version
----------------------

The PDF output from this process is usable.  Because there are a lot of large screengrab images in the book, and we can't or don't know how to control the page breaks, the layout isn't that great.  Hopefully we'll be able to improve that in the future.

Also, as of May 2009 there is a unicode bug that bombs out near the end of the book, but most of it makes it into the pdf.

Grab the TeX libraries::

  sudo apt-get install texlive-full

First, from the **st-book** directory do::

  make latex

Then::

  cd build/latex
  make all-pdf

This should create a schooltool-book.pdf file in the **build/latex** directory.

For a more complete explanation of the above, see `Sphinx PDF Generation with LaTeX <http://jimmyg.org/blog/2009/sphinx-pdf-generation-with-latex.html>`_.
