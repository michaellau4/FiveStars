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

b1 = Business.create!(business_name: "Egghead", address: "949 Ruff Dr San Jose", city: "San Jose", state: "CA", zip: "95110", phone_number: "(510) 552-0304", website_url: "eggheadcafe.net", owner_id: 4)
b2 = Business.create!(business_name: "Mochill Mochi Donut", address: "675 Saratoga Ave Ste 108", city: "San Jose", state: "CA", zip: "95129", phone_number: "", website_url: "mochillsf.com", owner_id: 4)
b3 = Business.create!(business_name: "Urban Ritual", address: "100 N Almaden Ave", city: "San Jose", state: "CA", zip: "95110", phone_number: "(408) 564-0925", website_url: "urbanritualcafe.com", owner_id: 4)
b4 = Business.create!(business_name: "Sno-Crave Tea House", address: "43773 Boscell Rd", city: "Fremont", state: "CA", zip: "94538", phone_number: "(510) 651-8888", website_url: "snocrave.com", owner_id: 4)
b5 = Business.create!(business_name: "yakiniQ SJ", address: "1783 W San Carlos St", city: "San Jose", state: "CA", zip: "95128", phone_number: "(408) 293-2668", website_url: "yesmeats.menu11.com", owner_id: 4)
b6 = Business.create!(business_name: "Ramen Nagi", address: "541 Bryant St", city: "Palo Alto", state: "CA", zip: "94301", website_url: "ramennagiusa.com", owner_id: 4)
b7 = Business.create!(business_name: "Shuei-Do Manju Shop", address: "217 Jackson St", city: "San Jose", state: "CA", zip: "95112", phone_number: "(408) 294-4148", website_url: "japantownsanjose.org/shueidomanjushop.html", owner_id: 4)

b1.photos.attach(io: File.open(File.join(Rails.root, "/app/assets/images/egghead1.jpeg")), filename: "egghead1.jpeg")
b1.photos.attach(io: File.open(File.join(Rails.root, "/app/assets/images/egghead2.jpeg")), filename: "egghead2.jpeg")
b1.photos.attach(io: File.open(File.join(Rails.root, "/app/assets/images/egghead3.jpeg")), filename: "egghead3.jpeg")
b1.photos.attach(io: File.open(File.join(Rails.root, "/app/assets/images/egghead4.jpeg")), filename: "egghead4.jpeg")
b1.photos.attach(io: File.open(File.join(Rails.root, "/app/assets/images/egghead5.jpeg")), filename: "egghead5.jpeg")

b2.photos.attach(io: File.open(File.join(Rails.root, "/app/assets/images/mochill1.jpeg")), filename: "mochill1.jpeg")
b2.photos.attach(io: File.open(File.join(Rails.root, "/app/assets/images/mochill2.jpeg")), filename: "mochill2.jpeg")
b2.photos.attach(io: File.open(File.join(Rails.root, "/app/assets/images/mochill3.jpeg")), filename: "mochill3.jpeg")

b3.photos.attach(io: File.open(File.join(Rails.root, "/app/assets/images/urbanritual1.jpeg")), filename: "urbanritual1.jpeg")
b3.photos.attach(io: File.open(File.join(Rails.root, "/app/assets/images/urbanritual2.jpeg")), filename: "urbanritual2.jpeg")
b3.photos.attach(io: File.open(File.join(Rails.root, "/app/assets/images/urbanritual3.jpeg")), filename: "urbanritual3.jpeg")

b4.photos.attach(io: File.open(File.join(Rails.root, "/app/assets/images/snocrave1.jpeg")), filename: "snocrave1.jpeg")
b4.photos.attach(io: File.open(File.join(Rails.root, "/app/assets/images/snocrave2.jpeg")), filename: "snocrave2.jpeg")

b5.photos.attach(io: File.open(File.join(Rails.root, "/app/assets/images/yakiniq1.jpeg")), filename: "yakiniq1.jpeg")
b5.photos.attach(io: File.open(File.join(Rails.root, "/app/assets/images/yakiniq2.jpeg")), filename: "yakiniq2.jpeg")
b5.photos.attach(io: File.open(File.join(Rails.root, "/app/assets/images/yakiniq3.jpeg")), filename: "yakiniq3.jpeg")

b6.photos.attach(io: File.open(File.join(Rails.root, "/app/assets/images/ramennagi1.jpeg")), filename: "ramennagi1.jpeg")
b6.photos.attach(io: File.open(File.join(Rails.root, "/app/assets/images/ramennagi2.jpeg")), filename: "ramennagi2.jpeg")
b6.photos.attach(io: File.open(File.join(Rails.root, "/app/assets/images/ramennagi3.jpeg")), filename: "ramennagi3.jpeg")

b7.photos.attach(io: File.open(File.join(Rails.root, "/app/assets/images/mochi1.jpeg")), filename: "mochi1.jpeg")
b7.photos.attach(io: File.open(File.join(Rails.root, "/app/assets/images/mochi2.jpeg")), filename: "mochi2.jpeg")
b7.photos.attach(io: File.open(File.join(Rails.root, "/app/assets/images/mochi3.jpeg")), filename: "mochi3.jpeg")
b7.photos.attach(io: File.open(File.join(Rails.root, "/app/assets/images/mochi4.jpeg")), filename: "mochi4.jpeg") 

t1 = Tag.create!(tag: "Drinks")
t2 = Tag.create!(tag: "Dinner")
t3 = Tag.create!(tag: "Dessert")
t4 = Tag.create!(tag: "Brunch")
t5 = Tag.create!(tag: "Sandwiches")
t6 = Tag.create!(tag: "Boba")

bt1 = BusinessTag.create!(business_id: b1.id, tag_id: t4.id)
bt2 = BusinessTag.create!(business_id: b1.id, tag_id: t5.id)
bt3 = BusinessTag.create!(business_id: b2.id, tag_id: t3.id)
bt4 = BusinessTag.create!(business_id: b3.id, tag_id: t1.id)
bt5 = BusinessTag.create!(business_id: b3.id, tag_id: t6.id)
bt6 = BusinessTag.create!(business_id: b4.id, tag_id: t3.id)
bt7 = BusinessTag.create!(business_id: b5.id, tag_id: t2.id)
bt8 = BusinessTag.create!(business_id: b6.id, tag_id: t2.id)
bt9 = BusinessTag.create!(business_id: b7.id, tag_id: t3.id)