import { createContext, ReactNode, useReducer } from 'react'
import {
  addOrUpdateCoffeeListAction,
  removeCoffeeFromListAction,
} from '../reducers/coffeeList/action'
import {
  CoffeeListReducer,
  ISelectedCoffee,
} from '../reducers/coffeeList/reducer'
import { Icoffee } from '../util/coffeesDB'

interface ICofeeListContext {
  selectedCoffeeList: ISelectedCoffee[]
  totalCoffees: number
  addOrUpdateCoffeeList: (coffee: Icoffee, amount: number) => void
  removeCoffeeFromList: (coffee: Icoffee) => void
  cleanCoffeeList: () => void
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
    dispatch(addOrUpdateCoffeeListAction(coffee, amount))
  }

  function removeCoffeeFromList(coffee: Icoffee) {
    dispatch(removeCoffeeFromListAction(coffee))
  }

  function cleanCoffeeList() {
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
        cleanCoffeeList,
      }}
    >
      {children}
    </CoffeeListContext.Provider>
  )
}
