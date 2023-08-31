const cors = require('cors');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const emails = require('../routes/emails');
const express = require('express');
const path = require('path');
const fileUpload = require('express-fileupload');
module.exports = function (app) {
  app.use(cookieParser());
  app.use(bodyParser.urlencoded({ limit: '10mb', extended: true }));
  app.use(bodyParser.json({ limit: '10mb', extended: true }));
  app.use(express.static('public'));
  app.use(cors());
  app.use(fileUpload());
  if (process.env.NODE_ENV === 'production') {
    app.use(express.static('client/build'));
  }
  app.use('/api/emails', emails);
  if (process.env.NODE_ENV === 'production') {
    app.get('*', (req, res) => {
      res.sendFile(
        path.resolve(__dirname, '../client', 'build', 'index.html'),
        function (err) {
          if (err) {
            res.status(500).send(err);
          }
        }
      );
    });
  }
};
