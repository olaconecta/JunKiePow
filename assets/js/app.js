// CACHING THE DOM
// https://github.com/eduardolevi82/JunKiePow.git
var usrPontos = 0;
var pcPontos = 0;
const placarUsr = document.getElementById("usr-pontos");
const placarPC = document.getElementById("pc-pontos");
const placarEmp = document.querySelector("#placarEmpates > h6");
//dados estatísticos
const votoPedra = document.getElementById("votoPedra");
const votoVitPed = document.querySelector(".vitorias > .vp");
const votoEmpPed = document.querySelector(".empates > .ep");
const votoDerPed = document.querySelector(".derrotas > .dp");
const votoPapel = document.getElementById("votoPapel");
const votoVitPap = document.querySelector(".vitorias > .vpa");
const votoEmpPap = document.querySelector(".empates > .epa");
const votoDerPap = document.querySelector(".derrotas > .dpa");
const votoTesoura = document.getElementById("votoTesoura");
const votoVitTes = document.querySelector(".vitorias > .vt");
const votoEmpTes = document.querySelector(".empates > .ept");
const votoDerTes = document.querySelector(".derrotas > .dt");
var mensagemResultado = document.querySelector("header > h1");
var imgHeader = document.getElementById("cabecalho");
var videoHeader = document.getElementById("video");
var badgeUsr = document.getElementById("usuario");
 var avatarUsr = document.getElementById("avatarUsr");
// PLAYERS     
// Peter Dorherty, Rafael Pilha, Fábio Assunção, Casagrande, Lindsay Logan, Amy Winehouse
// const placarEmpPed = document.getElementsByClassName("ep");
const placar = document.querySelector(".placar");
const resultado = document.querySelector(".resultado");
const papel = document.getElementById("papel");
const pedra = document.getElementById("pedra");
const tesoura = document.getElementById("tesoura");
var contaPedra = 
    {
        "conta" : 0,
        "contaVit" : 0,
        "contaDer" : 0,
    }
 ;
var contaPapel = 
    {
        "conta" : 0,
        "contaVit" : 0,
        "contaDer" : 0,
    }
 ;
var contaTesoura = 
    {
        "conta" : 0,
        "contaVit" : 0,
        "contaDer" : 0,
    }
 ;
var contaEmpate =
    {
        "conta" : 0,
        "contaPed" : 0,
        "contaPap" : 0,
        "contaTes" : 0,
    }
 ;
 const tela = document.getElementById("tela");        
 const efeito = document.getElementById("efeito");        
 
 //FUNÇÕES
 function processUser() {
    var parameters = location.search.substring(1).split("&");
    var temp = parameters[0].split("=");
    nomeUsr = unescape(temp[1]);
    temp = parameters[1].split("=");
    fotoUsr = unescape(temp[1]);    
    switch (fotoUsr) {
        case "1":
        // avatarUsr.style.background = `url("assets/img/avatar/assuncao.jpeg")`;    
        avatarUsr.classList.add('drogado1');    
        break;
        case "2":
        avatarUsr.classList.add('drogado2');            
        break;
        case "3":
        avatarUsr.classList.add('drogado3');                    
        break;
        case "4":
        avatarUsr.classList.add('drogado4');                    
        break;
        case "5":
        avatarUsr.classList.add('nascimento');                    
        break;
        case "6":
        avatarUsr.classList.add('magali');                    
        break;
    }
    badgeUsr.innerHTML = nomeUsr;
}
processUser();
if (nomeUsr.length == 0) {
    badgeUsr.innerHTML = "Usuário de Droga";
}
if (fotoUsr == undefined) {
    avatarUsr.classList.add('padrao');
}
function escolheJogadorPC () {
    var badgePC = document.getElementById("pc");
    var avatarPC = document.getElementById("avatarPC");
    const playerPC = ["Pete Doherty", "Rafael Pilha", "Fábio Assunção", "Casagrande", "Lindsay Lohan", "Amy Winehouse", "Maradona"]
    const escolhePlayerPC = Math.floor(Math.random(playerPC) * 7);
    nomePc = playerPC[escolhePlayerPC];
    badgePC.innerHTML = nomePc;
    switch(nomePc) {
        case "Pete Doherty": 
        avatarPC.classList.add('doherty');
        badgePC.classList.add('dohertyb');
        break;
        case "Rafael Pilha": 
        avatarPC.classList.add('ilha');
        badgePC.classList.add('ilhab');
        break;
        case "Fábio Assunção": 
        avatarPC.classList.add('assuncao');
        badgePC.classList.add('assuncaob');
        break;
        case "Casagrande": 
        avatarPC.classList.add('casagrande');
        badgePC.classList.add('casagrandeb');
        break;
        case "Lindsay Lohan": 
        avatarPC.classList.add('lohan');
        badgePC.classList.add('lohanb');
        break;
        case "Amy Winehouse": 
        avatarPC.classList.add('amy');
        badgePC.classList.add('amyb');
        break;
        case "Maradona": 
        avatarPC.classList.add('maradona');
        badgePC.classList.add('maradonab');
        break;
    }
}

