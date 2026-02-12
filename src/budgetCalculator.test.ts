import { describe, it, expect } from 'vitest'
import { calculateBudgetStatus } from './budgetCalculator'


describe( 'calculateBudgetStatus', ()=>{
    it('Retorna presupost <80% ', () => {
        expect(calculateBudgetStatus(700,1000))
        .toBe('Sota pressupost ✈️')
    })

    it('Despeses entre 80 | 100 %', ()=>{
        expect(calculateBudgetStatus(850,1000))
        .toBe('Dins pressupost  ✅')
    })

    it('Despeses superan presupost', ()=>{
        expect(calculateBudgetStatus(1200, 1000))
        .toBe("Sobre pressupost ⚠️")
    })

    it('Despeses negatives', ()=>{
        expect(() => calculateBudgetStatus(-850,1000))
        .toThrow(new Error('Les despeses no poden ser negatives'))
    })

});