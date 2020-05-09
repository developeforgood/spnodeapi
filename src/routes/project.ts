import {Router , Request , Response} from 'express';
import bodyParser from 'body-parser';

import {sp} from '@pnp/sp-commonjs';

import { IItemAddResult } from '@pnp/sp-commonjs/items' ;
import { OK } from 'http-status-codes';

const router = Router();

const listName = "Projects";

router.get('/getallProject', async (req , res) =>{
    try {
        const itemsRetrievResult : any[] = await sp.web.lists.getByTitle(listName).items.select(
            'ID',
            'ProjectName',
            'ProjectDescription',
            'ProjectStartDate',
            'ProjectEndDate',
            'ForeCastEndDate',
            'TotalRevenue',
            'ProjectType',
            'Currency'

        )
        .get();
        res.status(200).send(itemsRetrievResult);
    }catch (error){
        console.log(error);
        res.status(401).send(error);
    
    
    }
})


router.get('/yupp', async (req: Request, res: Response) => {
    

    return res.status(OK).send(
        {
            message:"getting deta"  
        }
    );
});

router.post('/saveProject' , async (req, res) =>{
    try{
        const itemAddResult: IItemAddResult = await sp.web.lists
        .getByTitle(listName)
        .items.add({
            ProjectName:req.body.ProjectName,
            ProjectDescription:req.body.ProjectDescription,
            ProjectStartDate:req.body.ProjectStartDate,
            ProjectEndDate:req.body.ProjectEndDate,
            ForeCastEndDate:req.body.ForeCastEndDate,
            TotalRevenue:req.body.TotalRevenue,
            ProjectType:req.body.ProjectType,
            Currency:req.body.Currency
});
res.status(200).send(itemAddResult);
    }catch (error){
        console.log(error);
        res.status(401).send(error);
    }
});

export default router;