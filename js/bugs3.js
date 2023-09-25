converters.celsius = function(celsius) {
    if (celsius == 0) return 0;
    if (celsius < 0) return ((parseFloat(celsius)*9.0)/5.0);
    return ((parseFloat(celsius)*9.0)/5.0) + 32;
}

validators = [
    {"valid" : function(input) {
        if (input.indexOf(',') != -1) {
            alert("Unexpected value");
            return false;
        } else {
            return true;
        }
      },
      "error" : "" }
].concat(validators);

