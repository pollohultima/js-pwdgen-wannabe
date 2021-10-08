/* Chiedo all'utente nome, cognome e colore preferito */
const user_first_name = prompt('Inserisci nome');

const user_last_name = prompt('Inserisci cognome');

const user_fav_color = prompt('Inserisci colore preferito')

/* Visualizzo un password all'utente */
document.getElementById('password').innerHTML = 'La tua password SICURA è: ' + user_first_name + user_last_name + user_fav_color + '21';