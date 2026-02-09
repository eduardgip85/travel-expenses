import './style.css'
import { calculateBudgetStatus } from './budgetCalculator.ts'
import { generateExpenseReport } from './expenseTracker.ts'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>

    <h2>Budget calculator</h2>
    <input id="totalExpenses" placeholder="Total expenses" />
    <input id="budget" placeholder="Budget" />
    <button id="budgetBtn">Calculate</button>
    <p id="budgetResult"></p>

    <hr/>

    <h2>Expense tracker</h2>
    <input id="expenses" placeholder="50,0,120,85" />
    <input id="dailyBudget" placeholder="Daily budget" />
    <button id="reportBtn">Generate report</button>

    <pre id="reportResult"></pre>

    <script type="module" src="/src/main.ts"></script>
    
  </div>
`

const totalExpensesInput = document.getElementById("totalExpenses") as HTMLInputElement
const budgetInput = document.getElementById("budget") as HTMLInputElement
const budgetBtn = document.getElementById("budgetBtn") as HTMLButtonElement
const budgetResult = document.getElementById("budgetResult") as HTMLParagraphElement

const expensesInput = document.getElementById("expenses") as HTMLInputElement
const dailyBudgetInput = document.getElementById("dailyBudget") as HTMLInputElement
const reportBtn = document.getElementById("reportBtn") as HTMLButtonElement
const reportResult = document.getElementById("reportResult") as HTMLElement

budgetBtn.addEventListener("click", () => {
  try {
    const total = Number(totalExpensesInput.value)
    const budget = Number(budgetInput.value)

    if (isNaN(total) || isNaN(budget)) {
      throw new Error("Introdueix números vàlids")
    }

    const status = calculateBudgetStatus(total, budget)

    budgetResult.textContent = status

  } catch (error) {

    if (error instanceof Error) {
      budgetResult.textContent = error.message
    }

  }
})

reportBtn.addEventListener("click", () => {
  try {

    const expenses = expensesInput.value
      .split(",")
      .map(x => Number(x.trim()))

    const dailyBudget = Number(dailyBudgetInput.value)

    if (expenses.some(isNaN)) {
      throw new Error("Les despeses contenen valors no numèrics")
    }

    const report = generateExpenseReport(expenses, dailyBudget)

    //to pretty view on a json mode for an objet
    reportResult.textContent = JSON.stringify(report, null, 2)
  
  } catch (error) {
    
    if (error instanceof Error) {
      reportResult.textContent = error.message
    }

  }
})