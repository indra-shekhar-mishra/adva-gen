
    const NibbleToAP = [
      'P','O','N','M','L','K','J','I',
      'H','G','F','E','D','C','B','A'
    ];

    function charToBinary(char) {
      return char.charCodeAt(0).toString(2).padStart(8,'0');
    }

    function encodeMessage(){
      const text = document.getElementById('plainText').value;
      if(!text){ alert("Enter some text!"); return; }

      let binaryStr = '';
      for(let char of text) binaryStr += charToBinary(char);

      let apStr = '';
      for (let i = 0; i < binaryStr.length; i += 4){
        const nibble = binaryStr.slice(i, i + 4);
        if (nibble.length < 4) break;
        apStr += NibbleToAP[parseInt(nibble,2)];
      }

      document.getElementById('encoded').textContent = apStr;
    }

    function clearFields(){
      document.getElementById('plainText').value = '';
      document.getElementById('encoded').textContent = '';
    }
