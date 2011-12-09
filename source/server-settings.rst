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

Sidebar Settings
----------------

Further server settings and information are available in the sidebar at left.

Database
++++++++

This link in the sidebar gives you access to... maybe we'll change this.

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
