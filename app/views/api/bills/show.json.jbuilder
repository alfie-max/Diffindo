json.extract! @bill, :id, :title, :amount, :date, :payer_id
json.splits_attributes do
  json.array! @bill.splits do |split|
    json.extract! split, :id, :user_id, :amount
  end
end
