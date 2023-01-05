import { createContext, ReactNode, useReducer } from 'react'
import { CoffeeListReducer, ISelectedCoffee } from '../reducers/coffeeList'
import { Icoffee } from '../util/coffeesDB'

interface ICofeeListContext {
  selectedCoffeeList: ISelectedCoffee[]
  totalCoffees: number
  addOrUpdateCoffeeList: (coffee: Icoffee, amount: number) => void
  removeCoffeeFromList: (coffee: Icoffee) => void
  cleanChart: () => void
}

interface IShoppingCartProviderProps {
  children: ReactNode
}

export const CoffeeListContext = createContext({} as ICofeeListContext)

export function ShoppingCartProvider({ children }: IShoppingCartProviderProps) {
  const [selectedCoffeeList, dispatch] = useReducer(CoffeeListReducer, [])

  const totalCoffees = selectedCoffeeList.reduce(
    (result, coffeeList) => result + coffeeList.amount,
    0,
  )

  function addOrUpdateCoffeeList(coffee: Icoffee, amount: number) {
    dispatch({
      type: 'ADD_OR_UPDATE_COFFEE_LIST',
      payload: {
        coffee,
        amount,
      },
    })
  }

  function removeCoffeeFromList(coffee: Icoffee) {
    dispatch({
      type: 'REMOVE_COFFEE_FROM_LIST',
      payload: { coffee },
    })
  }

  function cleanChart() {
    dispatch({
      type: 'CLEAN_COFFEE_LIST',
    })
  }

  return (
    <CoffeeListContext.Provider
      value={{
        selectedCoffeeList,
        totalCoffees,
        addOrUpdateCoffeeList,
        removeCoffeeFromList,
        cleanChart,
      }}
    >
      {children}
    </CoffeeListContext.Provider>
  )
}
