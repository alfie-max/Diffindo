
num_users = 30
num_bills = 60
num_splits = 20
num_friendships = 10

# USERS

users = {}
for i in (1..num_users-1)
  username = Faker::Name.name
  email = Faker::Internet.email(username)

  users[i] = User.create!(username: username, email: email, password: "password", activated: true)
end

guest = User.create!(username: "Meryl Burbank", email: "meryl@burbankgalaxy.com", password: "password", activated: true)

users[num_users] = guest

# BILLS

TITLES = [
  "Birthday lunch",
  "Electrical bill",
  "Rent",
  "Gas for SD trip",
  "new computer!!",
  "Phone bill",
  "Comcast",
  "PGE",
  "hotel in NY",
  "Plane tkt for Israel",
  "brunch @ Hobee's",
  "Subway lunch",
  "Cookies from Specialties",
  "Girls night out",
  "Clothes for the kids",
  "Groceries",
  "Dinner at Luke's",
  "Movie tkt",
  "Dog food",
  "Electricity",
  "Utilities",
  "Rental Insurance",
  "Car Rental",
  "Hostel",
  "Pizza Party @ Tom's",
  "BevMo for Lilly's bday",
  "Mom's bday gift",
  "Dad's bday gift",
  "Bday party costs",
  "Our parents' Anniversary dinner",
  "Family Xmas Cards",
  "Family Xmas Pictures"

]

bills = {}

for i in (1..num_bills)
  title = TITLES[rand(TITLES.length)]
  amount = Faker::Commerce.price
  cat_id = 1
  author_id = users[rand(num_users)+1].id
  payer_id = users[rand(num_users)+1].id
  date = Faker::Date.between(1.year.ago, Date.today)
  split_type = "even"
  splits_attrs = [{user_id: payer_id, amount: amount/2}]

  bills[i] = Bill.create!(title: title, amount: amount, category_id: cat_id, author_id: author_id, payer_id: payer_id, date: date, split_type: split_type, splits_attributes: splits_attrs)

end


# SPLITS

splits = {}

j=0
num_users.times do
  j+=1
  user_id = users[j].id

  new_num_splits = rand(num_splits)+1

# Generate random splits
  for i in (1..new_num_splits)
    bill_id = bills[rand(num_bills)+1].id
    # user_id = users[rand(num_users)+1].id
    amount = (bills[bill_id].amount)/2

    splits[i] = Split.new(user_id: user_id, bill_id: bill_id, amount: amount)
    # Does the split already exist? If so, regenerate
    until splits[i].save
      bill_id = bills[rand(num_bills)+1].id
      # user_id = users[rand(num_users)+1].id
      splits[i] = Split.new(user_id: user_id, bill_id: bill_id, amount: amount)
    end

    Friendship.create(user_id: user_id, friend_id: bills[bill_id].payer_id)

  end
  
end


# FRIENDSHIPS

friendships = {}
num_users.times do
  user_id = users[rand(num_users)+1].id

  new_num_friendships = rand(num_friendships)+1
  for i in (1..new_num_friendships)

    friend_id = users[rand(num_users)+1].id

    friendships[i] = Friendship.new(user_id: user_id, friend_id: friend_id);

    until friendships[i].save
      user_id = users[rand(num_users)+1].id
      friend_id = users[rand(num_users)+1].id
      friendships[i] = Friendship.new(user_id: user_id, friend_id: friend_id);
    end
  end
end
