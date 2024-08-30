import { getChildren } from "./database.js"

const children = getChildren()
//This line calls the getChildren function and stores the result in a constant named children.
//children now holds the data returned by getChildren, which is assumed to be an array of objects, 
//each representing a child with various properties.

export const Kids = () => {
//This defines a new function component called Kids. 
//It's an arrow function that generates and returns HTML content as a string.
    
    let html = "<ul>"

    for (const child of children) {
    //This loop iterates over each child object in the children array.
        
        html += `<li data-id="${child.id}" 
                    data-type="child" 
                    data-wish="${child.wish}">${child.name}</li>`
    }
    //data-id: Custom attribute with the child's ID.
    //data-type: Custom attribute set to "child".
    //data-wish: Custom attribute with the child's wish.
    //The child's name is displayed as the text content of the list item.


    document.addEventListener(
    //This sets up a click event listener on the entire document.
        "click",
        (clickEvent) => {
        //This is a function that runs every time a click happens.
            const itemClicked = clickEvent.target
            //Gets the exact element that was clicked.

            if(itemClicked.dataset.type === "child") {
            //Checks if the clicked element has a data-type attribute with the value "child".
                const childWish = itemClicked.dataset.wish
                //Gets the data-wish attribute of the clicked element.

                window.alert(`This Kids wish is to ${childWish}`)
            }
        }
    )





    html += "</ul>"
    //closes the </ul> ending it
    return html
}

