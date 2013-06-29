squekky-api
=====================

Squekky (http://squekky.com) is a website for promoting activities (things to do). Squekky allows activity providers to enter all sorts of details about their activities - prices, contacts, dates, times, etc. The activities are then searchable by Squekky users - predominantly by location.

The most current version of your Squekky activities can be downloaded from the Squekky server and automatically included in a webpage of your choice. "Current" here means the latest activities you submitted to Squekky - regardless of whether they are approved, not-approved, or under review. In this way, changes made to your Squekky activities will appear on your webpage immediately.

## Usage ##

Get your activities by making a JavaScript/AJAX request to __http://squekky.com/get-activities-for?id=[id here]__. Once a request is made, Squekky will return a JSON object of activity objects (including name, description, prices, etc). 

A JSON object isn't overly useful by itself and you will likely want to translate it into something meaningful for display to your users. This repository is a collection of HTML, CSS, and JavaScript you can use to retrieve your activities from Squekky.com and have them inserted into your webpage in a way that looks similar to the layout on Squekky.com(.au).

## Add your activities to your webpage in 5 minutes ##
If you are happy with how the activities look on Squekky, you can just download all files into the same directory and change the "data-squekky-id" attribute in activities-demo.html to your Squekky web service id. 

Your Squekky web service id is displayed on the Manage activities tab of Squekky.com(.au).

Once you have your activities being loaded into the page, you can then add any additional content you like to the page and put in on a server somewhere. Done!

If you would like something a bit different, you are welcome to edit the code or write something new. These files are just an example.

## Explanation of files ##

* __squekky-activities-demo.js__ - example JavaScript which makes the AJAX request, interprets the returned JSON object in a way similar to Squekky.com(.au), and populates the DOM (webpage) of activities-demo.html.

* __activities-demo.html__ - example page to be used with squekky-activities-demo.js, squekky-activities-demo.css, squekky-sprite.png, showdown.js, and jQuery. It is already set up to get the activities of an example user on Squekky. You should replace their id with your own by changing the _data-squekky-id_ attribute in _activities-demo.html_.

* __squekky-activities-demo.css__ - example CSS to format the activities in a way similar to Squekky.com. It depends on squekky-sprite.png for the icons.

* __squekky-sprite.png__ - a copy of the icons from Squekky.com.

* __showdown.js__ - a copy of John Fraser's showdown.js (http://www.showdown.im/) provided here for convenience. It is not maintained by Squekky. This version was obtained from https://github.com/guybrush/showdown. Showdown implements MarkDown using JavaScript which is used to make the activity details look fancy.

## Help ##

If you are have trouble using squekky-api, feel free to send an email to ben@squekky.com.au. I'm happy to help :-)

## Contribute to squekky-cms ##

If you create your own JavaScript/CSS/HTML for use with squekky-api and would like to share - we would be happy to include your example in this repository. The more the merrier! :-D
