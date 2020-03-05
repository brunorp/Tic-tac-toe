	var verifica = 1;
	var vetor = new Array();
	var populado=0;
function marca(x){


	if(x=='l0c0' && document.getElementById("00").innerHTML == ""){
		
		if(verifica == 1){
			document.getElementById("00").innerHTML = "X"
			verifica=2;
			vetor[0]= 1;
			document.getElementById("jogador").innerHTML = "Vez do jogador 2"
		}
		else if(verifica == 2){
			document.getElementById("00").innerHTML = "O"
			verifica=1;
			vetor[0]= 2;
			document.getElementById("jogador").innerHTML = "Vez do jogador 1"
		}
		verificaVencedor();
	}
	
	if(x=='l0c1' && document.getElementById("01").innerHTML == ""){
		if(verifica == 1){
			document.getElementById("01").innerHTML = "X"
			verifica=2;
			vetor[1]= 1;
			document.getElementById("jogador").innerHTML = "Vez do jogador 2"
		}
		else if(verifica == 2){
			document.getElementById("01").innerHTML = "O"
			verifica=1;
			vetor[1]= 2;
			document.getElementById("jogador").innerHTML = "Vez do jogador 1"
		}
		verificaVencedor();
	}
	
	if(x=='l0c2' && document.getElementById("02").innerHTML == ""){
		if(verifica == 1){
			document.getElementById("02").innerHTML = "X"
			verifica=2;
			vetor[2]= 1;
			document.getElementById("jogador").innerHTML = "Vez do jogador 2"
		}
		else if(verifica == 2){
			document.getElementById("02").innerHTML = "O"
			verifica=1;
			vetor[2]= 2;
			document.getElementById("jogador").innerHTML = "Vez do jogador 1"
		}
		verificaVencedor();
	}
	
	if(x=='l1c0' && document.getElementById("10").innerHTML == ""){
		if(verifica == 1){
			document.getElementById("10").innerHTML = "X"
			verifica=2;
			vetor[3] = 1;
			document.getElementById("jogador").innerHTML = "Vez do jogador 2"
		}
		else if(verifica == 2){
			document.getElementById("10").innerHTML = "O"
			verifica=1;
			vetor[3]= 2;
			document.getElementById("jogador").innerHTML = "Vez do jogador 1"
		}
		verificaVencedor();
	}
	
	if(x=='l1c1' && document.getElementById("11").innerHTML == ""){
		if(verifica == 1){
			document.getElementById("11").innerHTML = "X"
			verifica=2;
			vetor[4] = 1;
			document.getElementById("jogador").innerHTML = "Vez do jogador 2"
		}
		else if(verifica == 2){
			document.getElementById("11").innerHTML = "O"
			verifica=1;
			vetor[4] = 2;
			document.getElementById("jogador").innerHTML = "Vez do jogador 1"
		}
		verificaVencedor();
	}
	
	if(x=='l1c2' && document.getElementById("12").innerHTML == ""){
		if(verifica == 1){
			document.getElementById("12").innerHTML = "X"
			verifica=2;
			vetor[5] = 1;
			document.getElementById("jogador").innerHTML = "Vez do jogador 2"
		}
		else if(verifica == 2){
			document.getElementById("12").innerHTML = "O"
			verifica=1;
			vetor[5] = 2;
			document.getElementById("jogador").innerHTML = "Vez do jogador 1"
		}
		verificaVencedor();
	}
	
	if(x=='l2c0' && document.getElementById("20").innerHTML == ""){
		if(verifica == 1){
			document.getElementById("20").innerHTML = "X"
			verifica=2;
			vetor[6] = 1;
			document.getElementById("jogador").innerHTML = "Vez do jogador 2"
		}
		else if(verifica == 2){
			document.getElementById("20").innerHTML = "O"
			verifica=1;
			vetor[6] = 2;
			document.getElementById("jogador").innerHTML = "Vez do jogador 1"
		}
		verificaVencedor();
	}
	
	if(x=='l2c1' && document.getElementById("21").innerHTML == ""){
		if(verifica == 1){
			document.getElementById("21").innerHTML = "X"
			verifica=2;
			vetor[7]= 1
			document.getElementById("jogador").innerHTML = "Vez do jogador 2"
		}
		else if(verifica == 2){
			document.getElementById("21").innerHTML = "O"
			verifica=1;
			vetor[7] = 2
			document.getElementById("jogador").innerHTML = "Vez do jogador 1"
		}
		verificaVencedor();
	}
	
	if(x=='l2c2' && document.getElementById("22").innerHTML == ""){
		if(verifica == 1){
			document.getElementById("22").innerHTML = "X"
			verifica=2;
			vetor[8] = 1;
			document.getElementById("jogador").innerHTML = "Vez do jogador 2"
		}
		else if(verifica == 2){
			document.getElementById("22").innerHTML = "O"
			verifica=1;
			vetor[8] = 2;
			document.getElementById("jogador").innerHTML = "Vez do jogador 1"
		}
		verificaVencedor();
	}
	
}

