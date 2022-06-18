# Kisan

In the web app, the user can view their contacts & history, keeping in mind the requirements, I have tired to follow it as closely as possible.

Libraries:

For frontend / client -

1. React js
2. TypeScript
3. React-Redux (saga)
4. Bootstrap
5. Sass


For Backend / server -

1. Node js + Express
2. Database - postgres
3. Connection b/w db and server - TypeORM
4. TypeScript

Good Practices -

1. Tried to modularize the code as much as possible so that the content could be re-used
2. By using Typescript, we are typesetting the functional and class definations, which reduces the chances of mistakes that could happen by passing wrong input to the parameters.
3. Tried to make variables and functional names according to their usage.

Decisions made - 

1. Created 3 backend apis for getContacts, postMessage, getHistory.
2. Added searching functionality to contact and history list
3. Added Routing which would differ in case of mobile as well as desktop view.
4. Added regex to check for OTP validation
5. Due to time constraint, I wasn't able to deploy my complete application on Heroku, hoverever, during my testing phase I did deploy a part of my frontend. Which you can view at - https://codesxas-kisan-client.herokuapp.com/
