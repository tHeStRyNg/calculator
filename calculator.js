// Import the express and body-parser modules
const express = require('express');
const bodyParser = require('body-parser');

// Create a new express application
const app = express();

// Use body-parser to parse form data sent from the HTML form
app.use(bodyParser.urlencoded({ extended: true }));

// Define a route for the homepage
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/calculator.html');
});

// Define a route for the calculator script
app.get('/calculator.js', (req, res) => {
  res.sendFile(__dirname + '/calculator.js');
});

// Define a route for calculating the result
app.post('/calculate', (req, res) => {
  // Get the input values from the form
  const num1 = parseFloat(req.body.num1);
  const num2 = parseFloat(req.body.num2);
  const operation = req.body.operation;

  // Perform the calculation based on the operation
  let result;
  switch (operation) {
    case 'add':
      result = num1 + num2;
      break;
    case 'subtract':
      result = num1 - num2;
      break;
    case 'multiply':
      result = num1 * num2;
      break;
    case 'divide':
      result = num1 / num2;
      break;
    default:
      res.send('Invalid operation');
      return;
  }

  // Send the result back to the HTML page
  res.send(`Result: ${result}`);
});

// Start the server and listen on port 3000
app.listen(3000, () => {
  console.log('Server listening on port 3000');
});