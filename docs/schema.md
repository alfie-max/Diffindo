# Schema Information

## users
When a user receives an invite from another user, an account is created with a 'false' activated flag. When a user tries to create an account , we check for matching emails/username. If exists, but 'activated' flag is false, user is able to create their account and overwrite username.
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
username        | string    | not null, indexed, unique
email           | string    | not null, indexed, unique
password_digest | string    | not null
session_token   | string    | not null, indexed, unique
activated       | boolean   | not null

## bills
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
title       | string    | not null
amount      | text      | not null
author_id   | integer   | not null, foreign key (references users), indexed
payer_id    | integer   | not null, foreign key (references users), indexed
date        | date      | not null
doc_url     | string    |
split_type  | string    | not null

## splits
Splits can happen between users and/or users and friends who don't yet have an account. Friends are still users, with a deactivated account.
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
bill_id     | string    | not null, foreign key (references bills), indexed
user_id     | integer   | not null, foreign key (references users), indexed
amount      | integer   | not null

## comments
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
author_id   | integer   | not null, foreign key (references users), indexed
bill_id     | integer   | not null, foreign key (references bills), indexed
