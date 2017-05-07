$(document).ready(function(){

	$('#btnLogin').click(function(){
		var email = $('#inputEmail').val();
		var senha = $('#inputSenha').val();

		firebase.auth().signInWithEmailAndPassword(email,senha).then(function(){
			$(location).attr('href', 'controle.html');
		}).catch(function(error){
			alert(error.message);
		});
	});

	firebase.auth().onAuthStateChanged(firebaseUser =>{
		if(firebaseUser){
			var isAnonymous = firebaseUser.isAnonymous;	
		}
		if(firebaseUser && !isAnonymous){
			$(location).attr('href', 'controle.html');
		}
	})
	
});