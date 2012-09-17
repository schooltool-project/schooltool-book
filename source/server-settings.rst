Server Settings
===============

Server Information
------------------

When logged in as a site manager, school administrator or clerk, you should see a "Server" tab in the top bar.  This takes you to a variety of settings and information relevant to the server itself, as opposed to your school.

   .. image:: images/server-settings-0.png

In the main content area, the Server Information section provides some technical details you may need for debugging, the **Server Information** link takes you to a more verbose version of this data.

Outgoing Email
--------------

SchoolTool can send emails through your school email server or another SMTP server.  That is, SchoolTool is not an email server, it sends mail as an email *client*, like a desktop application such as Evolution or Outlook.

To enable SchoolTool to send emails, you will need the instructions from your school's server, your ISP, or your webmail provider to configure a mail client to send mail via the provider's SMTP service.

You can also install and use a free mail server using the Ubuntu package manager, such as ``postfix`` or ``sendmail``.  Instructions for doing so are outside the scope of this document.  Running a mail server requires a knowledgeable systems administrator.

As an example of an external email service, here's the relevant data for enabling GMail:

    .. image:: images/email-gmail.png


To send email through an external mail service, from the **Server** page, click on the **Outgoing Email** link:

   .. image:: images/server-settings-1.png

To edit the settings, click the yellow pencil icon next to **Server status: Disabled** and enter the appropriate data for your server.  Note that the the username and password in question in this form are the username and password of a user *on the mail server*, not on SchoolTool.

**Note:** Outgoing emails from SchoolTool will use this email address, not the email address of a specific user within SchoolTool; e.g., in the example below, all notifications coming from SchoolTool will appear to be from schooltool.mgr@gmail.com.

A TLS connection is a type of secure connection between SchoolTool and the mail server.

As the label suggests, the outgoing email service won't do anything until you select  the **Enable** button and hit **Apply**.  Do the opposite to turn it off.

   .. image:: images/server-settings-2.png

Hit **Apply** when you're done.

To see if it is working, click **Send Test Email** under **Actions** in the sidebar and enter some relevant data, including one of your email addresses as recipient so you can make sure the message arrives safely:

   .. image:: images/server-settings-3.png

After you hit **Send**, you'll find yourself on the **Email Queue** page, and hopefully it is telling you that the queue is clear (not that your message is stuck):

   .. image:: images/server-settings-4.png

Check your mail, and you should see the message:

    .. image:: images/email-gmail-2.png

Calendar
--------

SchoolTool is designed to be usable in many different countries, and different parts of the world handle calendars and dates differently, so you may have to change some settings here to suit your local needs.  Click on the **Calendar** link to do so.

   .. image:: images/server-settings-5.png

SchoolTool's calendar uses a more or less European configuration by default.  I've changed it above to suit my American tastes.

Hit **Apply** to save your new settings.

LDAP Single Sign On
-------------------

LDAP integration allows users to sign into SchoolTool with their
existing LDAP accounts.

To enable LDAP support you will need to install schooltool.ldap
package (via command line or **Ubuntu Software Center**).  Once
installed, it will appear in the Server page.

   .. image:: images/ldap-config-1.png

Users will not be automatically "pulled" from LDAP server.
Instead, they will be created (if missing) when they log in for
the first time.  Here, student001 just logged in on a fresh
SchoolTool installation with LDAP support:

   .. image:: images/ldap-newperson-1.png

SchoolTool will pull some of the user's contact information and update it
each time user logs in.

   .. image:: images/ldap-newperson-2.png

   .. image:: images/ldap-newperson-4.png

If configured, users can also be automatically assigned to desired
SchoolTool groups.  Here, two users have been assigned to "students":

   .. image:: images/ldap-newperson-3.png

Configuring LDAP
++++++++++++++++

By default, SchoolTool will look for /etc/ldap.conf and try to figure
out current setup.  If your server has that entry, there's a good
chance that LDAP integration will work out-of-the-box.

   .. image:: images/ldap-config-1.png

