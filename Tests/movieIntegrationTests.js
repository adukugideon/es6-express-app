const should =require('should');
const request =require('supertest');
const app =require('../index.js');
const mongoose =require('mongoose');
const Movie =require('../models/movieModel');
const agent =request.agent(app);

describe('Movie Crud Test', ()=>{
    it('Should allow a movie to be posted and return a viewed and _id',(done)=>{
const moviePost =require({title:'new Movie', year:1988, genre:'Action'});

        agent.post('/api/movies')
            .send(moviePost)
            .expect(200)
            .end((err, results)=>{
                results.body.viewed.should.not.equal(true);
                results.body.should.have.property('_id');
                done()
            })
    })

    afterEach((done)=>{
        Movie.remove().exec();
        done();
    })
})