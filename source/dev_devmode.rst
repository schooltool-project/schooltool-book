Devmode for Developers
======================

SchoolTool's developer mode, or "devmode" turns on several features handy to developers, but which should not be used in production instances, including sample data generation, object introspection, web view of the error log, and auto-generated API documentation.

To enable devmode, edit ``schooltool.stapp2008spring/instance/schooltool.conf`` in your sandbox (you may have to do ``make build`` first to generate the ``instance`` directory) and uncomment the line that says::

  #devmode on

When you start or restart the server, the top area of each page should be yellow (rather than gray), indicating the server is in devmode.

To switch back, just comment out the same line in ``schooltool.conf``.

