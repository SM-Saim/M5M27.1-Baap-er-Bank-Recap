// Step:1 Add event listener to the diposit button
document.getElementById("dipositInput").addEventListener("click", function () {
  //Step:2 Get the diposit input value and make the value in to Float
  const dipositInputValue = document.getElementById("inputDiposit");
  const dipositInputValueInString = dipositInputValue.value;
  const dipositInputValueInFloat = parseFloat(dipositInputValueInString);

  //Step:3 Clear the diposit input field after getting the value
  dipositInputValue.value = "";
  //Step:4 Get the diposit signboard value make the value in float
  const valueOfDipositSignBoard = document.getElementById("dipositBoardValue");
  const valueOfDipositSignBoardString = valueOfDipositSignBoard.innerText;
  const valueOfDipositSignBoardInFolat = parseFloat(
    valueOfDipositSignBoardString
  );
  //Step:5 Sum the value and update it to the diposit signboard
  const dipositBoardSum =
    dipositInputValueInFloat + valueOfDipositSignBoardInFolat;
  valueOfDipositSignBoard.innerText = dipositBoardSum;

  // Step:6 Get current Balance
  const findPreviousBalance = document.getElementById("currentBalance");
  const previousBalanceValueString = findPreviousBalance.innerText;
  const previousBalanceValueFloat = parseFloat(previousBalanceValueString);

  // Step:7 Calculate the current Balance which is totals of previus and current Balance
  const currentBalance = previousBalanceValueFloat + dipositInputValueInFloat;
  findPreviousBalance.innerText = currentBalance;
});
