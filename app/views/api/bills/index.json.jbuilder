#This will get rendered on the user's dashboard, which means we'll have to filter out (next if) the ones that the user id not author

@bills.each do |bill|
  json.set! bill.date.strftime('%B %Y') do
    json.set! bill.custom_date do
      json.extract! bill, :id, :author_id, :title, :amount
      json.payer bill.payer.username
      json.month bill.date.strftime('%^b')
      json.day bill.date.strftime('%d')
    end
  end
end
