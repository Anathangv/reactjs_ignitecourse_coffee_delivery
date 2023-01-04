import { createContext, ReactNode, useReducer } from 'react'
import { Icoffee } from '../util/coffeesDB'

export interface ISelectedCoffee {
  coffee: Icoffee
  amount: number
}

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
  const [selectedCoffeeList, dispatch] = useReducer(
    (state: ISelectedCoffee[], action: any) => {
      console.log('useReducer', state, action)

      if (action.type === 'ADD_OR_UPDATE_COFFEE_LIST') {
        const selectedCoffeeIndex = state.findIndex(
          (c) => c.coffee === action.payload.coffee,
        )

        const coffee = action.payload.coffee
        const amount = action.payload.amount

        const isUpdate = selectedCoffeeIndex >= 0

        if (isUpdate) {
          const selectedCoffeeListUpdated = [...state]

          selectedCoffeeListUpdated[selectedCoffeeIndex] = {
            ...selectedCoffeeListUpdated[selectedCoffeeIndex],
            coffee,
            amount,
          }

          return selectedCoffeeListUpdated
        } else {
          return [
            ...state,
            {
              coffee,
              amount,
            },
          ]
        }
      }

      if (action.type === 'REMOVE_COFFEE_FROM_LIST') {
        if (state.length > 0) {
          const selectedCoffeeListUpdated = state.filter(
            (selectedCoffee) =>
              selectedCoffee.coffee.name !== action.payload.coffee?.name,
          )
          return selectedCoffeeListUpdated
        }
      }

      if (action.type === 'CLEAN_COFFEE_LIST') {
        return []
      }

      return state
    },
    [],
  )

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
