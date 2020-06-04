const mongoose = require('mongoose');
const { MongoMemoryServer } = require('mongodb-memory-server');

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
    
  });
});
