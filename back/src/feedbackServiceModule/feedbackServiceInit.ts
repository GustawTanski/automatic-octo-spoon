import RestInterface from "./interface/restInterface";
import MySqlFeedbackRepository from "./infrastructure/mySqlFeedbackRepository";

const notesModule = {
    //FeedbackRepositoryImplementation: MySqlFeedbackRepository,
    //FeedbackServiceImplementation: FeedbackS,

    init: function() {
        //let repository = new this.NoteRepositoryImplementation();
        //let service = new this.NoteServiceImplementation(repository);
        
        return new RestInterface();
    }
}

export default notesModule;