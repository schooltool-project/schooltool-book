.. _apache:

Apache configuration
====================

Virtual hosting
---------------

SchoolTool provides support for virtual hosting with Apache's mod_proxy_. The
standard instance is running on port 7080.  You want to make it available on
``school1.example.org`` port 80.  Add the following to your Apache configuration,
best place it in a separate file ``/etc/apache/sites-available/school1.example.org``::

  <VirtualHost *:80>
    ServerName school1.example.org

    <Proxy *>
        order allow,deny
        allow from all
        deny from none
    </Proxy>

    ProxyPass / http://127.0.0.1:7080/++vh++http:school1.example.org:80/++/

  </VirtualHost>

You need to enable Apache modules ``mod_proxy`` and ``mod_proxy_http``::

  $ sudo a2enmod proxy_http

Then enable the site and restart apache::

  $ sudo a2ensite school1.example.org
  $ sudo service apache reload

If you cannot, or don't want to, setup a subdomain for schooltool, you can make
it available at a custom path on another site, e.g. ``example.org/schooltool``.
Place the path before the last ``++`` in the URL, and put it somewhere in
the configuration of that site::

    ProxyPass /schooltool http://127.0.0.1:7080/++vh++http:example.org:80/schooltool/++/

For more information, see `Virtual Hosting`_ in Zope 3.

.. _mod_proxy: http://httpd.apache.org/docs/current/mod/mod_proxy.html
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

    <Proxy *>
            order allow,deny
            allow from all
            deny from none
    </Proxy>

    ProxyPass / http://localhost:7080/++vh++https:school1.example.org:443/++/

  </VirtualHost>

For SSL to work, you need a SSL certificate. Read Ubuntu documentation on
OpenSSL_ about creating one.

.. _OpenSSL: https://help.ubuntu.com/community/OpenSSL#SSL_Certificates

The ``mod_ssl`` module has to be enabled.

  $ sudo a2enmod ssl

When you get this working, you may want to redirect users that connect through
regular HTTP to the secure site.  Remove the ``ProxyPass`` for port 80 and
replace it with a ``Redirect``::

  <VirtualHost *:80>
    ServerName school1.example.org
    Redirect / https://school1.example.org/
  </VirtualHost>


Example
-------

Download `example configuration file <_static/school1-apache.conf>`_ with all of the
above and more.
