$(document).ready(function(){
  var inputs = [""];
  var totalString;
  var operators = ["+", "-", "/", "*"];
  var operators2 = ["."];
  var nums = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];


  function getValue(input){
    if(operators2.includes(inputs[inputs.length -1] === true && input === ".")){
      console.log("Duplicate '.' ")
    }else if (inputs.length === 1 && operators.includes(input) === false) {
      inputs.push(input);
    }else if(operators.includes(inputs[inputs.length - 1]) == false){
      inputs.push(input);
    }else if (nums.includes(Number(input))) {
      inputs.push(input);
    }
    updateScreen();
  }

  function updateScreen(){
    totalString = inputs.join("");
    $("#answer").html(totalString);
  }

  function clearScreen(){
    $("#answer").html("0");
  }

  function getTotalValue(){
    totalString = inputs.join("");
    $("#answer").html(eval(totalString));
  }

  $("button").on("click", function(){
    if(this.id === "deleteAll"){
      inputs=[""];
      clearScreen();
    }else if(this.id === "backSpace"){
      if(inputs.length == 1 && inputs[0] === ""){
          clearScreen();
      }else{

        inputs.pop();
        updateScreen();
      }

    }else if(this.id === "total"){
      getTotalValue();
    }else if(inputs[inputs.length -1].indexOf("+", "-", "/", "*") === -1){
      getValue(this.id);
    }else{
      getValue(this.id);
    }
  });


});
