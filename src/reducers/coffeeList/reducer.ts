import { Icoffee } from '../../util/coffeesDB'
import { ActionTypes } from './action'

export interface ISelectedCoffee {
  coffee: Icoffee
  amount: number
}

export function CoffeeListReducer(state: ISelectedCoffee[], action: any) {
  switch (action.type) {
    case ActionTypes.ADD_OR_UPDATE_COFFEE_LIST: {
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
    case ActionTypes.REMOVE_COFFEE_FROM_LIST: {
      if (state.length > 0) {
        const selectedCoffeeListUpdated = state.filter(
          (selectedCoffee) =>
            selectedCoffee.coffee.name !== action.payload.coffee?.name,
        )
        return selectedCoffeeListUpdated
      }
      break
    }
    case ActionTypes.CLEAN_COFFEE_LIST:
      return []
    default:
      return state
  }
  return state
}
