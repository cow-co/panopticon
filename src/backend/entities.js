// This is where the backend code for manipulating entities resides
import { v4 as uuidv4 } from "uuid";

class Entity {
    constructor() {
        this.id = uuidv4();
        this.type = "Default Entity";   // TODO Make entity type an enum
    }

    get id() {
        return this.id;
    }

    get type() {
        return this.type;
    }

    set type(newType) {
        this.type = newType;
    }
}

// Creates an entity of default type
const createEntity = () => {
    const newEntity = new Entity();
    return newEntity; 
}