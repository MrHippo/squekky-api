squekky-cms
===========

squekky-cms provides a JavaScript/AJAX interface to automatically populate a web page with your Squekky.com(.au) activities. 

To get started quickly, download all files into the same directory and change the data-squekky-id attribute in activities-demo.html to your Squekky _web_service_id_. Your Squekky _web_service_id_ is displayed on the _Manage activities_ tab of Squekky.com(.au).

## Usage ##
The most current version of a Squekky user's activities can be downloaded from the Squekky.com(.au) server at any time by making an AJAX request to __http://squekky.com/get-activities-for?id=[id here]__. Squekky will then return a JSON object of activity objects (including name, description, prices, etc). You can do with the data as you wish! :-)



## Demo ##
This repository includes files to demonstrate the above usage making it easy to implement. 

* __squekky-activities-demo.js__ - example JavaScript which makes the AJAX request, interprets the returned JSON object in a way similar to Squekky.com(.au), and populates the DOM (webpage) of activities-demo.html.

* __activities-demo.html__ - example page to be used with squekky-activities-demo.js, squekky-activities-demo.css, squekky-sprite.png, showdown.js, and jQuery, which shows squekky-cms in action. It is already set up to get the activities of an example user on Squekky. You should replace their id with your own by changing the data-squekky-id attribute in activities-demo.html.

* __squekky-activities-demo.css__ - example CSS to format the activities in a way similar to Squekky.com(.au). It depends on squekky-sprite.png for the icons.

* __squekky-sprite.png__ - a copy of the icons from Squekky.com(.au).

* __showdown.js__ - a copy of John Fraser's showdown.js (http://www.showdown.im/) provided here for convenience. It is not maintained by Squekky. This version was obtained from https://github.com/guybrush/showdown

## Help ##

Feel free to add an issue (using the Issues tab at the top of this page) if you are having difficulty using squekky-cms on your webpage. We're happy to help :-)

## Contribute to squekky-cms ##

If you can see a way to improve squekky-cms, or would like to share your own JavaScript (or other files), feel free to make a code contribution to this repo :-D
