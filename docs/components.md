## Component Hierarchy


### Auth

**AuthFormContainer**
 - AuthForm


### Dashboard

**DashboardContainer**
 - Dashboard
 - LeftSidebar
 - TopBar

**TransactionsContainer**
 - TransactionsMonthHeader
  * TransactionsIndex

**TransactionsIndex**
 - TransactionsIndexItem
  + TransactionDetail

**TopBar**
 - ScreenTitle

**LeftSidebar**
 - UserData
 - TopFriends
 - TopGroups

**RightSidebar**
 - Balance
 - UpcomingTransactions
 - Trends


### Bills

**BillsContainer**
  - Friends
  - Errors
  - Comments
  - Categories (bonus)


### Misc

**FriendsContainer**
 - Friends

**AddFriendsContainer**
 - AddFriends

**CommentsContainer**
 - Comments

**CategoriesContainer**
 - Categories


## Routes

|Path   | Component   |
|-------|-------------|
| "/sign-up" | "AuthFormContainer" |
| "/sign-in" | "AuthFormContainer" |
| "/home" | "DashboardContainer" |
| "/new-bill" | "BillsContainer" |
| "/home/bill/:billId" | "BillsContainer" |
| "/home/bill/:billId/comments" | "CommentsContainer" |
| "/home/friend/new" | "AddFriendsContainer" |
| "/home/friends" | "FriendsContainer" |
| "/home/categories" | "CategoriesContainer" |
