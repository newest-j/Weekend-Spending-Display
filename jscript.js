const budget = 100;
let expense = "";
const spending = {
    budget:100,
    expense:0,
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
    expense = document.getElementById("expenseInput").value;
    spending.expense = expense;
    document.getElementById("expenseDisplay").innerText = "Spent:$" + spending.expense;
    document.getElementById("remainingDisplay").innerText =  "Remaining:$" + spending.getRemaining();
    
}
