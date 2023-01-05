import { Icoffee } from '../util/coffeesDB'

export interface ISelectedCoffee {
  coffee: Icoffee
  amount: number
}

const enum ActionTypes {
  ADD_OR_UPDATE_COFFEE_LIST = 'ADD_OR_UPDATE_COFFEE_LIST',
  REMOVE_COFFEE_FROM_LIST = 'REMOVE_COFFEE_FROM_LIST',
  CLEAN_COFFEE_LIST = 'CLEAN_COFFEE_LIST',
}

export function CoffeeListReducer(state: ISelectedCoffee[], action: any) {
  console.log('CoffeeListReducer', action.type)

  if (action.type === ActionTypes.ADD_OR_UPDATE_COFFEE_LIST) {
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

  if (action.type === ActionTypes.REMOVE_COFFEE_FROM_LIST) {
    if (state.length > 0) {
      const selectedCoffeeListUpdated = state.filter(
        (selectedCoffee) =>
          selectedCoffee.coffee.name !== action.payload.coffee?.name,
      )
      return selectedCoffeeListUpdated
    }
  }

  if (action.type === ActionTypes.CLEAN_COFFEE_LIST) {
    return []
  }

  return state
}
