import { createContext, ReactNode, useEffect, useState } from 'react'
import { Icoffee } from '../util/coffeesDB'

export interface ISelectedCoffee {
  coffee: Icoffee
  amount: number
}

interface ICofeeListContext {
  selectedCoffeeList: ISelectedCoffee[]
  addOrUpdateCoffeeList: (coffee: Icoffee, amount: number) => void
  removeCoffeeFromList: (coffee: Icoffee) => void
}

interface ICoffeeListContextProps {
  children: ReactNode
}

export const CoffeeListContext = createContext({} as ICofeeListContext)

export function CoffeeSelectListProvider({
  children,
}: ICoffeeListContextProps) {
  const [selectedCoffeeList, setSelectedCoffeeList] = useState<
    ISelectedCoffee[]
  >([])

  useEffect(() => {
    console.log('useEffect', selectedCoffeeList, selectedCoffeeList.length)
  }, [selectedCoffeeList])

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

  return (
    <CoffeeListContext.Provider
      value={{
        selectedCoffeeList,
        addOrUpdateCoffeeList,
        removeCoffeeFromList,
      }}
    >
      {children}
    </CoffeeListContext.Provider>
  )
}
