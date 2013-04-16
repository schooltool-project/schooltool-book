Devmode for Developers
======================

SchoolTool's developer mode, or "devmode," turns on several features handy to developers, but which should not be used in production instances. These dev-friendly features include sample data generation, and web view of the error log.

To enable devmode, edit ``instance/schooltool.conf`` in your sandbox (you may have to do ``make instance`` first to generate the ``instance`` directory) and uncomment the line that says::

  #devmode on

To switch back, just comment out the same line in ``schooltool.conf``.

