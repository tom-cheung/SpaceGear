# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

OrderedProduct.destroy_all
Order.destroy_all
Contact.destroy_all
Product.destroy_all
ProductType.destroy_all
Category.destroy_all 

category_one = Category.create(category_name: 'Mens')
category_two = Category.create(category_name: 'Womens')
category_three = Category.create(category_name: 'Children')
category_four = Category.create(category_name: 'Miscellaneous')

type_one = ProductType.create(type_name: 'T-Shirt')
type_two =ProductType.create(type_name: 'Outwear')

# MEN

product_one = Product.create(   
                                product_name: "Men's Starman T-Shirt",
                                type_id: type_one.id,
                                category_id: category_one.id,
                                color: 'Black',
                                size: 'Medium',
                                description: 'Starman Picture',
                                price: 25.00,
                                img_name: 'mensstarman'
                            )
                            
product_two = Product.create(   
                                product_name: "Mens Dragon Long Sleeve T-Shirt",
                                type_id: type_one.id,
                                category_id: category_one.id,
                                color: 'Black',
                                size: 'Medium',
                                description: 'Dragon Logo',
                                price: 30.00,
                                img_name: 'mensdragontshirtlong'
                            )

product_three = Product.create(   
                                product_name: "Mens Bomber Jacket",
                                type_id: type_two.id,
                                category_id: category_one.id,
                                color: 'Charcoal',
                                size: 'Medium',
                                description: 'Premium Bomber Jacket',
                                price: 145.00,
                                img_name: 'mensbomberjacket'
                            )

product_four = Product.create(   
                                product_name: "Unisex Space Track Jacket",
                                type_id: type_two.id,
                                category_id: category_one.id,
                                color: 'Gray',
                                size: 'Medium',
                                description: 'Built for space',
                                price: 40.00,
                                img_name: 'unisextrackjacket'
                            )

# WOMEN


product_five = Product.create(   
                                product_name: "Womens Starman T-Shirt",
                                type_id: type_one.id,
                                category_id: category_two.id,
                                color: 'Black',
                                size: 'Medium',
                                description: 'Starman Picture',
                                price: 25.00,
                                img_name: 'womensstarman'
)

product_six = Product.create(   
                                product_name: "Womens ISS Sweatshirt",
                                type_id: type_two.id,
                                category_id: category_two.id,
                                color: 'Gray',
                                size: 'Medium',
                                description: 'SpaceGear logo on the left sleeve, 100% cotton ',
                                price: 45.00,
                                img_name: 'womensisssweatshirt'
)

product_seven = Product.create(   
                                product_name: "Womens bomber jacket",
                                type_id: type_two.id,
                                category_id: category_two.id,
                                color: 'Black',
                                size: 'Medium',
                                description: 'Premium Bomber Jacket ',
                                price: 145.00,
                                img_name: 'womensbomberjacket'
)

product_eight = Product.create(   
                                product_name: "Womens Occupy Mars T-Shirt",
                                type_id: type_one.id,
                                category_id: category_two.id,
                                color: 'Black',
                                size: 'Medium',
                                description: 'SpaceGear logo on the left sleeve, 100% cotton ',
                                price: 25.00,
                                img_name: 'womensoccupymarstshirt'
)


# KIDS 


product_nine = Product.create(   
                                product_name: "Kids Spacesuit Onesie",
                                type_id: type_two.id,
                                category_id: category_three.id,
                                color: 'White',
                                size: 'Small',
                                description: '100% cotton for your little astronaut!',
                                price: 45.00,
                                img_name: 'kidsonesie'
)

product_ten = Product.create(   
                                product_name: "Kids Starman Pullover Hoodie",
                                type_id: type_two.id,
                                category_id: category_three.id,
                                color: 'Black',
                                size: 'Small',
                                description: 'For the future starman!',
                                price: 28.00,
                                img_name: 'kidsstarmanpullover'
)

product_eleven = Product.create(   
                                product_name: "Kids Dragon T-Shirt",
                                type_id: type_one.id,
                                category_id: category_three.id,
                                color: 'Black', 
                                size: 'Small',
                                description: 'Wear the dragon proudly!',
                                price: 28.00,
                                img_name: 'kidsdragontshirt'
)

