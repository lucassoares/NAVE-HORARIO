$(document).ready(function(){

	firebase.auth().onAuthStateChanged(firebaseUser =>{
		if(!firebaseUser){
			firebase.auth().signInAnonymously().catch(function(error){
				alert(error.message);
			});
		}
	});

	
	var dia;
	var tituloHorario;

	function horarioPrimeiroAlmoco(){
		$('#menuSemanal').hide();
		$('#almoco1 > td').remove();
		$('#almoco1').append('<td colspan="7"><strong>ALMOÇO 11:30 - 12:30</strong></td>');
	}

	$('#exibirTudo').click(function(){
		window.location.reload();
	});

	$('#btn1001').click(function(){
		horarioPrimeiroAlmoco();
		$('#almoco1 > th').remove();
		for(i = 3; i < 14; i++){
			$('td:nth-child('+i+'),th:nth-child('+i+')').hide();	
		}
	});

	$('#btn1002').click(function(){
		horarioPrimeiroAlmoco();
		for(i = 4; i < 14; i++){
			$('td:nth-child('+i+'),th:nth-child('+i+')').hide();	
		}
		$('td:nth-child(2),th:nth-child(2)').hide();
	});

	$('#btn1003').click(function(){
		horarioPrimeiroAlmoco();
		for(i = 5; i < 14; i++){
			$('td:nth-child('+i+'),th:nth-child('+i+')').hide();	
		}
		for(i = 2; i< 4; i++){
			$('td:nth-child('+i+'),th:nth-child('+i+')').hide();
		}
	});

	$('#btn1004').click(function(){
		horarioPrimeiroAlmoco();
		for(i = 6; i < 14; i++){
			$('td:nth-child('+i+'),th:nth-child('+i+')').hide();	
		}
		for(i = 2; i < 5; i++){
			$('td:nth-child('+i+'),th:nth-child('+i+')').hide();	
		}
	});

	$('#btn2001').click(function(){
		horarioPrimeiroAlmoco();
		for(i = 7; i < 14; i++){
			$('td:nth-child('+i+'),th:nth-child('+i+')').hide();	
		}
		for(i = 2; i < 6; i++){
			$('td:nth-child('+i+'),th:nth-child('+i+')').hide();	
		}
	});

	$('#btn2002').click(function(){
		horarioPrimeiroAlmoco();
		for(i = 8; i < 14; i++){
			$('td:nth-child('+i+'),th:nth-child('+i+')').hide();	
		}
		for(i = 2; i < 7; i++){
			$('td:nth-child('+i+'),th:nth-child('+i+')').hide();	
		}
	});

	$('#btn2003').click(function(){
		sumirHorario2Almoço();
		for(i = 9; i < 14; i++){
			$('td:nth-child('+i+'),th:nth-child('+i+')').hide();	
		}
		for(i = 2; i < 8; i++){
			$('td:nth-child('+i+'),th:nth-child('+i+')').hide();	
		}
		$("#almoco1 td:nth-child(2)").css('display', '');
	});


	$('#btn2004').click(function(){
		sumirHorario2Almoço();
		for(i = 10; i < 14; i++){
			$('td:nth-child('+i+'),th:nth-child('+i+')').hide();	
		}
		for(i = 2; i < 9; i++){
			$('td:nth-child('+i+'),th:nth-child('+i+')').hide();	
		}
		$("#almoco1 td:nth-child(3)").css('display', '');
	});


	$('#btn3001').click(function(){
		sumirHorario2Almoço();
		for(i = 11; i < 14; i++){
			$('td:nth-child('+i+'),th:nth-child('+i+')').hide();	
		}
		for(i = 2; i < 10; i++){
			$('td:nth-child('+i+'),th:nth-child('+i+')').hide();	
		}
		$("#almoco1 td:nth-child(4)").css('display', '');
	});


	$('#btn3002').click(function(){
		sumirHorario2Almoço();
		for(i = 12; i < 14; i++){
			$('td:nth-child('+i+'),th:nth-child('+i+')').hide();	
		}
		for(i = 2; i < 11; i++){
			$('td:nth-child('+i+'),th:nth-child('+i+')').hide();	
		}
		$("#almoco1 td:nth-child(5)").css('display', '');
	});


	$('#btn3003').click(function(){
		sumirHorario2Almoço();
		for(i = 13; i < 14; i++){
			$('td:nth-child('+i+'),th:nth-child('+i+')').hide();	
		}
		for(i = 2; i < 12; i++){
			$('td:nth-child('+i+'),th:nth-child('+i+')').hide();	
		}
		$("#almoco1 td:nth-child(6)").css('display', '');
	});


	$('#btn3004').click(function(){
		sumirHorario2Almoço();
		for(i = 2; i < 13; i++){
			$('td:nth-child('+i+'),th:nth-child('+i+')').hide();	
		}
		$("#almoco1 td:nth-child(7)").css('display', '');
	});


	var d = new Date();
	var n = d.getDay();

	switch(n){
		case 1:
			dia = 'segunda';
			tituloHorario = 'segunda-feira';
		break;

		case 2:
			dia = 'terca';
			tituloHorario = 'terça-feira';
		break;

		case 3:
			dia = 'quarta';
			tituloHorario = 'quarta-feira';
		break;

		case 4:
			dia = 'quinta';
			tituloHorario = 'quinta-feira';
		break;

		case 5:
			dia = 'sexta';
			tituloHorario = 'sexta-feira';
		break;

		default:
		dia = 'segunda';
		tituloHorario = 'segunda-feira';
	}

	exibirDia(dia);
	HoraAtualizada();
	

	$('#tituloHorario').append(tituloHorario);

	$('.menuSemanas').click(function(){
		 	$('#primeiraLinha > td').remove();
			$('#segundaLinha > td').remove();
			$('#terceiraLinha > td').remove();
			$('#quartaLinha > td').remove();
			$('#quintaLinha > td').remove();
			$('#almoco1 > td').remove();
			$('#almoco1 > th').remove();
			$('#almoco1').append('<th colspan="7"><strong>ALMOÇO 11:30 - 12:30</strong></th>');
			$('#almoco2 > td').remove();
			$('#setimaLinha > td').remove();
			$('#oitavaLinha > td').remove();
			$('#nonaLinha > td').remove();
			$('#decimaLinha > td').remove();
			
		var id = $(this).attr('id');

		switch(id){
			case 'btnSegunda':
				dia = 'segunda';
				tituloHorario = 'segunda-feira';
			break;

			case 'btnTerca':
				dia = 'terca'
				tituloHorario = 'terça-feira';
			break;

			case 'btnQuarta':
				dia = 'quarta';
				tituloHorario = 'quarta-feira';
			break;

			case 'btnQuinta':
				dia = 'quinta';
				tituloHorario = 'quinta-feira';
			break;

			case 'btnSexta':
				dia = 'sexta';
				tituloHorario = 'sexta-feira';
			break;
		}
		exibirDia(dia);
		HoraAtualizada();
		$('#tituloHorario').empty().append(tituloHorario);
	});

	
	function exibirDia(dia){
		$('#loadingImg').show();
	$('#tabelaCompleta').css('display', 'none');
		var qtdeTempos = 0;

		firebase.database().ref().child('horario').child(dia).on('child_added',function(snapshot){
			qtdeTempos++;
			console.log("qtde de tempos " + qtdeTempos);
			var primeiro = snapshot.child('primeiro').val();
			var segundo = snapshot.child('segundo').val();
			var terceiro = snapshot.child('terceiro').val();
			var quarto = snapshot.child('quarto').val();
			var quinto = snapshot.child('quinto').val();
			var sexto = snapshot.child('sexto').val();
			var setimo = snapshot.child('setimo').val();
			var oitavo = snapshot.child('oitavo').val();
			var nono = snapshot.child('nono').val();
			var decimo = snapshot.child('decimo').val();
			
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

			$('#primeiraLinha').append('<td> <span class="HorarioMateria"> <strong>'+ primeiro[0] +' </span> </strong><br>'+  primeiro[1] +'<br> <span class="HorarioSala"> '+primeiro[2]+' </span> </td>');
			$('#segundaLinha').append('<td><span class="HorarioMateria"><strong>'+ segundo[0] +'</span></strong><br>'+  segundo[1] +'<br><span class="HorarioSala">'+segundo[2]+'</span></td>');
			$('#terceiraLinha').append('<td><span class="HorarioMateria"><strong>'+ terceiro[0] +'</span></strong><br>'+  terceiro[1] +'<br><span class="HorarioSala">'+terceiro[2]+'</span></td>');
			$('#quartaLinha').append('<td><span class="HorarioMateria"><strong>'+ quarto[0] +'</span></strong><br>'+  quarto[1] +'<br><span class="HorarioSala">'+quarto[2]+'</span></td>');
			$('#quintaLinha').append('<td><span class="HorarioMateria"><strong>'+ quinto[0] +'</span></strong><br>'+  quinto[1] +'<br><span class="HorarioSala">'+quinto[2]+'</span></td>');
			if(qtdeTempos > 6){
				$('#almoco1').append('<td><span class="HorarioMateria"><strong>'+ sexto[0] +'</span></strong><br>'+  sexto[1] +'<br><span class="HorarioSala">'+sexto[2]+'</span></td>');
				if(qtdeTempos == 7){
					$('#almoco2').append('<td colspan="6"><strong>ALMOÇO: 12:20 -  13:20</strong></td>');
				}
			}else{
				$('#almoco2').append('<td><span class="HorarioMateria"><strong>'+ sexto[0] +'</span></strong><br>'+  sexto[1] +'<br><span class="HorarioSala">'+sexto[2]+'</span></td>');
			}
			$('#setimaLinha').append('<td><span class="HorarioMateria"><strong>'+ setimo[0] +'</span></strong><br>'+  setimo[1] +'<br><span class="HorarioSala">'+setimo[2]+'</span></td>');
			$('#oitavaLinha').append('<td><span class="HorarioMateria"><strong>'+ oitavo[0] +'</span></strong><br>'+  oitavo[1] +'<br><span class="HorarioSala">'+oitavo[2]+'</span></td>');
			$('#nonaLinha').append('<td><span class="HorarioMateria"><strong>'+ nono[0] +'</span></strong><br>'+  nono[1] +'<br><span class="HorarioSala">'+nono[2]+'</span></td>');
			$('#decimaLinha').append('<td><span class="HorarioMateria"><strong>'+ decimo[0] +'</span></strong><br>'+  decimo[1] +'<br><span class="HorarioSala">'+decimo[2]+'</span></td>');
			$('#loadingImg').hide();
			$('#tabelaCompleta').css('display', 'table');
		});
	}


	function sumirHorario2Almoço(){
		$('#menuSemanal').hide();
		$('#almoco2 > td, #almoco2 > th').remove();
		$('#almoco2').append('<td colspan="7"><strong>ALMOÇO 12:20 - 13:20</strong></td>');
		$('#almoco1 > th').html('11:30 - 12:20');
		$('#almoco1 > th').attr('colspan', '1');
	}

	function HoraAtualizada(){
		firebase.database().ref().child('atualizacao').child(dia).on('value',function(snapshot){
			var horarioAtualizacao = snapshot.child('horario').val();
			var dataAtualizacao = snapshot.child('data').val();
			$('#dataAtualizacao').html(dataAtualizacao);
			$('#horaAtualizacao').html(horarioAtualizacao);
		});
	}
	
});
