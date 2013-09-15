SqueeGo-api
=====================

SqueeGo (http://squeego.com | http://squeego.com.au) is a website for promoting activities (things to do). SqueeGo allows activity providers to enter all sorts of details about their activities - prices, contacts, dates, times, etc. The activities are then searchable by SqueeGo users - predominantly by location.

The most current version of your SqueeGo activities can be downloaded from the SqueeGo server and automatically included in a webpage of your choice. "Current" here means the latest activities you submitted to SqueeGo - regardless of whether they are approved, not-approved, or under review. In this way, changes made to your SqueeGo activities will appear on your webpage immediately.

## Usage ##

Get your activities by making a JavaScript/AJAX request to __http://squeego.com/get-activities-for?id=[id here]__. Once a request is made, SqueeGo will return a JSON object of activity objects (including name, description, prices, etc). 

A JSON object isn't overly useful by itself and you will likely want to translate it into something meaningful for display to your users. This repository is a collection of HTML, CSS, and JavaScript you can use to retrieve your activities from squeego.com and have them inserted into your webpage in a way that looks similar to the layout on squeego.com.

## Add your activities to your webpage in 5 minutes ##
If you are happy with how the activities look on SqueeGo, you can just download all files into the same directory and change the "data-squeego-id" attribute in activities-demo.html to your SqueeGo web service id (which is found in your user name tab on SqueeGo). 

Once you have your activities being loaded into the page, you can then add any additional content you like to the page and put it on a server somewhere. Done!

If you would like something a bit different, you are welcome to edit the code or write something new. These files are just an example.

## Explanation of files ##

* __squeego-activities-demo.js__ - example JavaScript which makes the AJAX request, interprets the returned JSON object in a way similar to squeego.com, and populates the DOM (webpage) of activities-demo.html.

* __activities-demo.html__ - example page to be used with squeego-activities-demo.js, squeego-activities-demo.css, squeego-sprite.png, showdown.js, and jQuery. It is already set up to get the activities of an example user on SqueeGo. You should replace their id with your own by changing the _data-squeego-id_ attribute in _activities-demo.html_.

* __squeego-activities-demo.css__ - example CSS to format the activities in a way similar to squeego.com. It depends on squeego-sprite.png for the icons.

* __squeego-sprite.png__ - a copy of the icons from squeego.com.

* __showdown.js__ - a copy of John Fraser's showdown.js (http://www.showdown.im/) provided here for convenience. It is not maintained by SqueeGo. This version was obtained from https://github.com/guybrush/showdown. Showdown implements MarkDown using JavaScript which is used to make the activity details look fancy.

## Help ##

If you are have trouble using squeego-api, feel free to send an email to ben@squeego.com. I'm happy to help :-)

## Contribute to squeego-api ##

If you create your own JavaScript/CSS/HTML for use with squeego-api, we would love to share them in this respository. The more the merrier! :-D
