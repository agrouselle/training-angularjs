# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

users = []

5.times do
  name = Faker::Name.name
  users << User.create!(name: name, email: Faker::Internet.safe_email(name), bio: Faker::Lorem.sentence(3))
end

categories = []

10.times do
  categories << Category.create!(name: Faker::Book.genre)
end

10.times do
  Note.create!(title: Faker::Book.title, description: Faker::Lorem.sentence(3), icon:nil, user: users.sample, category: categories.sample)
end

