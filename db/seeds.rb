# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

users = User.create([{name: 'Marvin the Martian', email: "marvinmartian@looneytunes.com", password: "password"}, {name: 'Porky Pig', email: "porkypig@looneytunes.com", password: "password"}, {name: 'Tweety Bird', email: "tweetybird@looneytunes.com", password: "password"}, {name: 'Yosemite Sam', email: "yosemitesam@looneytunes.com", password: "password"}])
