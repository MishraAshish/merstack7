// Coupon Page - 06/10/2021
// Create a component with Name - CouponComponent (Functional Component and Use Hooks)
// On the page add a Button - GenerateCoupon
// Upon Click Generate a random coupon of - 6 digits (basically a numeric random value)
// Dispatch this generated coupon using useDispatch
// Create a Coupon Reducer to have Coupon Value, Use Reducer to update the coupon value (useSelector coupon)
// Create action to pass coupon to reducer, with type and payload


// Practice Question : Checkout Page - 05/10/2021

// Create A functional component and use react hook or using container to read data from store
// Show - User Details (Name, address) //We will deliver products to below address kind of message as well
// Show Table of cart put up for purchase (you need to re-use the cartlist and cartitem components)
// Show the purchase Summary (total qty and total amount)
// Show a Button to Proceed to Payment
// Integrate this page on CartComponent Button (Go to checkout)

// Second Task :
// Create a state using useState to show hide (Make Payment Message)
// Upon Clicking on MakePayment button, hide everything and just show the message - "Thankyou for the payment, your items under process!"
// Change the header from Checkout Page to Payment Page


// Practice : 30/09/2021 

// NewCart Implementation
// Create New Cart Component using react hooks, functional component
// Each Item in this component should be added from Product Component 
// Now each Product should have general fields, like Name, Description, Rating, Price, Category (New Product Document/ Collection)
// In Product component each item when we click to display details should also have a button "Add To Item" on click should add to New Cart
// On Cart Component, Button for save to Checkout should save the cart item to database (New Cart Document/ Collection)

// Practice : 29/09/2021 

// In the header component we want to show only three navigations - Home, User, About, when user lands on page
// If user is signed in then only we want to show all the navigations
// If user is not signed in then we show a banner or message on top - to use Login page to see other features
// Once user sign in then - Welcome "Margi", to Shopping cart application
// the user navigation link should say - Login, untill user is signed in

// On product page the signed in user with name - Admin, should only be allowed to add product





// Practice - 2

//1. Create a component with name Hobby, add a textbox to insert hobbyname into it and save it to the database using SaveAPI
//2. Create an action to save the hobby, can use useractions file and userrouter file for the same


// Practice - 1

//1. Create a child component with your Name, parent would be app component
//2. Pass various properties like Name, Age, Address, etc as an object from app component and show values accordingly.
//3. Pass some html elements (h1, input, etc) as properties, show as child elements
//4. Use callback function to send "User Name" from child component back to parent
//5. Create an input box in Class Component and bind event to read values using setState (can use existing component)