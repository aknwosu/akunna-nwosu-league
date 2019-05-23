# Better Doctor Frontend Implementation

This a Javascript(React) implemented SPA that enables users get a list of doctors using their location or a value entered in the search bar.

It gets this data using the [**Better Doctor**](https://developer.betterdoctor.com) API that retrieves details of doctors based on the location provided.


### Instructions
1. Run `npm install` to install the necessary deppendencies.
2. Run `npm start` to start the application locally.


### Packages used
- React
- [React Redux](https://react-redux.js.org/) - For managing redux store in the react app.
- [Redux](https://redux.js.org) - For managing store and state in the app.
- [Styled Components](https://www.styled-components.com/)
 

### Limitations
The Better Doctor API will only retrieve doctors in the US region and I have limited the maximum number of results to 60, displaying 10 results on each page.

The results will display the distance from the user to the closest Practice and will not display any distance if just postal codes are used.

### Accepted Inputs Include
  - Latitude,Longitude,range (miles) e.g. `37.413,-122.547,100` and this will get doctors within the selected Latitude and Longitude up to a 100 mile radius.
  - US postal codes e.g. `NY` or `ny`
