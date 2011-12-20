.. _apache:

Apache configuration
====================

Virtual hosting
---------------

SchoolTool provides support for virtual hosting with Apache's mod_rewrite_.
For example, let's say you have two SchoolTool instances running on ports
7080 and 7081, and you want to make them available as school1.example.org
and school2.example.org, both on port 80.  In order to do that, add the
following to your Apache configuration file::

  NameVirtualHost *:80

  <VirtualHost *:80>
    ServerName school1.example.org
    RewriteEngine On
    RewriteRule ^/(.*) http://localhost:7080/++vh++http:school1.example.org:80/++/$1 [P]
  </VirtualHost>

  <VirtualHost *:80>
    ServerName school2.example.org
    RewriteEngine On
    RewriteRule ^/(.*) http://localhost:7081/++vh++http:school2.example.org:80/++/$1 [P]
  </VirtualHost>

Also, enable ``mod_proxy`` and ``mod_rewrite``. On Ubuntu::

  $ sudo a2enmod proxy_http rewrite

You can get SSL support in the same way::

  NameVirtualHost *:443

  <VirtualHost *:443>
    ServerName school1.example.org
    # SSLEnable        # Apache 1.3
    SSLEngine On       # Apache 2.0
    RewriteEngine On
    RewriteRule ^/(.*) http://localhost:7080/++vh++https:school1.example.org:443/++/$1 [P]
  </VirtualHost>

.. _mod_rewrite: http://httpd.apache.org/docs/current/mod/mod_rewrite.html
