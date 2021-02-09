# myshop_master_assignment
npm install and 
npm start 

Tech Stack Used:

Create React App (Boilerplate for ReactJS)
Syntactically Awesome Style Sheet (SCSS with mixins for multiple devices viewport) and Node-sass module
React Hooks e.g., useState, useEffect
React router dom
Presentational and functional components
Promises and JavaScript

Order Delivered
![image](https://user-images.githubusercontent.com/78673068/107421532-b1e8b000-6adf-11eb-8353-e9edefcabf8a.png)

Order Shipped
![image](https://user-images.githubusercontent.com/78673068/107421885-228fcc80-6ae0-11eb-898c-f7726cb75279.png)

Order NotShipped
![image](https://user-images.githubusercontent.com/78673068/107422390-916d2580-6ae0-11eb-9a62-4d7ef3a207e1.png)

order DelayedShipping UserAccepted
![image](https://user-images.githubusercontent.com/78673068/107423895-96cb6f80-6ae2-11eb-9292-7c83d7a65c65.png)

Mobile Failed shipment
![image](https://user-images.githubusercontent.com/78673068/107418897-cf684a80-6adc-11eb-8d93-05ea0d725e07.png)

Notes:

Order Status Menu: 
•	In desktop it will show the Recent order items in dropdown and clicking on item will take you to order details page
•	In mobile it will take you to order details page

Order Status Dropdown:
•	Test Case 1: Single order not shipped: Dropdown will show single order with bar in orange colour.
•	Test Case 2: Single order shipped: Dropdown will show single order with bar in blue colour 
•	Test Case 3: Single order delivered: Dropdown will show single order with bar in green colour 
•	Test Case 4: Multiple orders not shipped: Dropdown will show item cards with scroll with bar in orange colour.
•	Test Case 4: Multiple orders shipped: Dropdown will show item cards with scroll with bar in blue colour.
•	Test Case 6: Multiple orders delivered: Dropdown will show item cards with scroll with bar in green colour.

Order Details Page:
•	Test Case 1: Order not Shipped: It will show simple order not ship message with other common details
•	Test Case 2: Order delayed shipping: This is the one case mentioned for implementation. This will show the warning message and buttons to accept new dates or cancel order and order status will show a red cross on shipping bar
•	Test Case 3: Order delated shipping user accepted: Same as above but user have accepted the new shipping dates so the warning message and button will not be visible
•	Test Case 4: Order Shipped: This is other case mentioned for implementation. In this we are showing the shipment tracking details and expected delivery date
•	Test Case5: Order delivered: This one is not mentioned in assignment so this is partially implemented. It will update status bar and show items delivered message.
