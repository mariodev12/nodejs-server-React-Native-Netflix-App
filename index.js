const express = require('express');
const request = require('request');
const async = require('async');

import mongoose from 'mongoose'
import Shows from './models/shows'

const app = express();
const numTvShows = 1000

mongoose.connect('mongodb://localhost/shows');

app.get('/all', (req, res, next) => {
    async.timesLimit(numTvShows, 2, (i, callback) => {
        setTimeout(function(){
            var options = {
                url: 'http://api.tvmaze.com/shows/'+(i+1)+"?embed[]=episodes&embed[]=cast",
            }
            request(options, (error, response, body) => {
                var result = JSON.parse(body)
                var data = {
                    id: result.id ,
                    name: result.name ,
                    image: result.image ? result.image.original : null ,
                    details: {
                        genres: result.genres ,
                        year: result.premiered ,
                        description: result.summary ,
                        cast: result._embedded ? result._embedded.cast : null ,
                        episodes: result._embedded ? result._embedded.episodes : null
                    }
                };
                console.log(i)
                    callback(null, data)
            });
            }, 1000)
            }, (err, results) => {
                results.map((items) => {
                    const show = new Shows(items)
                    show.save()
                })
        });
         return next()
})

app.get('/shows/:id', (req, res, next) => {
    Shows.find({'details.genres': {$in: [req.params.id]}},function(err, shows){
        res.json(shows)
    })
})

app.listen('8010', () => {
    console.log('Listening on port 8010');
})
