Setting up Outgoing Email Service
=================================

SchoolTool can send emails through your school email server or another SMTP server.  That is, SchoolTool is not an email server, it sends mail as an email *client*, like a desktop application such as Evolution or Outlook.  

To enable SchoolTool to send emails, you will need the instructions from your school's server, your ISP, or your webmail provider to configure a mail client to send mail via the provider's SMTP service.  

You can also install and use a free mail server using the Ubuntu package manager, such as ``postfix`` or ``sendmail.``  Instructions for doing so are outside the scope of this document.  Running a mail server requires a knowledgeable systems administrator.

As an example of an external email service, here's the relevant data for enabling GMail:

    .. image:: images/email-gmail.png
    

To send email through Gmail, log in as **manager**, and go to **Manage** and then **Outgoing Email**:

    .. image:: images/email-0.png

Click on Settings, and enter the appropriate data for your server.  Note that the the username and password in question in this form are the username and password of a user *on the mail server*, not on SchoolTool. 

**Note:** Outgoing emails from SchoolTool will use this email address, not the email address of a specific user within SchoolTool; e.g., in the example below, all notifications coming from SchoolTool will appear to be from schooltool.mgr@gmail.com. 

A TLS connection is a type of secure connection between SchoolTool and the mail server.

As the label suggests, the outgoing email service won't do anything until you check (and **Apply**) the **Enable** box.  Do the opposite to turn it off.

    .. image:: images/email-1.png

Hit **Apply** when you're done.

To see if it is working, click **Send Test** and enter some relevant data, including one of your email addresses as recipient so you can make sure the message arrives safely:

    .. image:: images/email-2.png

After you hit **Send**, you'll find yourself on the **Email Queue** page, and hopefully it is telling you that the server is enabled and the queue is clear (not that your message is stuck):

    .. image:: images/email-3.png

Check your mail, and you should see the message:

    .. image:: images/email-gmail-2.png
