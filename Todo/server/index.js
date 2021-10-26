// importing the dependencies
const express = require('express');
// const bodyParser = require('body-parser');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');


// defining the Express app
const app = express();

// defining an array to work as the database (temporary solution)
const ads = [
  {title: 'Hello, world (again)!'}
];

// adding Helmet to enhance your API's security
app.use(helmet());

// using bodyParser to parse JSON bodies into JS objects
app.use(express.json());
app.use(express.urlencoded({
    extended: true
  }));

// enabling CORS for all requests
app.use(cors());

// adding morgan to log HTTP requests
app.use(morgan('combined'));

// defining an endpoint to return all ads
// app.get('/', (req, res) => {
//   res.send(ads);
// });

app.post("/" , async(req, res) =>{
    try {
    // console.log(req.body.title);
    
    // const {dis} = req.body;
    
    const newTodo = await pool.query(
        "INSERT INTO todo (discription) VALUES($1) RETURNING *", 
        ['oo']
        );
    
    res.json(newTodo.rows[0]);
    
    } catch( err ){
    console.error(err.massage);
    }
    })
    ///


app.post('/', (req, res) => {
 console.log(req.body)
});

// starting the server
app.listen(3000, () => {
  console.log('listening on port 3000');
});
