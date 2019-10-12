import express, { Router, Request, Response, NextFunction } from "express";
import asyncHandler from "express-async-handler";
import FeedbackServicePort from "../core/feedbackServicePort";
import { getConnection } from "typeorm";
import { FeedbackEntity } from "../infrastructure/model/feedbackEntity";

export default class RestInterface{
    private _router: Router;
    private _feedbackService?: FeedbackServicePort;

    constructor(feedbackService?: FeedbackServicePort){
        this._router = express.Router();
        this._feedbackService = feedbackService;

        //this.router.use('/feedbacks', auth);
        this.router.use('/feedbacks', express.json());

        this.router.get('/feedbacks', asyncHandler(async (req, res, next) => {
            //let userId = this.extractUserId(req);
            //let notes = await ;

            let feedback = new FeedbackEntity(undefined,"New title.","################");
            await getConnection().manager.save(feedback);
            console.log("Feedback saved!");

            res.status(200).send({works: "yes"});
        }));

        /**
         * Error handler route.
         * TODO: throw better errors and handle them based on their type
         */
        this.router.use('/feedbacks', (error: Error, req: Request, res: Response, next: NextFunction)=>{
            if (error) {
                res.status(500).send(error.message);
            } else {
              next();
            }
        });
    }

    get router(): Router {
        return this._router;
    }
}