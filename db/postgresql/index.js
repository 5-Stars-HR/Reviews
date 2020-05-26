const { Client } = require('pg');

const client = new Client({
  user: 'postgres',
  port: '5432',
  database: 'reviews',
})

client.connect( (err) => {
  if (err) {
    console.log('Error from connecting to postgreSQL DB: ', err);
  } else {
    console.log(' Successfully connected to postgresSQL DB ');
  }
})

module.exports.client = client;