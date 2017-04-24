const should = require('should'),
    sinon = require('sinon');
 
describe('movie Controller Tests:', function(){
    describe('Post', function(){
        it('should not allow an empty title on post', function(){
            let Movie = function(movie){this.save = function(){}};

            let req = {
                body: {
                   year:1988
                }
            }

            let res = {
                status: sinon.spy(),
                send: sinon.spy()
            }
let movieController = require('../controller/movieController');
    
            movieController.addMovie(req,res);

            res.status.calledWith(400).should.equal(true, 'Bad Status ' + res.status.args[0][0]);
            res.send.calledWith('Title is required').should.equal(true);
        })
    })
})