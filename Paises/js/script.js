const valores = fetch('https://restcountries.com/v2/all').then(res => {
    res.json().then(dados => {
        dadosFinal(dados)
    })
})

let exibir = 0;
let bandeira = "";
let name = "";
let id = 0;
let paises = document.querySelector("#tabCountries");
let totalPopulation = 0;
let totalPopulationList = document.querySelector("#totalPopulationList");
function dadosFinal(dados) {
    console.log(dados)
    dados.forEach(element => {
        bandeira = element.flag;
        populacao = element.population;
        id = element.numericCode;
        name = element.name
        // paises.innerHTML += `<img src=${bandeira}>` + populacao + "<br>" + `<button class="adicionar" onclick = "add()">+</button>` + "<br>";
        paises.innerHTML +=
        `
      <div class='country'>
        <div>
          <button id="${id}" onclick="add()" class="waves-effect waves-light btn"> + </a>
        </div>
  
        <div>
          <img src="${bandeira}" alt="${name}"/>
        </div>
      
        <div>
          <ul> 
            <li> ${name} </li>
            <li> ${populacao} </li>
          </ul>
        </div>
      </div>
    `


        //exibição do número de paises
        let nPaises = dados.length; //contando o número de paises
        let numPaises = document.querySelector("#countCountries")
        numPaises.innerHTML = `${nPaises}`;

        //população total
        totalPopulation = parseInt(element.population)
        totalPopulationList.innerText = `${parseInt(totalPopulationList.innerText) + totalPopulation}`;


    });
}


function add(){

console.log("teste")
}