const expect = require('expect');
const request = require('supertest');

const {app} = require('./../server');
const {Info} = require('./../models/info');

beforeEach((done) => {
  Todo.remove({}).then(() => done());
});

describe('POST /todos', () => {
  it('should create a new todo', (done) => {
    var text = 'Test todo text';

    request(app)
      .post('/infos')
      .send({name})
      .expect(200)
      .expect((res) => {
        expect(res.body.name).toBe(name);
      })
      .end((err, res) => {
        if (err) {
          return done(err);
        }

        Info.find().then((infos) => {
          expect(infos.length).toBe(1);
          expect(todos[0].name).toBe(name);
          done();
        }).catch((e) => done(e));
      });
  });

  it('should not create todo with invalid body data', (done) => {
    request(app)
      .post('/infos')
      .send({})
      .expect(400)
      .end((err, res) => {
        if (err) {
          return done(err);
        }

        Info.find().then((infos) => {
          expect(infos.length).toBe(0);
          done();
        }).catch((e) => done(e));
      });
  });
});
