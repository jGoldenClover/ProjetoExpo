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
    
    

    const limpesa = document.getElementById('tabela');
    limpesa.innerHTML = ''; // Limpa o conteúdo anterior

    var botao = document.getElementById('dog-form3')

    if (Pagina > 29) {
        const limpesa = document.getElementById('tabela');
        limpesa.innerHTML = ''; 
        window.alert("Fim das páginas, resete ou volte algumas páginas")
        botao.style.display = 'none'
    }
    else {
        botao.style.display = 'block'
    }


    return criaLinha(usuarios[numeroAtual]);
}




var numeroPaginaAtual = 1
var numeroAtual = 1

async function main(event) {
    event.preventDefault(); 

    numeroAtual -= 1

    if (numeroAtual < 0) {
        const limpesa = document.getElementById('tabela');
        limpesa.innerHTML = ''; // Limpa o conteúdo anterior
        numeroAtual = 0
        window.alert("Acesso Invalido!")
    }
    linha = lerPaginaEPegarBanco(numeroPaginaAtual)
    
    console.log(numeroAtual)


    const tabela = document.getElementById("tabela");
    tabela.appendChild(linha);
    
}

async function main2(event) {
    event.preventDefault();  
    
    numeroAtual += 1
    if (numeroAtual > 9) {
        const limpesa = document.getElementById('tabela');
        limpesa.innerHTML = ''; // Limpa o conteúdo anterior
        window.alert("Número máximo de cachorros, avance para ver mais!")
        numeroAtual = 9
    }

    linha = lerPaginaEPegarBanco(numeroPaginaAtual) 
    
    console.log(numeroAtual)

    const tabela = document.getElementById("tabela")
    tabela.appendChild(linha);
}



async function main3(event) {
    event.preventDefault();  
    numeroAtual = 0
    numeroPaginaAtual += 1

    linha = lerPaginaEPegarBanco(numeroPaginaAtual)
    
    console.log(numeroPaginaAtual)
    

    const tabela = document.getElementById("tabela");
    tabela.appendChild(linha);

}

async function main4(event) {
    event.preventDefault();  

    numeroPaginaAtual -=1
    numeroAtual = 0

    if (numeroPaginaAtual <= 0 ) {
        window.alert("Não é possivel voltar")
        numeroPaginaAtual = 1
    }

    linha = lerPaginaEPegarBanco(numeroPaginaAtual)
    
    console.log(numeroPaginaAtual)
    
   
    const tabela = document.getElementById("tabela");
    tabela.appendChild(linha);

}

async function main5(event) {
    event.preventDefault();  

    numeroPaginaAtual = 1
    numeroAtual = 0

    linha = lerPaginaEPegarBanco(numeroPaginaAtual)
    
    console.log(numeroPaginaAtual)
    

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

const dogForm5 = document.getElementById('dog-form5');
dogForm5.addEventListener('submit', main5);