function verificaVencedor(){
	
	if(verifica==1){
		//jogador2 venceu
		if(vetor[0]==2 && vetor[1] == 2 && vetor[2] == 2){
			document.getElementById('vencedor').innerHTML = "Jogador 2 venceu"
			verifica = 3;
		}
		if(vetor[3]==2 && vetor[4] == 2 && vetor[5] == 2){
			document.getElementById('vencedor').innerHTML = "Jogador 2 venceu"
			verifica = 3;
		}
		if(vetor[6]==2 && vetor[7] == 2 && vetor[8] == 2){
			document.getElementById('vencedor').innerHTML = "Jogador 2 venceu"
			verifica = 3;
		}
		//colunas
		if(vetor[0]==2 && vetor[3] == 2 && vetor[6] == 2){
			document.getElementById('vencedor').innerHTML = "Jogador 2 venceu"
			verifica = 3;
		}
		if(vetor[1]==2 && vetor[4] == 2 && vetor[7] == 2){
			document.getElementById('vencedor').innerHTML = "Jogador 2 venceu"
			verifica = 3;
		}
		if(vetor[2]==2 && vetor[5] == 2 && vetor[8] == 2){
			document.getElementById('vencedor').innerHTML = "Jogador 2 venceu"
			verifica = 3;
		}
		//diagonais
		if(vetor[0]==2 && vetor[4] == 2 && vetor[8] == 2){
			document.getElementById('vencedor').innerHTML = "Jogador 2 venceu"
			verifica = 3;
		}
		if(vetor[2]==2 && vetor[4] == 2 && vetor[6] == 2){
			document.getElementById('vencedor').innerHTML = "Jogador 2 venceu"
			verifica = 3;
		}
	}else if(verifica==2){
		//jogador 1 venceu
		if(vetor[0]==1 && vetor[1] == 1 && vetor[2] == 1){
			document.getElementById('vencedor').innerHTML = "Jogador 1 venceu"
			verifica = 3;
		}
		if(vetor[3]==1 && vetor[4] == 1 && vetor[5] == 1){
			document.getElementById('vencedor').innerHTML = "Jogador 1 venceu"
			verifica = 3;
		}
		if(vetor[6]==1 && vetor[7] == 1 && vetor[8] == 1){
			document.getElementById('vencedor').innerHTML = "Jogador 1 venceu"
			verifica = 3;
		}
		//colunas
		if(vetor[0]==1 && vetor[3] == 1 && vetor[6] == 1){
			document.getElementById('vencedor').innerHTML = "Jogador 1 venceu"
			verifica = 3;
		}
		if(vetor[1]==1 && vetor[4] == 1 && vetor[7] == 1){
			document.getElementById('vencedor').innerHTML = "Jogador 1 venceu"
			verifica = 3;
		}
		if(vetor[2]==1 && vetor[5] == 1 && vetor[8] == 1){
			document.getElementById('vencedor').innerHTML = "Jogador 1 venceu"
			verifica = 3;
		}
		//diagonais
		if(vetor[0]==1 && vetor[4] == 1 && vetor[8] == 1){
			document.getElementById('vencedor').innerHTML = "Jogador 1 venceu"
			verifica = 3;
		}
		if(vetor[2]==1 && vetor[4] == 1 && vetor[6] == 1){
			document.getElementById('vencedor').innerHTML = "Jogador 1 venceu"
			verifica = 3;
		}

	}
		for(i=0;i<=8;i++){
			if(vetor[i]==1 || vetor[i]==2){
			populado+=1;
			}
			if(populado==45 && document.getElementById('vencedor').innerHTML == ""){
				document.getElementById('vencedor').innerHTML = "Deu velha!!"
			}
		}
	
}
