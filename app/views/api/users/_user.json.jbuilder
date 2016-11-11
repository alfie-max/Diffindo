json.extract! user, :id, :username
json.friends do
  user.friends.each do |friend|
    json.set! friend.id do
      json.extract! friend, :id, :username
    end
  end
end
