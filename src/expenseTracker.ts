type Rating = 1 | 2 | 3

export interface ExpenseReport {
    travelDays: number
    expenseDays: number
    dailyBudget: number
    averageDailyExpense: number
    underBudget: boolean
    rating: Rating
    feedback: string
}

export function generateExpenseReport(dailyExpenses: number[], dailyBudget: number): ExpenseReport{
    
    if(dailyExpenses.some(exp => exp < 0 || isNaN(exp))){
        throw new Error ('Les despeses no poden ser negatives')
    }

    const travelDays = dailyExpenses.length
    //filtra quants hi han majors a 0
    const expenseDays = dailyExpenses.filter(exp => exp > 0).length
    //suma el total de las expenses
    const total = dailyExpenses.reduce((sum, exp) => sum + exp, 0)
    //fa mitja de las expenses / traveldays
    const averageDailyExpense = total / travelDays
    //compara si el average es mes baix o igual que el dailybudget
    const underBudget = averageDailyExpense <= dailyBudget

    let rating: Rating
    let feedback: string

    if (averageDailyExpense <= dailyBudget) {
        rating = 3
        feedback = "Excel·lent gestió!"
    } else if (averageDailyExpense <= dailyBudget * 1.2) {
        rating = 2
        feedback = "Correcte, però ajustat"
    } else {
        rating = 1
        feedback = "Pot millorar"
    }

    return {
        travelDays,
        expenseDays,
        dailyBudget,
        averageDailyExpense,
        underBudget,
        rating,
        feedback
    }
}

console.log(generateExpenseReport([50, 0, 120, 85], 100))
