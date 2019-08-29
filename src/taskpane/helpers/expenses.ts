export type Expense = {
  merchant: string
  employee: string
  amount: {
    value: number
    currency: string
  }
}

export const expenseList: Expense[] = [
  {
    merchant: 'Walmart',
    employee: 'Zoey',
    amount: {
      value: 53,
      currency: 'DKK',
    },
  },
  {
    merchant: 'Stick N Sushi',
    employee: 'Aimee',
    amount: {
      value: 349,
      currency: 'DKK',
    },
  },
  {
    merchant: 'Boston Tools',
    employee: 'Ian',
    amount: {
      value: 83,
      currency: 'USD',
    },
  },
  {
    merchant: 'Netto',
    employee: 'Zoey',
    amount: {
      value: 3,
      currency: 'EUR',
    },
  },
  {
    merchant: 'Tacos Locos',
    employee: 'Diego',
    amount: {
      value: 100,
      currency: 'DKK',
    },
  },
]