If you have installed **Zentyal** (http://www.zentyal.com/) on the
same server and configured Users / Groups modules, SchoolTool should
be able to pick up LDAP settings automatically.

It's important to note autodetection works on server start up, so
SchoolTool needs to be restarted after server's LDAP config changes.

LDAP settings can be changed in browser, unless this option is
explicitly disabled in schooltool.conf.

   .. image:: images/ldap-config-2.png

To enable LDAP integration you must specify **LDAP server URI** and at
least one **user DN query**.

**User DN queries** are used to obtain the list of LDAP users.  We
also require to specify the "login attribute", which in almost all
cases is "uid" and should look like this::

  uid ou=Users,dc=example,dc=com?one?(objectClass=inetOrgPerson)

If you need to fine-tune your queries it's best to install an interactive
LDAP browser (like http://jxplorer.org) and test what queries return
proper list of users.

**Bind DN** and **Bind password** used when connecting to LDAP to retrieve the
user list.  Leave empty if anonymous LDAP connections are allowed to
query for users.

**Group DN queries** and **POSIX group counterparts** allow automatic
adding of users to desired SchoolTool groups.  To enable mapping, you
will need to enter one or more queries that retreive the list of LDAP
groups.  You will also have to find out "gidNumber" of each LDAP group
you want to map.  Again, using tools like jXplorer helps a lot.

   .. image:: images/ldap-config-3.png

**POSIX group counterparts** allow you to bind groups to a specific
school year or to the active one.  Users will be assigned to their
groups when they log into SchoolTool::

  2012-2013, students, 2001
  , teachers, 2003


Advanced configuration
++++++++++++++++++++++

You can also configure LDAP by adding a section like this to schooltool.conf::

  <ldap_authentication>

    allow_web_config no
    autodetect_from /etc/ldap.conf
    uri ldap://127.0.0.1:389

    default_login_attr uid
    default_login_filter objectclass=inetOrgPerson

    query_users uid dc=localhost?sub?(objectClass=inetOrgPerson)

    query_groups dc=localhost?sub?(objectClass=posixGroup)
    bind_group teachers 7001
    bind_group 2011-2012 students 6024

    bind_dn ldapmanager
    bind_password thepassword

  </ldap_authentication>

**allow_web_config** lets you disable through-the-web overriding of
these settings.

**autodetect_from** should point to the .conf file to infer LDAP
configuration from.

It's worth to note that **query_users**, **query_groups** and
**bind_group** can have multiple entries.

**default_login_attr** and **default_login_filter** should be seldom
useful, mostly when you want to influence LDAP settings auto-detection.


Sidebar Settings
----------------

Further server settings and information are available in the sidebar at left.

Security
++++++++

The **Security** link in the sidebar provides a report on the active permissions within the system and limited options to tailor the access rights for your school.

The main view is a textual summary of what users can conduct which actions on what objects in SchoolTool.

   .. image:: images/server-settings-8.png

Clicking the edit pencil next to Access Rights takes you to a form that has a list of specific rights that sites might commonly want to modify.

   .. image:: images/server-settings-9.png

Click **Apply** to save whatever changes you might make; **Cancel** to leave without saving changes.

Note that all the access control settings within the system can be modified from configuration files within SchoolTool's source code.  This is not a trivial matter, but extensive customization for specific sites is possible.

Errors
++++++

The **Errors** entry in the sidebar provides quick access to a limited number of errors logged on the server since it has been restarted.  They are stored in memory.  Full logs are kept in the filesystem, at ``/var/log/schooltool`` in a standard Ubuntu package installation.

   .. image:: images/server-settings-10.png

Clicking on the exception object takes you to a full description of the error, including the traceback and HTTP request:

   .. image:: images/server-settings-11.png

Clicking on the edit pencil allows some customization of this display:

   .. image:: images/server-settings-12.png

Sidebar Actions
----------------

Pack Database
+++++++++++++

SchoolTool's database engine supports certain undo capabilities which are not implemented in SchoolTool.  As a result, SchoolTool's database file grows in size over time.  "Packing" the database strips out the old changes and shrinks the file back down to its minimum size.

Packing the database periodically will help optimize performance, particularly after many changes have been made to the database, for example, from large data imports.  This can be a resource intensive action on large databases, so it is best to do it during off-peak times.

To pack the database, click **Pack Database** under **Actions** in the sidebar.  You should see a little confirmation spinner while this is in progress:

   .. image:: images/server-settings-13.png

And a dialog when it completes:

   .. image:: images/server-settings-14.png

Note that if you don't stay on the page while the packing is underway, it *will* still complete.  You just will not receive any confirmation.
