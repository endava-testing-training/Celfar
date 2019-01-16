document.title = 'HTML';

function reset_output() {
    $("#output").empty().append("Calculation Pending..");
}

$("p#description")[0].innerHTML = "<a href='http://en.wikipedia.org/iki/Celsius'>Celsius</a> and <a href='http://en.wikipedia.org/wiki/Fahrenheit'>Fahrenheit</a>conberter";

validators[VAL_ZERO].valid = function(input) {return true;};
validators[VAL_LENGTH].error = "ERROR: invalid input";

converters.celsius = function(celsius) {
    if (celsius == 0) return 0;
    if (celsius < 0) return ((parseFloat(celsius)*9.0)/5.0);
    return ((parseFloat(celsius)*9.0)/5.0) + 32;
}

validators = [
    {"valid" : function(input) {
        if (input.indexOf(',') != -1) {
            alert("unexpected value");
            return false;
        } else {
            return true;
        }
      },
      "error" : "" }
].concat(validators);