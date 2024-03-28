function encrypt(plaintext, keysquare, keyword) {
    if (keysquare.length != 36) {
        alert("Invalid Input for ADFGVX Table.");
        return;
    }
    if (keyword.length <= 1) {
        alert("Invalid Keyword, should be at least 2 characters long.");
        return;
    }

    adfgvx = "ADFGVX";
    ciphertext = "";
    
    for (var i = 0; i < plaintext.length; i++) {
        index = keysquare.indexOf(plaintext.charAt(i));
        ciphertext += adfgvx.charAt(index / 6) + adfgvx.charAt(index % 6);
    }

    var colLength = ciphertext.length / keyword.length;
    var chars = "abcdefghijklmnopqrstuvwxyz"; 

    result = ""; 
    k=0;

    for(i=0; i < keyword.length; i++){
        while(k<26){
            t = keyword.indexOf(chars.charAt(k));
            arrkw = keyword.split(""); 
            arrkw[t] = "_"; 
            keyword = arrkw.join("");
            if(t >= 0) break;
            else k++;
        }

        for(j=0; j < colLength; j++) {
            result += ciphertext.charAt(j*keyword.length + t);
        }
    }

    return result;
}