product_twelve = Product.create(   
                                product_name: "Kids F9 T-Shirt",
                                type_id: type_one.id,
                                category_id: category_three.id,
                                color: 'Black', 
                                size: 'Small',
                                description: 'Fly as high as the Falcon',
                                price: 20.00,
                                img_name: 'kidsf9tshirt'
)



# catone = Category.create(category_name: "clothing")
# cattwo = Category.create(category_name: "vehicle")
# catthree = Category.create(category_name: "miscellaneous")
# catfour = Category.create(category_name: "toys")

# typeone = ProductType.create(type_name: "T-shirts", category_id: catone.id)
# typetwo = ProductType.create(type_name: "Outwear", category_id: catone.id)
# typethree = ProductType.create(type_name: "Car", category_id: cattwo.id)
# typefour = ProductType.create(type_name: "Spacecraft", category_id: cattwo.id)
# typefive = ProductType.create(type_name: "Water Bottles", category_id: catthree.id)
# typesix = ProductType.create(type_name: "Edibles", category_id: catthree.id)
# typeseven = ProductType.create(type_name: "Stuffed Animals", category_id: catfour.id)
# typeeight = ProductType.create(type_name: "Toy Spaceships", category_id: catfour.id)

# productone = Product.create(product_name: "Men's T-Shirt", type_id: typeone.id, color: "white", size: "L", price: 20, description: "100% cotton")
# producttwo = Product.create(product_name: "Women's T-Shirt", type_id: typeone.id, color: "purple", size: "M", price: 20, description: "100% polyester, perfect for running!")
# productthree = Product.create(product_name: "Pilot's Jacket", type_id: typetwo.id, color: "Black", size: "M", price: 50, description: "100% leather")
# productfour = Product.create(product_name: "Pilot's Jacket", type_id: typetwo.id, color: "Brown", size: "L", price: 45, description: "100% leather, SpaceGear logo on the left")
# productfive = Product.create(product_name: "Elon's Roadster", type_id: typethree.id, color: "Hotrod Red", size: "Coupe", price: 275000, description: "It's been to space!")
# productsix = Product.create(product_name: "Model S", type_id: typethree.id, color: "Gunmetal Grey", size: "Sedan", price: 125000, description: "Improved charge time!")
# productseven = Product.create(product_name: "Dragon Space Shuttle", type_id: typefour.id, color: "SpaceX White", size: "Massive", price: 275000000, description: "Will take you to space!")
# producteight = Product.create(product_name: "NCC-1701-D", type_id: typefour.id, color: "", size: "Colossal", price: 1000000000000, description: "Galaxy Class Federation Starship")
# productnine = Product.create(product_name: "Metal Bottle", type_id: typefive.id, color: "Grey", size: "Large", price: 15, description: "Made from asteroid metals")
# productten = Product.create(product_name: "Eco-Friendly Bottle", type_id: typefive.id, color: "Blue", size: "Medium", price: 20, description: "100% recycled plastic")
# producteleven = Product.create(product_name: "Moon Rocks", type_id: typesix.id, color: "Rainbow", size: "1lb", price: 75, description: "Takes you to the moon.")
# producttwelve = Product.create(product_name: "Space Dust", type_id: typesix.id, color: "Mystery", size: "2oz", price: 275, description: "Trascends space and time")
# productthirteen = Product.create(product_name: "Antigrav Dragon", type_id: typeseven.id, color: "Mixed", size: "Small", price: 35, description: "Flown to space!")
# productfourteen = Product.create(product_name: "Antigrav Dragon", type_id: typeseven.id, color: "Mixed", size: "Large", price: 40, description: "Still in space, ships in 3 months")
# productfifteen = Product.create(product_name: "Toy Dragon", type_id: typeeight.id, color: "Hotrod Red", size: "Small", price: 17, description: "Almost like the real thing")
# productsixteen = Product.create(product_name: "Millenium Falcon", type_id: typeeight.id, color: "Grey", size: "Large", price: 22, description: "In memory of Han Solo")
