import { produce } from 'immer'
import { Icoffee } from '../../util/coffeesDB'
import { ActionsProps, ActionTypes } from './action'

export interface ISelectedCoffee {
  coffee: Icoffee
  amount: number
}

export function CoffeeListReducer(
  state: ISelectedCoffee[],
  action: ActionsProps,
) {
  switch (action.type) {
    case ActionTypes.ADD_OR_UPDATE_COFFEE_LIST: {
      const selectedCoffeeIndex = state.findIndex(
        (c) => c.coffee === action.payload.coffee,
      )

      const isUpdate = selectedCoffeeIndex >= 0

      if (isUpdate) {
        return produce(state, (draft) => {
          draft[selectedCoffeeIndex].coffee = action.payload.coffee
          draft[selectedCoffeeIndex].amount = action.payload.amount
        })
      } else {
        return produce(state, (draft) => {
          draft.push({
            coffee: action.payload.coffee,
            amount: action.payload.amount,
          })
        })
      }
    }
    case ActionTypes.REMOVE_COFFEE_FROM_LIST: {
      const selectedCoffeeIndex = state.findIndex(
        (c) => c.coffee === action.payload.coffee,
      )

      return produce(state, (draft) => {
        draft.splice(selectedCoffeeIndex, 1)
      })
    }
    case ActionTypes.CLEAN_COFFEE_LIST:
      return []
    default:
      return state
  }
}
