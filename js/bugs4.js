validators[VAL_LENGTH].error = "ERROR: invalid input";

converters.celcius = function(celcius) {
    if (celcius == 0) return 0;
    if (celcius < 0) return ((parseFloat(celcius)*9.0)/5.0); 
    return ((parseFloat(celcius)*9.0)/5.0) + 32;
}

validators = [
    {"valid" : function(input) {
        if (input.indexOf(',') != -1) {
            alert("Valor inesperado");
            return false;
        } else {
            return true;
        }
      },
      "error" : "" }
].concat(validators);

