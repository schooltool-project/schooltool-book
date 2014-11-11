Customizing SchoolTool CSS
==========================

CSS Overrides
-------------

For sites that wish to change the default appearance of the SchoolTool
administrative interface, it is possible to override SchoolTool's Cascading
Style Sheets with your own customized styles. In the past, this could only be
accomplished by modifying SchoolTool core files, which was undesirable because
changes would be lost during upgrades. As of SchoolTool 2.8.2, there is now a
custom-css directory for your custom styles and images, located at::

    /etc/schooltool/standard/custom-css/

Because the custom-css directory is located in /etc (along with configuration
files), any custom styles and images stored here will remain persistent across
upgrades.
