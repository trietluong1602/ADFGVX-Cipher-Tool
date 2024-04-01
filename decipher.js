function decrypt(ciphertext, keysquare, keyword)
{
    klen = keyword.length;
    var re = /[^adfgvx]/;

    if (ciphertext.length < 1) {
        alert("Please enter some ciphertext (letters only)"); 
        return; 
    }    
    if (re.test(ciphertext)) {
        alert("Ciphertext can only contain A,D,F,G,V or X characters."); 
        return;
    }
    if (ciphertext.length % 2 != 0) { 
        alert("Number of ciphertext characters must be even"); 
        return; 
    }  
    if (keysquare.length != 36) { 
        alert("Invalid Input for ADFGVX Table."); 
        return; 
    }
    if (klen <= 1) { 
        alert("keyword should be at least 2 characters long"); 
        return; 
    }

    var numLongCols = ciphertext.length % klen;
    var cols = new Array(klen);
    var colLength = Math.floor(ciphertext.length / klen);

    chars="abcdefghijklmnopqrstuvwxyz";
    i=0;
    upto=0;

    for(var j = 0; j < klen;){
        t=keyword.indexOf(chars.charAt(i));        
        if(t >= 0){
            if(t<numLongCols) cl = colLength+1;
            else cl = colLength;
            cols[t] = ciphertext.substr(upto,cl);
            upto = upto+cl;
            arrkw = keyword.split(""); arrkw[t] = "_"; keyword = arrkw.join("");
            j++;
        }
        else i++;         
    }    

    plaintext = "";

    for(j=0; j < colLength+1; j++) {
        for(i=0; i < klen; i++) {
            plaintext += cols[i].charAt(j);
        }
    }

    adfgvx = "adfgvx"; 
    result = "";
    temp = 0;

    for(var i=0; i < plaintext.length; i+=2) {
        keyindex = adfgvx.indexOf(plaintext.charAt(i))*6 + adfgvx.indexOf(plaintext.charAt(i+1));
        result += keysquare.charAt(keyindex);
        if (result.length % 5 == temp) {
            result += " ";
            temp = (temp + 1) % 5;
        }
    }

    return result;
}