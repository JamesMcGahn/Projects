# SmartBrain (FrontEnd) Project

The SmartBrain Project was the final Project in Andrei Neagoie - The Complete Web Developer Course. The goal of this project was to complete a full stack app.

For the backend portion [Click Here](https://github.com/Almag3st/Projects/tree/master/Projects%20From%20Tuts/SmartBrainAPI)

## Link

https://shielded-bastion-49391.herokuapp.com/

## Usage

Users can register to the app or if they are returning they can simply sign in. Once the user completes the previous step, their user profile will load on the page. They can provide a link to a picture in the input box. The app will then display the picture on screen. If there is a human face, a box will display around the the human face. This is done by using the Clarifai face detection API. User's "rank" will increase based on how many pictures they submit. The front end of the app is connected to a backend Node.js/Express server. Users information is stored in a PostgreSQL database. (Passwords hashed and salted using bycrpt.)

![](project_demo.gif)

## Tech Stack

- Html
- CSS
- Javascript/JSX
- React
- Node.js
- Express
