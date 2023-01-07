import { Icoffee } from '../../util/coffeesDB'

export const enum ActionTypes {
  ADD_OR_UPDATE_COFFEE_LIST = 'ADD_OR_UPDATE_COFFEE_LIST',
  REMOVE_COFFEE_FROM_LIST = 'REMOVE_COFFEE_FROM_LIST',
  CLEAN_COFFEE_LIST = 'CLEAN_COFFEE_LIST',
}

interface IAddOrUpdateCoffeeListAction {
  type: ActionTypes.ADD_OR_UPDATE_COFFEE_LIST
  payload: { coffee: Icoffee; amount: number }
}

interface IRemoveCoffeeFromListAction {
  type: ActionTypes.REMOVE_COFFEE_FROM_LIST
  payload: { coffee: Icoffee }
}

interface ICleanCoffeeList {
  type: ActionTypes.CLEAN_COFFEE_LIST
}

export type ActionsProps =
  | IAddOrUpdateCoffeeListAction
  | IRemoveCoffeeFromListAction
  | ICleanCoffeeList

export function addOrUpdateCoffeeListAction(
  coffee: Icoffee,
  amount: number,
): ActionsProps {
  return {
    type: ActionTypes.ADD_OR_UPDATE_COFFEE_LIST,
    payload: { coffee, amount },
  }
}

export function removeCoffeeFromListAction(coffee: Icoffee): ActionsProps {
  return {
    type: ActionTypes.REMOVE_COFFEE_FROM_LIST,
    payload: { coffee },
  }
}

export function cleanCoffeeListAction(): ActionsProps {
  return {
    type: ActionTypes.CLEAN_COFFEE_LIST,
  } as ICleanCoffeeList
}
