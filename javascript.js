function DetailsCep() {

const CardCep = document.getElementById('container');
CardCep.innerHTML = ''

const CEP = document.getElementById('SearchIn').value

let details = {}

const API_URL = `https://brasilapi.com.br/api/cep/v1/${CEP}`

fetch(API_URL)
    .then(response => response.json())  
    .then(data => {
        details = data;
        console.log(details)
        showCEP(details)
    })
    .catch(error => {
        console.error('Error fetching data:', error);
    });

function showCEP(cep){
    
    const item = document.createElement('div');
    item.className = 'item'

    const itensDecription = document.createElement('div');
    itensDecription.className = 'itemDescription'

    item.appendChild(itensDecription)

    itensDecription.innerHTML = `
        <div> <b>CEP: </b> ${cep.cep}</div>
        <div> <b>RUA: </b> ${cep.street} </div>
        <div> <b>CIDADE: </b> ${cep.city}  </div>
        <div> <b>ESTADO: </b> ${cep.state}  </div>
    `;
    
    // Adiciona o item de lista ao elemento `moviesList`
    CardCep.appendChild(item);

    }
}