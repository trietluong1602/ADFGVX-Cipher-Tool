function getKeysquare() {
    const input_table = document.getElementsByName("keysquare_input");
    var result = "";
    for (var i = 0; i < input_table.length; i++) {
        result += input_table[i].value
    }
    return result.toLowerCase().replace(/[^a-z0-9]/g, "");
}