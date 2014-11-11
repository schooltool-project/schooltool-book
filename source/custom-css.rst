Customizing SchoolTool CSS
==========================

CSS Overrides
-------------

For sites that wish to change the default appearance of the SchoolTool
administrative interface, it is possible to override SchoolTool's Cascading
Style Sheets with your own customized styles.

In the past, this could only be accomplished by modifying SchoolTool core files,
which was undesirable because changes would be lost during upgrades.

The custom-css Directory
````````````````````````

As of SchoolTool 2.8.2, there is now a custom-css directory for your custom
styles and images, located at::

    /etc/schooltool/standard/custom-css/

Because the ``custom-css`` directory is located in ``/etc/schooltool/`` (along
with configuration files), any custom styles and images stored here will remain
persistent across upgrades.

Overriding SchoolTool's default styles and images with your own customizations
will require administrative access to the server. It will also require
knowledge of HTML and CSS, but no Python programming experience is necessary.

The custom.css File
```````````````````

By default, the ``custom-css`` directory will contain one file::

   /etc/schooltool/standard/custom-css/custom.css

Add your CSS rules here, by logging on to the server via ssh and editing the
file using your favorite text editor.

Examples
--------

Changing Colors
```````````````
