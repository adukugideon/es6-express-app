var should = require('should'),
    request = require('supertest'),
    app = require('../index.js'),
    mongoose = require('mongoose'),
    Movie = mongoose.model('Movie'),
    agent = request.agent(app);


describe('Movie Test', function(){
    it('Should allow a movie to be posted and return a read and _id', function(done){
        var moviePost = {title:'new Movie', year:1988, genre:'Fiction'};

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