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
     if (paragrafos.length > 1) {
        paragrafos[paragrafos.length - 1].remove();
     }else{
        alert("Não há mais parágrafos para remover 🥺 !!");
     }
}

//Muda a cor de fundo da página para uma cor aleatória
function mudarCorFundo(){
    const corAleatoria = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
    document.body.style.backgroundColor = corAleatoria;
}

//Mudar a cor do texto do parágrafo inicial para uma cor aleatória
function mudarCorTexto(){
    const cores = ["#FF5733", "#33FF57", "#3357FF", "#FF33A6", "#FFC133"];
    document.getElementById("text").style.color = cores[Math.floor(Math.random() * cores.length)];
}