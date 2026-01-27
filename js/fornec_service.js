const url = "http://localhost:8080/rest/api/crm/v1/customerVendor/2";

const loadingElement = document.querySelector(".loading");  
const titleElement = document.querySelector(".title");
const fornecMainContainer = document.querySelector("#fornec-main-container");
const fornecCards = document.querySelector("#cards");

const fornecCardsContainer = document.querySelector("#fornec-main-container");

// GET ALL FORNECEDORES

async function getFornecedores(){

    const response = await fetch(url, {
        method: "GET",
        headers: {
            'Authorization': 'Basic YWRtaW46YWRtaW4=',
            'Content-type': 'application/json; charset=UTF-8',
        }
    });

    const data = await response.json();

    loadingElement.classList.add('hide');
    titleElement.classList.remove('hide');
    fornecMainContainer.classList.remove('hide');


    data.items.map((fornec) => {
        createFornecCard(fornec);
    });

}


function createFornecCard(fornec){
  
    const fornecCard = document.createElement("div");
    const cabecalhoCard = document.createElement("div");
    const fornecId = document.createElement("p");   
    const fornecLoja = document.createElement("p");
    const fornecName = document.createElement("h3");
    const fornecAddress = document.createElement("p");

    fornecId.innerText = `Código: ${fornec.code}`;
    fornecLoja.innerText = `Loja: ${fornec.storeId}`;
    fornecName.innerText = fornec.name;
    fornecAddress.innerText = `Endereço: ${fornec.address.address}, ${fornec.address.zipCode}`;

    cabecalhoCard.appendChild(fornecId);
    cabecalhoCard.appendChild(fornecLoja);
    cabecalhoCard.appendChild(fornecName);
    cabecalhoCard.classList.add("cabecalho-card");
    fornecCard.appendChild(cabecalhoCard);
    fornecCard.appendChild(fornecAddress);
    fornecCard.classList.add("fornec-card");
    fornecCards.appendChild(fornecCard);
    
}

// EXECUTE A FUNCTION TO GET ALL FORNECEDORES
getFornecedores();
