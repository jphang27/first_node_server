const http = require('http');
const requestHandler = require('./handler');
//mockData is fake data converted into a JSON file from the internet that Scott Roberts found
//not real data
const mockData = require('./data/mock.json');

const PORT = 3000;

// //First place to access request and do some logic
// //Example of setting a function as a variable
// const requestHandler = (req, res) => {};

const server = http.createServer((req, res) => {
    if(req.url === '/api/thing'){
        //do this
    }
    else if(req.url === '/api/other'){
        //do this
    }

    //Earlier the reason our cursor was hanging was because we weren't giving it a response
    //To end
    //2 formats a JSON Object or a String of a JSON 
    //String of a JSON good for transfer
    //JSON Object good for local.
    console.log(mockData);
    //Content-Type tells you that this is a JSON file or whatever file it should be.
    //WriteHead and SetHead are different ways to send an HTTP requests and receive a resposne
    res.writeHead(200, {
        'Content-Type': 'application/json',
    });
    
    //creating a new variable, and using filter
    //help filter the contents in the JSON file or whatever file in order,
    //To get the information you want.
    const newMock = mockData
    .filter(datum => datum.gender === 'female')
    .filter(datum => datum.age < 20)
    .map(datum => datum._id);
    res.end(JSON.stringify(newMock));

})
//err is considered an object. more exactly an arrow object
//if (err, req) => more than one argument it won't get rid of the ().
server.listen(PORT, err => {
    if(err){
        console.log("Hey!, Something is wrong with your server");
    }
    console.log(`You are running on port ${PORT}`);
});