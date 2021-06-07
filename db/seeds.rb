# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.delete_all
Business.delete_all

u1 = User.create!(email: 'guest', first_name: 'guest', last_name: 'guest', zipcode: '00000', password: 'password')

b1 = Business.create!(business_name: "Egghead", address: "949 Ruff Dr San Jose", city: "San Jose", state: "CA", zip: "95110", phone_number: "(510)552-0304", website_url: "eggheadcafe.net", owner_id: 4)
b2 = Business.create!(business_name: "Mochill Mochi Donut", address: "675 Saratoga Ave Ste 108", city: "San Jose", state: "CA", zip: "95129", phone_number: "", website_url: "mochillsf.com", owner_id: 4)
b3 = Business.create!(business_name: "Urban Ritual", address: "100 N Almaden Ave", city: "San Jose", state: "CA", zip: "95110", phone_number: "(408)564-0925", website_url: "urbanritualcafe.com", owner_id: 4)