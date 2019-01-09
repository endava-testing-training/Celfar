$("p#description")[0].innerHTML = "Conversor de grados <a href='http://es.wikipedia.org/iki/Grado_Celsius'>Celcius</a> y <a href='http://es.wikipedia.org/wiki/Grado_Fahrenheit'>Fahrenheit</a>";

validators[VAL_ZERO].valid = function(input) {return parseInt(input) > -273;};
validators = [
    {"valid" : function(input) {
        if (input.length == 0) {
            return false;
        }
        return true;
      },
     "error" : "" }
].concat(validators);
