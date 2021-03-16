import express from 'express';
import bodyParser from 'body-parser';
import { Category } from '../models/Category.js';

const addCategory = express.Router();
const urlencodedParser = bodyParser.urlencoded({ extended: false });

addCategory.get('/add-category', urlencodedParser, () => {
});

addCategory.post('/add-category', urlencodedParser, (req, res) => {
  if (!req.body) {
    return res.sendStatus(500);
  }
  const response = req.body.payload.data;
  Category.create({
    category: response.category,
    link: response.link,
    className: response.className,
    imgAlt: response.imgAlt,
    imgTitle: response.imgTitle,
    image: response.image,
  }).catch(() => {
    res.status(404).end();
    res.send(false);
  });
  res.send(true);
  return true;
});

export default addCategory;
