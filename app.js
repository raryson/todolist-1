const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoClient = require('mongodb').MongoClient;
const ObjectId = require('mongodb').ObjectID;


app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(express.static('assets'));

app.set('view engine', 'ejs');

app.get('/', (req, res) => {

    mongoClient.connect('mongodb://dbdogs:w-h5U#Qz4{n@tatooine.mongodb.umbler.com:48145/dbdogs', (err, db) => {

        if (!err) {
            let todo = req.body.todo;
            let collection = db.collection('dogsCollection');

            const find = collection.find();

            find.toArray((err, results) => {

                res.render('index', {
                    list: results
                });
            });
        }
        db.close();
    });

});

app.post('/addTodo', (req, res) => {

    mongoClient.connect('mongodb://dbdogs:w-h5U#Qz4{n@tatooine.mongodb.umbler.com:48145/dbdogs', (err, db) => {

        if (!err) {
            let todo = req.body.todo;
            let collection = db.collection('dogsCollection');

            collection.insert({
                reminder: todo
            });

        }
        db.close();
    })
    res.sendStatus(200);
});

app.post('/removeTodo', (req, res) => {

    mongoClient.connect('mongodb://dbdogs:w-h5U#Qz4{n@tatooine.mongodb.umbler.com:48145/dbdogs', (err, db) => {

        if (!err) {
            let todo = req.body.removedTodo;
            let id = req.body.id;


            let collection = db.collection('dogsCollection');

            collection.deleteOne({
                _id: ObjectId(id)
            })

        } else {
            throw err
        }
        db.close();


    });
    res.sendStatus(200);
});




app.listen(3000, () => {
    console.log('Ouvindo na 3000');
});
