import Big from "big.js";

export default function operate(numberOne, numberTwo, operation) {
  const firstNumber = Big(numberOne || "0");
  let secondNumber = numberTwo;
  if (
    numberTwo &&
    !numberTwo.includes("e") &&
    !numberTwo.includes("π") &&
    !numberTwo.includes("!")
  ) {
    secondNumber = Big(
      numberTwo || (operation === "÷" || operation === "x" ? "1" : "0")
    );
  }

  if (operation === "+") {
    return firstNumber.plus(secondNumber).toString();
  }
  if (operation === "-") {
    return firstNumber.minus(secondNumber).toString();
  }
  if (operation === "x") {
    return firstNumber.times(secondNumber).toString();
  }
  if (operation === "÷") {
    if (secondNumber === "0") {
      alert("Divide by 0 error");
      return "0";
    } else {
      return firstNumber.div(secondNumber).toString();
    }
  }
  if (operation === "e") {
    const number = Big(secondNumber.replace("e", "") || 0);
    return number.times(Math.E).toString();
  }
  if (operation === "^") {
    return Math.pow(firstNumber, secondNumber).toString();
  }

  function factorial(n) {
    if (n === 0) return 1;
    return n * factorial(n - 1);
  }

  if (operation === "!") {
    const number = Big(secondNumber.replace("!", "") || 0);
    return factorial(number);
  }
  if (operation === "π") {
    const number = Big(secondNumber.replace("π", "") || 0);
    return number.times(Math.PI).toString();
  }
  throw Error(`Unknown operation '${operation}'`);
}
