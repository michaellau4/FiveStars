# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.delete_all

u1 = User.create!(email: 'guest', first_name: 'guest', last_name: 'guest', zipcode: '00000', password: 'password')

Business.delete_all

b1 = Business.create!(business_name: "Egghead", address: "949 Ruff Dr San Jose", city: "San Jose", state: "CA", zip: "95110", phone_number: "(510)552-0304", website_url: "eggheadcafe.net", owner_id: 4)

