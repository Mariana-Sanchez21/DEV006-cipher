const cipher = {
  encode: function(message, shift) {
    let encryptedMessage = "";


    console.log(typeof shift)


    const listletters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';




    for ( const letter of message) {
      if (!listletters.includes(letter)) {
        console.log("ok");
      }else{
        let newLetter="";


        const letterCode=letter.charCodeAt(0);
        let newLetterCode= (letterCode+ shift-65) % 26 +65 ;




        if(newLetterCode>122){
          newLetterCode-=26;
        }
        newLetter=String.fromCharCode(newLetterCode);


        encryptedMessage+=newLetter;


        console.log(encryptedMessage);
      }}
    console.log(encryptedMessage);
    return encryptedMessage;
  },
  decode: function(message2, shift2) {
    let encryptedMessage2 = "";


    console.log(typeof shift)


    const listletters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';




    for ( const letter2 of message2) {
      if (!listletters.includes(letter2)) {
        console.log("ok");
      }else{
        let newLetter2="";


        const letterCode2=letter2.charCodeAt(0);
        let newLetterCode2= (letterCode2- shift2+65) % 26 +65 ;




        if(newLetterCode2>122){
          newLetterCode2-=26;
        }
        newLetter2=String.fromCharCode(newLetterCode2);


        encryptedMessage2+=newLetter2;


        console.log(encryptedMessage2);
      }}
    console.log(encryptedMessage2);
    return encryptedMessage2;
    }
  }


export default cipher;

