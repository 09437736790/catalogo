//console.log(filmes);
function pesquisar(){
    let resultados = "";
    let titulo = "";
    let descricao = "";
    let tags = "";
    let section = document.getElementById("resultados-pesquisa");
    let campoPesquisa = document.getElementById("campo-pesquisa").value;

    //se campoPesquisa for uma string sem nada
    if (!campoPesquisa){
        //ao utilizar o return ele não realizará nenhum codigo daqui pra baixo.
        section.innerHTML = "Campo em branco!!!"
        return
    }
    //campoPesquisa = campoPesquisa letras minusculas
    campoPesquisa = campoPesquisa.toLowerCase()

    //console.log(campoPesquisa);
    //Itera sobre cada dado da lista de dados
    
    for (let filme of filmes){
        titulo = filme.titulo.toLowerCase()
        descricao = filme.descricao.toLowerCase()
        tags = filme.tags.toLocaleLowerCase()
        //se titulo includes campoPesquisa
        //então, faça

        if(titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa) || tags.includes(campoPesquisa)) {
       //cria um novo elemento
            resultados += `
            <div class="item-resultado">
                    <h2>
                        <a href="#" target="_blank">${filme.titulo}. </a>
                    </h2>
                        <p class="descricao-meta">${filme.descricao} </p>
                        <p class="descricao-meta">${filme.genero} </p>
                        <p class="descricao-meta">${filme.ano} </p>
                        <p class="descricao-meta">${filme.atorPrincipal} </p>                        
                        <a href="https://www.netflix.com/" target="_blank"> saiba mais </a>
                        ⭐ ⭐ ⭐ ⭐ ⭐  (5/5)         
            </div>
        `;
}


        

        //Cria um novo elemento HTML para cada resultado
        
    }
    if (!resultados){
        resultados = "<p> Nada encontrado.</p>"
    }
    section.innerHTML = resultados

}


        