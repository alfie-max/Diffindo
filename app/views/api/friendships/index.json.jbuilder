
@friendships.each do |friendship|
  json.set! friendship.id do
    json.extract! friendship, :id
  end
end
