# SpaceGear

SpaceGear is an ecommerce site inspired by Space Exploration Techbologies Corp. (SpaceX). The site offers aerospace themed merchandise. Users can browse products by category and type, add products to a shopping cart, and checkout products. Users may also edit prior orders made. 

<img src="./app/assets/images/preview.gif" alt="./app/assets/images/previewimg.png" width="1280" height="720">

<a href="https://spacegear.herokuapp.com/#/">Visit SpaceGear</a>

<h2>Technologies</h2>

<li>PostgreSQL 10.15</li>
<li>Rails 5.2.4.4</li>
<li>React 17.0.1</li>
<li>Redux</li>
<li>Ruby</li>
<li>JavaScript</li>
<li>HTML</li>
<li>CSS</li>
</li>


<h2>Key Features</h2>
<h3>Shopping Cart<h3>

<p>Created a shopping cart feature for users to store items for future checkout. Users could also update cart and recieve real time feedback based upon the changes made. This feature was implemented using localStorage to cache products allowing the products to persist in the cart through refresh. Utilizing localStorage also elimanted the need to make frequest queries to the backend whenever the cart was updated</p>

<h3>Ordering Products<h3>

<p>Allowed users to checkout items in their shopping carts. Upon checkout a new order would be created which included the total dollar value of the order, the orderer's ID, the orderer's address, and an order ID. Simultaneously the ordered products and their respective quantities would be recorded on a seperate table, and would be tied to the order ID through a foreign key. All orders and ordered products were written to the SQL database using Ajax calls. In order to deal with the asynchronous nature of the Ajax calls and avoid making multiple queries to the database, Rails active record associations was utilized to write to multiple tables simultaneously. Specifically, a mixture of nested attributes and has many through associations was utilized between the order and ordered_products tables.</p>







