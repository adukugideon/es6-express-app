const should = require('should'),
    sinon = require('sinon');

describe('Movie Controller Tests:', ()=>{
    describe('Post', ()=>{
        it('should not allow an empty title on post',()=>{
            let Movie = (movie)=>{this.save = ()=>{}};

            let req = {
                body: {
                    author: 'Jon'
                }
            }

        let res = {
                status: sinon.spy(),
                send: sinon.spy()
            }

           let movieController = require('../controllers/movieController')(Movie);

            movieController.post(req,res);

            res.status.calledWith(400).should.equal(true, 'Bad Status ' + res.status.args[0][0]);
            res.send.calledWith('Title is required').should.equal(true);
        })
    })
})