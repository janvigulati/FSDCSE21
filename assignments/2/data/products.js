const products = [
  {
    "id": 1,
    "name": "Wireless Headphones",
    "price": 336,
    "category": "Electronics",
    "inStock": true
  },
  {
    "id": 2,
    "name": "Smart Watch",
    "price": 473,
    "category": "Clothing",
    "inStock": true
  },
  {
    "id": 3,
    "name": "Bluetooth Speaker",
    "price": 610,
    "category": "Home",
    "inStock": true
  },
  {
    "id": 4,
    "name": "Laptop Stand",
    "price": 747,
    "category": "Books",
    "inStock": true
  },
  {
    "id": 5,
    "name": "USB-C Cable",
    "price": 884,
    "category": "Beauty",
    "inStock": true
  },
  {
    "id": 6,
    "name": "Mechanical Keyboard",
    "price": 1021,
    "category": "Sports",
    "inStock": true
  },
  {
    "id": 7,
    "name": "Wireless Mouse",
    "price": 1158,
    "category": "Grocery",
    "inStock": false
  },
  {
    "id": 8,
    "name": "Power Bank",
    "price": 1295,
    "category": "Accessories",
    "inStock": true
  },
  {
    "id": 9,
    "name": "Phone Case",
    "price": 1432,
    "category": "Electronics",
    "inStock": true
  },
  {
    "id": 10,
    "name": "LED Desk Lamp",
    "price": 1569,
    "category": "Clothing",
    "inStock": true
  },
  {
    "id": 11,
    "name": "Cotton T-Shirt",
    "price": 1706,
    "category": "Home",
    "inStock": true
  },
  {
    "id": 12,
    "name": "Denim Jeans",
    "price": 1843,
    "category": "Books",
    "inStock": true
  },
  {
    "id": 13,
    "name": "Hoodie",
    "price": 1980,
    "category": "Beauty",
    "inStock": true
  },
  {
    "id": 14,
    "name": "Sneakers",
    "price": 2117,
    "category": "Sports",
    "inStock": false
  },
  {
    "id": 15,
    "name": "Backpack",
    "price": 2254,
    "category": "Grocery",
    "inStock": true
  },
  {
    "id": 16,
    "name": "Baseball Cap",
    "price": 2391,
    "category": "Accessories",
    "inStock": true
  },
  {
    "id": 17,
    "name": "Water Bottle",
    "price": 2528,
    "category": "Electronics",
    "inStock": true
  },
  {
    "id": 18,
    "name": "Sunglasses",
    "price": 2665,
    "category": "Clothing",
    "inStock": true
  },
  {
    "id": 19,
    "name": "Wall Clock",
    "price": 2802,
    "category": "Home",
    "inStock": true
  },
  {
    "id": 20,
    "name": "Table Fan",
    "price": 2939,
    "category": "Books",
    "inStock": true
  },
  {
    "id": 21,
    "name": "Coffee Mug",
    "price": 3076,
    "category": "Beauty",
    "inStock": false
  },
  {
    "id": 22,
    "name": "Notebook",
    "price": 3213,
    "category": "Sports",
    "inStock": true
  },
  {
    "id": 23,
    "name": "Ball Pen Set",
    "price": 3350,
    "category": "Grocery",
    "inStock": true
  },
  {
    "id": 24,
    "name": "Desk Organizer",
    "price": 3487,
    "category": "Accessories",
    "inStock": true
  },
  {
    "id": 25,
    "name": "Cushion",
    "price": 3624,
    "category": "Electronics",
    "inStock": true
  },
  {
    "id": 26,
    "name": "Bedsheet",
    "price": 3761,
    "category": "Clothing",
    "inStock": true
  },
  {
    "id": 27,
    "name": "Pillow",
    "price": 3898,
    "category": "Home",
    "inStock": true
  },
  {
    "id": 28,
    "name": "Storage Box",
    "price": 4035,
    "category": "Books",
    "inStock": false
  },
  {
    "id": 29,
    "name": "Novel Book",
    "price": 4172,
    "category": "Beauty",
    "inStock": true
  },
  {
    "id": 30,
    "name": "Programming Book",
    "price": 4309,
    "category": "Sports",
    "inStock": true
  },
  {
    "id": 31,
    "name": "Notebook Pack",
    "price": 4446,
    "category": "Grocery",
    "inStock": true
  },
  {
    "id": 32,
    "name": "Study Lamp",
    "price": 4583,
    "category": "Accessories",
    "inStock": true
  },
  {
    "id": 33,
    "name": "Calculator",
    "price": 4720,
    "category": "Electronics",
    "inStock": true
  },
  {
    "id": 34,
    "name": "Yoga Mat",
    "price": 4857,
    "category": "Clothing",
    "inStock": true
  },
  {
    "id": 35,
    "name": "Skipping Rope",
    "price": 4994,
    "category": "Home",
    "inStock": false
  },
  {
    "id": 36,
    "name": "Football",
    "price": 330,
    "category": "Books",
    "inStock": true
  },
  {
    "id": 37,
    "name": "Cricket Bat",
    "price": 467,
    "category": "Beauty",
    "inStock": true
  },
  {
    "id": 38,
    "name": "Badminton Racket",
    "price": 604,
    "category": "Sports",
    "inStock": true
  },
  {
    "id": 39,
    "name": "Gym Gloves",
    "price": 741,
    "category": "Grocery",
    "inStock": true
  },
  {
    "id": 40,
    "name": "Face Wash",
    "price": 878,
    "category": "Accessories",
    "inStock": true
  },
  {
    "id": 41,
    "name": "Moisturizer",
    "price": 1015,
    "category": "Electronics",
    "inStock": true
  },
  {
    "id": 42,
    "name": "Shampoo",
    "price": 1152,
    "category": "Clothing",
    "inStock": false
  },
  {
    "id": 43,
    "name": "Lip Balm",
    "price": 1289,
    "category": "Home",
    "inStock": true
  },
  {
    "id": 44,
    "name": "Hand Cream",
    "price": 1426,
    "category": "Books",
    "inStock": true
  },
  {
    "id": 45,
    "name": "Perfume",
    "price": 1563,
    "category": "Beauty",
    "inStock": true
  },
  {
    "id": 46,
    "name": "Sunscreen",
    "price": 1700,
    "category": "Sports",
    "inStock": true
  },
  {
    "id": 47,
    "name": "Comb",
    "price": 1837,
    "category": "Grocery",
    "inStock": true
  },
  {
    "id": 48,
    "name": "Toothbrush",
    "price": 1974,
    "category": "Accessories",
    "inStock": true
  },
  {
    "id": 49,
    "name": "Hair Dryer",
    "price": 2111,
    "category": "Electronics",
    "inStock": false
  },
  {
    "id": 50,
    "name": "Kitchen Knife",
    "price": 2248,
    "category": "Clothing",
    "inStock": true
  },
  {
    "id": 51,
    "name": "Frying Pan",
    "price": 2385,
    "category": "Home",
    "inStock": true
  },
  {
    "id": 52,
    "name": "Dinner Plate Set",
    "price": 2522,
    "category": "Books",
    "inStock": true
  },
  {
    "id": 53,
    "name": "Glass Set",
    "price": 2659,
    "category": "Beauty",
    "inStock": true
  },
  {
    "id": 54,
    "name": "Electric Kettle",
    "price": 2796,
    "category": "Sports",
    "inStock": true
  },
  {
    "id": 55,
    "name": "Toaster",
    "price": 2933,
    "category": "Grocery",
    "inStock": true
  },
  {
    "id": 56,
    "name": "Lunch Box",
    "price": 3070,
    "category": "Accessories",
    "inStock": false
  },
  {
    "id": 57,
    "name": "Spice Rack",
    "price": 3207,
    "category": "Electronics",
    "inStock": true
  },
  {
    "id": 58,
    "name": "Curtains",
    "price": 3344,
    "category": "Clothing",
    "inStock": true
  },
  {
    "id": 59,
    "name": "Plant Pot",
    "price": 3481,
    "category": "Home",
    "inStock": true
  },
  {
    "id": 60,
    "name": "Photo Frame",
    "price": 3618,
    "category": "Books",
    "inStock": true
  },
  {
    "id": 61,
    "name": "Keychain",
    "price": 3755,
    "category": "Beauty",
    "inStock": true
  },
  {
    "id": 62,
    "name": "Wallet",
    "price": 3892,
    "category": "Sports",
    "inStock": true
  },
  {
    "id": 63,
    "name": "Leather Belt",
    "price": 4029,
    "category": "Grocery",
    "inStock": false
  },
  {
    "id": 64,
    "name": "Travel Pouch",
    "price": 4166,
    "category": "Accessories",
    "inStock": true
  },
  {
    "id": 65,
    "name": "Phone Holder",
    "price": 4303,
    "category": "Electronics",
    "inStock": true
  },
  {
    "id": 66,
    "name": "Laptop Sleeve",
    "price": 4440,
    "category": "Clothing",
    "inStock": true
  },
  {
    "id": 67,
    "name": "Earphone Case",
    "price": 4577,
    "category": "Home",
    "inStock": true
  },
  {
    "id": 68,
    "name": "Charging Adapter",
    "price": 4714,
    "category": "Books",
    "inStock": true
  },
  {
    "id": 69,
    "name": "HDMI Cable",
    "price": 4851,
    "category": "Beauty",
    "inStock": true
  },
  {
    "id": 70,
    "name": "Webcam",
    "price": 4988,
    "category": "Sports",
    "inStock": false
  },
  {
    "id": 71,
    "name": "Microphone",
    "price": 324,
    "category": "Grocery",
    "inStock": true
  },
  {
    "id": 72,
    "name": "Router",
    "price": 461,
    "category": "Accessories",
    "inStock": true
  },
  {
    "id": 73,
    "name": "Memory Card",
    "price": 598,
    "category": "Electronics",
    "inStock": true
  },
  {
    "id": 74,
    "name": "Flash Drive",
    "price": 735,
    "category": "Clothing",
    "inStock": true
  },
  {
    "id": 75,
    "name": "Hard Drive",
    "price": 872,
    "category": "Home",
    "inStock": true
  },
  {
    "id": 76,
    "name": "Monitor",
    "price": 1009,
    "category": "Books",
    "inStock": true
  },
  {
    "id": 77,
    "name": "Tablet",
    "price": 1146,
    "category": "Beauty",
    "inStock": false
  },
  {
    "id": 78,
    "name": "Smartphone",
    "price": 1283,
    "category": "Sports",
    "inStock": true
  },
  {
    "id": 79,
    "name": "Printer",
    "price": 1420,
    "category": "Grocery",
    "inStock": true
  },
  {
    "id": 80,
    "name": "Desk Chair",
    "price": 1557,
    "category": "Accessories",
    "inStock": true
  },
  {
    "id": 81,
    "name": "Office Chair Mat",
    "price": 1694,
    "category": "Electronics",
    "inStock": true
  },
  {
    "id": 82,
    "name": "Floor Lamp",
    "price": 1831,
    "category": "Clothing",
    "inStock": true
  },
  {
    "id": 83,
    "name": "Bookshelf",
    "price": 1968,
    "category": "Home",
    "inStock": true
  },
  {
    "id": 84,
    "name": "Side Table",
    "price": 2105,
    "category": "Books",
    "inStock": false
  },
  {
    "id": 85,
    "name": "Curtain Rod",
    "price": 2242,
    "category": "Beauty",
    "inStock": true
  },
  {
    "id": 86,
    "name": "Bath Towel",
    "price": 2379,
    "category": "Sports",
    "inStock": true
  },
  {
    "id": 87,
    "name": "Hand Towel",
    "price": 2516,
    "category": "Grocery",
    "inStock": true
  },
  {
    "id": 88,
    "name": "Water Filter",
    "price": 2653,
    "category": "Accessories",
    "inStock": true
  },
  {
    "id": 89,
    "name": "Vacuum Cleaner",
    "price": 2790,
    "category": "Electronics",
    "inStock": true
  },
  {
    "id": 90,
    "name": "Iron",
    "price": 2927,
    "category": "Clothing",
    "inStock": true
  },
  {
    "id": 91,
    "name": "Air Fryer",
    "price": 3064,
    "category": "Home",
    "inStock": false
  },
  {
    "id": 92,
    "name": "Mixer Grinder",
    "price": 3201,
    "category": "Books",
    "inStock": true
  },
  {
    "id": 93,
    "name": "Coffee Maker",
    "price": 3338,
    "category": "Beauty",
    "inStock": true
  },
  {
    "id": 94,
    "name": "Face Mask Pack",
    "price": 3475,
    "category": "Sports",
    "inStock": true
  },
  {
    "id": 95,
    "name": "Makeup Brush Set",
    "price": 3612,
    "category": "Grocery",
    "inStock": true
  },
  {
    "id": 96,
    "name": "Fitness Band",
    "price": 3749,
    "category": "Accessories",
    "inStock": true
  },
  {
    "id": 97,
    "name": "Resistance Bands",
    "price": 3886,
    "category": "Electronics",
    "inStock": true
  },
  {
    "id": 98,
    "name": "Sports Bag",
    "price": 4023,
    "category": "Clothing",
    "inStock": false
  },
  {
    "id": 99,
    "name": "Cycling Helmet",
    "price": 4160,
    "category": "Home",
    "inStock": true
  },
  {
    "id": 100,
    "name": "Tennis Balls",
    "price": 4297,
    "category": "Books",
    "inStock": true
  }
];

module.exports = products;
