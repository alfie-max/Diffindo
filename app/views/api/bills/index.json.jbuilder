#This will get rendered on the user's dashboard, which means we'll have to filter out (next if) the ones that the user id not author

@bills.each do |bill|
  json.set! bill.date.strftime('%B %Y') do
    json.set! bill.id do
      json.extract! bill, :id, :author_id, :title, :amount, :date
    end
  end
end
