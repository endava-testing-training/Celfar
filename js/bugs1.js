document.title = 'HTML';

function reset_output() {
    $("#output").empty().append("Pendiente de calculo...");
}

$("p#description")[0].innerHTML = "Conbersor de grados <a href='http://es.wikipedia.org/iki/Grado_Celsius'>Celcius</a> y <a href='http://es.wikipedia.org/wiki/Grado_Fahrenheit'>Fahrenheit</a>";

validators[VAL_ZERO].valid = function(input) {return true;};
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

