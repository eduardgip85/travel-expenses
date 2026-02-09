export function calculateBudgetStatus(totalExpense: number, budget: number){
    const perc = (totalExpense/budget) * 100
    
    if (perc < 80) { return "Sota pressupost ✈️" }
    if(perc <= 100 ) { return "Dins pressupost  ✅"}
    return "Sobre pressupost ⚠️"
}

//tests
console.log(calculateBudgetStatus(600, 1000))
console.log(calculateBudgetStatus(900, 1000))
console.log(calculateBudgetStatus(1200, 1000))
