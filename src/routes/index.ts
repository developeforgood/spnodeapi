//import { Router } from 'express';
const express = require('express')
import UserRouter from './Users';
import projectRoute from './project'

import { SPFetchClient } from '@pnp/nodejs-commonjs';
import {sp} from '@pnp/sp-commonjs';



sp.setup({
    sp:{
        fetchClientFactory: () =>{
            return new SPFetchClient(
                'https://m365accelerator.sharepoint.com/sites/mpower',
                '37a43989-2f92-43cf-ba1a-4118bab0d41c',
                'u2X99BM+C/Twv0cv6Gf9BJQFg42cQIGefWFhJM+PB88='
            );
        },
    },
});


// Init router and path
//const router = Router();
const router = express.Router();

// Add sub-routes
 router.use('/', UserRouter);

router.use('/api/project', projectRoute)

// Export the base-router
export default router;
