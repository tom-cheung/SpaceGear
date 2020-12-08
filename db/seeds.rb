# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

require 'faker'

User.destroy_all 

user1 = User.create(first_name: 'Michelle', last_name: 'Tester1', email: 'tester1@gmail.com', password: '123456')
user2 = User.create(first_name: 'Steve', last_name: 'Tester2', email: 'tester2@gmail.com', password: '123456')
user3 = User.create(first_name: 'Chris', last_name: 'Tester3', email: 'tester3@gmail.com', password: '123456')

