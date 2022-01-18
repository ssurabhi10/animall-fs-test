# Animall Full Stack Assignment

## Pre-requisites
There are 3 small parts to this task:
1. A web app which generates data
2. A remote data store
3. A web app which consumes data from the store 


## Tasks

1. A web app which generates data
    * Start by cloning the repo. This is a simple React application which generates a mock page view event each time you click the button.
    * Enhance the full-stack-test application to send the event data to a remote data store each time a page view event occurs.
    * Deploy this application so it is publicly accessible.

2. A remote data store
    * Create and deploy a remote data store to house the data from the provider app.
    * Create and deploy a method of writing data to and reading data from the store.

3. A web app which consumes data from the store
    * Create a web application which fetches pageview events from your remote data store and    
    lists them in a table.
    * Provide a mechanism to update the table as new events occur. This can be automatic or
    triggered by a user action.
    * Deploy this application so it is publicly accessible.

## Notes

* Aim to spend no more than approximately 2 hours on this task.
* Feel free to cut corners, but make a note where you do, and  be prepared to explain what you would do in a production context
* Don't worry about authentication.
* We are not expecting you to build a custom API to read from and write to the data store (though you can if that is your preferred option). You can use whichever tools or prebuilt
services you prefer.
* In the consumer app, we are far more interested in the data fow than the visual design.
* Please feel free to use any tech stack. Just be prepared to discuss the rationale behind your choices.

## Be prepared to talk about
* What you did, how you did it, and how long it took
* Talk about the tech stack and any libraries used in your project and why you chose them
Your design and code should meet these requirements and be sufficiently fexible 
<br><br>
Please note this assignment is Strictly confidential and  privileged and only for the information of the intended recipient for the duration of the live assignment and may not be used, published or redistributed without the prior written consent of Animall Technologies. 

---

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).