State of the Nation (Outdated)
==============================

schooltool
----------

**What it is:**

SchoolTool trunk is the most up to date, bleeding edge distribution
of schooltool code. SchoolTool nightly eggs get built from it and
include all of the core packages of schooltool (which is most of the
schooltool code that is in trunk). It is tested by buildbot after
every commit.

**Where it is:**

The code:

  svn co http://svn.schooltool.org/schooltool/trunk/schooltool
  svn+ssh://source.schooltool.org/svn/schooltool/trunk/schooltool

Buildbot:

  http://source.schooltool.org/buildbot/

Nightly (more like every checkin'ly) releases:

  http://ftp.schooltool.org/schooltool/releases/nightly/

**Setting up:**

Look at **schooltool-buildout**

**Plans:**

* Split up into separate eggs. schooltool.gradebook going first,
  then if it goes well maybe everything else.

**Overview:**

This is the development trunk, which means that most of the new
features appear in here. It breaks, API backwards compatibility gets
broken sometimes, old databases become unusable, kittens get
eaten. Don't use it unless you want only to try it out. Never use it
in production unless you are sure you can handle broken databases
(and you can't, trust me).


schooltool2007
--------------

**What it is:**

SchoolTool release branch. Release tarball gets packed from it. Debian
packages are made from the code that is in there.

**Where it is:**

http://svn.schooltool.org/schooltool/branches/schooltool-2007/
svn+ssh://source.schooltool.org/svn/schooltool/branches/schooltool-2007/

**Setting up:**

Look at **schooltool-buildout**

**Plans:**

* Only bugfixes get backported to this branch. Some day soon stable
  debian packages will be built using PPA in launchpad.

* As I have switched this branch to KGS, we should start packaging
  stable dependencies instead of various development versions so we'd
  be sure everything will work with an up to date Zope3 release.

* We need to package up a new alpha tarball that would be using KGS to
  make Cando work with KGS.

**Overview:**

A test release. We didn't make it in time for Gutsy. But still, as we
had mostly everything set up, we are releasing the packages, even if
just to test whether an Ubuntu release for schooltool is possible at
all.


schooltool.devtools
-------------------

**What it is:**

As we are moving from schooltool as a single package to schooltool as
a set of eggs, I have started putting some utilities that should help
developing schooltool eggs into a separate package.

**Where it is:**

https://code.launchpad.net/~ignas/schooltool/stdevtools

**Setting up:**

Look at **schooltool-buildout**

**Plans:**

* Get rid of coverage_reports, start using z3c.coverage

* Add a README.txt

* Add some kind of description in setup.py

* Add Paste templates for "schooltool extension" and "school setup"
  projects that would create a nice buildout for you to use thus
  making writing schooltool extensions as easy as::

    easy_install schooltool.devtools

    make-schooltool-plugin plugin

    or

    make-school-setup myschool

**Overview:**

At the moment this package has these scripts:

* runfdoctest - a very very nasty hack, that should in theory allow
  you to run a functional test, and then if it fails "rerun" the
  functional test without reloading all the Zope3 stuff.

* i18nextract - a script that I am using to build "pot" files for
  schooltool and lyceum. As it is outside of schooltool it could be
  used to extract translation templates from any egg.

* coverage_reports - a script that "transforms" ./test --coverage
  output into a set of browsable html files


schooltool.cas
--------------

**What it is:**

CAS authentication plugin for schooltool. CAS is a popular
single-sign-on server.

**Where it is:**

https://code.launchpad.net/~ignas/schooltool-cas/schooltool.cas

**Setting up:** ::

  bzr get http://bazaar.launchpad.net/~ignas/schooltool-cas/schooltool.cas
  cd schooltool.cas
  make
  make test
  make ftest

**Plans:**

* Make it possible to functionally test applications that are using
  CAS for authentication.

* Add unit and functional tests.

**Overview:**

It kind works now, but I'd like to see it actually used to be
confident.


schooltool.ldap
---------------

**What it is:**

LDAP authentication plugin for schooltool.

**Where it is:**

http://svn.schooltool.org/schooltool/trunk/schooltool.ldap/
svn+ssh://source.schooltool.org/svn/schooltool/trunk/schooltool.ldap/

**Setting up:** ::

  svn co svn+ssh://source.schooltool.org/svn/schooltool/branches/schooltool.ldap/
  cd schooltool.ldap
  make
  make test
  make ftest

**Plans:**

* Add bootstrap.py and Makefile so that instructions above would work.

* Make it possible to functionally test applications that are using
  LDAP for authentication.

* Add unit and functional tests.

**Overview:**

Tizard branch is using an old version. Someone needs to upgrade the
version to a new one, and move relevant bits of configuration to the
schooltool.conf in the instance.

lyceum
------

**What it is:**

A "school setup" that is using schooltool but overriding some views
and adding additional functionality specific to Vilnius Lyceum.

**Where it is:**

https://code.launchpad.net/~ignas/schooltool/lyceum

**Setting up:**

Look at **lyceum-buildout**

**Plans:**

* Add more features and customizations to make it as usable for lyceum
  as possible.

* Integrate with schooltool.cas to provide single sign on support.

* Extract some code out of lyceum.journal and make a schooltool
  section attendance tracking package.

**Overview:**

A pilot "school setup" project so it is not perfect, but it works and
is helping me to understand what things schools need from the point of
schooltool custiomization. As it is running on unmodified schooltool
trunk it shows areas of schooltool that need to be pluggable and
allows for testing of different ways to extend a Zope3 application.


lyceum-buildout
---------------

**What it is:**

A buildout sandbox for lyceum developers. It allows me to easily work
on lyceum and schooltool at the same time even though both of them are
in separate repositories.

**Where it is:**

https://code.launchpad.net/~ignas/schooltool/lyceum-buildout

**Setting up:** ::

  bzr get https://code.launchpad.net/~ignas/schooltool/lyceum-buildout
  make
  make test
  make ftest
  make run

**Plans:**

* Package up a tarball or create a separate bzr branch for a user
  sandbox (for people who don't have commit access to schooltool or
  lyceum but still want to try out the bleeding edge version reliably)

**Overview:**

The whole thing works only on Linux. The benefit over a standard
schooltool checkout is that such buildout sandbox is as isolated from
system packages as possible, so there should not be any unexpected
conflicts, because of packages installed on your system. And there
should be no problems, because of missing python packages too.


tizard
------

**What it is:**

A "school setup" package for Ian Benson and Jens Vagelpohl

**Where it is:**

http://svn.schooltool.org/schooltool/trunk/tizard/
svn+ssh://source.schooltool.org/svn/schooltool/trunk/tizard/

**Setting up:** ::

  svn co svn+ssh://source.schooltool.org/svn/schooltool/trunk/tizard/
  cd tizard
  make run

**Plans:**

* Put LDAP customization code into the package instead of having it in
  schooltool.ldap

**Overview:**

As it depends on schooltool.ldap it depends on some python ldap
packages that are quite easy to set up on your average Ubuntu system,
but as we have moved to buildout - I had to "release" these packages
as eggs so most of the breakages are related to these eggs becoming
unavailable.


schooltool.jelkner2007
----------------------

**What it is:**

A "school setup" package for Jeff Elkner.

**Where it is:**

http://svn.schooltool.org/schooltool/trunk/jelkner2007/
svn+ssh://source.schooltool.org/svn/schooltool/trunk/jelkner2007/

**Setting up:**

Look at **jelkner2007-buildout**

**Plans:**

* Make it a buildout sandbox by itself so that developers could manage
  only 1 checkout instead of 2.

**Overview:**

This school setup has gradebook and dashboard enabled by default and
is being worked on by Alan Elkner.


jelkner2007-buildout
--------------------

**What it is:**

A buildout sandbox for jelkner2007 school setup.

**Where it is:**

http://svn.schooltool.org/schooltool/trunk/jelkner2007-buildout/
svn+ssh://source.schooltool.org/svn/schooltool/trunk/jelkner2007-buildout/

**Setting up:** ::

  svn co http://svn.schooltool.org/schooltool/trunk/jelkner2007-buildout/
  cd jelkner2007-buildout
  make run

**Plans:**

* Some time in the future release jelkner2007 egg using buildbot so
  users would not have to deal with version control at all.


schooltool-buildout
-------------------

**What it is:**

A buildout sandbox for schooltool.

**Where it is:**

http://svn.schooltool.org/schooltool/trunk/st-buildout/
svn+ssh://source.schooltool.org/svn/schooltool/trunk/st-buildout

**Setting up:**

  Users:
    Nightly::

      wget http://ftp.schooltool.org/schooltool/buildout/schooltool-buildout.tar.gz
      tar -xvzf schooltool-buildout.tar.gz
      cd schooltool-buildout
      make run

    Release::

      wget http://ftp.schooltool.org/schooltool/buildout/schooltool2007-buildout.tar.gz
      tar -xvzf schooltool2007-buildout.tar.gz
      cd schooltool2007-buildout
      make run

  Developers:
    Trunk::

      svn co http://svn.schooltool.org/schooltool/trunk/st-buildout/
      cd st-buildout
      make run

    Release::

      svn co http://svn.schooltool.org/schooltool/trunk/st-buildout/
      cd st-buildout
      svn co svn+ssh://source.schooltool.org/svn/schooltool/branches/schooltool-2007/ schooltool
      make run

**Plans:**

* Test, test, test and test some more.

**Overview:**

The *right* way of developing schooltool. Everyone should start
switching their development sandboxes to this way of development. No
one should be using schooltool trunk checkout without buildout, there
are just too many problems with conflicting system eggs, you can't
work on schooltool extensions or school setups witohut buildout.

cando
-----

**What it is:**

CanDo is a competency gradebook based on schooltool.

**Where it is:**

Don't know what the definitive place is.

**Setting up:**

Don't know what is the recomended way of setting up CanDo.

**Plans:**

* Switch CanDo to using Zope3.4 KGS. (on hold, we must get a new alpha
  packaged before)

**Overview:**

* At the moment CanDo depends on some packages that are not released
  as eggs thus i haven't been able to start CanDo using an isolated
  buildout. I don't have the time to fix that.

* At the momend CanDo is extending schooltool in an "ugly" way - it
  overrides make-schooltool-instance script and makes the script
  create CanDo instances. I would suggest doing it the way other
  "school setup's" are - adding a school type entry point in setup.py
  and passing instance-type=cando or something like that in the
  makefile to create schooltool that is running with CanDo.
