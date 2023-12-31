export const COLORS = {
  white: "#ffffff",
  black: "#000000",
  lightGrey: "#B3B4B6",
  accent: "#FFC231",
  accentRed: "#FB5D2E",
  accentPink: "#F96165",
};

export const categories = [
  {
    name: "Burger",
    image: require("../database/images/burger.png"),
    items: [
      {
        name: "Classic Burger",
        weight: 120,
        rating: 5.0,
        price: 199,
        isTopOfTheWeek: false,
        image: require("../database/images/burger/alootikkiburger.png"),
        size: 'Large 12"',
        crust: "Thick Crust",
        delivery: 20,
        ingredients: [
          require("../database/images/burger/flour.png"),
          require("../database/images/burger/cheese.png"),
          require("../database/images/burger/sliced-Onion.png"),
          require("../database/images/burger/Tomato.png"),
        ],
      },
      {
        name: "Alo Tikki Burger",
        weight: 150,
        rating: 4.5,
        price: 299,
        isTopOfTheWeek: false,
        image: require("../database/images/burger/alootikkiburger.png"),
        size: 'Large 12"',
        crust: "Thick Crust",
        delivery: 20,
        ingredients: [
          require("../database/images/burger/flour.png"),
          require("../database/images/burger/cheese.png"),
          require("../database/images/burger/sliced-Onion.PNG"),
          require("../database/images/burger/Tomato.png"),
        ],
      },
      {
        name: "Biggie Cheese",
        weight: 250,
        rating: 4.2,
        price: 299,
        isTopOfTheWeek: false,
        image: require("../database/images/burger/biggiecheese.png"),
        size: 'Large 12"',
        crust: "Thick Crust",
        delivery: 50,
        ingredients: [
          require("../database/images/burger/flour.png"),
          require("../database/images/burger/cheese.png"),
          require("../database/images/burger/sliced-Onion.png"),
          require("../database/images/burger/Tomato.png"),
        ],
      },
      {
        name: "Plain Cheese Pizza",
        weight: 450,
        rating: 4.6,
        price: 299,
        isTopOfTheWeek: false,
        image: require("../database/images/burger/alootikkiburger.PNG"),
        size: 'Large 12"',
        crust: "Thin Crust",
        delivery: 0,
        ingredients: [
          require("../database/images/burger/flour.png"),
          require("../database/images/burger/cheese.png"),
          require("../database/images/burger/Tomato.png"),
          require("../database/images/burger/sliced-Onion.png"),
        ],
      },
    ],
  },
  {
    name: "Mexican Pizza",
    weight: 450,
    rating: 4.6,
    price: 299,
    isTopOfTheWeek: false,
    image: require("../database/images/burger/mexicangreerwave.png"),
    size: 'Large 12"',
    crust: "Thin Crust",
    delivery: 0,
    ingredients: [
      require("../database/images/flour.png"),
      require("../database/images/burger/cheese.png"),
      require("../database/images/burger/sliced-Onion.png"),
      require("../database/images/burger/Tomato.png"),
    ],
  },
  {
    name: "Soft Drink",
    image: require("../database/images/softdrink.png"),
    items: [
      {
        name: "Coca Cola",
        weight: 200,
        rating: 5.0,
        price: 299,
        isTopOfTheWeek: true,
        image: require("../database/images/softdrinks/cocacola.png"),
        size: "Medium Glass",
        crust: "Small",
        delivery: 10,
        ingredients: [require("../database/images/softdrinks/cocacola.png")],
      },
      {
        name: "Orange Juice",
        weight: 2500,
        rating: 4.5,
        price: 199,
        isTopOfTheWeek: false,
        image: require("../database/images/softdrinks/orange.png"),
        size: "Large Glass",
        crust: "Large Ice",
        delivery: 8,
        ingredients: [require("../database/images/softdrinks/orange.png")],
      },
      {
        name: "Mango Juice",
        weight: 150,
        rating: 5.0,
        price: 99,
        isTopOfTheWeek: false,
        image: require("../database/images/softdrinks/mango.png"),
        size: "Large Glass",
        crust: "Small Ice",
        delivery: 5,
        ingredients: [require("../database/images/softdrinks/mango.png")],
      },
    ],
  },
];
