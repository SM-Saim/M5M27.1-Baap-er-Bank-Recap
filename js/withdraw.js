// Step:1 get the button and add the eventHandler
document.getElementById("withdrawInput").addEventListener("click", function () {
  //Step:2 Get the input value and make from string to Number
  const getInputValueOfWithdraw = document.getElementById("inputWithdraw");
  const inputValueOfWithdrawString = getInputValueOfWithdraw.value;
  const inputValueOfWithdrawFloat = parseFloat(inputValueOfWithdrawString);

  // Step:3 Clear the input field
  getInputValueOfWithdraw.value = "";
  //Step:4 get the value of withdraw Board and mkae it from string to number
  const withdrawBalanceBoard = document.getElementById("withdrawBalance");
  const withdrawBalanceBoardString = withdrawBalanceBoard.innerText;
  const withdrawBalanceBoardFloat = parseFloat(withdrawBalanceBoardString);

  //Step:5 Calculate the total withdraw balnace and update it to the withdrawBoard
  const totalwithDrawBalance =
    withdrawBalanceBoardFloat + inputValueOfWithdrawFloat;
  withdrawBalanceBoard.innerText = totalwithDrawBalance;

  //Step:6  Get the balance board and minus the withdrawl value
  const balanceBoardValue = document.getElementById("currentBalance");
  const balanceBoardValueString = balanceBoardValue.innerText;
  const balanceBoardValueFloat = parseFloat(balanceBoardValueString);

  //Step:7 Calculate the balance boad value
  const currentBalanceBoardValue =
    balanceBoardValueFloat - inputValueOfWithdrawFloat;
  balanceBoardValue.innerText = currentBalanceBoardValue;
});
