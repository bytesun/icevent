import { icevent as app } from "../../../declarations/icevent";

export async function greet(name) {
    console.debug(name);
    try {
        const greeting = await app.greet(name);
        console.debug(greeting);
        return greeting;
    } catch (e) {
        console.warn(e.message);
        return "Error: Not a Dfinity greeting: " + name;
    }  
};