import express from 'express';
import config from '../config';
import initializeDb from '../middelware';
import middelware from '../middelware';
import restaurant from '../controller/restaurant';

let router = express();

//connect to db
initializeDb(db => {

    router.use(middelware({config, db}));

   // api routtes v1
   router.use('/restaurant', restaurant({config, db}))
});

export default router;