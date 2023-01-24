const express = require('express');
const app = express();

app.use(express.static(__dirname + '/public'));

/* Structure of middleware and functions in express.js
    Middleware can be used glabally or locally. 
*/

const simpleLogger = (req, res, next) => {
    console.log('${req.url} - ${req.method} - ${new Date().tooISOString()}');
    const name = req.query.name;
    if (name == 'Nayem') {
        return res.json({ message: 'Bad Request'});
    }
    next();
};
// middleware for global;

app.use(simpleLogger);

// For global use app.use(simpleLogger);
app.get('/hello', simpleLogger, (req, res, next) => {
    res.json({ message: 'Hello' });
});

app.listen(8000,() => {
    console.log('Application running on port 8000');
});
