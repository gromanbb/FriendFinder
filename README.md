#### FriendFinder
Homework 11: Node and Express Servers Assignment
---
# FriendFinder

### Overview

FriendFinder is a text-based Command Line Interface (CLI) that allows users to execute commands for viewing the information of all products available for sale or buying products (as long as there are enough items in stock). 

### Before You Begin

1. The following Node.js Modules need to be installed before running FriendFinder:

    - [Mysql](https://www.npmjs.com/package/mysql)
    - [Inquirer](https://www.npmjs.com/package/inquirer)
    - [Clear](https://www.npmjs.com/package/clear) 

2. You also need to run the `FriendFinder_Seeds1.sql` script from Mysql to create the database and the products table.

![Demo](https://github.com/gromanbb/FriendFinder/blob/master/images/FriendFinderC_Seeds1.png)

### Instructions

1. Navigate to the root of your project.

2. Install the npm modules or packages. Below is the line of code that you'll need to use:
    ```
    npm install
    ```
3. Run the FriendFinder CLI as follows:
	```
	node FriendFinderCustomer.js
	```

​	![Demo](https://github.com/gromanbb/FriendFinder/blob/master/images/FriendFinderCustomer.png)

### What each command does

​		![Demo](https://github.com/gromanbb/FriendFinder/blob/master/images/FriendFinderC_Menu.png)

- FriendFinder will display a list of products available for sale, including their IDs, names, prices and remaining quantities.

  ![Demo](https://github.com/gromanbb/FriendFinder/blob/master/images/FriendFinderC_View.png)

- It will allow the user to choose a product and specify how many units to buy.

  ![Demo](https://github.com/gromanbb/FriendFinder/blob/master/images/FriendFinderC_BuyProd.png)

  ![Demo](https://github.com/gromanbb/FriendFinder/blob/master/images/FriendFinderC_BuyQty.png)

- If the quantity ordered is less than what is currently in stock, FriendFinder will let the user know that the order has been placed and will display the total cost. It will also update the stock to reflect the quantity remaining after the purchase.

  ![Demo](https://github.com/gromanbb/FriendFinder/blob/master/images/FriendFinderC_PO.png)

  ![Demo](https://github.com/gromanbb/FriendFinder/blob/master/images/FriendFinderC_productsTable.png)

- Otherwise, FriendFinder will notify the user that the quantity ordered is insufficient.

  ![Demo](https://github.com/gromanbb/FriendFinder/blob/master/images/FriendFinderC_NoStock.png)
