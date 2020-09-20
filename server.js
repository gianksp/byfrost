const http = require('http');
const express = require('express');
const { urlencoded } = require('body-parser');
const MessagingResponse = require('twilio').twiml.MessagingResponse;

const app = express();
app.use(urlencoded({ extended: false }));

app.post('/sms', (req, res) => {
  const twiml = new MessagingResponse();

  // Access the message body and the number it was sent from.
  console.log(`Incoming message from ${req.body.From}: ${req.body.Body}`);

  twiml.message(req.body.Body);

  res.writeHead(200, {'Content-Type': 'text/xml'});
  res.end(twiml.toString());
});

http.createServer(app).listen(3101, () => {
  console.log('Express server listening on port 3101');
});
