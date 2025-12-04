    const APToNibble = {
      'P':0,'O':1,'N':2,'M':3,'L':4,'K':5,'J':6,'I':7,
      'H':8,'G':9,'F':10,'E':11,'D':12,'C':13,'B':14,'A':15
    };

    function decodeMessage(){
      const apText = document.getElementById('encodedText').value.toUpperCase().trim();
      if(!apText){ alert("Enter AP encoded text!"); return; }

      let binaryStr = '';
      for(let char of apText){
        if(!(char in APToNibble)){
          alert("Invalid AP characters detected!");
          return;
        }
        binaryStr += APToNibble[char].toString(2).padStart(4,'0');
      }

      let decodedText = '';
      for(let i=0;i<binaryStr.length;i+=8){
        const byte = binaryStr.slice(i,i+8);
        if(byte.length < 8) break;
        decodedText += String.fromCharCode(parseInt(byte,2));
      }

      document.getElementById('decoded').textContent = decodedText;
    }

    function clearFields(){
      document.getElementById('encodedText').value = '';
      document.getElementById('decoded').textContent = '';
    }