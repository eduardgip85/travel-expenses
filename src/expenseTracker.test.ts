import { describe, it, expect } from 'vitest'
import { generateExpenseReport } from './expenseTracker'


describe( 'gerenateExpenseReport', ()=>{
    it('genera informe correcte ', () => {
        const report = generateExpenseReport([50, 0, 120, 85], 100)

        expect(report).toMatchObject({
                travelDays: 4,
                expenseDays: 3,
                dailyBudget: 100,
                averageDailyExpense: 63.75,
                underBudget: true,
                rating: 3,
                feedback: 'Excel·lent gestió!'
        })
    })

    it('Contenen valors no numerics', ()=>{
        expect(()=>
            generateExpenseReport([50 , NaN , 120 , 85],100)
        ).toThrow(new Error('Les despeses no poden ser negatives'))
    })

    it('Lleugerament per sobre del presupost', ()=>{
        const report = generateExpenseReport([100, 110 , 120, 110], 100)
        
        expect(report.rating).toBe(2)
        expect(report.feedback).toBe('Correcte, però ajustat')
    })
    
    it('Molt per sobre del presupost', ()=>{
        const report = generateExpenseReport([150, 140, 130 ,140], 100)

        expect(report.rating).toBe(1)
        expect(report.feedback).toBe('Pot millorar')

    })

});