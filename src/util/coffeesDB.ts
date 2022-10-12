import expresso_tradicional from '../assets/coffeeType/expresso_tradicional.png'
import americano from '../assets/coffeeType/americano.png'
import expresso_cremoso from '../assets/coffeeType/expresso_cremoso.png'
import cafe_gelado from '../assets/coffeeType/cafe_gelado.png'
import cafe_com_leite from '../assets/coffeeType/cafe_com_leite.png'
import latte from '../assets/coffeeType/latte.png'
import capuccino from '../assets/coffeeType/capuccino.png'
import mochaccino from '../assets/coffeeType/mochaccino.png'
import macchiato from '../assets/coffeeType/macchiato.png'
import chocolate_quente from '../assets/coffeeType/chocolate_quente.png'
import cubano from '../assets/coffeeType/cubano.png'
import havaiano from '../assets/coffeeType/havaiano.png'
import arabe from '../assets/coffeeType/arabe.png'
import irlandes from '../assets/coffeeType/americano.png'

enum Categories{
   'TRADICIONAL' = 'TRADICIONAL' ,
   'GELADO' = 'GELADO',
   'COMLEITE' = 'COM LEITE',
   'ESPECIAL' = 'ESPECIAL',
   'ALCOOLICO' = 'ALCOÓLICO'
}

export interface Icoffee {
  name: string
  categories: string[]
  description: string
  value: number
  imageName: string
}

export const coffeeList: Icoffee[] = [
  {
    name: 'Expresso Tradicional',
    categories: [Categories.TRADICIONAL],
    description: 'O tradicional café feito com água quente e grãos moídos',
    value: 9.9,
    imageName: expresso_tradicional,
  },
  {
    name: 'Expresso Americano',
    categories: [Categories.TRADICIONAL],
    description: 'Expresso diluído, menos intenso que o tradicional',
    value: 9.9,
    imageName: americano,
  },
  {
    name: 'Expresso Cremoso',
    categories: [Categories.TRADICIONAL],
    description: 'Café expresso tradicional com espuma cremosa',
    value: 9.9,
    imageName: expresso_cremoso,
  },
  {
    name: 'Expresso Gelado',
    categories: [Categories.TRADICIONAL],
    description: 'Bebida preparada com café expresso e cubos de gelo',
    value: 9.9,
    imageName: cafe_gelado,
  },
  {
    name: 'Café com Leite',
    categories: [Categories.TRADICIONAL, Categories.COMLEITE],
    description: 'Meio a meio de expresso tradicional com leite vaporizado',
    value: 9.9,
    imageName: cafe_com_leite,
  },
  {
    name: 'Latte',
    categories: [Categories.TRADICIONAL, Categories.COMLEITE],
    description: 'Uma dose de café expresso com o dobro de leite e espuma cremosa',
    value: 9.9,
    imageName: latte,
  },
  {
    name: 'Capuccino',
    categories: [Categories.TRADICIONAL, Categories.COMLEITE],
    description: 'Bebida com canela feita de doses iguais de café, leite e espuma',
    value: 9.9,
    imageName: capuccino,
  },
  {
    name: 'Macchiato',
    categories: [Categories.TRADICIONAL, Categories.COMLEITE],
    description: 'Café expresso misturado com um pouco de leite quente e espuma',
    value: 9.9,
    imageName: macchiato,
  },
  {
    name: 'Mocaccino',
    categories: [Categories.TRADICIONAL, Categories.COMLEITE],
    description: 'Café expresso com calda de chocolate, pouco leite e espuma',
    value: 9.9,
    imageName: mochaccino,
  },
  {
    name: 'Chocolate Quente',
    categories: [Categories.TRADICIONAL, Categories.COMLEITE],
    description: 'Bebida feita com chocolate dissolvido no leite quente e café',
    value: 9.9,
    imageName: chocolate_quente,
  },
  {
    name: 'Cubano',
    categories: [Categories.TRADICIONAL, Categories.ALCOOLICO, Categories.GELADO],
    description: 'Drink gelado de café expresso com rum, creme de leite e hortelã',
    value: 9.9,
    imageName: cubano,
  },
  {
    name: 'Havaiano',
    categories: [Categories.ESPECIAL],
    description: 'Bebida adocicada preparada com café e leite de coco',
    value: 9.9,
    imageName: havaiano,
  },
  {
    name: 'Árabe',
    categories: [Categories.ESPECIAL],
    description: 'Bebida preparada com grãos de café árabe e especiarias',
    value: 9.9,
    imageName: arabe,
  },
  {
    name: 'Irlandês',
    categories: [Categories.ESPECIAL, Categories.ALCOOLICO],
    description: 'Bebida a base de café, uísque irlandês, açúcar e chantilly',
    value: 9.9,
    imageName: irlandes,
  }
]
