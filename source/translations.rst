SchoolTool In Languages Other Than English
==========================================

SchoolTool and Zope 3, its underlying framework, were designed from the ground up for full translation and internationalization.  

Selecting SchoolTool's Language
-------------------------------

By default, the language displayed is selected from browser's preferences.  For example, in Firefox go to **Edit > Preferences > Content** to choose preferred languages.

You can force SchoolTool pages to be always displayed in a desired language.

Edit main.conf with your favorite editor::

  $ sudo gedit /etc/schooltool/schooltool-2009/main.conf

And append a line "lang LANG_CODE" at the end, where LANG_CODE is the desired language code.  Several examples::

  lang ru
  lang en_UK
  lang fr

Translating SchoolTool
----------------------

Translations can be contributed, edited, checked, improved, through the web via our `Launchpad page <https://translations.launchpad.net/schooltool>`_.   You may also use the site in conjunction with other translation tools and upload the relevant files to Launchpad.

Translations submitted to Launchpad will be included in subsequent updates of SchoolTool.

If you would like to install a translation that has been entered into Launchpad but not yet included in a SchoolTool release: 

 * Go to the relevant translation download page, for example, the Russian translation at https://translations.launchpad.net/schooltool/development/+pots/schooltool/ru/+export

 * Select a .MO export and download it.

 * The suggested filename for Russian export is **ru_LC_MESSAGES_schooltool.mo**.  

 * Download to your local filesystem::
 
     mv schooltool.mo
     sudo mv /usr/lib/python2.5/site-packages/schooltool/locales/ru/LC_MESSAGES/schooltool.mo

 * Restart the SchoolTool services, your translation should be applied.

Of course, for languages other than Russian, the "ru" above should be replaced with the relevant prefix.

**Note:** SchoolTool 1.0 shipped without compiled translations for most languages.  These will be added in a bugfix release scheduled for April 12, 2009.  If you can't wait that long, you can try these steps to compile the translations yourself::

  $ cd /usr/lib/python2.5/site-packages/schooltool/locales
  $ sudo sh -c 'for f in ./*/LC_MESSAGES/schooltool.po; do msgfmt -o {f%.po}.mo ${f}; echo compiling: ${f}; done'

You should see a long list of templates being compiled::

  compiling: ./af/LC_MESSAGES/schooltool.po
  compiling: ./am/LC_MESSAGES/schooltool.po
  compiling: ./ar/LC_MESSAGES/schooltool.po
  ...
  compiling: ./yi/LC_MESSAGES/schooltool.po
  compiling: ./zh_CN/LC_MESSAGES/schooltool.po

After this you need to restart the SchoolTool service::

  $ cd /
  $ sudo /etc/init.d/schooltool-2009 stop
  $ sudo /etc/init.d/schooltool-2009 start

It is important not to run schooltool-2009 script from **/usr/lib/python2.5/...** directory, as you will get a traceback with DistributionNotFound exception.  Just don't forget **cd /** command.

If your SchoolTool deployment is for some reason using python 2.4, use **/usr/lib/python2.4/...** directory instead.
