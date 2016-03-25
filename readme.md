METRA RAIL PROJECT
==============
Offers line and route information.

[![Build Status](https://travis-ci.org/garciadiazjaime/metra.svg)](https://travis-ci.org/garciadiazjaime/metra)

Metra API
------

* [Create a virtual environment](http://desarrolloweblibre.com/por-que-usar-virtualenv/) and activate it (`$ . bin/activate` or `$ source bin/activate`)
* Clone project
* Checkout to **dev** branch
* Create your branch (**topics/feature**)
* Install python packages (`$ pip install -r requirements.txt`)
* If you don't have postgres installed, [install postgres with homebrew](http://www.moncefbelyamani.com/how-to-install-postgresql-on-a-mac-with-homebrew-and-lunchy/), if you are not sure if you have homebrew type `$ brew`, if you don't get a *"command not found"* you have it installed already.
* Check your current users with `$ createdb` and then `$ SELECT u.usename AS "User name", u.usesysid AS "User ID", CASE WHEN u.usesuper AND u.usecreatedb THEN CAST('superuser, create database' AS pg_catalog.text) WHEN u.usesuper THEN CAST('superuser' AS pg_catalog.text) WHEN u.usecreatedb THEN CAST('create database' AS pg_catalog.text) ELSE CAST('' AS pg_catalog.text) END AS "Attributes" FROM pg_catalog.pg_user u ORDER BY 1;`
* Replace the user in **settings.py**  (*DATABASES -> USER*)
* Create a database (`$ createdb mintapi`), the name is the one listed in **settings.py** (*DATABASES -> NAME *) 
* Check if there are errors (`$ python manage.py check`)
* Migrate (`$ python manage.py migrate`) and synch (`$ python manage.py syncdb`) the database. You'll be asked for a user name (always **admin**) and a password (always **1234**). Use info@mintitmedia.com for email.
* Run server (`$ python manage.py runserver`)
* Go to **/admin** you should be able to log with the user and password

NOTES

* In case of using Osx you might need to install Xcode
* In case you want to use 'graph_models' from 'django-extensions' you need to install: http://www.graphviz.org/


Metra Website
------
* Create virtualenv
* Activate virtualenv
* Run pip install nodeenv
* Run nodeenv --node=0.12.7 -p
* Clone project
* Checkout dev branch
* Create your branch (topics/feature)
* Run `npm install`
* Run `bower install`
* Run `gulp build`
* Run `gulp watch`
* Run `npm run dev` (another tab)
* Run `compass watch` (another tab)

NOTES

* HTML and JS editable files are in "src" folder
* SASS files are in "compass_components"


CELERY
------

* After installing requirements run next command to start queue
`./manage.py celery -A metra.tasks worker -l info`

