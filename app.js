const   express = require('express');
        app = express();
        bodyParser = require('body-parser');
        mongoClient = require('mongodb').MongoClient;
        ObjectId = require('mongodb').ObjectID;


app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static('assets'));

app.set('view engine', 'ejs');

app.get('/', (req, res) => {

    mongoClient.connect('url', (err, db) => {

        if (!err) {
            let todo = req.body.todo;
            let collection = db.collection('todoCollection');

            const find = collection.find();

            find.toArray((err, results) => {

                res.render('index', {
                    list: results
                });
            });
        } else {
            throw err    
            db.close();
        }
    });
});

app.get('/contribuitors', (req, res) => {
    res.send('Página onde vão ficar os dados dos criadores desse TodoIst')
})

app.post('/adicionar', (req, res) => {

    mongoClient.connect('url', (err, db) => {

        if (!err) {
            let todo = req.body.todo;
            let collection = db.collection('todoCollection');

            collection.insert({
                reminder: todo
            });
        } else {
            throw err
            db.close();
        }
    })
    res.sendStatus(200);
});

app.post('/remover', (req, res) => {

    mongoClient.connect('url', (err, db) => {

        if (!err) {
            let todo = req.body.removedTodo;
            let id = req.body.id;


            let collection = db.collection('todoCollection');

            collection.deleteOne({
                _id: ObjectId(id)
            })
        } else {
            throw err
            db.close();
        }
    });
    res.sendStatus(200);
});

app.listen(3000, () => {
    console.log('Ouvindo na 3000');
});
