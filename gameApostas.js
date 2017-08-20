var valorAzul = 0;
var valorVermelho = 0;
var timerAzul = null;
var timerVermelho = null;
var cavaloEscolhido = "";
var linha_chegada = false;
var tamanho_pista = 30;
var linha_chegada = [];
var cavalo_selecionado = "";
var tamanho_lista;

function inicio(){
	
	cavaloEscolhido = selecionando_cavalos();
	if(cavaloEscolhido == null || cavaloEscolhido == ""){
		alert("Escolha um dos cavalos.");
		window.location.reload();
	}else{
		document.getElementById('som_corrida').play();
		timerAzul = setInterval("correCavaloAzul()", velocidade_cavalo());
		timerVermelho = setInterval("correCavaloVermelho()", velocidade_cavalo());
		document.getElementById('botao_inicio').style.display = "none";
	}
}

function cria_pista(){

	for (var i=1; i <= tamanho_pista; i++){
		var bloco_pista = document.createElement('td');
		bloco_pista.style.padding = "10px";
		bloco_pista.style.background = "green";
		bloco_pista.style.border = "#fff 1px solid";
		document.getElementById("faixaFora").appendChild(bloco_pista);//adiciona um elemento bloco_pista que é uma td dentro do elemento faixaAzul
	}
	
	for (var i = 1; i <= tamanho_pista; i++){
		var bloco_pista = document.createElement('td');
		bloco_pista.style.padding = "10px";
		bloco_pista.style.background = "#ffcc66";
		bloco_pista.id = "a"+i;
		document.getElementById('faixaAzul').appendChild(bloco_pista);//adiciona um elemento bloco_pista que é uma td dentro do elemento faixaAzul
	}
	for (var i=1; i <= tamanho_pista; i++){
		var bloco_pista = document.createElement('td');
		bloco_pista.style.padding = "10px";
		bloco_pista.style.background = "#ffcc66";
		bloco_pista.id = "v"+i;
		document.getElementById("faixaVermelha").appendChild(bloco_pista);//adiciona um elemento bloco_pista que é uma td dentro do elemento faixaAzul
	}
	var img_linha_chegada = document.createElement('td');
	img_linha_chegada.rowSpan = "3";
	img_linha_chegada.innerHTML = "<img src='img/linhachegada.png' id='img_linhachegada'> ";
	document.getElementById('faixaFora').appendChild(img_linha_chegada);

}

function correCavaloAzul(){
		if(valorAzul!=0){
			var colunaAnterior = document.getElementById('a'+valorAzul);
			colunaAnterior.style.background = "#ffcc66";
		}
		valorAzul++;

		if (valorAzul<tamanho_pista+1) {
			var colunadestacada = document.getElementById('a'+valorAzul);
			colunadestacada.style.background = "blue";
		}else{
			clearInterval(timerAzul);
			preenche_chegada("azul");
			return false;
		}
		
		
}

function correCavaloVermelho(velocidade){
		if(valorVermelho!=0){
			var colunaAnterior = document.getElementById('v'+valorVermelho);
			colunaAnterior.style.background = "#ffcc66";
		}
		valorVermelho++;

		if (valorVermelho<tamanho_pista+1) {
			var colunadestacada = document.getElementById('v'+valorVermelho);
			colunadestacada.style.background = "red";
		}else{
			clearInterval(timerVermelho);
			preenche_chegada("vermelho");
			return false;
		}
		
	}


function selecionando_cavalos(){
	var opcao_cavalo = document.getElementsByName("seleciona_cavalo");
    for (var i = 0; i < opcao_cavalo.length; i++) {
        if (opcao_cavalo[i].checked) {
        	opcao_cavalo[i].disabled = true;
           	console.log("Escolheu: " + opcao_cavalo[i].value);
           	cavalo_selecionado = opcao_cavalo[i].value;
        }else{
        	opcao_cavalo[i].disabled = true;
        }
    }
    return cavalo_selecionado;

}

function velocidade_cavalo(){
	var velocidade = Math.random()*(3-2)+2;
	var velocidadeReal = velocidade*100;
	return velocidadeReal;

}

function preenche_chegada(corCavalo){
	tamanho_lista = linha_chegada.push(corCavalo);
	document.getElementById('placar').innerHTML += tamanho_lista+"° - "+linha_chegada[tamanho_lista-1]+"<br>";
	if(tamanho_lista==1) {
		cavaloVencedor = linha_chegada[tamanho_lista-1];
	}

	if(tamanho_lista==2){
		if (cavalo_selecionado == cavaloVencedor) {
			alert("Parabéns seu cavalo venceu a corrida");
			return false;
		}else{
			alert("Seu cavalo não venceu a corrida");
		}
	}

}