escolheJogadorPC ();

function escolhaPC() {
    const escolhaDoPC = ["LSD", "Crack", "Heroína"]; 
    const escolhaRandom = Math.floor(Math.random(escolhaDoPC) * 3);
    return escolhaDoPC[escolhaRandom];     
}

function shakeCrack() {    
    tela.classList.add("shake");            
    setTimeout( () => tela.classList.remove("shake"), 1000);        
    efeito.classList.add("shakecrack");            
    setTimeout( () => efeito.classList.remove("shakecrack"), 1000);        
 }
 function shakeLsd() {  
    tela.classList.add("shake");            
    setTimeout( () => tela.classList.remove("shake"), 1000);          
    efeito.classList.add("shakelsd");            
    setTimeout( () => efeito.classList.remove("shakelsd"), 1000);        
 }
 function shakeHeroina() {    
    tela.classList.add("shake");            
    setTimeout( () => tela.classList.remove("shake"), 1000);        
    efeito.classList.add("shakeheroina");            
    setTimeout( () => efeito.classList.remove("shakeheroina"), 1000);        
 }
 function vitoriaCrack() {        
    efeito.classList.add("vitoriacrack");            
    setTimeout( () => efeito.classList.remove("vitoriacrack"), 700);        
 }
 function vitoriaLsd() {        
    efeito.classList.add("vitorialsd");            
    setTimeout( () => efeito.classList.remove("vitorialsd"), 700);        
 }
 function vitoriaHeroina() {        
    efeito.classList.add("vitoriaheroina");            
    setTimeout( () => efeito.classList.remove("vitoriaheroina"), 700);        
 }
 function empateBosta() {        
    efeito.classList.add("empatebosta");            
    setTimeout( () => efeito.classList.remove("empatebosta"), 500);        
 }
 function stopGame() {
    pedra.classList.add("stop");
    papel.classList.add("stop");
    tesoura.classList.add("stop");
 }
