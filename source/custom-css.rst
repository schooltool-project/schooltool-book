Customizing SchoolTool CSS
==========================

CSS Overrides
-------------

For sites that wish to change the default appearance of the SchoolTool
administrative interface, it is possible to override SchoolTool's Cascading
Style Sheets with your own customized styles.

In the past, this could only be accomplished by modifying SchoolTool core files,
which was undesirable because changes would be lost during upgrades.

The ``custom-css`` Directory
````````````````````````````

As of SchoolTool 2.8.2, there is now a custom-css directory for your custom
styles and images, located at::

    /etc/schooltool/standard/custom-css/

Because the ``custom-css`` directory is located in ``/etc/schooltool/`` (along
with configuration files), any custom styles and images stored here will remain
persistent across upgrades.

The ``custom.css`` File
```````````````````````

By default, the ``custom-css`` directory will contain one file::

   /etc/schooltool/standard/custom-css/custom.css

Add your CSS rules here, by logging on to the server via ssh and editing the
file using your favorite text editor.

Adding Resources
````````````````

Because the entire ``custom-css`` directory gets registered as a resource
library, any file added to this directory may be accessed in your custom CSS.

For example, if you upload ``image.png`` to the ``custom-css`` directory by
using rsync or another secure file transfer utility, you can access that
resource at ``/@@/schooltool.flourish.custom/image.png``.

However, we recommend using relative URLs in your CSS, for clear and concise
code. In this way, using ``url(image.png)`` will automatically resolve to
``/@@/schooltool.flourish.custom/image.png``.


Requirements
````````````

Overriding SchoolTool's default styles and images with your own customizations
will require administrative access to the server. It will also require
knowledge of HTML and CSS, but no Python programming experience is necessary.

Examples
--------

Changing Colors
```````````````

Replacing SchoolTool Logo (image)
`````````````````````````````````

Replacing SchoolTool Logo (text)
````````````````````````````````
