export const filterData = [
  { name: "Fast food", image: require("../../assets/fastfood.png"), id: 0 },
  { name: "Burgers", image: require("../../assets/burgers.png"), id: 1 },
  { name: "Salads ", image: require("../../assets/salads.png"), id: 2 },
  { name: "Hot dog", image: require("../../assets/hotdog.png"), id: 3 },
  { name: "Chinese", image: require("../../assets/chinese.png"), id: 4 },
  { name: "Mexican", image: require("../../assets/mexican.png"), id: 5 },
  { name: "Sea food", image: require("../../assets/seafood.png"), id: 6 },
];

export const filterData2 = [
  {
    name: "Fast food",
    image: {
      uri: "https://i.pinimg.com/236x/6c/43/46/6c4346f5837c2b8a69a6f029730360d5.jpg",
    },
    id: 0,
  },
  {
    name: "Burgers",
    image: {
      uri: "https://i.pinimg.com/236x/70/23/fa/7023fa854c49317762d7aa311cdd7f28.jpg",
    },
    id: 1,
  },
  {
    name: "Salads ",
    image: {
      uri: "https://i.pinimg.com/236x/87/7f/d0/877fd087de02a5332687f548f0ef1fcf.jpg",
    },
    id: 2,
  },
  {
    name: "Hot dog",
    image: {
      uri: "https://i.pinimg.com/236x/a7/ba/ab/a7baaba1df013c101234760983cb8354.jpg",
    },
    id: 3,
  },
  {
    name: "Chinese",
    image: {
      uri: "https://i.pinimg.com/236x/92/21/07/922107838a971016bef64c6c841352dd.jpg",
    },
    id: 4,
  },
  {
    name: "Mexican",
    image: {
      uri: "https://i.pinimg.com/236x/34/68/3e/34683e03c1b0beb32dd145d80588e72f.jpg",
    },
    id: 5,
  },
  {
    name: "Sea food",
    image: {
      uri: "https://i.pinimg.com/236x/b0/ee/f6/b0eef660d7285af733f1dcd22b0aeddb.jpg",
    },
    id: 6,
  },
  {
    name: "Chinese Food",
    image: {
      uri: "https://i.pinimg.com/236x/32/ff/ad/32ffadc0abff50211b6f35d2d9d16be7.jpg",
    },
    id: "7",
  },
  {
    name: "Mexican pie",
    image: {
      uri: "https://i.pinimg.com/236x/af/0e/d2/af0ed22e685ba158ecbc60945918ada8.jpg",
    },
    id: "8",
  },
  {
    name: "Ocean dish",
    image: {
      uri: "https://i.pinimg.com/236x/29/7e/40/297e408dbffe668c4f70029f2a3bb02a.jpg",
    },
    id: "9",
  },
];