function playVideo() {
    videoHeader.play();
    videoHeader.style.display = "block";    
}
function vitoria(escolha, pc) {
    usrPontos++;
    placarUsr.innerHTML = usrPontos;    
    if (usrPontos === 10) {
        mensagemResultado.innerHTML = "CHUPA " + nomePc;                
        // imgHeader.classList.add("vitoriaUsr");
        playVideo();
        stopGame();
        setTimeout( () => location.reload(), 10000);        
    }
    // let divEscolha = document.getElementById(escolha);
    switch (escolha) {
        case "Crack":        
        vitoriaCrack();
        contaPedra.contaVit++;
        votoVitPed.innerHTML = "vitórias: " + contaPedra.contaVit; 
        resultado.innerHTML = escolha + " acelerou a brisa da " + pc + ". <br>Chupa " + nomePc; 
        break;
        case "LSD":
        vitoriaLsd();
        contaPapel.contaVit++;        
        votoVitPap.innerHTML = "vitórias: " + contaPapel.contaVit;
        resultado.innerHTML = escolha + " cobriu alucinando a brisa do " + pc + ". <br>Toma " + nomePc; 
        break;
        case "Heroína":
        vitoriaHeroina();
        contaTesoura.contaVit++;    
        votoVitTes.innerHTML = "vitórias: " + contaTesoura.contaVit;
        resultado.innerHTML = escolha + " perfurou a alucinação do " + pc + ".<br>" + nomePc + " de merda"; 
        break;
    }    
    // divEscolha.classList.add("vitoria");
    // setTimeout( () =>  divEscolha.classList.remove("vitoria"), 1000);
}
function derrota(escolha, pc) {
    pcPontos++;
    placarPC.innerHTML = pcPontos;               
    if (pcPontos === 10) {
        mensagemResultado.innerHTML = "VOCÊ PERDEU " + nomeUsr;
        // imgHeader.classList.add("vitoriaPc");    
        playVideo();
        stopGame();
        setTimeout( () => location.reload(), 10000);
    }
    // let divEscolha = document.getElementById("escolha");
    switch (pc) {
        case "Crack":     
        shakeCrack();      
        resultado.innerHTML = escolha + " acelerou com estimulo do " + pc + ". <br>Toma " + nomeUsr; 
        contaPedra.contaDer++;
        votoDerPed.innerHTML = "derrotas: " + contaPedra.contaDer;    
        break;
        case "LSD":
        shakeLsd();
        resultado.innerHTML = escolha + " foi envolto pela alucinação do " + pc + ". <br>Se fudeu " + nomeUsr; 
        contaPapel.contaDer++;
        votoDerPap.innerHTML = "derrotas: " + contaPapel.contaDer;    
        break;
        case "Heroína":
        shakeHeroina();
        contaTesoura.contaDer++;
        votoDerTes.innerHTML = "derrotas: " + contaTesoura.contaDer;
        resultado.innerHTML = escolha + " foi perfurado pela brisa da " + pc + ". <br>Que bosta" + nomeUsr;         
        break;
    }      
    // divEscolha.classList.add("derrota");
    // setTimeout( () =>  divEscolha.classList.remove("derrota"), 1000);            
}
function empate(escolha, pc) {
    contaEmpate.conta++;
    empateBosta();
    placarEmp.innerHTML = "empates: " + contaEmpate.conta;
    // let divEscolha = document.getElementById(escolha);
    // resultado.innerHTML = escolha + " empata " + pc  + "<br>JOGO XOXO";
    switch (escolha, pc) {
        case "Crack":                
        resultado.innerHTML = escolha + " se demoliu com o outro " + pc + "<br>Empate de bosta"; 
        contaEmpate.contaPed++;
        votoEmpPed.innerHTML = "empates: " + contaEmpate.contaPed;    
        break;
        case "LSD":
        contaEmpate.contaPap++;         
        votoEmpPap.innerHTML = "empates: " + contaEmpate.contaPap;    
        resultado.innerHTML = escolha + " colou velcro com o outro " + "<br>Empate zica"; 
        break;
        case "Heroína":
        contaEmpate.contaTes++;         
        votoEmpTes.innerHTML = "empates: " + contaEmpate.contaTes;    
        resultado.innerHTML = "Briguinha de agulhas da " + escolha + "<br>Empate, que lixo"; 
        break;        
    }  
    // divEscolha.classList.add("empate");
    // setTimeout( () =>  divEscolha.classList.remove("empate"), 1000);
}


function jogo(escolha) {    
    const epc = escolhaPC();
    switch (escolha + epc) {
        case "CrackHeroína":
        case "HeroínaLSD":
        case "LSDCrack":            
            vitoria(escolha, epc);                       
            // resultado.innerHTML = escolha + " vence " + epc + "<br>VITÓRIA, CHUPA PC";
        break;
        case "CrackLSD":
        case "LSDHeroína":
        case "HeroínaCrack":            
            derrota(escolha, epc);
            // resultado.innerHTML = escolha + " perde " + epc + "<br>DERROTA, SE FODEU";            
        break;        
        case "CrackCrack":
        case "LSDLSD":
        case "HeroínaHeroína":
            empate(escolha, epc);
            // resultado.innerHTML = escolha + " empata " + epc  + "<br>JOGO XOXO";
        break;        
    }
}


function principal() {
    pedra.addEventListener('click', function() {    
        jogo('Crack');        
        contaPedra.conta++;        
        votoPedra.innerHTML = "- " + contaPedra.conta + " votos";            
    });
    papel.addEventListener('click', function() {    
        jogo('LSD');
        contaPapel.conta++;
        votoPapel.innerHTML = "- " + contaPapel.conta + " votos";            
    });
    tesoura.addEventListener('click', function() {    
        jogo('Heroína');
        contaTesoura.conta++;        
        votoTesoura.innerHTML = "- " + contaTesoura.conta + " votos";            
    });
    // ES6 - função de uma linha pode ser escrita assim:
    // pedra.addEventListener('click', () => jogo('Pedra')); 
    // papel.addEventListener('click', () => jogo('Papel'));
    // tesoura.addEventListener('click', () => jogo('Tesoura'));
}

principal();