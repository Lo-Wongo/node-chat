<img src="https://devmounta.in/img/logowhiteblue.png" width="250" align="right">

# Project Summary

In this project, we will create a local node chat server. After building out the server, we'll use postman unit tests to make sure the API has been built out correctly and also use a pre-built front-end to interact with the API.

<b> insert image here </b>

## Step 1

### Summary

In this step, we will create a `package.json` and install our dependencies.

### Instructions

* In the root of the project, create a `package.json` file.
* Using npm, install and save `express` and `body-parser` to the `package.json`.

<details>

<summary> Detailed Instructions </summary>

<br />

Using `npm` we can quickly create a `package.json` file. In your terminal, when in the root of the project, run `npm init -y`. The `-y` flag will create `package.json` file with all the default values. It's that simple. Now we can use `npm` to install packages and save them to the `package.json` file using the `--save` flag. Run `npm install --save express body-parser` to install and save both packages.

</details>

### Solution

<b> insert giphy here </b>

## Step 2

### Summary

In this step, we will create a `.gitignore` file so our `node_modules` folder doesn't get tracked.

### Instructions

* Create a `.gitignore` file in the root of the project.
* Add `node_modules` to the file.

### Solution

<details>

<summary> <code> .gitignore </code> </summary>

```
node_modules
```

</details>

## Step 4

### Summary

In this step, we will create our `index.js` file.

### Instructions

* Open `server/index.js`.
* Require `express` and `body-parser`.
* Create an express app.
* Configure the app to parse JSON from the body.
* Configure the app to listen on port 3000 and display a message when it is listening.

<details>

<summary> Detailed Instructions </summary>

<br />



</details>

### Solution

<details>

<summary> <code> server/index.js </code> </summary>

```js
const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use( bodyParser.json() );

const port = 3000;
app.listen( port, () => { console.log(`Server listening on port ${port}.`); } );
```

</details>

## Step 5

### Summary

In this step, we will create a controller that will handle the logic to create, read, update, and delete messages. A message will be an object with an `id`, `text`, and `time` property. 

### Instructions

* Create a `controllers` folder in `server/`.
* Create a `messages_controller` in `server/controllers/`.
* Open `server/controllers/messages_controller.js`.
* Create an array to hold the messages.
* Create a variable that will keep track of what `id` to assign to messages.
  * The `id` should start at `0` and increment after every creation.
* Export an object with methods to create, read, update, and delete messages.
  * Create - Should be able to create a message using `text` and `time` off of the request body.
    * Should be able to assign a unique `id` to the message.
  * Read - Should be able to return the messages array.
  * Update - Should be able to update the `text` property of a message using the request body.
    * Should be able to determine which message to update using an `id` query parameter.
  * Delete - Should be able to delete a message using an `id` query parameter.
* All methods should send a response of the updated messages array.

<details>

<summary> Detailed Instructions </summary>

<br />



</details>

### Solution

<details>

<summary> <code> server/controllers/messages_controller.js </code> </summary>

```js
let messages = [];
let id = 0;

module.exports = {
  create: ( req, res ) => {
    const { text, time } = req.body;
    messages.push({ id, text, time });
    id++;
    res.status(200).send( messages );
  },

  read: ( req, res ) => {
    res.status(200).send( messages );
  },

  update: ( req, res ) => {
    const { text } = req.body;
    const updateID = req.params.id;
    const messageIndex = messages.findIndex( message => message.id == updateID );
    let message = messages[ messageIndex ];

    messages[ messageIndex ] = {
      id: message.id,
      text: text || message.text,
      time: message.time
    };

    res.status(200).send( messages );
  },

  delete: ( req, res ) => {
    const deleteID = req.params.id;    
    messageIndex = messages.findIndex( message => message.id == deleteID );
    messages.splice(messageIndex, 1);
    res.status(200).send( messages );
  }
};
```

</details>

## Step 6

### Summary

In this step, we will hook up our controller to your app in `server/index.js`.

### Instructions

* Open `server/index.js`.
* Require the messages controller.
* Create a `post`, `get`, `put`, and `delete` endpoint that use the corressponding method on the messages controller.
* The url for this api should be `/api/messages`.
  * Remember to add on a query parameter of `id` for the methods that are using it.

<details>

<summary> Detailed Instructions </summary>

<br />



</details>

### Solution

<details>

<summary> <code> server/index.js </code> </summary>

```js
const express = require('express');
const bodyParser = require('body-parser');
const mc = require( __dirname + '/controllers/messages_controller');

const app = express();

app.use( bodyParser.json() );

const baseURL = "/api/messages";
app.post( baseURL, mc.create );
app.get( baseURL, mc.read );
app.put( `${baseURL}/:id`, mc.update );
app.delete( `${baseURL}/:id`, mc.delete );

const port = 3000;
app.listen( port, () => { console.log(`Server listening on port ${port}.`); } );
```

</details>

## Step 7

### Summary

In this step, we will test the API endpoints using postman unit tests.

### Instructions

* Startup the API and make sure it doesn't crash.
* Open postman.
* Import the `postman_collection` into postman.
* Run the collection's tests.
  * If all tests do not pass, revist previous steps.
  * Tests will only pass if the `messages` array is empty.

### Solution

<b> insert giphy here </b>

## Step 8

### Summary

In this step, we will setup the API to serve our front-end files.

### Instructions

* In your terminal, change your directory into `public`.
* Run `npm install`.
* Run `npm run build`.
* Open `server/index.js`.
* Use `express.static` to serve the `public/build` folder.
* Open `http://localhost:3000/` to see the front-end interact with the API.

### Solution

<b> insert giphy here </b>

## Black Diamond

* Modify the chat api to include a display name for each message.
* Host the chat api.
* Modify the `create-react-app` front-end to hit the hosted chat api instead.
* See if you can chat with your classmates.

## Contributions

If you see a problem or a typo, please fork, make the necessary changes, and create a pull request so we can review your changes and merge them into the master repo and branch.

## Copyright

© DevMountain LLC, 2017. Unauthorized use and/or duplication of this material without express and written permission from DevMountain, LLC is strictly prohibited. Excerpts and links may be used, provided that full and clear credit is given to DevMountain with appropriate and specific direction to the original content.

<p align="center">
<img src="https://devmounta.in/img/logowhiteblue.png" width="250">
</p>

