import { getCelebrities } from "./database.js"

const celebrities = getCelebrities()
//const celebrities: This creates a constant variable named celebrities. This is a constant variable that holds an array of objects.
//getCelebrities(): This function call retrieves an array of celebrity objects from the database.js file.

export const Celebrities = () => {
//This declares a function named Celebrities and exports it. 
//This function will be used to generate HTML for displaying the list of celebrities.
    
    let html = "<ul>"
    //Initializes a variable html with the start of an unordered list (<ul>). 
    //This will be used to build the HTML string for the list.

    for (const celebrity of celebrities) {
    //This loop iterates over each celebrity in the celebrities array.
        
        html += `<li

                    data-type="celebrity"
                    data-id="${celebrity.id}" 
                    data-sport="${celebrity.sport}"
                    id="star--${celebrity.id}">
                    ${celebrity.name}
                </li>`
    }
    //html += ...: For each celebrity, it appends an <li> element to the html string. This list item:

    //data-type="celebrity": Adds a custom data attribute for identifying the item type.
    //data-id="${celebrity.id}": Adds a custom data attribute to store the celebrity’s ID.
    //data-sport="${celebrity.sport}": Adds a custom data attribute to store the celebrity’s sport.
    //id="star--${celebrity.id}": Sets a unique ID for each list item.
    //${celebrity.name}: Inserts the name of the celebrity inside the list item.

    document.addEventListener(
        //Sets up an event listener for click events on the entire document.
        "click",
        (clickEvent) => {
        //This is an arrow function that handles the click event.
            const itemClicked = clickEvent.target
            //Gets the element that was clicked.

            if(itemClicked.dataset.type === "celebrity") {
            // Checks if the clicked element has a data-type attribute with the value "celebrity".
                const celebritySport = itemClicked.dataset.sport
                //Retrieves the value of the data-sport attribute from the clicked element.
                window.alert(`This celebrity plays ${celebritySport}`)
            }
        }
    )

    html += "</ul>"
    return html
}
