function encipherButtonFunction()  {
    var plaintext = document.getElementById('plaintext').value.toLowerCase().replace(/[^a-z]/g, "");
    var keysquare = getKeysquare();
    var keyword = document.getElementById('keyword').value.toLowerCase().replace(/[^a-z]/g, "");
    
    if (plaintext == "" || keysquare == "" || keyword == "") {
        alert("Please enter plaintext, keyword, and table to be encrypted!");
        return;
    }

    var result = encrypt(plaintext, keysquare, keyword);
    document.getElementById('ciphertext').value = result;
}

function decipherButtonFunction()  {
    var ciphertext = document.getElementById('ciphertext').value.toLowerCase().replace(/[^a-z]/g, "");
    var keysquare = getKeysquare();
    var keyword = document.getElementById('keyword').value.toLowerCase().replace(/[^a-z]/g, "");
    
    if (ciphertext == "" || keysquare == "" || keyword == "") {
        alert("Please enter ciphertext, keyword, and table to be decrypted!");
        return;
    }

    var result = decrypt(ciphertext, keysquare, keyword);
    document.getElementById('plaintext').value = result;
}