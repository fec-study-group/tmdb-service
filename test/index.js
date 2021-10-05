const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../index.js');
const { expect } = chai;
chai.use(chaiHttp);

describe('Test demo', () => {

    describe('test a main page', () => {

        //Aqui comienza el test.
        it('GET /', (done) => {

            chai.request(app)
                .get('/nonExists')
                .end(function(err, res){

                    if (err) done(err)

                    expect(res).to.have.status(200);
                    done()

                });
        })
    })
})
