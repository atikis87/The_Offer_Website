const API_PATH = "./data/api.json";
const getOffer = document.querySelector(".offer-container");
const loadingElement = document.querySelector('.loading');
const addressButton = document.querySelector('.go-button');

loadingElement.style.display = 'none';


async function getData(){
    getOffer.innerHTML = '';
    loadingElement.style.display = '';
    const response = await fetch(API_PATH);
    const json = await response.json();
    console.log(json)

    json.message.forEach(dogImage => {
        getOffer.innerHTML += `
        <div class="offer flex-column active-offer">
            <h3 class="offer-name"></h3>
            <h4 class="offer-description">
            </h4>
            <div class="offer-price-container flex">
                <h2 class="offer-price">39.00 €</h2>
            </div>
            <a href="#" class="offer-button">More</a>
        </div>
  
            `;
        }
    )
};

getData();


/*
    <div class="offer flex-column active-offer">
      <h3 class="offer-name">Super Fast</h3>
      <h4 class="offer-description">
        The fastest internet connection ever!
      </h4>
      <div class="offer-price-container flex">
        <h2 class="offer-price">39.00 €</h2>
      </div>
      <a href="#" class="offer-button">More</a>
    </div>



*/











/*
fetch(API_PATH).then(function (response) {
    return response.json();
    }).then(function (data) {
    document.getElementById("api").innerHTML = JSON.stringify( data, null, 4);
    }).catch(function (err) {
    console.log('error: ' + err);
    });

*/