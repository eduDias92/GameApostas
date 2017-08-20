# GameApostas
Jogo de Aposta de cavalos
Algoritmo:

Jogo de apostas de cavalos

-Dois cavalos
- Aposta em apenas um
- Os dois percorrem um percurso
- O primeiro que chegar na linha de chegada vence


Inicio
criaPista();
Seleciona cavalinho desejado entre 2;
cada cavalo refceberá uma velocidade específica na função velocidade cavalo;
	velocidadeCavalo1 = Retorno da função velocidadeCavalo();
	velocidadeCavalo2 = Retorno da função velocidadeCavalo();
o cavalo andará as casas para frente conforme sua velocidade, até que chegue na linha de chegada;
	função correCavalo(velocidadeCavalo1, tamanho_da_pista);
	função correCavalo(velocidadeCavalo2, tamanho_da_pista);
A linha de chegada receberá quem chegou primeiro;
	função fimDeProva();
Se cavalo selecionado chegar primeiro
	jogador vence
	gameover;
senão
	jogador perde;
	gameover;


função criarPista(){
	será uma tabela de duas linhas, onde cada linha estará seu respectivo cavalo;
	o ambos os cavalos estarão inicialmente na primeira celula da tabela;
	As colunas serão adicionadas através de um laço de repetição e receberão um id único cada uma;
	retorna tamanho_da_pista
}

Função correCavalo(velocidadeCavalo, tamanho_da_pista){
	o cavalo avançará as colunas conforme sua velocidade, enquanto não chegar à linha de 	chegada;
	Se a casa que o cavalo estiver for a casa onde é a linha de chegada, o jogo termina(função FimdeProva);
}

função velocidadeCavalo(){
	var velocidadeCavalo = numero_randomico;
	retorna velocidadeCavalo
}
