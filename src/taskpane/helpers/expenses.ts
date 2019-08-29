import { IDropdownOption } from 'office-ui-fabric-react'

export type Expense = {
  merchant: string
  employee: string
  amount: {
    value: number
    currency: string
  }
  team?: Team
  category?: Category
  note?: string
  receipt?: any
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

export enum Team {
  Product = 'Product',
  Sales = 'Sales',
  CS = 'CS',
  PeopleOps = 'PeopleOps',
}

export enum Category {
  Travel = 'Travel',
  Tools = 'Tools',
  Food = 'Food',
}

export const teamOptions: IDropdownOption[] = [
  { text: Team.Product, key: Team.Product },
  { text: Team.Sales, key: Team.Sales },
  { text: Team.CS, key: Team.CS },
  { text: Team.PeopleOps, key: Team.PeopleOps },
]

export const categoryOptions: IDropdownOption[] = [
  { text: Category.Travel, key: Category.Travel },
  { text: Category.Tools, key: Category.Tools },
  { text: Category.Food, key: Category.Food },
]
