/* STEP:

 1 - Chiedi all’utente il suo nome,
 2 - poi chiedi il suo cognome,
 3 - poi chiedi il suo colore preferito
 Infine scrivi sulla pagina nomecognomecolorepreferito21 */


//  INPUT

var message = alert('Inserisci i tuoi dati per generare una Password Megagalattica'); 
// richiesta nome 
 var firstName = prompt('Come ti chiami?', 'Dart'); 
 console.log(firstName);

//  richiesta cognome

 var lastName = prompt('Qual è il tuo cognome?', 'Vader');
 console.log(lastName);

//  richiesta colore
 var favColor = prompt("Qual'è il tuo colore preferito?", 'BlackDeath');
 console.log(favColor);

 //selezione elemento in cui generare psw 


 var pswPlaceholder = document.getElementById('password');
 
 // final message
 var finalMessagePlaceholder = document.getElementById('final');
 var finalMessage = 'I am your father!'; 
 console.log(finalMessage);

 var father = finalMessagePlaceholder.innerHTML = finalMessage; 
 console.log(father);

 
 //OUTPUT 
 var pswGen =  pswPlaceholder.innerHTML = firstName + lastName + favColor + "21"; 
 console.log(pswGen);

 



