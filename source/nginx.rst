.. _nginx:
.. highlight:: nginx

Nginx configuration
===================

Virtual hosting
---------------

To provide web access to schooltool using the Nginx web server as a proxy, add this to
``nginx.conf``::

    http {
      upstream school1 {
        server 127.0.0.1:7080;
      }
      server {
        listen       80;
        server_name  school1.example.org;
        location / {
          proxy_pass http://school1/++vh++http:school1.example.org:80/++;
        }
      }
    }

Read more at http://grok.zope.org/documentation/how-to/grok-virtual-hosting-and-nginx
