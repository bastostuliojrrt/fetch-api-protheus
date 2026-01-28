// API URL
const url = "http://localhost:8080/rest/api/crm/v1/customerVendor/2";

// SELECT ELEMENTS
const loadingElement = document.querySelector(".loading");  
const titleElement = document.querySelector(".title");
const fornecMainContainer = document.querySelector("#fornec-main-container");
const fornecCards = document.querySelector("#cards");
const fornecCardsContainer = document.querySelector("#fornec-main-container");

// GET ALL FORNECEDORES
async function getFornecedores(){

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
        fornecMainContainer.classList.remove('hide');
        // LOOP THROUGH DATA AND CREATE CARDS
        data.items.map((fornec) => {
            createFornecCard(fornec);
        });
    })

}

// CREATE FORNECEDOR CARD
function createFornecCard(fornec){
    
    // CREATE ELEMENTS
    const fornecCard = document.createElement("div");
    const cabecalhoCard = document.createElement("div");
    const fornecId = document.createElement("p");   
    const fornecLoja = document.createElement("p");
    const fornecName = document.createElement("h3");
    const fornecAddress = document.createElement("p");
    const divButtons = document.createElement("div");
    const editButton = document.createElement("a");
    const deleteButton = document.createElement("button");

    // ADD CONTENT AND CLASSES
    fornecId.innerText = `Código: ${fornec.code}`;
    fornecLoja.innerText = `Loja: ${fornec.storeId}`;
    fornecName.innerText = fornec.name;
    if(fornec.address.address.trim() === "."){
        fornecAddress.innerText = `Endereço: Não informado`;
    }else{
        fornecAddress.innerText = `Endereço: ${fornec.address.address}, ${fornec.address.zipCode}`;
    }
    editButton.innerText = "Editar";
    deleteButton.innerText = "Excluir";

    // APPEND ELEMENTS
    cabecalhoCard.appendChild(fornecId);
    cabecalhoCard.appendChild(fornecLoja);
    cabecalhoCard.appendChild(fornecName);
    cabecalhoCard.classList.add("cabecalho-card");
    fornecCard.appendChild(cabecalhoCard);
    fornecCard.appendChild(fornecAddress);
    divButtons.appendChild(editButton);
    divButtons.appendChild(deleteButton);
    fornecCard.appendChild(divButtons);
    divButtons.classList.add("div-buttons");
    editButton.classList.add("edit-button");
    deleteButton.classList.add("delete-button");
    fornecCard.classList.add("fornec-card");
    fornecCards.appendChild(fornecCard);
    
}

// EXECUTE A FUNCTION TO GET ALL FORNECEDORES
getFornecedores();
