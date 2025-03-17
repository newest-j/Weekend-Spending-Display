const fixedBudget = 100;
let myExpense = 0;
const spending = {
    budget:fixedBudget,
    expense:myExpense,
    getRemaining:function(){
        let subtract = this.budget - this.expense;
        return subtract;
        
    }
    }

function updateDisplay(){
    document.getElementById("budgetDisplay").innerText = "Budget:$"+ spending.budget;
    document.getElementById("expenseDisplay").innerText = "Spent:$"+ spending.expense;
    document.getElementById("remainingDisplay").innerText =  "Remaining:$" + spending.getRemaining();
   
}
updateDisplay()


function addExpense(){
    myExpense = document.getElementById("expenseInput").value;
    spending.expense = myExpense;
    document.getElementById("expenseDisplay").innerText = "Spent:$" + spending.expense;
    document.getElementById("remainingDisplay").innerText =  "Remaining:$" + spending.getRemaining();
    document.getElementById("expenseInput").value = "";
}
