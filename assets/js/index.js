const baseUrl = 'https://dogapi.dog/api/v2/breeds?page[number]='

function fazGet(url) { // faz a requisição do conteúdo do site (tipo GET[pegar informação])
    const request = new XMLHttpRequest();
    request.open("GET", url , false);
    request.send();
    
    return request.responseText;
}

function lerPaginaEPegarBanco (Pagina) {
    const data =  fazGet(`${baseUrl}${Pagina}`);

    // const data = await fetch(`${baseUrl}${Pagina}`);

    var usuarios = JSON.parse(data).data ;
    
    
    const limpesa = document.getElementById('tabela');
    limpesa.innerHTML = ''; // Limpa o conteúdo anterior

    return criaLinha(usuarios[numeroAtual]);
}

function criaLinha(usuarios) { // cria o conteúdo da tabela 
    const linha = document.createElement("tr");// tr = separa o conteúdo 

    const tdName = document.createElement("td");// linhas do conteúdo
    const tdDesc = document.createElement("td");// linhas do conteúdo

    // pego a informação pelo fazGet e com o caminho até a página

    tdName.innerHTML = usuarios.attributes.name;
    tdDesc.innerHTML = usuarios.attributes.description ;

    // tdName.innerHTML = `<td>${usuarios[numeroAtual].attributes.name} </td> ` ;
    // tdDesc.innerHTML = `<td> ${usuarios[numeroAtual].attributes.description} </td> ` ;

    // tdName.innerHTML = `${usuarios.attributes.name}` ;
    // tdDesc.innerHTML = `${usuarios.attributes.description}` ;

   

    linha.appendChild(tdName); // leva o conteúdo até o HTML
    linha.appendChild(tdDesc);

    return linha; // trás toda a informação pra onde é requisitado...
}

function main(event) {
    event.preventDefault(); 

    numeroAtual = Math.floor(Math.random() * 9 )
    numeroPaginaAtual = Math.floor(Math.random() * 29 )

    if (numeroPaginaAtual == 29) {
        console.log(numeroAtual , ' entrou na página!')
        console.log(numeroPaginaAtual , ' entrou na página!')
        numeroAtual = Math.floor(Math.random() * 7 )
    }
    
    
    console.log(numeroAtual)
    console.log(numeroPaginaAtual)

    linha = lerPaginaEPegarBanco(numeroPaginaAtual , )
    
    
    
    // console.log(typeof(tdDesc))
    // console.log(typeof(tdName))

    const tabela = document.getElementById("tabela");
    tabela.appendChild(linha);
    
}

const dogGenerate = document.getElementById('dog-random');
dogGenerate.addEventListener('submit', main);



// response = fazGet(url)
// response.blob() --- converte o arquivo em binário, por exemplo, para uma imagem você converte o link para binário e depois