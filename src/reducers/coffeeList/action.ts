import { Icoffee } from '../../util/coffeesDB'

export const enum ActionTypes {
  ADD_OR_UPDATE_COFFEE_LIST = 'ADD_OR_UPDATE_COFFEE_LIST',
  REMOVE_COFFEE_FROM_LIST = 'REMOVE_COFFEE_FROM_LIST',
  CLEAN_COFFEE_LIST = 'CLEAN_COFFEE_LIST',
}

export function addOrUpdateCoffeeListAction(coffee: Icoffee, amount: number) {
  return {
    type: 'ADD_OR_UPDATE_COFFEE_LIST',
    payload: {
      coffee,
      amount,
    },
  }
}

export function removeCoffeeFromListAction(coffee: Icoffee) {
  return {
    type: 'REMOVE_COFFEE_FROM_LIST',
    payload: {
      coffee,
    },
  }
}

export function cleanCoffeeList() {
  return {
    type: 'CLEAN_COFFEE_LIST',
  }
}
