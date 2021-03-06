# UX Developer Intern & Web Developer Intern Challenge - Technical Assessment

This is a repository for The Shoppies App. It has been created with React, CSS, and Axios. This app is connected to [The Open Movie Database API](https://www.omdbapi.com) that provides movie information to the user. Instructions on how to run the application locally are found further down in this README.

## Location of deployed application
The application is deployed on Netlify and can be visited [here](https://movie-awards.netlify.app/)

## Technical Requirements
- Search results should come from OMDB's API 
- Each search result should list at least its title, year of release and a button to nominate that film
- Updates to the search terms should update the result list
- Movies in search results can be added and removed from the nomination list
- If a search result has already been nominated, disable its nominate button
- Display a banner when the user has 5 nominations.

## Stretch goals attempted
- Save nomination lists if the user leaves the page
- Animations for loading, adding/deleting movies, notifications

## Additional feature
- When movie is not found in database, it will render 'Movie is not found!' in the UI 

## Further Improvements / Features to be added
- Responsive design for mobile users
- Pagination: At the moment the search only shows the first 10 results. To improve user experience in nominating movies, user should be able to browse the results 
- User Authentication allow different user to have different nomination list 
- Attractive UI 

## Instructions to run assignment locally
1. Clone this repository.
2. Cd into the project folder, 
3. Run ```npm install``` or ```yarn install```.

Once dependencies have been installed, you can run npm start to run the Frontend application locally on Port 3000.

Dependencies include:

- "axios": "^0.21.1"
- "classnames": "^2.2.6"
- "react": "^17.0.1"

This repository has been deployed on [NETLIFY](https://movie-awards.netlify.app/) and stored on [Github](https://github.com/andreiskandar/movie-awards)

There is a .env.example file that contains the format for the environment variables needed to run this application. Please input your personal key if you wish to test this application locally. You can obtain API key from [OMDB](http://www.omdbapi.com/apikey.aspx)  

NOTE - the deployed applications do not require an API key to run. Just visit the sites and they work as intended.

## Screenshots

![1gify](https://user-images.githubusercontent.com/56459037/103966828-81df7300-5115-11eb-903e-d2ee030caa2c.gif)
![2gif](https://user-images.githubusercontent.com/56459037/103966896-a4718c00-5115-11eb-907d-d1c514658625.gif)
![3g](https://user-images.githubusercontent.com/56459037/103966943-bc491000-5115-11eb-8b11-44683ffa5877.gif)

