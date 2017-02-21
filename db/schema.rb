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

ActiveRecord::Schema.define(version: 20170221142106) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "categories", force: :cascade do |t|
    t.string   "name",       null: false
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  create_table "projects", force: :cascade do |t|
    t.string   "title",        null: false
    t.string   "blurb",        null: false
    t.text     "about",        null: false
    t.datetime "created_at",   null: false
    t.integer  "duration",     null: false
    t.integer  "author_id",    null: false
    t.string   "img_url"
    t.string   "city",         null: false
    t.string   "state",        null: false
    t.string   "funding_goal"
    t.integer  "funding"
    t.boolean  "complete"
    t.integer  "category_id"
  end

  create_table "rewards", force: :cascade do |t|
    t.string   "name"
    t.integer  "amount"
    t.string   "description"
    t.integer  "project_id"
    t.datetime "created_at"
  end

  create_table "users", force: :cascade do |t|
    t.string   "email"
    t.string   "password_digest"
    t.string   "session_token"
    t.string   "name"
    t.string   "address"
    t.string   "city"
    t.string   "state"
    t.string   "zip"
    t.datetime "created_at",      null: false
    t.datetime "updated_at",      null: false
    t.string   "username"
    t.integer  "category_id"
  end

end
