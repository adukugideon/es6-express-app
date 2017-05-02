import Should from 'should';
import Sinon from 'sinon';
import movieController from '../controllers/movieController';
describe('Movie Controller Tests:', ()=>{
    describe('Post', ()=>{
        it('should not allow an empty title on post',()=>{
            let Movie = (movie)=>{this.save = ()=>{}};

            let req = {
                body: {
                    genre: 'Comedy'
                }
            }

        let res = {
                status: Sinon.spy(),
                send: Sinon.spy()
            }

         //  let movieController = require('../controllers/movieController')(Movie);

            movieController.postMovie(req,res);

            res.status.calledWith(400).Should.equal(true, 'Bad Status ' + res.status.args[0][0]);
            res.send.calledWith('Title is required').Should.equal(true);
        })
    })
})
