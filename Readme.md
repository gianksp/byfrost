# Byfrost
-----
[![N|Solid](https://cdn2.cloudpro.co.uk/sites/cloudprod7/files/2018/10/twilio_mark_-_red.png)](https://nodesource.com/products/nsolid)

Twilio powered, NodeJS SMS forwarder. Imagine you are living overseas but you need to forward messages from a US number to your local number!

# Prerequisites
- Open a twilio account and obtain a demo phone number, you will need the Account SID and the Auth Token to create the Docker image.
-
# Run
- Clone project
- npm install
- TWILIO_ACCOUNT_SID=<TWILIO_ACCOUNT_SID> TWILIO_AUTH_TOKEN=<TWILIO_AUTH_TOKEN> npm run prepare
- PHONE=<PHONE> npm run serve
- npm start


# TODO
- Dockerize