export const restaurantsData = [
  {
    restaurantName: "Mc Donalds",
    farAway: "21.2",
    businessAddress: "22 Bessie Street. Cape Town",
    images:
      "https://www.pngmart.com/files/2/Cooked-Chicken-PNG-Transparent-Image.png",
    averageReview: 4.9,
    numberOfReview: 272,
    coordinates: { lat: -26.1888612, lng: 28.246325 },
    discount: 10,
    deliveryTime: 15,
    collectTime: 5,
    foodType: "Burgers,Wraps,Milshkaes...",
    productData: [
      {
        name: "Hand cut chips",
        price: 29.3,
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhLxz-ZnC8-7-PLDz66oC3Gdr1GCeKKsPiqArAgy1VcQ&s",
      },
      {
        name: "Big Mac",
        price: 50.8,
        image:
          "https://png.pngitem.com/pimgs/s/183-1831498_1-1-big-mac-de-mcdonalds-png-transparent.png",
      },
      {
        name: "Chicken Burger",
        price: 70,
        image:
          "https://www.seekpng.com/png/detail/196-1966443_hot-mcdonalds-spicy-chicken-mcchicken-spicy-image-n.png",
      },
    ],
    id: 0,
  },

  {
    restaurantName: "KFC",
    farAway: "12.7",
    businessAddress: "22 Bessie Street. Cape Town",
    images:
      "https://www.freepnglogos.com/uploads/kfc-png-logo/camera-kfc-png-logo-0.png",
    averageReview: 4.9,
    numberOfReview: 272,
    coordinates: { lat: -26.1888612, lng: 28.2441808 },
    discount: 20,
    deliveryTime: 30,
    collectTime: 10,
    foodType: "Chicken, chicken wings",
    productData: [
      {
        name: "Hand cut chips",
        price: 29.3,
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhLxz-ZnC8-7-PLDz66oC3Gdr1GCeKKsPiqArAgy1VcQ&s",
      },
      {
        name: "Big Mac",
        price: 50.8,
        image:
          "https://png.pngitem.com/pimgs/s/183-1831498_1-1-big-mac-de-mcdonalds-png-transparent.png",
      },
      {
        name: "Chicken Burger",
        price: 70,
        image:
          "https://www.seekpng.com/png/detail/196-1966443_hot-mcdonalds-spicy-chicken-mcchicken-spicy-image-n.png",
      },
    ],
    id: 1,
  },

  {
    restaurantName: "Steer",
    farAway: "5",
    businessAddress: "17 Olivia Rd, Johannesburg",
    images:
      "https://e7.pngegg.com/pngimages/836/517/png-clipart-barbecue-grill-beefsteak-hamburger-grilling-grill-barbecue-food.png",
    averageReview: 4.9,
    numberOfReview: 1272,
    coordinates: { lat: -26.1888671, lng: 28.244879 },
    discount: 12,
    deliveryTime: 25,
    collectTime: 15,
    foodType: "Frame grilled beef Burgers",
    productData: [
      {
        name: "Hand cut chips",
        price: 29.3,
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhLxz-ZnC8-7-PLDz66oC3Gdr1GCeKKsPiqArAgy1VcQ&s",
      },
      {
        name: "Big Mac",
        price: 50.8,
        image:
          "https://png.pngitem.com/pimgs/s/183-1831498_1-1-big-mac-de-mcdonalds-png-transparent.png",
      },
      {
        name: "Chicken Burger",
        price: 70,
        image:
          "https://www.seekpng.com/png/detail/196-1966443_hot-mcdonalds-spicy-chicken-mcchicken-spicy-image-n.png",
      },
    ],
    id: 2,
  },

  {
    restaurantName: "Roman Pizza",
    farAway: "7",
    businessAddress: "15 Atlas Rd, Kempton Park",
    images:
      "https://www.pngkit.com/png/detail/918-9183660_extra-thin-crust-thin-crust-pizza-png.png",
    averageReview: 4.3,
    numberOfReview: 700,
    coordinates: { lat: -26.1888671, lng: 28.244879 },
    discount: null,
    deliveryTime: 20,
    collectTime: 10,
    foodType: "Chicken Pizza, Vegetarian Pizza",
    productData: [
      {
        name: "Hand cut chips",
        price: 29.3,
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhLxz-ZnC8-7-PLDz66oC3Gdr1GCeKKsPiqArAgy1VcQ&s",
      },
      {
        name: "Big Mac",
        price: 50.8,
        image:
          "https://png.pngitem.com/pimgs/s/183-1831498_1-1-big-mac-de-mcdonalds-png-transparent.png",
      },
      {
        name: "Chicken Burger",
        price: 70,
        image:
          "https://www.seekpng.com/png/detail/196-1966443_hot-mcdonalds-spicy-chicken-mcchicken-spicy-image-n.png",
      },
    ],
    id: 3,
  },
];

export const productData = [
  {
    name: "Hand cut chips",
    price: 29.3,
    image:
      "https://www.seekpng.com/png/detail/196-1966443_hot-mcdonalds-spicy-chicken-mcchicken-spicy-image-n.png",
    details: "Two 100% fresh beef burger patties that are hot,deliciously",
    id: 0,
  },
  {
    name: "Big Mac",
    price: 50.8,
    image:
      "https://png.pngitem.com/pimgs/s/183-1831498_1-1-big-mac-de-mcdonalds-png-transparent.png",
    details: "McFeast features two 100% fresh beef burger patties that are hot",
    id: 1,
  },
  {
    name: "Chicken Burger",
    price: 70,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhLxz-ZnC8-7-PLDz66oC3Gdr1GCeKKsPiqArAgy1VcQ&s",
    details: "",
    id: 2,
  },

  {
    name: "Hand cut chips",
    price: 29.3,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhLxz-ZnC8-7-PLDz66oC3Gdr1GCeKKsPiqArAgy1VcQ&s",
    details: "Two 100% fresh beef burger patties that are hot,deliciously",
    id: 3,
  },
  {
    name: "Big Mac",
    price: 70.2,
    image:
      "https://www.seekpng.com/png/detail/196-1966443_hot-mcdonalds-spicy-chicken-mcchicken-spicy-image-n.png",
    details: "McFeast features two 100% fresh beef burger patties that are hot",
    id: 4,
  },
  {
    name: "Chicken Burger",
    price: 70,
    image:
      "https://www.seekpng.com/png/detail/196-1966443_hot-mcdonalds-spicy-chicken-mcchicken-spicy-image-n.png",
    details: "",
    id: 5,
  },
];

