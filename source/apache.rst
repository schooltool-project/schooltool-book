.. _apache:

Apache configuration
====================

Virtual hosting
---------------

SchoolTool provides support for virtual hosting with Apache's mod_rewrite_. The
standard instance is running on port 7080.  You want to make it available on
``school1.example.org`` port 80.  Add a new site to your Apache configuration::

  $ sudo vim /etc/apache/sites-available/school1.example.org

  <VirtualHost *:80>
    ServerName school1.example.org
    RewriteEngine On
    RewriteRule ^/(.*) http://localhost:7080/++vh++http:school1.example.org:80/++/$1 [P]
  </VirtualHost>

You need to enable Apache modules ``mod_proxy`` and ``mod_rewrite``::

  $ sudo a2enmod proxy_http rewrite

Then enable the site and restart apache::

  $ sudo a2ensite school1.example.org
  $ sudo apache2ctl graceful

Instead of a virtual host, or in addition to, you may want a custom path for
schooltool, e.g. ``example.org/schooltool``. Place it between the ``++`` in the
URL::

    RewriteRule ^/schooltool/(.*) http://127.0.0.1:7080/++vh++http:localhost:80/schooltool/++/$1 [P]

For more information, see `Virtual Hosting`_ in Zope 3.

.. _mod_rewrite: http://httpd.apache.org/docs/current/mod/mod_rewrite.html
.. _Virtual Hosting: http://wiki.zope.org/zope3/virtualhosting.html


HTTPS
-----

It is recommmended to use HTTPS/SSL to best protect your users. The
configuration is similar, just use port 443 and https instead of http::

  <VirtualHost *:443>
    ServerName school1.example.org

    SSLEngine On
    SSLCertificateFile /etc/ssl/certs/ssl-cert-snakeoil.pem
    SSLCertificateKeyFile /etc/ssl/private/ssl-cert-snakeoil.pem

    RewriteEngine On
    RewriteRule ^/(.*) http://localhost:7080/++vh++https:school1.example.org:443/++/$1 [P]
  </VirtualHost>

For SSL to work, you need a SSL certificate. Read Ubuntu documentation on
OpenSSL_ about creating one.

When you get this working, you may want to redirect users that connect through
regular HTTP to the secure site.  Remove the ``RewriteRule`` for port 80 and
replace it with a ``Redirect``::

  <VirtualHost *:80>
    ServerName school1.example.org
    Redirect / https://school1.example.org/
  </VirtualHost>

.. _OpenSSL: https://help.ubuntu.com/community/OpenSSL#SSL_Certificates

