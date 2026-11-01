const list = document.querySelector(".list")

const BASE_URL = "https://rickandmortyapi.com/api/character";



function render(data) {
    list.innerHTML = '';

    data.forEach(item => {

        const card = document.createElement("li")
        card.classList.add("card")

        const cardBox = document.createElement("div")
        cardBox.classList.add("card_box")

        const images = document.createElement("img")
        images.classList.add("card_image")
        images.src = item.image;

        const cardBoxText = document.createElement("div")
        cardBoxText.classList.add("card_box-text")

        const pName = document.createElement("a")
        pName.classList.add("card_name")
        pName.textContent = item.name
        pName.setAttribute("href", item.url);
        pName.setAttribute("target", "_blank");

        const infoBox = document.createElement("div")
        infoBox.classList.add("info-box")

        const pStatus = document.createElement("p")
        pStatus.classList.add("card_status")
        pStatus.textContent = item.status

        const pSpecies = document.createElement("p")
        pSpecies.classList.add("card_species")
        pSpecies.textContent = item.species
        pSpecies.textContent = "- " + item.species

        const locationBox = document.createElement("div")
        locationBox.classList.add("location-box")

        const pLocationInfo = document.createElement("p")
        pLocationInfo.classList.add("location-info")
        pLocationInfo.textContent = "Last known location:"

        const pLocation = document.createElement("a")
        pLocation.classList.add("location-name")
        pLocation.textContent = item.location.name
        pLocation.setAttribute("href", item.location.url);
        pLocation.setAttribute("target", "_blank");

        list.append(card)
        card.append(cardBox)
        cardBox.append(images, cardBoxText)
        cardBoxText.append(pName, infoBox, locationBox)
        infoBox.append(pStatus, pSpecies)
        locationBox.append(pLocationInfo, pLocation)

    });


}

function getAlldata() {
    fetch(BASE_URL)
        .then(response => response.json())
        .then(data => { render(data.results); });
}

getAlldata();


