document.querySelector(".deposit-button").addEventListener("click", depositFunction)
document.querySelector(".withdraw-button").addEventListener("click", withdrawFunction)


//Deposit Amount 
function depositFunction(){
    var balanceAmount = parseFloat(document.querySelector(".balance-amount").textContent);
    var depositInputAmount = parseFloat(document.querySelector("#deposit-amount-input").value);
    var depositedAmount = parseFloat(document.querySelector(".deposit-amount").textContent);
    var addedDepositAmount = depositInputAmount + depositedAmount;
    var addedToBalance = depositInputAmount + balanceAmount;
    document.querySelector(".deposit-amount").textContent = addedDepositAmount.toString();
    document.querySelector(".balance-amount").textContent = addedToBalance.toString();
}

function withdrawFunction(){
    var balanceAmount = parseFloat(document.querySelector(".balance-amount").textContent);
    var withdrawBalance = parseFloat(document.querySelector("#withdraw-amount-input").value);
    var withdrawAmount = parseFloat(document.querySelector(".withdraw-amount").textContent);
    if (balanceAmount < withdrawBalance){
        alert(" You have insufficient balance.")
    }
    else{
    var removingBalance = balanceAmount - withdrawBalance;
    var calculatingWithdraw = withdrawBalance + withdrawAmount;
    document.querySelector(".balance-amount").textContent = removingBalance.toString();
    document.querySelector(".withdraw-amount").textContent =calculatingWithdraw.toString(); 
    }

}

