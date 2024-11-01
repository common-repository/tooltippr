=== Plugin Name ===
Contributors: adityavm
Donate link: 
Tags: tooltips
Requires at least: 2.3.2
Tested up to: 2.5
Stable tag: 0.9.8
=======

Creates style-able tooltips out of the title attribute of links. For browsers supporting `addEventListener` only at the moment. That means no IE. Sorry!

== Description ==

A Wordpress plug-in to create style-able tooltips for links. Edit the included stylesheet to suit your needs. You can see it in action everywhere in Geekaholic, and even this page. Mouse-over the links (page/post content only).

Requires the [jQuery][jq] framework.

`$tooltippr_body` contains a comma-separated list of class names for containers of your post/page content. For example, the class names on this blog are `the_body` and `body`, so the list will be `the_body,body` (without spaces).

Tooltips are triggered after you hold your mouse on a link for some time.

[jq]: http://jquery.com

== Installation ==

1. Upload all the files into one directory in your plugins folder
2. Activate the plugin from 'Plugins' tab

== Known Bugs ==

0.8.5: Does not work in IE. Only works in browsers which support the `addEventListener` property for DOM elements.