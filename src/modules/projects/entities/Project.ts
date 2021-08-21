import { v4 as uuidV4 } from "uuid";

class Project {
    id: string ;
    
    title: string;

    task: string[];

    constructor() {
        if(!this.id) {
            this.id = uuidV4();
        }
    }
}

export {Project};

