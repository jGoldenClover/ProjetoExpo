function fazGet(url) { // faz a requisição do conteúdo do site (tipo GET[pegar informação])
    const request = new XMLHttpRequest();
    request.open("GET", url , false);
    request.send();
    
    return request.responseText;
}

function criaLinha(usuarios) { // cria o conteúdo da tabela 
    const linha = document.createElement("tr");// tr = separa o conteúdo 

    const tdName = document.createElement("td");// linhas do conteúdo
    const tdDesc = document.createElement("td");// linhas do conteúdo

    // pego a informação pelo fazGet e com o caminho até a página
    tdDesc.innerHTML = usuarios.attributes.description 
    tdName.innerHTML = usuarios.attributes.name;

    linha.appendChild(tdName); // leva o conteúdo até o HTML
    linha.appendChild(tdDesc);

    return linha; // trás toda a informação pra onde é requisitado...
}


function lerPaginaEPegarBanco (Pagina) {
    const data = fazGet(`https://dogapi.dog/api/v2/breeds?page[number]=${Pagina}`);
    var usuarios = JSON.parse(data).data;
        
    return criaLinha(usuarios[numeroAtual]);
}

// function vinculoBotaoXFuncao(formulario , metodo , numeroBotao ) {
//     const formulario = document.getElementById(`dog-form${numeroBotao}`);
//     formulario.addEventListener('submit', metodo);
// }

var numeroPaginaAtual = 1
var numeroAtual = 1

async function main(event) {
    event.preventDefault(); 

    numeroAtual = numeroAtual - 1
    linha = lerPaginaEPegarBanco(numeroPaginaAtual)


    const limpesa = document.getElementById('tabela');
    limpesa.innerHTML = ''; // Limpa o conteúdo anterior


    const tabela = document.getElementById("tabela");
    tabela.appendChild(linha);
    
}

async function main2(event) {
    event.preventDefault();  
    
    numeroAtual += 1
    
    linha = lerPaginaEPegarBanco(numeroPaginaAtual) 
    
    numeroPagina = document.getElementById("numeroDigitadoNext")

    const limpesa = document.getElementById('tabela');
    limpesa.innerHTML = ''; // Limpa o conteúdo anterior


    const tabela = document.getElementById("tabela")
    tabela.appendChild(linha);
}



async function main3(event) {
    event.preventDefault();  

    numeroPaginaAtual += 1

    linha = lerPaginaEPegarBanco(numeroPaginaAtual)
    
    console.log(numeroPaginaAtual)
    
    const limpesa = document.getElementById('tabela');
    limpesa.innerHTML = ''; // Limpa o conteúdo anterior

    const tabela = document.getElementById("tabela");

    
    tabela.appendChild(linha);

}

async function main4(event) {
    event.preventDefault();  

    numeroPaginaAtual = 1
    numeroAtual = 0

    linha = lerPaginaEPegarBanco(numeroPaginaAtual)
    
    console.log(numeroPaginaAtual)
    
    const limpesa = document.getElementById('tabela');
    limpesa.innerHTML = ''; // Limpa o conteúdo anterior

    const tabela = document.getElementById("tabela");

    
    tabela.appendChild(linha);

}

const dogForm = document.getElementById('dog-form');
dogForm.addEventListener('submit', main);

const dogForm2 = document.getElementById('dog-form2');
dogForm2.addEventListener('submit', main2);

const dogForm3 = document.getElementById('dog-form3');
dogForm3.addEventListener('submit', main3);

const dogForm4 = document.getElementById('dog-form4');
dogForm4.addEventListener('submit', main4);
