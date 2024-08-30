import { getChildren, getCelebrities } from "./database.js"

const kids = getChildren();
const celebrities = getCelebrities();
//call the imported functions to get the data. kids will contain a list of children, 
//and celebrities will contain a list of celebrities.

const findCelebrityMatch = (kidObject, celebrityArray) => {
//This defines a function named findCelebrityMatch which takes two arguments:
//kidObject: An object representing a child.
//celebrityArray: An array of celebrity objects.

    return celebrityArray.find(celebrity => celebrity.id === kidObject.celebrityId) || null;
    //The function tries to find a celebrity in celebrityArray whose id matches the celebrityId of kidObject. 
    //If a match is found, it returns that celebrity; otherwise, it returns null.
}

export const Pairings = () => {
//This begins the definition of a function named Pairings which will generate HTML content. 
//It starts by initializing a string variable html with the opening <ul> tag,
// which denotes an unordered list in HTML.
    let html = "<ul>";

    for (const kid of kids) {
    //This loop iterates over each child (kid) in the kids array
        const kidsStar = findCelebrityMatch(kid, celebrities);
        //It calls findCelebrityMatch to find the corresponding celebrity for the current kid
        if (kidsStar) {
        //If a matching celebrity is found (kidsStar is not null):
        //It adds a list item (<li>) to the html string, containing information about the child, the celebrity, and the child's wish.
            html += `
                <li>
                    ${kid.name} will be making memories with ${kidsStar.name}, a ${kidsStar.sport} star, by ${kid.wish}
                </li>
            `;
        } else {
            html += `
                <li>
                    ${kid.name}'s wish could not be paired with a celebrity.
                </li>
            `;
        }
    }

    html += "</ul>";

    return html;
}

