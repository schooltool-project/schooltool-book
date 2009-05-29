Setting up a development sandbox
================================

Set your buildout eggs and cache directories
--------------------------------------------

Create ~/.buildout/default.cfg and add::

  [buildout]
  eggs-directory = /home/*your-user*/.buildout/eggs
  download-cache = /home/*your-user*/.buildout/cache

Buildout does not understand the unix ~ notation, so use the full
path.

Create the cache directory::

  ~$ mkdir ~/.buildout/cache

Checkout all the code you will be working on
--------------------------------------------

If possible get the newest version of bzr, at least 1.5rc1 is recommended.

(http://bazaar-vcs.org/DistroDownloads)

Create the bzr shared repository::

  ~$ mkdir schooltool_sandbox
  ~$ bzr init-repo schooltool_sandbox

(http://bazaar-vcs.org/SharedRepositoryTutorial)

Checkout branches::

  ~$ cd schooltool_sandbox
  ~/schooltool_sandbox$ bzr branch lp:~schooltool-owners/schooltool/schooltool.stapp2008fall/
  ~/schooltool_sandbox$ bzr branch lp:~schooltool-owners/schooltool/schooltool.gradebook/
  ~/schooltool_sandbox$ bzr branch lp:~schooltool-owners/schooltool/schooltool/
  ~/schooltool_sandbox$ bzr branch lp:~schooltool-owners/schooltool/schooltool.lyceum.journal/

This will take long, very long actually.

Set up buildout
~~~~~~~~~~~~~~~

Edit ``buildout.cfg`` in schooltool.stapp2008fall:

Change::

 "develop = ." to
 "develop = . ../schooltool ../schooltool.lyceum.journal ../schooltool.gradebook"

Add::

  [test-all]
  recipe = zc.recipe.testrunner
  eggs = schooltool.stapp2008fall
      schooltool
      schooltool.gradebook
      schooltool.lyceum.journal
  defaults = ['--exit-with-status', '--tests-pattern', '^f?tests$', '-v']

Change::

 "parts = schooltool.stapp2008fall scripts test tags" to
 "parts = schooltool.stapp2008fall scripts test tags test-all"

Run buildout::

  ~/schooltool_sandbox$ cd schooltool.stapp2008fall
  ~/schooltool_sandbox/schooltool.stapp2008fall$ sudo make ubuntu-environment
  ~/schooltool_sandbox/schooltool.stapp2008fall$ make build


Work on new features
--------------------

Commit using ``bzr ci`` diff using ``bzr diff`` update your branch using ``bzr pull``

Publish your changes
--------------------

(assuming you worked on schooltool.gradebook and your launchpad
username is ignas)

(parts you are expected to change depending on who you are or what you
are workin on are underlined)

If you have time (it takes 20-30 minutes)::

  ~/schooltool_sandbox/schooltool.gradebook$ bzr push lp:~ignas/schooltool/schooltool.gradebook_super_ajax
                                                          -----            -------------------------------

If you have ssh access to schooltool bzr repository::

  ~/schooltool_sandbox/schooltool.gradebook$ bzr push --create-prefix bzr+ssh://schooltool.org/ignas/schooltool.gradebook/schooltool.gradebook_super_ajax
                                                                                               ----------------------------------------------------------

(aelkner, jinty and ignas has the access at the moment, I can give it
to people that have svn+ssh access to schooltool svn repository)

Your changes will be published in::

  http://staging.schooltool.org/bzr2/schooltool/ignas/schooltool.gradebook/schooltool.gradebook_super_ajax


If you don't have any of these::

  ~/schooltool_sandbox/schooltool.gradebook$ bzr send --mail-to ignas@pov.lt

Replace the email with the email of someone who has commit access or
someone you want to make your changes available to.

Special cases
-------------

SLA and jelkner2007
~~~~~~~~~~~~~~~~~~~

As jelkner and sla branches are only being worked on by Alan and are
not in ubuntu commiting directly to trunk is allowed. To make a
checkout that is bound to trunk do::

  ~/schooltool_sandbox$ bzr co bzr+ssh://schooltool.org/sla/trunk/ sla
  ~/schooltool_sandbox$ bzr co bzr+ssh://schooltool.org/jelkner2007/trunk/ jelkner2007

As these are chekouts not branches, when you will do "bzr ci" changes
will go to trunk directly.

Deployment
~~~~~~~~~~

When deploying you might want to have only 1 single product like sla
or jelkner2007 instead of the whole sandbox with trunks of 4 projects
checked out. So you can use::

  ~$ bzr co --lightweight http://staging.schooltool.org/bzr2/schooltool/sla/trunk sla

If you want to use something you have published before it get's merged
to trunk just use the url of the branch you have published, like::

  ~$ bzr co --lightweight http://staging.schooltool.org/bzr2/schooltool/ignas/schooltool.gradebook/schooltool.gradebook_super_ajax

I do not recommend using lightweight checkouts when developing, you
will save some time upfront but will lose more time when doing "bzr
diff" and "bzr st"

Deploying more than 1 feature
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

If you have worked on multiple bugfixes and multiple new features, and
Ignas had no time to merge them to trunk, but you still want to deploy
all of that code without causing Ignas additional trouble:

First create a branch for deployment::

  ~/schooltool_sandbox$ bzr branch lp:~schooltool-owners/schooltool/schooltool.gradebook/ schooltool.gradebook_sla

Publish it::

  ~/schooltool_sandbox$ cd schooltool.gradebook_sla
  ~/schooltool_sandbox/schooltool.gradebook_sla$ bzr push --create-prefix bzr+ssh://schooltool.org/aelkner/schooltool.gradebook/schooltool.gradebook_sla/

Make commits go directly to that branch (so you would not need to bzr push after every merge)::

  ~/schooltool_sandbox/schooltool.gradebook_sla$ bzr bind bzr+ssh://schooltool.org/aelkner/schooltool.gradebook/schooltool.gradebook_sla/

When doing a new feature or fixing a new bug create a branch for it::

  ~/schooltool_sandbox$ bzr branch schooltool.gradebook_sla schooltool.gradebook_fix_broken_grades

Work on the feature/fix in that branch. When done - publish it::

  ~/schooltool_sandbox/schooltool.gradebook_fix_broken_grades$ bzr push --create-prefix bzr+ssh://schooltool.org/aelkner/schooltool.gradebook/schooltool.gradebook_fix_broken_grades/

Bind that branch, so that all your changes would get published as soon
as you commit them::

  ~/schooltool_sandbox/schooltool.gradebook_fix_broken_grades$ bzr bind bzr+ssh://schooltool.org/aelkner/schooltool.gradebook/schooltool.gradebook_fix_broken_grades/

and merge the feature branch to your deployment branch::

  ~/schooltool_sandbox/schooltool.gradebook_sla$ bzr merge ../schooltool.gradebook_fix_broken_grades
  ~/schooltool_sandbox/schooltool.gradebook_sla$ bzr ci

Repeat the process for every new feature or new bugfix. You can merge
from the bugfix branch more than once, so if fixing the bug takes you
a week or two and you want to deploy intermediate results - work on
that feature in the feature branch, bzr merge it to the deployment
branch when you want to deploy it.

Why oh why must it be so confusing and difficult?
-------------------------------------------------

Having every feature and every bugfix in a separate branch allows
reviewing checkins easier, because every branch has only 1 goal. If a
bugfix is not complete - you can continue working on it in that same
branch so all the related changes are in the same place and not 20
unrelated checkins apart.

Having every feature and every bugfix in separate branches allows
clean and safe backporting of these features to the release branches,
when I merge your bug-fix from the branch, I will never miss a checkin
and merging something that does not belong in the release will be a
lot more difficult than it was with svn.

Commands like ``bzr send`` will allow people without commit access send
structured patches and make making cosmetic fixes without me
integrating incomplete feature to trunk actually doable.

Using only 1 version control system allows us to have unified
packaging+testing infrastructure that is treating all the packages the
same without any special cases thus adding additional repositories to
buildbot or releasing additional Ubuntu packages requires addition of
a single line in a configuration file.
