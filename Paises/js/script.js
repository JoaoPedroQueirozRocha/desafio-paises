const dados_brutos = fetch("https://restcountries.com/v2/all").then(
  (resgate) => {
    resgate.json().then((dados_finais) => {
      dados_resgatados(dados_finais);
    });
  }
);

var id = 0;
let bandeiras = "";
let paises = document.querySelector("#tabCountries");
let favoritos = document.querySelector("#tabFavorites");
function dados_resgatados(dados_finais) {
  console.log(dados_finais);
  dados_finais.forEach((element) => {
    //elementos resgatados
    bandeiras = element.flag;
    name = element.name;
    populacao = element.population;
    parametro = id;
    regiao = element.region;
    totalPopulation = 0;
    totalPopulationList = document.querySelector("#totaPopulationList");

    //separação em continentes
    if (regiao == "Africa") {
      paises.childNodes[1].innerHTML += `
        <div class="Africa" id="d${id}">
          <div>
            <button id="${id}" onclick="favoritar(${parametro})" class="waves-effect waves-light btn"> + </a>
          </div>
    
          <div>
            <img src="${bandeiras}" alt="${name}"/>
          </div>
        
          <div>
            <ul> 
              <li> ${name} </li>
              <li> ${populacao} </li>
            </ul>
          </div>
        </div>
      `;
    } else if (regiao == "Americas") {
      paises.childNodes[3].innerHTML += `
        <div class="Americas" id="d${id}">
          <div>
            <button id="${id}" onclick="favoritar(${parametro})" class="waves-effect waves-light btn"> + </a>
          </div>
    
          <div>
            <img src="${bandeiras}" alt="${name}"/>
          </div>
        
          <div>
            <ul> 
              <li> ${name} </li>
              <li> ${populacao} </li>
            </ul>
          </div>
        </div>
      `;
    } else if (regiao == "Asia") {
      paises.childNodes[5].innerHTML += `
        <div class="Asia" id="d${id}">
          <div>
            <button id="${id}" onclick="favoritar(${parametro})" class="waves-effect waves-light btn"> + </a>
          </div>
    
          <div>
            <img src="${bandeiras}" alt="${name}"/>
          </div>
        
          <div>
            <ul> 
              <li> ${name} </li>
              <li> ${populacao} </li>
            </ul>
          </div>
        </div>
      `;
    } else if (regiao == "Europe") {
      paises.childNodes[7].innerHTML += `
        <div class="Europe" id="d${id}">
          <div>
            <button id="${id}" onclick="favoritar(${parametro})" class="waves-effect waves-light btn"> + </a>
          </div>
    
          <div>
            <img src="${bandeiras}" alt="${name}"/>
          </div>
        
          <div>
            <ul> 
              <li> ${name} </li>
              <li> ${populacao} </li>
            </ul>
          </div>
        </div>
      `;
    } else if (regiao == "Oceania") {
      paises.childNodes[9].innerHTML += `
        <div class="Oceania" id="d${id}">
          <div>
            <button id="${id}" onclick="favoritar(${parametro})" class="waves-effect waves-light btn"> + </a>
          </div>
    
          <div>
            <img src="${bandeiras}" alt="${name}"/>
          </div>
        
          <div>
            <ul> 
              <li> ${name} </li>
              <li> ${populacao} </li>
            </ul>
          </div>
        </div>
      `;
    } else {
      paises.childNodes[11].innerHTML += `
        <div class="Polar" id="d${id}">
          <div>
            <button id="${id}" onclick="favoritar(${parametro})" class="waves-effect waves-light btn"> + </a>
          </div>
    
          <div>
            <img src="${bandeiras}" alt="${name}"/>
          </div>
        
          <div>
            <ul> 
              <li> ${name} </li>
              <li> ${populacao} </li>
            </ul>
          </div>
        </div>
      `;
    }
    id++;

    //contagem paises
    let numeroPaises = document.querySelector("#countCountries");
    numeroPaises.innerHTML = `${id}`;
  });
}

let id3 = 0;
function favoritar(id1) {
  let apagar = document.querySelector("#d" + id1);
  let inserir = document.querySelector("#d" + id1);
  let local = inserir.getAttribute("class");
  let novobotao = document.createElement("button");
  let atributo1 = document.createAttribute("class");
  let atributo2 = document.createAttribute("onclick");
  atributo1.value = "waves-effect waves-light btn";
  atributo2.value = `excluir(${id1})`;
  novobotao.setAttributeNode(atributo1);
  novobotao.setAttributeNode(atributo2);
  novobotao.textContent = "-";
  let sub = inserir.childNodes[1];
  inserir.replaceChild(novobotao, sub);
  if (local == "Africa") {
    favoritos.childNodes[1].appendChild(inserir.cloneNode(true));
  } else if (local == "Americas") {
    favoritos.childNodes[3].appendChild(inserir.cloneNode(true));
  } else if (local == "Asia") {
    favoritos.childNodes[5].appendChild(inserir.cloneNode(true));
  } else if (local == "Europe") {
    favoritos.childNodes[7].appendChild(inserir.cloneNode(true));
  } else if (local == "Oceania") {
    favoritos.childNodes[9].appendChild(inserir.cloneNode(true));
  } else {
    favoritos.childNodes[11].appendChild(inserir.cloneNode(true));
  }
  apagar.remove();
}

function excluir(valor) {
  let apagar = document.querySelector("#d" + valor);
  let inserir = document.querySelector("#d" + valor);
  let local = inserir.getAttribute("class");
  let novobotao = document.createElement("button");
  let atributo1 = document.createAttribute("class");
  let atributo2 = document.createAttribute("onclick");
  atributo1.value = "add";
  atributo2.value = `favoritar(${valor})`;
  novobotao.setAttributeNode(atributo1);
  novobotao.setAttributeNode(atributo2);
  novobotao.textContent = "+";
  let sub = inserir.childNodes[1];
  inserir.replaceChild(novobotao, sub);
  if (local == "Africa") {
    paises.childNodes[1].appendChild(apagar.cloneNode(true));
  } else if (local == "Americas") {
    paises.childNodes[3].appendChild(apagar.cloneNode(true));
  } else if (local == "Asia") {
    paises.childNodes[5].appendChild(apagar.cloneNode(true));
  } else if (local == "Europe") {
    paises.childNodes[7].appendChild(apagar.cloneNode(true));
  } else if (local == "Oceania") {
    paises.childNodes[9].appendChild(apagar.cloneNode(true));
  } else {
    paises.childNodes[11].appendChild(apagar.cloneNode(true));
  }
  apagar.remove();
}