export const menuData = [
  { title: "BEEF", special: false, key: 0 },
  { title: "CHICKEN", special: false, key: 1 },
  { title: "VEGGIE BURGER", special: false, key: 2 },
  { title: "FRIES& CORN", special: false, key: 3 },
  { title: "SALADS", special: false, key: 4 },
  { title: "HAPPY MEALS", special: false, key: 5 },
  { title: "SAHRE BOX", special: false, key: 6 },
  { title: "MILKSHAKES", special: false, key: 7 },
  { title: "COLD DRINKS", special: false, key: 8 },
  { title: "DESSERTS", special: false, key: 9 },
  { title: "HOT DRINKS", special: false, key: 10 },
];

export const specialData = [
  { title: "LIMITED OFFER", key: 0 },
  { title: "GO CHILLI", key: 1 },
  { title: "GO CHEESE", key: 2 },
  { title: "MCCHICKEN DELUXE PROMO", key: 3 },
];


export const menu = [
  { key: 1, title: 'BEEF' },
  { key: 2, title: 'CHICKEN' },
  { key: 3, title: 'VEGGIE BURGER' },
  { key: 4, title: 'SHARE BOX' },
  { key: 5, title: 'Happy Meals' },
  { key: 6, title: 'Fries' },
  { key: 7, title: 'Sides' },
  { key: 8, title: 'Milkshakes' },
] 


