# encoding: UTF-8
# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20161108185120) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "bills", force: :cascade do |t|
    t.string   "title",       null: false
    t.float    "amount",      null: false
    t.integer  "category_id", null: false
    t.integer  "author_id",   null: false
    t.integer  "payer_id",    null: false
    t.date     "date",        null: false
    t.string   "doc_url"
    t.string   "split_type",  null: false
    t.datetime "created_at",  null: false
    t.datetime "updated_at",  null: false
  end

  add_index "bills", ["author_id"], name: "index_bills_on_author_id", using: :btree
  add_index "bills", ["category_id"], name: "index_bills_on_category_id", using: :btree
  add_index "bills", ["payer_id"], name: "index_bills_on_payer_id", using: :btree

  create_table "friends", force: :cascade do |t|
    t.integer  "user_id",    null: false
    t.integer  "friend_id",  null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  add_index "friends", ["user_id", "friend_id"], name: "index_friends_on_user_id_and_friend_id", unique: true, using: :btree

  create_table "splits", force: :cascade do |t|
    t.integer  "bill_id",    null: false
    t.integer  "user_id",    null: false
    t.float    "amount",     null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  add_index "splits", ["bill_id", "user_id"], name: "index_splits_on_bill_id_and_user_id", unique: true, using: :btree

  create_table "users", force: :cascade do |t|
    t.string   "username",        null: false
    t.string   "email",           null: false
    t.string   "password_digest", null: false
    t.string   "session_token",   null: false
    t.boolean  "activated",       null: false
    t.datetime "created_at",      null: false
    t.datetime "updated_at",      null: false
  end

  add_index "users", ["email"], name: "index_users_on_email", unique: true, using: :btree
  add_index "users", ["session_token"], name: "index_users_on_session_token", unique: true, using: :btree

end
