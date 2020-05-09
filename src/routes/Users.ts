import { Request, Response, Router } from 'express';
import { BAD_REQUEST, CREATED, OK } from 'http-status-codes';
import { ParamsDictionary } from 'express-serve-static-core';


import { paramMissingError } from '@shared/constants';

// Init shared
const router = Router();



router.get('/getall', async (req: Request, res: Response) => {
    

    return res.status(OK).send(
        {
            message:"getting deta"  
        }
    );
});


/******************************************************************************
 *                                     Export
 ******************************************************************************/

export default router;
