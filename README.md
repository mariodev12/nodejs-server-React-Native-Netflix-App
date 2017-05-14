# NodeJS server for React Native Netflix App

NodeJS server made for [React Native Netflix App](https://github.com/mariodev12/react-native-netflix) that takes 1000 tv shows from TvMaze.com and saves into MongoDB and find all shows from a particular genre.  

Requirements 
------------

    $ NodeJS
    $ MongoDB

Installation
------------

    $ clone this repo
    $ npm install
    $ npm start
    
Documentation
------------

  ### Endpoints
  
    1.- /all to fetch all tv shows and save into mongoDB
    2.- /shows/:id where id is a genre and get all tv shows from a genre 
    
  ### Genres
  
    Drama, Action, Fantasy, Horror, Romance, Crime, Thriller, Mystery, 
    Science-Fiction, Comedy, Family, Music, Adventure, Espionage, Supernatural
 
  ### TVMaze Api
  
    http://www.tvmaze.com/api

External components
------------

* [express](https://github.com/expressjs/express)
* [request](https://github.com/request/request)
* [async](https://github.com/caolan/async)
* [mongoose](https://github.com/Automattic/mongoose)

Tips and tricks
---------------

If you want to know more about my motivation to make this you can find my Youtube video [SNodeJS - Netflix App: Servidor NodeJS con MongoDB para React Native](https://www.youtube.com/watch?v=dVIuxEDhAyw)

Thanks
------

**Mario Diez** © 2017+, Mario Diez. Released under the [MIT License].<br>
Authored and maintained by Mario Diez.

> [mariodiezgarcia.com](http://www.mariodiezgarcia.com) &nbsp;&middot;&nbsp;
> GitHub [@mariodev12](https://github.com/mariodev12) &nbsp;&middot;&nbsp;
> Youtube [@mariodiezoficial](https://www.youtube.com/channel/UCisGMoxaVxJMcbio2FBHORg) &nbsp;&middot;&nbsp;
> Twitter [@mariodev_](https://twitter.com/mariodev_)

[MIT License]: http://mit-license.org/
