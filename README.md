# Typing Duel

Welcome to typing Duel app, this is a final project for lighthouse labs. 

It’s an Single Page app that allows you to practice typing and optionally compete with other users.

For technologies - our frontend is written in React.  The backend is Rails with a Postgres  database.  We also utilize websockets for the game competition functionality.

## Screen Shots

- This is the main page showing the main single page design.
!["Typing Duel Main Page"](https://github.com/ReidGibson-Bingham/LHL_final/blob/master/docs/TD-ScreenShot-MainScreen-notStarted.png)

- Login or Register...
!["Login/Register"](https://github.com/ReidGibson-Bingham/LHL_final/blob/master/docs/TD-ScreenShot-Login-Registration.png)

- Game Mode Buttons.
!["Game Mode Buttons"](https://github.com/ReidGibson-Bingham/LHL_final/blob/master/docs/TD-ScreenShot-GameModeButtons.png)

- UI for Single player mode.
!["Single Player Game"](https://github.com/ReidGibson-Bingham/LHL_final/blob/master/docs/TD-ScreenShot-SinglePlayer-notStarted.png)

- This is the main area where the action happens there is the text to type, input text and the keyboard.
!["Main Typing Area"](https://github.com/ReidGibson-Bingham/LHL_final/blob/master/docs/TD-ScreenShot-TypingText.png)

- Here are the Statistics from past games.
!["Game Stats Sidebar"](https://github.com/ReidGibson-Bingham/LHL_final/blob/master/docs/TD-ScreenShot-GameStatsSidebar.png)

- Here's the Competitive Mode UI.
!["Two Player Competitive Game"](https://github.com/ReidGibson-Bingham/LHL_final/blob/master/docs/TD-ScreenShot-Competitve-inProgress.png)

- The Competitive Dual Sidebar shows the progress bars and chat area.
!["Competitive Dual Sidebar"](https://github.com/ReidGibson-Bingham/LHL_final/blob/master/docs/TD-ScreenShot-CompetitiveDuelSidebar-inProgress2.png)


## React + Rails No-Fluff Boilerplate
This boillerplate is created and provided by Lighthouse Labs.

A boilerplate project for anyone interested in making a project that uses React and Rails.

Note! This boilerplate has _no fluff_! That means that there's nothing set up for you to do authentication stuff, there's no Redux stuff, and there's no React Router stuff.

The main important bit is that the React project has `proxy` set to `localhost:3001` in the `package.json` file. Take a look!



## Set up and running for the app


You need **Three** terminals for this app.

## Ruby Backend server command

In one terminal in the root directory, run `bundle install` to install the dependencies. Run `bin/rake db:setup` to create the databases (called rails_project_development by default). Run `bin/rails s` to run the server.

## Websocket server command

Use seconde terminal under 'websocket server' directory, run "npm install" to install the dependencies.

- npm start

Use above command to start webSockets server for competitive mode.

## Frontend command

Use third termial under 'client' directory, run "npm install" to install the dependncies.

- npm start

Use above command to start front end browser, go to `localhost:3000` in your browser.




## commands for granting privileges to psql roles

- GRANT ALL PRIVILEGES ON DATABASE lhl_final_development TO labber;

- ALTER USER labber WITH SUPERUSER

- We have to put the database.yml in the gitignore if we don't want to push it to the master. so we should all agree on what role we want to share or put the file in the git ignore

## Dependencies

-boilerplate from https://github.com/NimaBoscarino/react-rails-boilerplate

Dependencies we added:

in the source gemfile:
  -gem 'rack-cors' to allow cross-origin AJAX requests
  -gem 'rspec-rails', '~> 3.5' for testing, we may do some of this post presentation
  
in client package.js:
  -"react-simple-keyboard": "^3.4.107",
  -"react-slide-toggle": "^0.2.5",
  -"socket.io-client": "^4.4.1",
  -"universal-cookie": "^4.0.0",
  -"react-bootstrap": "^2.2.3",
  -"axios": "^0.26.1",
  -"sass": "sass src/styles:public/styles --watch --no-source-map",
  -"sass": "^1.50.1"
  
in secondServer/express-server:
  -"cors": "^2.8.5",
  -"express": "^4.17.1",
  -"socket.io": "^4.4.1"
 


