// Skapa objektet contactBook
const contactBook = {
  owner: "Anna López",
  contacts: [
    {
      name: "Ahmed Ali",
      phone: "070-1234567",
      group: "arbete",
    },
    {
      name: "Chen Li",
      phone: "070-7654321",
      group: "vänner",
    },
    {
      name: "Isak Gran",
      phone: "070-1112223",
      group: "arbete",
    },
    {
      name: "Juan López",
      phone: "070-5556667",
      group: "familj",
    },
  ],
};
  
  // Ange en grupp
  let groupToShow = "familj";
  



function showContacts(contactBook, groupToShow) { // Rör ej denna kod



    // Loopar igenom alla kontakter och jämför grupp
   
    for (contact of contactBook.contacts) { 
      if (contact.group === groupToShow) {
    return  `Name: ${contact.name}, Telefon: ${contact.phone}`;// här ska sträng med namn och tekefonnummer visas i form av string interpolation

  }
}
}

// Rör ej denna kod
showContacts(contactBook, groupToShow);
module.exports = { showContacts };


//info till läraren: Jag har problem med att köra skriptet på grund av exekveringspolicyn.
////Har gjort alla ändringar och följt instruktionerna, men har alltså inte kunnat köra den i fullständig miljö ännu.
//Saknar adminbehörighet på min dator vilket har försvårat processen med olika program.
//Hoppas på att kunna lösa detta så snart jag kan. 