
# USERS
u1 = User.create!(username: "Eric", email: "eric.olivetree@gmail.com", password: "blabla", activated: true)

u2 = User.create!(username: "Brian", email: "b@b.b", password: "password", activated: true)

guest = User.create!(username: "Meryl Burbank", email: "meryl@burbankgalaxy.com", password: "password", activated: true)

u4 = User.create!(username: "Ken", email: "k@k.k", password: "password", activated: true)

u5 = User.create!(username: "Robert", email: "r@r.r", password: "password", activated: true)


# BILLS
b1 = Bill.create!(title: "1st test bill", amount: 33.33, category_id: 1, author_id: 2, payer_id: 3, date: Date.current, split_type: "even")

b2 = Bill.create!(title: "2nd test bill", amount: 66.66, category_id: 1, author_id: 3, payer_id: 5, date: Date.current, split_type: "even")

b3 = Bill.create!(title: "3rd test bill", amount: 99.99, category_id: 1, author_id: 5, payer_id: 4, date: Date.current, split_type: "even")

b4 = Bill.create!(title: "4th test bill", amount: 999.99, category_id: 1, author_id: 4, payer_id: 1, date: Date.current, split_type: "even")


# SPLITS
s1 = Split.create(bill_id: 1, user_id: 3, amount: 33)

s2 = Split.create(bill_id: 1, user_id: 4, amount: 33)

s3 = Split.create(bill_id: 1, user_id: 5, amount: 33)

s4 = Split.create(bill_id: 2, user_id: 5, amount: 100)

s5 = Split.create(bill_id: 3, user_id: 4, amount:50)

s6 = Split.create(bill_id: 3, user_id: 3, amount:50)

s7 = Split.create(bill_id: 4, user_id: 1, amount: 100)
