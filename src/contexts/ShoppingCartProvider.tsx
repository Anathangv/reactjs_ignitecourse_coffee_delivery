import { createContext, ReactNode, useEffect, useReducer } from 'react'
import {
  ActionTypes,
  addOrUpdateCoffeeListAction,
  cleanCoffeeListAction,
  removeCoffeeFromListAction,
} from '../reducers/coffeeList/action'
import {
  CoffeeListReducer,
  ISelectedCoffee,
} from '../reducers/coffeeList/reducer'
import { Icoffee } from '../util/coffeesDB'
import { version } from '../../package.json'

/*
TODO
[] - is it possible when reload the home page, restore the select cards and amount
*/

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
  console.log(version)

  const [selectedCoffeeList, dispatch] = useReducer(
    CoffeeListReducer,
    [],
    () => {
      const storedStateAsJSON = localStorage.getItem(
        `@coffee-delivery:selected-coffee-list-${version}`,
      )

      if (storedStateAsJSON) {
        return JSON.parse(storedStateAsJSON)
      }
    },
  )

  useEffect(() => {
    const stateJSON = JSON.stringify(selectedCoffeeList)

    localStorage.setItem(
      `@coffee-delivery:selected-coffee-list-${version}`,
      stateJSON,
    )
  }, [selectedCoffeeList])

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
    dispatch(cleanCoffeeListAction())
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
