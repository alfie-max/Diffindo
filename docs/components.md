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
  - FriendsList
  - Errors
  - Comments


### Misc

**AddFriendsContainer**
 - AddFriends

**CommentsContainer**
 - Comments


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
