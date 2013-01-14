.. _translate-app:

SchoolTool In Languages Other Than English
==========================================

SchoolTool and Zope 3, its underlying framework, were designed from the ground up for full translation and internationalization.  

Selecting SchoolTool's Language
-------------------------------

By default, the language displayed is selected from browser's preferences.  For example, in Firefox go to **Edit > Preferences > Content** to choose preferred languages.

You can force SchoolTool pages to be always displayed in a desired language.

Edit schooltool.conf with your favorite editor::

  # Ubuntu Natty or later
  $ sudo gedit /etc/schooltool/standard/schooltool.conf

And append a line "lang LANG_CODE" at the end, where LANG_CODE is the desired language code.  Several examples::

  lang ru
  lang en-gb
  lang es-sv

You can specify more than one locale, separated by commas.  Then a language
selector will appear in the top bar, allowing the user to switch the
language::

  lang en-ca,fr


Translating SchoolTool
----------------------

Translations can be contributed, edited, checked, improved, through the web via our `Launchpad project page <https://translations.launchpad.net/schooltool-project>`_.  The templates are split between "core" SchoolTool and various components such as the gradebook, but all are accessible via the "SchoolTool Project" page.   You may also use the site in conjunction with other translation tools and upload the relevant files to Launchpad.

Translations submitted to Launchpad will be included in subsequent updates of SchoolTool.

If you would like to install a translation that has been entered into Launchpad but not yet included in a SchoolTool release: 

 * Go to the relevant translation download page, for example, the Russian translation at https://translations.launchpad.net/schooltool/flourish/+pots/schooltool/ru/+export

 * Select "MO export" and request download.

 * You will get an email in a few minutes. Save the file to disk.

 * Replace current translations with the exported file::
 
     sudo mv ru_LC_MESSAGES_schooltool.mo /usr/share/pyshared/schooltool/locales/ru/LC_MESSAGES/schooltool.mo

 * Restart the SchoolTool service. Your translation should be applied.

Of course, for languages other than Russian, the "ru" above should be replaced with the relevant prefix.
