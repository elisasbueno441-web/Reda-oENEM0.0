const repertorios = [

  {
    categoria: "Literário",

    autor: "Graciliano Ramos",

    obra: "Vidas Secas",

    citacao: "História de uma família vulnerável que sofre devido a uma seca na região nordestina do país ",

    temas: [
      "Sociedade",
      "Desigualdade social",
      "Meio Ambiente"
    ]

  },


  {
    categoria: "Filosófico",

    autor: "Cortella",

    obra: " ",

    citacao: " As redes sociais monopolizam a atenção da parcela juvenil da sociedade.",

    temas: [
      "Tecnologia",
      "Sociedade",
      "Redes sociais"
    ]

  },


  {
    categoria: "Artístico",

    autor: " ",

    obra: " Educação Proibida",

    citacao: "Documentário que aborda problemas e soluções para o sistema educacional contemporâneo ",

    temas: [
      "Educação",
      "Desigualdade social",
      "Sociedade"
    ]

  },


  {
    categoria: "Científico",

    autor: "OMS",

    obra: "Relatórios sobre Saúde Mental",

    citacao: "A saúde mental é parte fundamental do bem-estar do indivíduo.",

    temas: [
      "Saúde Pública",
      "Tecnologia"
    ]

  },


  {
    categoria: "Histórico",

    autor: "Revolução Francesa ",

    obra: " ",

    citacao: "Acontecimento que revolucionou o mundo contemporâneo ",

    temas: [
      "Direitos Humanos",
      "Sociedade",
      "Tecnologia",
    ]

  },


  {
    categoria: "Jurídico",

    autor: "Lei Maria da Penha",

    obra: "Lei nº 11.340/2006",

    citacao: "Cria mecanismos para coibir a violência doméstica e familiar contra a mulher.",

    temas: [
      "Direitos Humanos"
    ]

  },


  {
    categoria: "Científico",

    autor: "IPCC",

    obra: "Relatórios sobre mudanças climáticas",

    citacao: "As mudanças climáticas representam um dos principais desafios ambientais da atualidade.",

    temas: [
      "Meio Ambiente"
    ]

  }

];



/* =========================================
   ELEMENTOS DA PÁGINA
   ========================================= */

const areaTemas =
  document.querySelector(
    "main > div:first-child > section:first-child > div"
  );


const areaRepertorios =
  document.querySelector(
    "main > div:first-child > section:nth-child(2) > div:last-child"
  );


const botoesCategorias =
  document.querySelectorAll(
    "main > div:first-child > section:nth-child(2) > nav button"
  );


const contador =
  document.querySelector(
    "main > div:first-child > section:nth-child(2) > p:nth-of-type(2) strong"
  );



/* =========================================
   VARIÁVEIS
   ========================================= */

let temaSelecionado = "";

let categoriaSelecionada = "Todos";



/* =========================================
   MOSTRAR REPERTÓRIOS
   ========================================= */

function mostrarRepertorios() {

  areaRepertorios.innerHTML = "";


  const resultados = repertorios.filter(function(repertorio) {


    /*
      Verifica se a categoria corresponde
    */

    const categoriaOk =
      categoriaSelecionada === "Todos" ||
      repertorio.categoria === categoriaSelecionada;



    /*
      Verifica se o repertório pertence
      ao tema escolhido
    */

    const temaOk =
      temaSelecionado === "" ||
      repertorio.temas.includes(temaSelecionado);



    return categoriaOk && temaOk;

  });



  /* Atualiza contador */

  contador.textContent = resultados.length;



  /* Caso não encontre nada */

  if (resultados.length === 0) {

    areaRepertorios.innerHTML = `

      <article>

        <h3>
          Nenhum repertório encontrado.
        </h3>

        <p>
          Ainda não cadastramos repertórios para este tema.
        </p>

      </article>

    `;

    return;

  }



  /* Cria os cards */

  resultados.forEach(function(repertorio) {

    const artigo =
      document.createElement("article");


    artigo.innerHTML = `

      <span>
        ${repertorio.categoria}
      </span>

      <blockquote>
        "${repertorio.citacao}"
      </blockquote>

      <p>
        ${repertorio.autor} — ${repertorio.obra}
      </p>

      <p>
        Útil para: ${repertorio.temas.join(", ")}
      </p>

    `;


    areaRepertorios.appendChild(artigo);

  });

}



/* =========================================
   BOTÕES DE TEMAS
   ========================================= */

const botoesTemas =
  areaTemas.querySelectorAll("button");


botoesTemas.forEach(function(botao) {

  botao.addEventListener("click", function() {


    /*
      Verifica se é o botão
      "Todos os temas"
    */

    if (
      !botao.hasAttribute("data-tema")
    ) {

      temaSelecionado = "";

    }

    else {

      /*
        Pega o valor do
        data-tema
      */

      temaSelecionado =
        botao.getAttribute("data-tema");

    }


    mostrarRepertorios();

  });

});



/* =========================================
   BOTÕES DE CATEGORIA
   ========================================= */

botoesCategorias.forEach(function(botao) {

  botao.addEventListener("click", function() {

    categoriaSelecionada =
      botao.textContent.trim();

    mostrarRepertorios();

  });

});



/* =========================================
   INICIAR
   ========================================= */

mostrarRepertorios();