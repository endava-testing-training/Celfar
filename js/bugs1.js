document.title = 'HTML';

function reset_output() {
    $("#output").empty().append("Calculation Pending..");
}

$("p#description")[0].innerHTML = "<a href='https://en.wikipedia.org/iki/Celsius'>Celcius</a> to <a href='https://en.wikipedia.org/wiki/Fahrenheit'>Fahrenheit</a>Conberter ";

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
            alert("Unexpected value");
            return false;
        } else {
            return true;
        }
      },
      "error" : "" }
].concat(validators);

