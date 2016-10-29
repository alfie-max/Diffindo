# WeCheck


## Project Scope

WeCheck is a web app inspired by SplitWise. It allows users to generate, settle and keep track of split bills with other users.

This app will be built on Ruby on Rails + React/Redux.

## MVP

MVP criteria, which MUST be met by end of 2nd week, are as follow:

* New account creation and login
* Guest login
* Hosting on Heroku
* Bills CRUD
* Add Friends
* Transaction History (view should incorporate Activity Log in the future)
* Expense Comments
* Production README, summarizing how each feature was implemented

All features must be in full, bug-free working condition, with adequate seed data and sufficient CSS styling.

### Bonus

A bonus feature shall only be considered implemented if it is in full, bug-free working condition, with adequate seed data and sufficient CSS styling.
In no particular order:

* Settling bills - manually record payment
* Create Groups
* Settling bills - send money through PayPal
* Bill creation - add PDF image
* Upcoming bills view
* Monthly trend
* Split option
* Bill category
* Activity log (transaction + other activity, such as comments and invites)

## UI

The UI for the MVP will be divided as follows:

### Sign Up / Log In / Guest Log In (Splash page)

This will be done in the splash screen.

Features covered on this screen:
* New account
* User log in
* Guest log in

@@@@@ INCLUDE WIREFRAME LINKS @@@@@


### Bills CRUD (Dashboard page)

The bills Read view will be the main screen of the app, serving as dashboard from where users are able to perform actions such as create, edit and/or delete bills.

Features covered on this screen:
* Bill Read / Delete

Features linked from this screen:
* Bill Create / Update
* Add Friends
* View transaction history ( + (B) Activity log)

@@@@@ INCLUDE WIREFRAME LINKS @@@@@

### Bonus features

Such features will be accessible through the following views:

| Feature                                    | Linked From | Feature Screen Name |
|--------------------------------------------|:-----------:|:-------------------:|
| Create Groups                              | Dashboard   | Groups              |
| Monthly spend                              | Dashboard   | Bla                 |
| Settling bills (Settle)                    | Dashboard   | Bla                 |
| Upcoming bills                             | Dashboard   | Bla                 |
| Monthly trend                              | Dashboard   | Bla                 |
| Settling bills - manually record payment   | Settle      | Bla                 |
| Settling bills - send money through PayPal | Settle      | Bla                 |
| Bill creation - add PDF image              | Settle      | Bla                 |
| Upcoming bills view                        | Settle      | Bla                 |
| Monthly trend                              | Settle      | Bla                 |
| Split option                               | Settle      | Bla                 |
| Bill category                              | Settle      | Bla                 |
