$("p#description")[0].innerHTML = "<a href='https://en.wikipedia.org/wiki/Celsius'>Celsius</a> to <a href='https://en.wikipedia.org/wiki/Fahrenheit'>Fahrenheit</a> Converter";

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
