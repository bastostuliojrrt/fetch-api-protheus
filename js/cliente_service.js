// API URL
const url = "http://localhost:8080/rest/api/crm/v1/customerVendor/1";

// SELECT ELEMENTS
const loadingElement = document.querySelector(".loading");  
const titleElement = document.querySelector(".title");
const clientMainContainer = document.querySelector("#client-main-container");
const clientCards = document.querySelector("#cards");
const clientCardsContainer = document.querySelector("#client-main-container");

// GET ALL CLIENTES
async function getClientes(){

    // FETCH DATA FROM API
    fetch(url, {
        method: "GET",
        headers: {
            'Authorization': 'Basic YWRtaW46YWRtaW4=',
            'Content-type': 'application/json; charset=UTF-8',
        }
    }).then((response) => {
        return response.json();
    }).then((data) => {
        loadingElement.classList.add('hide');
        titleElement.classList.remove('hide');
        clientMainContainer.classList.remove('hide');
        // LOOP THROUGH DATA AND CREATE CARDS
        data.items.map((cliente) => {
            console.log(cliente);
            createClientCard(cliente);
        });
    })

}

// CREATE CLIENTE CARD
function createClientCard(cliente){
    
    // CREATE ELEMENTS
    const clientCard = document.createElement("div");
    const cabecalhoCard = document.createElement("div");
    const clientId = document.createElement("p");   
    const clientLoja = document.createElement("p");
    const clientName = document.createElement("h3");
    const clientAddress = document.createElement("p");

    // ADD CONTENT AND CLASSES
    clientId.innerText = `Código: ${cliente.code}`;
    clientLoja.innerText = `Loja: ${cliente.storeId}`;
    clientName.innerText = cliente.name;
    if(cliente.address.address.trim() === "."){
        clientAddress.innerText = `Endereço: Não informado`;
    }else{
        clientAddress.innerText = `Endereço: ${cliente.address.address}, ${cliente.address.zipCode}`;
    }

    // APPEND ELEMENTS
    cabecalhoCard.appendChild(clientId);
    cabecalhoCard.appendChild(clientLoja);
    cabecalhoCard.appendChild(clientName);
    cabecalhoCard.classList.add("cabecalho-card");
    clientCard.appendChild(cabecalhoCard);
    clientCard.appendChild(clientAddress);
    clientCard.classList.add("client-card");
    clientCards.appendChild(clientCard);
    
}

// EXECUTE A FUNCTION TO GET ALL CLIENTES
getClientes();