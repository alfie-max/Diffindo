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
* Transaction History / Recent Activity
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
* Split options (even, percentage, value)
* Bill category
* Activity log (activities such as comments and invites)
* E-mail debt reminder
* Auto Charity donation

## UI

The UI for the MVP will be divided as follows:

### Sign Up / Log In / Guest Log In (Splash page)

This will be done in the splash screen.

Features covered on this screen:
* New account
* User log in
* Guest log in

@@@@@ INCLUDE WIREFRAME LINKS @@@@@


### Bills CRUD (Dashboard v0) + Comments

The bills Read view will be, at first, the main screen of the app, serving as dashboard from where users are able to perform actions such as create, edit and/or delete bills.

Features covered on this screen:
* Transaction History
* Bill Read / Delete

Features linked from this screen:
* Bill Create / Update (overlay)
* Add Friends (overlay)

[Dashboard v0](./wireframes/DashboardV0.png)
[Bill](./wireframes/Bill.png)


### Friends
[Friends](./wireframes/NewFriend.png)


### Bonus features

Such features will be accessible through the following views:

| Feature                                    | Linked From | Feature Screen Name |
|--------------------------------------------|:-----------:|:-------------------:|
| Create Groups                              | Dashboard   | Groups              |
| Settling bills                             | Dashboard   | Settle              |
| Upcoming bills                             | Dashboard   | Dashboard-Upcoming  |
| Monthly trend                              | Dashboard   | Dashboard-Trends    |
| Settling bills - manually record payment   | Settle      | Manual Settle       |
| Settling bills - send money through PayPal | Settle      | PayPal Settle       |
| Bill creation - add PDF image              | Bill CU     | Bill Image          |
| Upcoming bills view                        | Dashboard   | Upcoming            |
| Monthly trend                              | Dashboard   | Trends              |
| Split option                               | Bill CU     | Bill Split          |
| Bill category                              | Bill CU     | Bill Category       |


#### Dashboard v1
Another Dashboard view is planned as a bonus feature, listing what and who a user owes and is owed. If this view is completed before the deadline, the app's routes will be updated as follows:

*Dashboard v0*
/dashboard -> Bills RD

*Dashboard v1*
/dashboard -> "Balance", "You Owe" | "You are owed" lists
/all (expenses) -> Bills RD


## React Components
[Components Structure](./components)
