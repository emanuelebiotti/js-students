// - Creare un oggetto che descriva uno studente con le seguenti proprietà: nome, cognome e età. Stampare a schermo attraverso il for in tutte le proprietà.
// - Creare un array di oggetti di studenti. Ciclare su tutti gli studenti e stampare per ognuno nome e cognome
// - Dare la possibilità all’utente attraverso 3 prompt di aggiungere un nuovo oggetto studente inserendo nell’ordine: nome, cognome e età.

// - Creare un oggetto che descriva uno studente con le seguenti proprietà: nome, cognome e età.

var studente = {
  'nome': 'Jack',
  'cognome': 'London',
  'eta': 20
};

// Stampare a schermo attraverso il for in tutte le proprietà.
for (var field in studente) {
  console.log(studente[field]);
}

// - Creare un array di oggetti di studenti.

var studenti = [
  {
    'nome': 'Jack',
    'cognome': 'London',
    'eta': 20
  },
  {
    'nome': 'Nick',
    'cognome': 'Fury',
    'eta': 22
  },
  {
    'nome': 'Jim',
    'cognome': 'Hawkins',
    'eta': 26
  }
]

// Ciclare su tutti gli studenti e stampare per ognuno nome e cognome
for (i=0; i<studenti.length; i++) {
  console.log(studenti[i].nome, studenti[i].cognome);
}

// Dare la possibilità all’utente attraverso 3 prompt di aggiungere un nuovo oggetto studente
// inserendo nell’ordine: nome, cognome e età.


  var nuovoStudente = {
    'nome': prompt('inserisci il nome del nuovo studente'),
    'cognome': prompt('inserisci il cognome del nuovo studente'),
    'eta': prompt('inserisci la età del nuovo studente')
  }

studenti.push(nuovoStudente);
console.log(studenti);
