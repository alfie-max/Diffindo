json.extract! user, :id, :username
json.friends do
  json.array! user.friends do |friend|
    json.extract! friend, :id, :username
  end
end
