MARS
====

Monash Audience Response System


Setup
---------------------
* Run `npm install`

Development Environment
---------------------
* `nodemon`

Production Environment
----------------------
* `sudo PORT=80 forever start ./bin/www`

Note: Ensure MongoDB is running with `service mongod start`

TODO
----
* Use $templateCache for view parts
* Merge into single minified javascript and css files
* Move plugins into separate repositories
