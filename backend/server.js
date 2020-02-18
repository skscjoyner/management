import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';

import Document from './models/document';

const app = express();
const router = express.Router();

// middleware
app.use(cors());
app.use(bodyParser.json());

// bodyParser.urlencoded({
//     extended: true
//   })

mongoose.connect('mongodb://localhost:27017/documents', );
// { useNewUrlParser: true }

const connection = mongoose.connection;

// only listen once when db opens
connection.once('open', () => {
    console.log('MongoDB connected successfully')
});

router.route('/documents').get((req, res) => {
    Document.find((err, documents) => {
        if (err)
            console.log(err);
        else
            res.json(documents);
    });
});

router.route('/documents/:id').get((req, res) => {
    Document.findById(req.params.id, (err, document) => {
        if (err)
            console.log(err);
        else
            res.json(document);
    });
});

router.route('/documents/add').post((req, res) => {
    let document = new Document(req.body);
    document.save()
        .then(document => {
            res.status(200).json({'document': 'Added successfully'})
        })
        .catch(err => {
            res.status(400).send('Document was not added.');
        });
});

router.route('/documents/delete/:id').delete((req, res) => {
    Document.findByIdAndDelete({_id: req.params.id}, (err, issue) => {
        if (err)
            res.json(err);
        else
            res.json('Successfully removed document');
    });
});

app.use('/', router);

app.listen(4000, () => console.log('Server running on Port 4000'));
