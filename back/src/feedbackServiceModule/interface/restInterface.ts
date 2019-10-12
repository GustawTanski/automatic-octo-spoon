import express, { Router, Request, Response, NextFunction } from "express";
import asyncHandler from "express-async-handler";
import FeedbackServicePort from "../core/feedbackServicePort";
import Feedback from "../core/domain/Feedback";
import NewFeedbackDto from "./model/newFeedbackDto";
import jwt from "jsonwebtoken";

export default class RestInterface{
    private _router: Router;
    private _feedbackService: FeedbackServicePort;

    constructor(feedbackService: FeedbackServicePort){
        this._router = express.Router();
        this._feedbackService = feedbackService;

        //this.router.use('/feedbacks', auth);
        this.router.use('/feedbacks', express.json());

        this.router.get('/feedbacks/:targetId', asyncHandler(async (req, res, next) => {
            //let userId = this.extractUserId(req);
            //let notes = await ;

            //let feedback = new Feedback(undefined,"anybody","Yeah!.","################");
            
            //new FeedbackEntity(undefined,"New title.","################");
            //await getConnection().manager.save(feedback);
            //let repo = new MySqlFeedbackRepository();
            /*let feedback = new Feedback(undefined, "target", "title", "content", ["tag1", "tag2"]);
            repo.save(feedback);*/
            
            //repo.save(feedback);
            //console.log(feedback);

            let serviceResponse = await this._feedbackService.getFeedbackForUser(req.params.targetId);

            res.status(200).send(serviceResponse);
        }));

        this.router.get('/tags/:targetId', asyncHandler(async (req, res, next) => {

            let serviceResponse = await this._feedbackService.getFeedbackTagsForUSer(req.params.targetId);

            res.status(200).send(serviceResponse);
        }));

        this.router.post('/feedbacks/:targetId', asyncHandler(async (req, res, next) => {

            let feedbackDto: NewFeedbackDto = req.body;
            let userId = this.extractUserId(req);
            /*const { error } = validateAsClass(noteDto, NewNoteDto);
            if(error){
                throw new Error(error.details[0].message);
            }
            else{*/
                feedbackDto.authorId = userId;
                let newNote = await this._feedbackService.saveFeedback(Feedback.fromObject(feedbackDto));

                res.status(200).send(newNote);
            //}
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

    extractUserId(req: Request): string {
        /*const jwtKey = process.env.JWT;
        if(!jwtKey){ throw new Error("Server configuration error");}

        let userId;
        const token = req.header("x-auth-token");
        if(token && typeof token === "string"){
            const decoded = jwt.verify(token,jwtKey) as { _id:string };
            userId = decoded._id;
        }
        if(userId) {
            return userId;
        }
        else{
            throw new Error("Invalid authentication token, can't identify user");
        }*/
        return "mockUserId";
    }
}