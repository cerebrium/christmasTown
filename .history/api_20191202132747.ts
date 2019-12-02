import dotenv from 'dotenv';
dotenv.config();
import express from 'express';
import mongoose from 'mongoose';

const app = express()

app.use(express.urlencoded({ extended: false}));
app.use(express.json());

mongoose.connect(process.env.MONGODB_URI);
const db = mongoose.connection;
db.once('open', () => {
    console.log('connected to mongo')
});
db.on('error', function(err) {
    console.log('an error occured', err)
})