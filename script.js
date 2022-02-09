
let container = newElem("div", "container");
let heading = newElem("h1");
heading.innerHTML = "Rest Countries API"
let row = newElem("div", "row")



    container.append(heading,row);
    document.body.append(container);


                

function newElem (elem, elemClass, elemID)
{
    var elemEnt = document.createElement(elem);
    elemEnt.setAttribute("class", elemClass);
    elemEnt.setAttribute("id", elemID);
    return elemEnt;
}
let apiUrl = "https://restcountries.com/v3.1/all";
async function restCountry() {
    try {
        var resp = await fetch(apiUrl);
        var data = await resp.json();        
       for( i=0; i<data.length; i++){

            console.log(data[i].name.official)

            let col = newElem("div", "col-lg-3 col-sm-2");

            let card = newElem("div", "card")
        
                let flagImage = newElem("img","card-img-top");
                flagImage.setAttribute("src", data[i].flags.png);
                flagImage.setAttribute("alt","flag image");
            
                let cardBody = newElem("div", "card-body");
                    let countryName = newElem("h2", "card-text");
                    countryName.innerHTML = data[i].name.official;
                let capitalName = newElem("h4", "card-cap");
                    capitalName.innerHTML = `Capital: ${data[i].capital}`
                    let uList = newElem("ul", "list-group");
                    let list1 = newElem("li", "list-group-item")
                    list1.innerHTML = ""
                    let list2 = newElem("li", "list-group-item");
                    list2.innerHTML = "Currency: Rupee"
                    let list3 = newElem("li", "list-group-item");
                    list3.innerHTML = "Latitude: 00 Longitude: 00";
                    let list4 = newElem("li", "list-group-item");
                    list4.innerHTML = "sunny"

        uList.append(list1,list2,list3,list4);
        cardBody.append(countryName,capitalName,uList);
        card.append(flagImage,cardBody);
        col.append(card);
        row.append(col);
          
         //  console.log(data[i]);
           
             
        }
    } catch (err) {
        console.log(err.message);
    }
}
restCountry()
