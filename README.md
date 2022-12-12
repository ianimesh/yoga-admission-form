# Yoga Classes Form

## Usage

### Sign up and Sign in

<img width="285" alt="image" src="https://user-images.githubusercontent.com/62604716/207098769-814bc86d-e525-4d35-b44d-becbee8151f8.png">

These are example sign in credentials.

<img width="286" alt="image" src="https://user-images.githubusercontent.com/62604716/207099250-d4890dd6-fdde-48a2-9423-a9e84b0eebc2.png">

To create a new user, 
* Fill up the sign up form (shown above). 
* Password must contain a upper case letter, a lower case letter and a number.
* Age should be between 18 and 65 years.

Form validation is done using regex. Invalid input will show an alert with corresponding error.

### Enrolling in a new batch

<img width="960" alt="image" src="https://user-images.githubusercontent.com/62604716/207100932-bdb5cc7d-f537-46aa-a5f5-8bbc0eda2fdc.png">

* Upon successful login user will be redirected to the dashboard as shown above.
* To enroll in a new batch user will have to select a month from the drop down that contains list of 4 months from current month.
* User will also have to select a batch in which he wants to be enrolled.
* User is allowed to enroll only once for a month (User will only be allowed to change the batch for next months). 
* On clicking "Pay" button, user will be redirected to payment page.
* Upon successful payment a new enrollment will be created.
* Current batches and enrollment history can be viewed in "my yoga batches" and "enrollment history" section.

<img width="960" alt="image" src="https://user-images.githubusercontent.com/62604716/207102708-8386aa93-515b-4b37-9294-d62023358517.png">

<img width="960" alt="image" src="https://user-images.githubusercontent.com/62604716/207102771-99558ac0-8022-44dc-a7f5-e0d16f9e7e64.png">

## About Database and Backend

### Database (SQLite Relational Database Django)

![image](https://user-images.githubusercontent.com/62604716/207097487-bdaea9e0-8acf-4d14-a6bf-45c196d8cf49.png)

In this diagram, the Subscribers table is the parent table and the Batches and Enrollments tables are child tables. The Subscribers table has a one-to-many relationship with the Enrollments table, where one Subscriber can have many Enrollments, but each Enrollment belongs to only one Subscriber. The Batches table has a one-to-many relationship with the Enrollments table, where one Batch can have many Enrollments, but each Enrollment belongs to only one Batch.

### Backend Django DjangoRestFramework

The Link to backend repository : https://github.com/ianimesh/yoga_backend

This project was created with ReactJS

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
