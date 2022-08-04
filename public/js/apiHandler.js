const API_PATH = "./data/api.json";
const offersElement = document.querySelector('.offer-container');
const loadingElement = document.querySelector('.skeleton');
const offersButton = document.querySelector('.submit-btn');


async function getOffers() {
    console.log("Szopd ki bobi2");
    offersElement.innerHTML = '';
    console.log("Szopd ki bobi3");
    loadingElement.style.display = '';
    const response = await fetch(API_PATH);
    const json = await response.json();

    json.forEach(Offers => {
      offersElement.innerHTML += `
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
      `;
    });
    loadingElement.style.display = 'none';
  }
  getOffers() 
  offersButton.addEventListener('click', getOffers);