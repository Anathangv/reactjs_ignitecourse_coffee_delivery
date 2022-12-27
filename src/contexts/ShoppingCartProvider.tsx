import { createContext, ReactNode, useState } from 'react'
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
  const [selectedCoffeeList, setSelectedCoffeeList] = useState<
    ISelectedCoffee[]
  >([])

  const totalCoffees = selectedCoffeeList.reduce(
    (result, coffeeList) => result + coffeeList.amount,
    0,
  )

  function addOrUpdateCoffeeList(coffee: Icoffee, amount: number) {
    const selectedCoffeeIndex = selectedCoffeeList.findIndex(
      (c) => c.coffee === coffee,
    )

    const updateCoffeeFromList = selectedCoffeeIndex >= 0

    if (updateCoffeeFromList) {
      const selectedCoffeeListUpdated = [...selectedCoffeeList]

      selectedCoffeeListUpdated[selectedCoffeeIndex] = {
        ...selectedCoffeeListUpdated[selectedCoffeeIndex],
        coffee,
        amount,
      }

      setSelectedCoffeeList(selectedCoffeeListUpdated)
    } else {
      setSelectedCoffeeList((list) => [
        ...list,
        {
          coffee,
          amount,
        } as ISelectedCoffee,
      ])
    }
  }

  function removeCoffeeFromList(coffee: Icoffee) {
    if (selectedCoffeeList.length > 0) {
      const selectedCoffeeListUpdated = selectedCoffeeList.filter(
        (selectedCoffee) => selectedCoffee.coffee.name !== coffee.name,
      )
      setSelectedCoffeeList(selectedCoffeeListUpdated)
    }
  }

  function cleanChart() {
    setSelectedCoffeeList([])
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
