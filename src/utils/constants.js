export const baseURL = process.env.NODE_ENV === 'production' ? 'vercel' : "http://localhost:3000";

export const cookingHistoryList = [
  {
    id: 1,
    createdAt: '2023-05-16',
    updatedAt: '2023-05-16',
    name: 'cilantro lime rice',
    ingredients: ['rice', 'lime', 'cilantro'],
    isOrdered: true,
    comments: [
      {
        createdAt: '2023-05-16',
        proList: [],
        conList: []
      }
    ],
  },
  {
    id: 2,
    createdAt: '2023-05-16',
    updatedAt: '2023-05-16',
    name: 'pico de gallo',
    ingredients: ['tomato', 'onion'],
    isOrdered: true,
    comments: [
      {
        createdAt: '2023-05-16',
        proList: [],
        conList: []
      }
    ],
  },
  {
    id: 3,
    createdAt: '2023-05-16',
    updatedAt: '2023-05-16',
    name: 'cilantro lime rice',
    ingredients: ['rice', 'lime', 'cilantro'],
    isOrdered: true,
    comments: [
      {
        createdAt: '2023-05-16',
        proList: [],
        conList: []
      }
    ],
  },
  {
    id: 4,
    createdAt: '2023-05-16',
    updatedAt: '2023-05-16',
    thumbnail: 'gyoza.jpg',
    name: 'gyoza / 煎饺',
    ingredients: ['dough', 'dough', 'dough', 'dough', 'dough', 'dough', 'dough'],
    isOrdered: 'true',
    comments: [
      {
        createdAt: '2023-05-16',
        proList: [
          "parents helped",
          "dough was good",
        ],
        conList: [
          "Filling - need to add water (打水, have to do it 3 times) OR use fatty pork",
          "Harvest garlic chives from our garden outside ",
          "Make wrapper flatter ",
          "when pan frying, make sure to add extra oil so the bottom doesn't stick",
        ]
      }
    ],
  },
  {
    id: 5,
    createdAt: '2023-05-16',
    updatedAt: '2023-05-16',
    thumbnail: 'gyoza.jpg',
    name: 'gyoza / 煎饺',
    ingredients: [],
    isOrdered: false,
    comments: [
      {
        dateCreated: '2023-05-16',
        proList: [
          "parents helped",
          "dough was good",
        ],
        conList: [
          "Filling - need to add water (打水, have to do it 3 times) OR use fatty pork",
          "Harvest garlic chives from our garden outside ",
          "Make wrapper flatter ",
          "when pan frying, make sure to add extra oil so the bottom doesn't stick",
        ]
      }
    ],
  },
]
