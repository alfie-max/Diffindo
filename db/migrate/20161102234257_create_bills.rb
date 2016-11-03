class CreateBills < ActiveRecord::Migration
  def change
    create_table :bills do |t|
      t.string :title, null: false
      t.float :amount, null: false
      t.integer :category_id, null:false
      t.integer :author_id, null: false
      t.integer :payer_id, null: false
      t.date :date, null: false
      t.string :doc_url
      t.string :split_type, null: false

      t.timestamps null: false
    end
    add_index :bills, :category_id
    add_index :bills, :author_id
    add_index :bills, :payer_id
  end
end
