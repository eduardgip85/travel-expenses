export function calculateBudgetStatus(totalExpense: number, budget: number){
    const perc = (totalExpense/budget) * 100
    
    if(perc < 0){
        throw new Error( "Les despeses no poden ser negatives")
    }

    if (perc < 80) { 
        return "Sota pressupost ✈️" 
    }else{
        if(perc <= 100 ) { 
            return "Dins pressupost  ✅"
        }else{
            if(perc <0){ 
            }else{
                return "Sobre pressupost ⚠️"
            }
        }
    }
}

// //tests
// console.log(calculateBudgetStatus(600, 1000))
// console.log(calculateBudgetStatus(900, 1000))
// console.log(calculateBudgetStatus(-800, 1000))
// console.log((-850/ 1000)*100)
