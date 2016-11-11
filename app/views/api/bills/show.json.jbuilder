json.extract! @bill, :id, :title, :amount, :date, :payer_id
json.payer @bill.payer.username
json.splits_attributes do
  json.array! @bill.splits do |split|
    json.extract! split, :id, :user_id, :amount
    json.username split.user.username
  end
end
