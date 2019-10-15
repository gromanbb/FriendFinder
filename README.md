#### FriendFinder
Homework 11: Node and Express Servers Assignment
---
# FriendFinder

### Overview

FriendFinder is a compatibility-based application. This full-stack site will take in results from an user's survey and compare the answers with those from other users. The app will then display the name and picture of the best overall match.

### Before You Begin

1. The following Node.js Modules need to be installed before running FriendFinder:

    - [Express](https://www.npmjs.com/package/express)
    - [Path](https://www.npmjs.com/package/path)

### Instructions

1. Navigate to the root of your project.

2. Install the npm modules or packages. Below is the line of code that you'll need to use:
    ```
    npm install
    ```
3. Run the FriendFinder CLI as follows:
	```
	node server.js
	```
	![Demo](https://github.com/gromanbb/FriendFinder/blob/master/demo/FriendFinder_Home.png)

### What FriendFinder does

- FriendFinder will allow an user to find a best match based on the answers gathered from a survey of 10 questions versus those from other users.

	![Demo](https://github.com/gromanbb/FriendFinder/blob/master/demo/FriendFinder_Survey_a.png)
	
	![Demo](https://github.com/gromanbb/FriendFinder/blob/master/demo/FriendFinder_Survey_b.png)

- It will alert the user to complete the whole survey before submitting it.

	![Demo](https://github.com/gromanbb/FriendFinder/blob/master/demo/FriendFinder_Validation_a.png)
	
	![Demo](https://github.com/gromanbb/FriendFinder/blob/master/demo/FriendFinder_Validation_b.png)

- Immediately after the survey's submission, FriendFinder will display the name and picture of the best match.

	![Demo](https://github.com/gromanbb/FriendFinder/blob/master/demo/FriendFinder_BestMatch.png)
