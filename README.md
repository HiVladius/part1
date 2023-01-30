React App Readme
This is a simple React app that displays a course title and details about its parts and exercises.

Dependencies
React: A JavaScript library for building user interfaces.
ReactDOM: A package that serves as the entry point to the DOM (Document Object Model) and server renderers for React.
Code Explanation
The Title component takes in a prop course and returns an h1 header with the course title.
The Content1 component takes in props part1, part2, and part3 and returns a p element displaying the details of each part.
The App component returns the Title and Content1 components along with the total number of exercises in the course.
The ReactDOM.render function is called to render the App component inside the DOM element with the id of root.
Running the App
Make sure to have the dependencies installed, then run the following command in the terminal:

sql
Copy code
npm run start


