class CreateSplits < ActiveRecord::Migration
  def change
    create_table :splits do |t|
      t.integer :bill_id, null: false
      t.integer :user_id, null: false
      t.float :amount, null: false

      t.timestamps null: false
    end
    add_index :splits, [:bill_id, :user_id], unique: true
  end
end
