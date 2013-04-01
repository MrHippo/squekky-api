squekky-cms-interface
=====================

The most current version of your Squekky activities can be downloaded from the Squekky.com(.au) server and automatically included in a webpage of your choice. "Current" here means the latest activites you submitted to Squekky regardless of whether they are approved, not-approved, or under review. In this way, changes made to your Squekky activities will appear on your webpage immediately.

## Usage ##

Gett by making a JavaScript/AJAX request to __http://squekky.com/get-activities-for?id=[id here]__. Once a request is made, Squekky will return a JSON object of activity objects (including name, description, prices, etc). 

A JSON object isn't overly useful by itself and you will likely want to translate it into something meaningful for display to your users. __squekky-cms-interface__ is a collection of the HTML, CSS, and JavaScript you need to retrieve your activities from Squekky.com and have them inserted into your webpage in a way that looks similar to the layout on Squekky.com(.au).

## Add your activities to your webpage in 5 minutes ##
If you are happy with how the activities look on Squekky, you can just download all files into the same directory and change the _data-squekky-id attribute_ in activities-demo.html to your Squekky _web_service_id_. Your Squekky _web_service_id_ is displayed on the _Manage activities_ tab of Squekky.com(.au).

You can then add any additional content you like to the page and put in on a server somewhere. Done!

If you would like something a bit different, you can of course edit the code or write something new.

## Expanation of included files ##

* __squekky-activities-demo.js__ - example JavaScript which makes the AJAX request, interprets the returned JSON object in a way similar to Squekky.com(.au), and populates the DOM (webpage) of activities-demo.html.

* __activities-demo.html__ - example page to be used with squekky-activities-demo.js, squekky-activities-demo.css, squekky-sprite.png, showdown.js, and jQuery, which shows squekky-cms-interface in action. It is already set up to get the activities of an example user on Squekky. You should replace their id with your own by changing the _data-squekky-id_ attribute in _activities-demo.html_.

* __squekky-activities-demo.css__ - example CSS to format the activities in a way similar to Squekky.com(.au). It depends on squekky-sprite.png for the icons.

* __squekky-sprite.png__ - a copy of the icons from Squekky.com(.au).

* __showdown.js__ - a copy of John Fraser's showdown.js (http://www.showdown.im/) provided here for convenience. It is not maintained by Squekky. This version was obtained from https://github.com/guybrush/showdown.

## Help ##

If you are having trouble getting squekky-cms-interface working, feel free to send an email to ben@squekky.com.au. I'm happy to help :-)

## Contribute to squekky-cms ##

If you create your own implementation of _squekky-cms-interface_ and would like to share - we would be happy to include your example in this repository. The more the merrier! :-D
