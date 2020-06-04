const mongoose = require('mongoose');
const { MongoMemoryServer } = require('mongodb-memory-server');
const request = require('supertest');
const app = require('../lib/app.js');
const Dog = require('../lib/models/Dog');

describe('app routes', () => {
  const mongo = new MongoMemoryServer();
  beforeAll(() => {
    return mongo.getUri()
      .then(uri => mongoose.connect(uri, {
        useUnifiedTopology: true,
        useNewUrlParser: true
      }));
  });

  beforeEach(() =>{
    return mongoose.connection.dropDatabase();
  });

  afterAll(()=> {
    return mongoose.connection.close();
  });
  
  it('creates a new dog', () => {
    return request(app)
      .post('/dogs')
      .send({
        name: 'Spot',
        age: 5,
        color: 'red'
      })
      .then(res => {
        expect(res.body).toEqual({
          _id: expect.anything(),
          name: 'Spot',
          age: 5,
          color: 'red',
          __v: 0
        });
      });
  });

  it('creates a list of dogs', async() => {
    await Dog.create([
      {
        name: 'Spot',
        age: 5,
        color: 'red'
      },
      {
        name: 'Rover',
        age: 6,
        color: 'blue'
      }
    ]);
    return request(app)
      .get('/dogs')
      .then(res => {
        expect(res.body).toEqual(
          [
            {
              _id: expect.anything(),
              name: 'Spot',
              age: 5,
              color: 'red',
              __v: 0
            },
            {
              _id: expect.anything(),
              name: 'Rover',
              age: 6,
              color: 'blue',
              __v: 0
            },
          ]);
      });
  });

  it('creates a new dog', () => {
    return request(app)
      .post('/dogs')
      .send({
        name: 'Spot',
        age: 5,
        color: 'red'
      })
      .then(res => {
        expect(res.body).toEqual({
          _id: expect.anything(),
          name: 'Spot',
          age: 5,
          color: 'red',
          __v: 0
        });
      });
  });
});
