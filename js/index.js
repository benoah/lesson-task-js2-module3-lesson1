import { baseUrl } from "./settings/api.js";
import displayMessage from "./components/common/displayMessage.js";


const resturantsUrl = baseUrl + "restaurants";


(async function () {
    const container = document.querySelector(".product-container");

    try {
        const response = await fetch(resturantsUrl);
        const details = await response.json();
        // console.log(details);



        details.forEach(function (element) {
            console.log(element);

            container.innerHTML = "";
            container.innerHTML += `
            
            
            <h1>${element.name}</h1>
                                    <p>${element.description} </p>
s
            `;
        });
    } catch (error) {
        console.log(error);
        displayMessage("error", error, ".product-container");
    }


})();

