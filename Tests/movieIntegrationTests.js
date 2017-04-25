const should = require('should'),
    request = require('supertest'),
    app = require('../index.js'),
    mongoose = require('mongoose'),
    Movie = mongoose.model('Movie'),
    agent = request.agent(app);


describe('Movie Crud Test', function(){
    it('Should allow a movie to be posted and return a viewed and _id', function(done){
let moviePost = {title:'new Movie', year:1988, genre:'Action'};

        agent.post('/api/movies')
            .send(moviePost)
            .expect(200)
            .end(function(err, results){
                results.body.read.should.not.equal(false);
                results.body.should.have.property('_id');
                done()
            })
    })

    afterEach(function(done){
        Movie.remove().exec();
        done();
    })
})