export const menuDetailedData =[
  { 
    meal:"Big Mac",
    price:70.20,
    image:"https://i.pinimg.com/236x/ea/d2/74/ead274a62c34f88e7ef3857f89427f0d.jpg",
    details:"McFeast features two 100% fresh beef burger patties that are hot",
    preferenceTitle:["Choose your 2 dips","Choose your 1st drink flavour", "Choose your 2nd drink flavour","Would you like to add a side?","Would you Like any extra sauce?"  ],
    preferenceData: [

                    [{name:"Jalapeno Dip",price:8.91,checked:false,id:10},{name:"Sweet & Sour Dip",price:8.75,checked:false ,id:11},{name:'BBQ Dip',price:11.99 ,checked:false,id:12},
                    ],

                    [{name:"Small Coke",price:8.90 ,checked:false,id:13 },{name:"Small Fanta Orange",price:8.90 ,checked:false,id:14},{name:'Small Sprite',price:11.90,checked:false ,id:15},
                    {name:'Small Coke Zero',price:3.95 ,checked:false,id:16},{name:'Small Syoney Zero',price:3.95 ,checked:false,id:17},{name:'Small Apple Juice',price:10.95 ,checked:false,id:18},
                    {name:'Small Strawberry Shake',price:16.95 ,checked:false,id:19},{name:'Small Chocolate Shake',price:16.95 ,checked:false,id:20},
                    ],

                    [{name:"Small Coke",price:8.90,checked:false ,id:21},{name:"Small Fanta Orange",price:8.90,checked:false ,id:22},{name:'Small Sprite',price:11.90,checked:false ,id:23},
                    {name:'Small Coke Zero',price:3.95 ,checked:false,id:24},{name:'Small Syoney Zero',price:3.95 ,checked:false,id:25},{name:'Small Apple Juice',price:10.95,checked:false ,id:26},
                    {name:'Small Strawberry Shake',price:16.95,checked:false ,id:27},{name:'Small Chocolate Shake',price:16.95 ,checked:false,id:28},{name:'Small Vanilla Shake',price:17.95 ,checked:false,id:29},
                      ],
                        
                    [{name:"debonairs sauce",price:8.90 ,checked:false,id:30},{name:"BBQ Sauce",price:8.90,checked:false ,id:31},{name:'Tikka Sauce',price:11.90,checked:false ,id:32},
                    ],

                    [
                    {name:"Small Coke",price:8.90 ,checked:false,id:33},{name:"Small Fanta Orange",price:8.90 ,checked:false,id:34},{name:'Small Sprite',price:11.90 ,checked:false,id:35},
                    {name:'Small Coke Zero',price:3.95 ,checked:false,id:36},{name:'Small Syoney Zero',price:3.95 ,checked:false,id:37},{name:'Small Apple Juice',price:10.95 ,checked:false,id:38},
                    {name:'Small Strawberry Shake',price:16.95,checked:false ,id:39},{name:'Small Chocolate Shake',price:16.95 ,checked:false,id:40},{name:'Small Vanilla Shake',price:17.95,checked:false ,id:41},
                    ],
                    ],
    minimum_quatity:[2,1,1,null,null],
    counter:[0,0,0,0,0],
    required: [true,true,true,false,false],              
    id:0
  },

  { 
    meal:"Hand cut chips", 
    price:29.30,
    image:"https://i.pinimg.com/236x/3c/56/c7/3c56c7aef4f20a9b2c01c9206633e42f.jpg",
    details:"Two 100% fresh beef burger patties that are hot,deliciously",
    preferenceTitle:["Choose your 2 dips","Choose your 1st drink flavour", "Choose your 2nd drink flavour","Would you like to add a side?","Would you Like any extra sauce?"  ],
    preferenceData: [

      [{name:"Jalapeno Dip",price:8.91,checked:false,id:0},{name:"Sweet & Sour Dip",price:8.75,checked:false ,id:1},{name:'BBQ Dip',price:11.99 ,checked:false,id:2},
      ],

      [{name:"Small Coke",price:8.90 ,checked:false,id:0 },{name:"Small Fanta Orange",price:8.90 ,checked:false,id:1},{name:'Small Sprite',price:11.90,checked:false ,id:2},
      {name:'Small Coke Zero',price:3.95 ,checked:false,id:3},{name:'Small Syoney Zero',price:3.95 ,checked:false,id:4},{name:'Small Apple Juice',price:10.95 ,checked:false,id:5},
      {name:'Small Strawberry Shake',price:16.95 ,checked:false,id:6},{name:'Small Chocolate Shake',price:16.95 ,checked:false,id:7},
      ],

      [{name:"Small Coke",price:8.90,checked:false ,id:0},{name:"Small Fanta Orange",price:8.90,checked:false ,id:1},{name:'Small Sprite',price:11.90,checked:false ,id:2},
      {name:'Small Coke Zero',price:3.95 ,checked:false,id:3},{name:'Small Syoney Zero',price:3.95 ,checked:false,id:4},{name:'Small Apple Juice',price:10.95,checked:false ,id:5},
      {name:'Small Strawberry Shake',price:16.95,checked:false ,id:6},{name:'Small Chocolate Shake',price:16.95 ,checked:false,id:7},{name:'Small Vanilla Shake',price:17.95 ,checked:false,id:8},
        ],
          
      [{name:"debonairs sauce",price:8.90 ,checked:false,id:0},{name:"BBQ Sauce",price:8.90,checked:false ,id:1},{name:'Tikka Sauce',price:11.90,checked:false ,id:2},
      ],

      [
      {name:"Small Coke",price:8.90 ,checked:false,id:0},{name:"Small Fanta Orange",price:8.90 ,checked:false,id:1},{name:'Small Sprite',price:11.90 ,checked:false,id:2},
      {name:'Small Coke Zero',price:3.95 ,checked:false,id:3},{name:'Small Syoney Zero',price:3.95 ,checked:false,id:4},{name:'Small Apple Juice',price:10.95 ,checked:false,id:5},
      {name:'Small Strawberry Shake',price:16.95,checked:false ,id:6},{name:'Small Chocolate Shake',price:16.95 ,checked:false,id:7},{name:'Small Vanilla Shake',price:17.95,checked:false ,id:8},
      ],
      ],
      minimum_quatity:[2,1,2,null,null],
      counter:[0,0,0,0,0],
      required: [true,true,true,false,false], 
      id:1
  },

  {
    meal:"Chicken Burger",
    price:45.70,
    image:"https://i.pinimg.com/236x/b7/8f/91/b78f91b8388944105366e4f04fe3b8da.jpg",
    details:"",
    preferenceTitle:["Choose your 2 dips","Choose your 1st drink flavour", "Choose your 2nd drink flavour","Would you like to add a side?","Would you Like any extra sauce?"  ],
    preferenceData: [

      [{name:"Jalapeno Dip",price:8.91,checked:false,id:0},{name:"Sweet & Sour Dip",price:8.75,checked:false ,id:1},{name:'BBQ Dip',price:11.99 ,checked:false,id:2},
      ],

      [{name:"Small Coke",price:8.90 ,checked:false,id:0 },{name:"Small Fanta Orange",price:8.90 ,checked:false,id:1},{name:'Small Sprite',price:11.90,checked:false ,id:2},
      {name:'Small Coke Zero',price:3.95 ,checked:false,id:3},{name:'Small Syoney Zero',price:3.95 ,checked:false,id:4},{name:'Small Apple Juice',price:10.95 ,checked:false,id:5},
      {name:'Small Strawberry Shake',price:16.95 ,checked:false,id:6},{name:'Small Chocolate Shake',price:16.95 ,checked:false,id:7},
      ],

      [{name:"Small Coke",price:8.90,checked:false ,id:0},{name:"Small Fanta Orange",price:8.90,checked:false ,id:1},{name:'Small Sprite',price:11.90,checked:false ,id:2},
      {name:'Small Coke Zero',price:3.95 ,checked:false,id:3},{name:'Small Syoney Zero',price:3.95 ,checked:false,id:4},{name:'Small Apple Juice',price:10.95,checked:false ,id:5},
      {name:'Small Strawberry Shake',price:16.95,checked:false ,id:6},{name:'Small Chocolate Shake',price:16.95 ,checked:false,id:7},{name:'Small Vanilla Shake',price:17.95 ,checked:false,id:8},
        ],
          
      [{name:"debonairs sauce",price:8.90 ,checked:false,id:0},{name:"BBQ Sauce",price:8.90,checked:false ,id:1},{name:'Tikka Sauce',price:11.90,checked:false ,id:2},
      ],

      [
      {name:"Small Coke",price:8.90 ,checked:false,id:0},{name:"Small Fanta Orange",price:8.90 ,checked:false,id:1},{name:'Small Sprite',price:11.90 ,checked:false,id:2},
      {name:'Small Coke Zero',price:3.95 ,checked:false,id:3},{name:'Small Syoney Zero',price:3.95 ,checked:false,id:4},{name:'Small Apple Juice',price:10.95 ,checked:false,id:5},
      {name:'Small Strawberry Shake',price:16.95,checked:false ,id:6},{name:'Small Chocolate Shake',price:16.95 ,checked:false,id:7},{name:'Small Vanilla Shake',price:17.95,checked:false ,id:8},
      ],
      ],

      minimum_quatity:[2,1,1,null,null],
      counter:[0,0,0,0,0],
      required: [true,true,true,false,false],   
    id:2
  },

  {
    meal:"Big Mac",
    price:50.80,
    image:"https://i.pinimg.com/236x/6d/78/7e/6d787e57781a8d612c99d1fae88a9410.jpg",
    details:"McFeast features two 100% fresh beef burger patties that are hot",
    preferenceTitle:["Choose your 2 dips","Choose your 1st drink flavour", "Choose your 2nd drink flavour","Would you like to add a side?","Would you Like any extra sauce?"  ],
    preferenceData: [

      [{name:"Jalapeno Dip",price:8.91,checked:false,id:0},{name:"Sweet & Sour Dip",price:8.75,checked:false ,id:1},{name:'BBQ Dip',price:11.99 ,checked:false,id:2},
      ],

      [{name:"Small Coke",price:8.90 ,checked:false,id:0 },{name:"Small Fanta Orange",price:8.90 ,checked:false,id:1},{name:'Small Sprite',price:11.90,checked:false ,id:2},
      {name:'Small Coke Zero',price:3.95 ,checked:false,id:3},{name:'Small Syoney Zero',price:3.95 ,checked:false,id:4},{name:'Small Apple Juice',price:10.95 ,checked:false,id:5},
      {name:'Small Strawberry Shake',price:16.95 ,checked:false,id:6},{name:'Small Chocolate Shake',price:16.95 ,checked:false,id:7},
      ],

      [{name:"Small Coke",price:8.90,checked:false ,id:0},{name:"Small Fanta Orange",price:8.90,checked:false ,id:1},{name:'Small Sprite',price:11.90,checked:false ,id:2},
      {name:'Small Coke Zero',price:3.95 ,checked:false,id:3},{name:'Small Syoney Zero',price:3.95 ,checked:false,id:4},{name:'Small Apple Juice',price:10.95,checked:false ,id:5},
      {name:'Small Strawberry Shake',price:16.95,checked:false ,id:6},{name:'Small Chocolate Shake',price:16.95 ,checked:false,id:7},{name:'Small Vanilla Shake',price:17.95 ,checked:false,id:8},
        ],
          
      [{name:"debonairs sauce",price:8.90 ,checked:false,id:0},{name:"BBQ Sauce",price:8.90,checked:false ,id:1},{name:'Tikka Sauce',price:11.90,checked:false ,id:2},
      ],

      [
      {name:"Small Coke",price:8.90 ,checked:false,id:0},{name:"Small Fanta Orange",price:8.90 ,checked:false,id:1},{name:'Small Sprite',price:11.90 ,checked:false,id:2},
      {name:'Small Coke Zero',price:3.95 ,checked:false,id:3},{name:'Small Syoney Zero',price:3.95 ,checked:false,id:4},{name:'Small Apple Juice',price:10.95 ,checked:false,id:5},
      {name:'Small Strawberry Shake',price:16.95,checked:false ,id:6},{name:'Small Chocolate Shake',price:16.95 ,checked:false,id:7},{name:'Small Vanilla Shake',price:17.95,checked:false ,id:8},
      ],
      ],
    
      minimum_quatity:[2,1,1,null,null],
      counter:[0,0,0,0,0],
      required: [true,true,true,false,false],    
    id:3
  },

  
  { 
    
    meal:"Hand cut chips", 
    price:29.30,
    image:"https://i.pinimg.com/236x/a1/01/e1/a101e15e3bd9069af679b74ece5a65c3.jpg",
    details:"Two 100% fresh beef burger patties that are hot,deliciously",
    
    preferenceTitle:["Choose your 2 dips","Choose your 1st drink flavour", "Choose your 2nd drink flavour","Would you like to add a side?","Would you Like any extra sauce?"  ],
    
    preferenceData: [

      [{name:"Jalapeno Dip",price:8.91,checked:false,id:0},{name:"Sweet & Sour Dip",price:8.75,checked:false ,id:1},{name:'BBQ Dip',price:11.99 ,checked:false,id:2},
      ],

      [{name:"Small Coke",price:8.90 ,checked:false,id:0 },{name:"Small Fanta Orange",price:8.90 ,checked:false,id:1},{name:'Small Sprite',price:11.90,checked:false ,id:2},
      {name:'Small Coke Zero',price:3.95 ,checked:false,id:3},{name:'Small Syoney Zero',price:3.95 ,checked:false,id:4},{name:'Small Apple Juice',price:10.95 ,checked:false,id:5},
      {name:'Small Strawberry Shake',price:16.95 ,checked:false,id:6},{name:'Small Chocolate Shake',price:16.95 ,checked:false,id:7},
      ],

      [{name:"Small Coke",price:8.90,checked:false ,id:0},{name:"Small Fanta Orange",price:8.90,checked:false ,id:1},{name:'Small Sprite',price:11.90,checked:false ,id:2},
      {name:'Small Coke Zero',price:3.95 ,checked:false,id:3},{name:'Small Syoney Zero',price:3.95 ,checked:false,id:4},{name:'Small Apple Juice',price:10.95,checked:false ,id:5},
      {name:'Small Strawberry Shake',price:16.95,checked:false ,id:6},{name:'Small Chocolate Shake',price:16.95 ,checked:false,id:7},{name:'Small Vanilla Shake',price:17.95 ,checked:false,id:8},
        ],
          
      [{name:"debonairs sauce",price:8.90 ,checked:false,id:0},{name:"BBQ Sauce",price:8.90,checked:false ,id:1},{name:'Tikka Sauce',price:11.90,checked:false ,id:2},
      ],

      [
      {name:"Small Coke",price:8.90 ,checked:false,id:0},{name:"Small Fanta Orange",price:8.90 ,checked:false,id:1},{name:'Small Sprite',price:11.90 ,checked:false,id:2},
      {name:'Small Coke Zero',price:3.95 ,checked:false,id:3},{name:'Small Syoney Zero',price:3.95 ,checked:false,id:4},{name:'Small Apple Juice',price:10.95 ,checked:false,id:5},
      {name:'Small Strawberry Shake',price:16.95,checked:false ,id:6},{name:'Small Chocolate Shake',price:16.95 ,checked:false,id:7},{name:'Small Vanilla Shake',price:17.95,checked:false ,id:8},
      ],
      ],

    minimum_quatity:[2,1,1,null,null],
    counter:[0,0,0,0,0],
    required: [true,true,true,false,false],     
    id:4
  },

  { 
    meal:"Big Mac",
    price:70.20,
    image:"https://i.pinimg.com/236x/f4/0b/a7/f40ba7387fb5a24442f0dc0ff17a7b41.jpg",
    details:"McFeast features two 100% fresh beef burger patties that are hot",
    preferenceTitle:["Choose your 2 dips","Choose your 1st drink flavour", "Choose your 2nd drink flavour","Would you like to add a side?","Would you Like any extra sauce?"  ],
    preferenceData: [

                    [{name:"Jalapeno Dip",price:8.91,checked:false,id:10},{name:"Sweet & Sour Dip",price:8.75,checked:false ,id:11},{name:'BBQ Dip',price:11.99 ,checked:false,id:12},
                    ],

                    [{name:"Small Coke",price:8.90 ,checked:false,id:13 },{name:"Small Fanta Orange",price:8.90 ,checked:false,id:14},{name:'Small Sprite',price:11.90,checked:false ,id:15},
                    {name:'Small Coke Zero',price:3.95 ,checked:false,id:16},{name:'Small Syoney Zero',price:3.95 ,checked:false,id:17},{name:'Small Apple Juice',price:10.95 ,checked:false,id:18},
                    {name:'Small Strawberry Shake',price:16.95 ,checked:false,id:19},{name:'Small Chocolate Shake',price:16.95 ,checked:false,id:20},
                    ],

                    [{name:"Small Coke",price:8.90,checked:false ,id:21},{name:"Small Fanta Orange",price:8.90,checked:false ,id:22},{name:'Small Sprite',price:11.90,checked:false ,id:23},
                    {name:'Small Coke Zero',price:3.95 ,checked:false,id:24},{name:'Small Syoney Zero',price:3.95 ,checked:false,id:25},{name:'Small Apple Juice',price:10.95,checked:false ,id:26},
                    {name:'Small Strawberry Shake',price:16.95,checked:false ,id:27},{name:'Small Chocolate Shake',price:16.95 ,checked:false,id:28},{name:'Small Vanilla Shake',price:17.95 ,checked:false,id:29},
                      ],
                        
                    [{name:"debonairs sauce",price:8.90 ,checked:false,id:30},{name:"BBQ Sauce",price:8.90,checked:false ,id:31},{name:'Tikka Sauce',price:11.90,checked:false ,id:32},
                    ],

                    [
                    {name:"Small Coke",price:8.90 ,checked:false,id:33},{name:"Small Fanta Orange",price:8.90 ,checked:false,id:34},{name:'Small Sprite',price:11.90 ,checked:false,id:35},
                    {name:'Small Coke Zero',price:3.95 ,checked:false,id:36},{name:'Small Syoney Zero',price:3.95 ,checked:false,id:37},{name:'Small Apple Juice',price:10.95 ,checked:false,id:38},
                    {name:'Small Strawberry Shake',price:16.95,checked:false ,id:39},{name:'Small Chocolate Shake',price:16.95 ,checked:false,id:40},{name:'Small Vanilla Shake',price:17.95,checked:false ,id:41},
                    ],
                    ],
    minimum_quatity:[2,1,1,null,null],
    counter:[0,0,0,0,0],
    required: [true,true,true,false,false],              
    id:5
  },

];