$(document).ready(function(){

	firebase.auth().onAuthStateChanged(firebaseUser =>{
		if(firebaseUser){
			var isAnonymous = firebaseUser.isAnonymous;
			if(isAnonymous){
				$(location).attr('href', 'acesso.html');	
			}
		}else{
			$(location).attr('href', 'acesso.html');
		}
	});
	var primeiro,segundo,terceiro,quarto,quinto,sexto,setimo,oitavo,nono,decimo;
	var contador = 0;
	var dia;
	var ii = 0;
	var conta = 0;
	var novoValor = 1;

	$('#btnSair').click(function(){
		firebase.auth().signOut().then(function(){
			$(location).attr('href', 'acesso.html');
		},function(error){
			alert(error.message);
		});
	});

	$('body').on('blur','input',function(){
		var professor = $(this).val();
		var classe = $(this).attr('class');
		
		switch(classe){
			case 'primeirosTemposProfessores':
				novoValor = 2;
			break;

			case 'primeirosTemposSalas':
				novoValor = 3;
			break;

			case 'segundosTemposProfessores':
				novoValor = 5;
			break;

			case 'segundosTemposSalas':
				novoValor = 6;
			break;

			case 'terceirosTemposProfessores':
				novoValor = 8;
			break;

			case 'terceirosTemposSalas':
				novoValor = 9;
			break;

			case 'quartosTemposProfessores':
				novoValor = 11;
			break;

			case 'quartosTemposSalas':
				novoValor = 12;
			break;

			case 'quintosTemposProfessores':
				novoValor = 14;
			break;

			case 'quintosTemposSalas':
				novoValor = 15;
			break;

			case 'sextosTemposProfessores':
				novoValor = 17;
			break;

			case 'sextosTemposSalas':
				novoValor = 18;
			break;

			case 'setimosTemposProfessores':
				novoValor = 20;
			break;

			case 'setimosTemposSalas':
				novoValor = 21;
			break;

			case 'oitavosTemposProfessores':
				novoValor = 23;
			break;

			case 'oitavosTemposSalas':
				novoValor = 24;
			break;

			case 'nonosTemposProfessores':
				novoValor = 26;
			break;

			case 'nonosTemposSalas':
				novoValor = 27;
			break;

			case 'decimosTemposProfessores':
				novoValor = 29;
			break;

			case 'decimosTemposSalas':
				novoValor = 30;
			break;
		}

		// conta = novoValor;

		// for(i = 0; i < 12; i++){
		// 	if(professor == $('#tempoId'+conta).val() && $(this).attr('id') != $('#tempoId'+conta).attr('id') && professor != '' ){
		// 		$(this).val('');
		// 		alert(professor + ' já está dando aula');
		// 		console.log("ESSE É O LUGAR " + conta);		
		// 		$(this).focus();
		// 	}
		// 	conta += 30;
		// }
		// conta = novoValor;
	});      
	var d = new Date();
	var n = d.getDay();

	switch(n){
		case 1:
			dia = 'segunda';
		break;

		case 2:
			dia = 'terca';
		break;

		case 3:
			dia = 'quarta';
		break;

		case 4:
			dia = 'quinta';
		break;

		case 5:
			dia = 'sexta';
		break;

		default:
			dia = 'segunda';
	}

	$('#tituloSemana').append(dia);

	$('.menuSemanas').click(function(){
		var id = $(this).attr('id');
			$('#primeiraLinha > td').remove();
			$('#segundaLinha > td').remove();
			$('#terceiraLinha > td').remove();
			$('#quartaLinha > td').remove();
			$('#almoco1 > td').remove();
			$('#almoco2 > td').remove();
			$('#quintaLinha > td').remove();
			$('#sextaLinha > td').remove();
			$('#setimaLinha > td').remove();
			$('#oitavaLinha > td').remove();
			$('#nonaLinha > td').remove();
			$('#decimaLinha > td').remove();

		switch(id){
			case 'btnSegunda':
				dia = 'segunda';
			break;

			case 'btnTerca':
				dia = 'terca';
			break;

			case 'btnQuarta':
				dia = 'quarta';
			break;

			case 'btnQuinta':
				dia = 'quinta';
			break;

			case 'btnSexta':
				dia = 'sexta';
			break;
		}
		$('#tituloSemana').empty().append(dia);
		exibirDados();
	});

	exibirDados();

	function exibirDados(){
		var qtdeTempos = 0;
		firebase.database().ref().child('horario').child(dia).on('child_added',function(snapshot){
			qtdeTempos++;
		 primeiro = snapshot.child('primeiro').val();
		 segundo = snapshot.child('segundo').val();
		 terceiro = snapshot.child('terceiro').val();
		 quarto = snapshot.child('quarto').val();
		 quinto = snapshot.child('quinto').val();
		 sexto = snapshot.child('sexto').val();
		 setimo = snapshot.child('setimo').val();
		 oitavo = snapshot.child('oitavo').val();
		 nono = snapshot.child('nono').val();
		 decimo = snapshot.child('decimo').val();

		primeiro = primeiro.split('|');
		segundo = segundo.split('|');
		terceiro = terceiro.split('|');
		quarto = quarto.split('|');
		quinto = quinto.split('|');
		sexto = sexto.split('|');
		setimo = setimo.split('|');
		oitavo = oitavo.split('|');
		nono = nono.split('|');
		decimo = decimo.split('|');

		$('#primeiraLinha').append('<td><input placeholder="Disciplina" id="tempoId'+(contador+=1)+'" style="color:black;" type="text" name="" value="'+ primeiro[0]+'" <br> <input placeholder="Professor" class="primeirosTemposProfessores" id="tempoId'+(contador+=1)+'" style="color:black;" type="text" name="" value="'+ primeiro[1]+'" <br> <input placeholder="Sala" class="primeirosTemposSalas" id="tempoId'+(contador+=1)+'" style="color:black;" type="text" name="" value="'+ primeiro[2]+'" </td>');
		$('#segundaLinha').append('<td><input placeholder="Disciplina" id="tempoId'+(contador+=1)+'" style="color:black;" type="text" name="" value="'+ segundo[0]+'" <br> <input placeholder="Professor" class="segundosTemposProfessores" id="tempoId'+(contador+=1)+'" style="color:black;" type="text" name="" value="'+ segundo[1]+'" <br> <input placeholder="Sala" class="segundosTemposSalas"  id="tempoId'+(contador+=1)+'" style="color:black;" type="text" name="" value="'+ segundo[2]+'" </td>');
		$('#terceiraLinha').append('<td><input placeholder="Disciplina" id="tempoId'+(contador+=1)+'" style="color:black;" type="text" name="" value="'+ terceiro[0]+'" <br> <input placeholder="Professor" class="terceirosTemposProfessores" id="tempoId'+(contador+=1)+'" style="color:black;" type="text" name="" value="'+ terceiro[1]+'" <br> <input placeholder="Sala" class="terceirosTemposSalas" id="tempoId'+(contador+=1)+'" style="color:black;" type="text" name="" value="'+ terceiro[2]+'" </td>');
		$('#quartaLinha').append('<td><input placeholder="Disciplina" id="tempoId'+(contador+=1)+'" style="color:black;" type="text" name="" value="'+ quarto[0]+'" <br> <input placeholder="Professor" class="quartosTemposProfessores" id="tempoId'+(contador+=1)+'" style="color:black;" type="text" name="" value="'+ quarto[1]+'" <br> <input placeholder="Sala" class="quartosTemposSalas" id="tempoId'+(contador+=1)+'" style="color:black;" type="text" name="" value="'+ quarto[2]+'" </td>');
		$('#quintaLinha').append('<td><input placeholder="Disciplina" id="tempoId'+(contador+=1)+'" style="color:black;" type="text" name="" value="'+ quinto[0]+'" <br> <input placeholder="Professor" class="quintosTemposProfessores" id="tempoId'+(contador+=1)+'" style="color:black;" type="text" name="" value="'+ quinto[1]+'" <br> <input placeholder="Sala" class="quintosTemposSalas" id="tempoId'+(contador+=1)+'" style="color:black;" type="text" name="" value="'+ quinto[2]+'" </td>');
		if(qtdeTempos > 6){
			$('#almoco1').append('<td><input placeholder="Disciplina" id="tempoId'+(contador+=1)+'" style="color:black;" type="text" name="" value="'+ sexto[0]+'" <br> <input placeholder="Professor" class="quintosTemposProfessores" id="tempoId'+(contador+=1)+'" style="color:black;" type="text" name="" value="'+ sexto[1]+'" <br> <input placeholder="Sala" class="quintosTemposSalas" id="tempoId'+(contador+=1)+'" style="color:black;" type="text" name="" value="'+ sexto[2]+'" </td>');
			if(qtdeTempos == 7){
				$('#almoco2').append('<td colspan="6"><strong>ALMOÇO 12:20 -  13:20</strong></td>');
			}
		}else{
				$('#almoco2').append('<td><input placeholder="Disciplina" id="tempoId'+(contador+=1)+'" style="color:black;" type="text" name="" value="'+ sexto[0]+'" <br> <input placeholder="Professor" class="quintosTemposProfessores" id="tempoId'+(contador+=1)+'" style="color:black;" type="text" name="" value="'+ sexto[1]+'" <br> <input placeholder="Sala" class="quintosTemposSalas" id="tempoId'+(contador+=1)+'" style="color:black;" type="text" name="" value="'+ sexto[2]+'" </td>');
			}
		$('#setimaLinha').append('<td><input placeholder="Disciplina" id="tempoId'+(contador+=1)+'" style="color:black;" type="text" name="" value="'+ setimo[0]+'" <br> <input placeholder="Professor" class="setimosTemposProfessores" id="tempoId'+(contador+=1)+'" style="color:black;" type="text" name="" value="'+ setimo[1]+'" <br> <input placeholder="Sala" class="setimosTemposSalas" id="tempoId'+(contador+=1)+'" style="color:black;" type="text" name="" value="'+ setimo[2]+'" </td>');
		$('#oitavaLinha').append('<td><input placeholder="Disciplina" id="tempoId'+(contador+=1)+'" style="color:black;" type="text" name="" value="'+ oitavo[0]+'" <br> <input placeholder="Professor" class="oitavosTemposProfessores" id="tempoId'+(contador+=1)+'" style="color:black;" type="text" name="" value="'+ oitavo[1]+'" <br> <input placeholder="Sala" class="oitavosTemposSalas" id="tempoId'+(contador+=1)+'" style="color:black;" type="text" name="" value="'+ oitavo[2]+'" </td>');
		$('#decimaLinha').append('<td><input placeholder="Disciplina" id="tempoId'+(contador+=1)+'" style="color:black;" type="text" name="" value="'+ nono[0]+'" <br> <input placeholder="Professor" class="nonosTemposProfessores" id="tempoId'+(contador+=1)+'" style="color:black;" type="text" name="" value="'+ nono[1]+'" <br> <input placeholder="Sala" class="nonosTemposSalas" id="tempoId'+(contador+=1)+'" style="color:black;" type="text" name="" value="'+ nono[2]+'" </td>');
		$('#nonaLinha').append('<td><input placeholder="Disciplina" id="tempoId'+(contador+=1)+'" style="color:black;" type="text" name="" value="'+ decimo[0]+'" <br> <input placeholder="Professor" class="decimosTemposProfessores" id="tempoId'+(contador+=1)+'" style="color:black;" type="text" name="" value="'+ decimo[1]+'" <br> <input placeholder="Sala" class="decimosTemposSalas" id="tempoId'+(contador+=1)+'" style="color:black;" type="text" name="" value="'+ decimo[2]+'" </td>');
	});
	contador = 0;
	}

	// clique no botao para atualizar o banco de dados
	$('#btnAtualizar').click(function(){
		
		clickAtualizar('1001');
		clickAtualizar('1002');
		clickAtualizar('1003');
		clickAtualizar('1004');

		clickAtualizar('2001');
		clickAtualizar('2002');
		clickAtualizar('2003');
		clickAtualizar('2004');

		clickAtualizar('3001');
		clickAtualizar('3002');
		clickAtualizar('3003');
		clickAtualizar('3004');
		ii = 0;
		DataAtualizacao();
		alert('Alterações realizadas com sucesso');
	});

	function clickAtualizar(turma){
		primeiro = recolherDados(ii+=1,ii+=1,ii+=1);
		segundo = recolherDados(ii+=1,ii+=1,ii+=1);
		terceiro = recolherDados(ii+=1,ii+=1,ii+=1);
		quarto = recolherDados( ii+=1,ii+=1,ii+=1);
		quinto = recolherDados(ii+=1,ii+=1,ii+=1);
		sexto = recolherDados(ii+=1,ii+=1,ii+=1);
		setimo = recolherDados(ii+=1,ii+=1,ii+=1);
		oitavo = recolherDados(ii+=1,ii+=1,ii+=1);
		decimo = recolherDados(ii+=1,ii+=1,ii+=1);
		nono = recolherDados(ii+=1,ii+=1,ii+=1);
		atualizarDB(turma,primeiro,segundo,terceiro,quarto,quinto,sexto,setimo,oitavo,nono,decimo);
	}


	function recolherDados(n1, n2, n3){
		var tempoCompleto = $('#tempoId'+n1).val() + "|" + $('#tempoId'+n2).val() + "|" + $('#tempoId'+n3).val();
		return tempoCompleto;
	}

	function atualizarDB(turma,p,s,t,q,qq,ss,st,ot,nn,d){
		firebase.database().ref().child ('horario').child(dia).child(turma).update({
			primeiro: p,
			segundo: s,
			terceiro: t,
			quarto: q,
			quinto: qq,
			sexto: ss,
			setimo: st,
			oitavo: ot,
			nono: nn,
			decimo:d
		});
	}


	function DataAtualizacao(){
		var date = new Date();
		var hora = date.getHours();
		var minutos = date.getMinutes();
		var mes = parseInt(date.getMonth()) + 1;
		if(mes < 10){
			mes = "0"+mes;
		}
		if(minutos < 10){
			minutos = "0"+minutos;
		}
		if(hora < 10){
			hora = "0"+hora;
		}
		if(dia < 10){
			dia = "0"+dia;
		}
		var diaAtualizacao = date.getDate();
		firebase.database().ref().child ('atualizacao').child(dia).update({
			data: diaAtualizacao + "/" + mes,
			horario: hora + ":" + minutos
		});
	}
});