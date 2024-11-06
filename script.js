//altera o texto do parágrafo inicial
function alterarTexto() {
    document.getElementById("text").innerText = "Ao clicar, eu mudei!!";
}

//Adiciona um novo parágrafo ao final do corpo
function AdicionarParagrafo(){
    const novoParagrafo = document.createElement("p");
    novoParagrafo.innerText = "Depois ue você clicou eu apareci😋 !!";
    document.body.appendChild(novoParagrafo);
}

//Remove o ultimo parágrafo, se houver mai um
function removerParagrafo(){
     const paragrafos = document.querySelectorAll("p");
     if 
}