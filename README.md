# Student Store Project

Selling merchandise in the modern era requires digital solutions. For this project, you'll be tasked with designing and constructing an online student store for the College of CodePath. The web app consists of a frontend user interface for potential customers to browse available goods and a backend API to handle data management. The API will be built with Node and Express, and the UI will be built with React.

Check out our [deployed Student Store](https://codepath-student-store-demo.surge.sh/) for reference! Explore the exemplar by trying the following tasks:

- Click on the different categories (clothing, food, etc.) to filter the list of products.
- Search for an existing product.
- Search for a product that doesn't exist.
- Add several products to the shopping cart.
- Checkout and view the final receipt.

## *Week 2* Application Features
<!-- Overall Walkthrough -->
<div style="position: relative; padding-bottom: 56.25%; height: 0;"><iframe src="https://www.loom.com/embed/72b6b1d2ed6e4c908f14a81849c973fc?sid=c450e061-4b37-486e-8e8f-ec3395c0cdd9" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;"></iframe></div>

<!-- Walkthrough showing responsiveness -->

<div style="position: relative; padding-bottom: 56.25%; height: 0;"><iframe src="https://www.loom.com/embed/335d8119f7f84f3bb7da3c7daa0bd539?sid=d775bf07-feaa-4f91-a122-940120c8ee34" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;"></iframe></div>

### Core Features

- [x] The website displays header, banner, search, product grid, about, contact, and footer section.
- [x] The website displays the products at the [GET /store endpoint](https://codepath-store-api.herokuapp.com/store) on initial page load.
- [x] Users can click on a category (clothing, food, etc.) to filter the product grid by type.
- [x] Users can search for products.
- [x] User can click on a product in the grid to navigate to a new page containing additional product details.

### Stretch Features

- [x] Users can click to expand the shopping cart in the left navigation.
- [ ] Users can click the '+' button on a product cart to increment that product in the shopping cart.
- [ ] Users can click the '-' button on a product cart to decrement that product in the shopping cart.
- [ ] The shopping cart displays a table of products, quantities, subtotal, tax, and total.
- [x] Links in the navbar takes users to a section in the home page
## *Week 3* Application Features

### Core Features

- [x] User can click to expand the shopping cart in the left navigation.
- [x] Users can click the '+' button on a product cart to increment that product in the shopping cart.
- [x] Users can click the '-' button on a product cart to decrement that product in the shopping cart. If the count is zero, the product should be removed from the cart.
- [x] The shopping cart displays a table of products, quantities, subtotal, tax, and total.
- [x] Users can checkout, and receive a receipt confirming their purchase.

### Stretch Features

- [ ] Create an endpoint for fetching all orders in the database and an endpoint for serving an individual order based on its ID.
- [ ] Build a page in the UI that displays the list of all past orders. The user should be able to click on any individual order to take them to a more detailed page of the transaction.
- [ ] Allow users to use an input to filter orders by the email of the person who placed the order.
- [ ] Your choice! (Replace this bullet explaining what you implemented. Example: Users can create a wish list of products they are interested in but not yet ready to purchase.)

<!-- Week 3 - Student Store Part 2 Walkthrough -->
<div style="position: relative; padding-bottom: 56.25%; height: 0;"><iframe src="https://www.loom.com/embed/f0d88329fd604a339c49c33628aa9850?sid=76d4af9a-cd9c-47e0-9372-c9e5a43ddf25" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;"></iframe></div>

<!-- Week 3 - Student Store Part 2 Walkthrough with receipt details-->
<div style="position: relative; padding-bottom: 56.25%; height: 0;"><iframe src="https://www.loom.com/embed/02b029602e564714a174071161252754?sid=32cd043a-9dd2-4c8a-a737-87100ba554c8" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;"></iframe></div>