// --------- Imports --------- //
import { brands } from "./brands.js";
import { categories } from "./categories.js";
// You can access the brand name by using brands[index].name
// You can access the category name by using categories[index].name

// --------- Products --------- //
export const products = [
  // Mobile phones
  {
    id: 1,
    name: "iPhone 14 Pro",
    price: 999,
    rating: 4.8,
    brand: brands[0], // Apple
    category: categories[0], // Mobile phones
    image: "/products/iphone14pro.png",
  },
  {
    id: 2,
    name: "iPhone 14",
    price: 799,
    rating: 4.7,
    brand: brands[0], // Apple
    category: categories[0], // Mobile phones
    image: "/products/iphone14.png",
  },
  {
    id: 3,
    name: "Samsung Galaxy S23 Ultra",
    price: 1199,
    rating: 4.8,
    brand: brands[1], // Samsung
    category: categories[0], // Mobile phones
    image: "/products/samsungs23ultra.png",
  },
  {
    id: 4,
    name: "Samsung Galaxy S23",
    price: 799,
    rating: 4.6,
    brand: brands[1], // Samsung
    category: categories[0], // Mobile phones
    image: "/products/samsungs23.png",
  },
  {
    id: 5,
    name: "Xiaomi 13 Pro",
    price: 899,
    rating: 4.5,
    brand: brands[8], // Xiaomi
    category: categories[0], // Mobile phones
    image: "/products/xiaomi13pro.png",
  },
  {
    id: 6,
    name: "Xiaomi 13",
    price: 699,
    rating: 4.4,
    brand: brands[8], // Xiaomi
    category: categories[0], // Mobile phones
    image: "/products/xiaomi13.png",
  },
  {
    id: 7,
    name: "Realme GT 3",
    price: 599,
    rating: 4.3,
    brand: brands[9], // Realme
    category: categories[0], // Mobile phones
    image: "/products/realmegt3.png",
  },
  {
    id: 8,
    name: "Realme GT Neo 5",
    price: 499,
    rating: 4.2,
    brand: brands[9], // Realme
    category: categories[0], // Mobile phones
    image: "/products/realmeneo5.png",
  },
  {
    id: 9,
    name: "iPhone 13",
    price: 699,
    rating: 4.6,
    brand: brands[0], // Apple
    category: categories[0], // Mobile phones
    image: "/products/iphone13.png",
  },
  {
    id: 10,
    name: "Samsung Galaxy A54",
    price: 449,
    rating: 4.3,
    brand: brands[1], // Samsung
    category: categories[0], // Mobile phones
    image: "/products/samsunga54.png",
  },

  // Laptops
  {
    id: 11,
    name: "MacBook Pro 16",
    price: 2499,
    rating: 4.9,
    brand: brands[0], // Apple
    category: categories[1], // Laptops
    image: "/products/macpro16.png",
  },
  {
    id: 12,
    name: "MacBook Air M2",
    price: 1199,
    rating: 4.8,
    brand: brands[0], // Apple
    category: categories[1], // Laptops
    image: "/products/macairm2.png",
  },
  {
    id: 13,
    name: "Razer Blade 18",
    price: 3499,
    rating: 4.7,
    brand: brands[2], // Razer
    category: categories[1], // Laptops
    image: "/products/razerblade18.png",
  },
  {
    id: 14,
    name: "Razer Blade 15",
    price: 2499,
    rating: 4.6,
    brand: brands[2], // Razer
    category: categories[1], // Laptops
    image: "/products/razerblade15.png",
  },
  {
    id: 15,
    name: "Sony VAIO SX14",
    price: 1799,
    rating: 4.5,
    brand: brands[3], // Sony
    category: categories[1], // Laptops
    image: "/products/sonyvaioz.png",
  },
  {
    id: 16,
    name: "Xiaomi Book Pro 16",
    price: 1299,
    rating: 4.4,
    brand: brands[8], // Xiaomi
    category: categories[1], // Laptops
    image: "/products/xiaomibook16.png",
  },
  {
    id: 17,
    name: "MacBook Pro 14",
    price: 1999,
    rating: 4.8,
    brand: brands[0], // Apple
    category: categories[1], // Laptops
    image: "/products/macpro16.png",
  },
  {
    id: 18,
    name: "Razer Blade Stealth 13",
    price: 1799,
    rating: 4.5,
    brand: brands[2], // Razer
    category: categories[1], // Laptops
    image: "/products/razerstealth13.png",
  },
  {
    id: 19,
    name: "Sony VAIO Z",
    price: 2499,
    rating: 4.6,
    brand: brands[3], // Sony
    category: categories[1], // Laptops
    image: "/products/sonyvaioz.png",
  },
  {
    id: 20,
    name: "Xiaomi Book Air 13",
    price: 999,
    rating: 4.3,
    brand: brands[8], // Xiaomi
    category: categories[1], // Laptops
    image: "/products/xiaomiair13.png",
  },

  // Smart watches
  {
    id: 21,
    name: "Apple Watch Series 8",
    price: 399,
    rating: 4.8,
    brand: brands[0], // Apple
    category: categories[2], // Smart watches
    image: "/products/applewatch8.png",
  },
  {
    id: 22,
    name: "Apple Watch Ultra",
    price: 799,
    rating: 4.9,
    brand: brands[0], // Apple
    category: categories[2], // Smart watches
    image: "/products/applewatchultra.png",
  },
  {
    id: 23,
    name: "Samsung Galaxy Watch 6 Pro",
    price: 449,
    rating: 4.7,
    brand: brands[1], // Samsung
    category: categories[2], // Smart watches
    image: "/products/galaxywatch6pro.png",
  },
  {
    id: 24,
    name: "Samsung Galaxy Watch 6",
    price: 299,
    rating: 4.6,
    brand: brands[1], // Samsung
    category: categories[2], // Smart watches
    image: "/products/samsungwatch5.png",
  },
  {
    id: 25,
    name: "Apple Watch SE",
    price: 249,
    rating: 4.5,
    brand: brands[0], // Apple
    category: categories[2], // Smart watches
    image: "/products/applewatchse.png",
  },
  {
    id: 26,
    name: "Xiaomi Watch S1",
    price: 199,
    rating: 4.4,
    brand: brands[8], // Xiaomi
    category: categories[2], // Smart watches
    image: "/products/xiaomiwatchs1.png",
  },
  {
    id: 27,
    name: "Sony Watch 5",
    price: 299,
    rating: 4.3,
    brand: brands[3], // Sony
    category: categories[2], // Smart watches
    image: "/products/sonywatch5.png",
  },
  {
    id: 28,
    name: "Sony Watch 4",
    price: 249,
    rating: 4.2,
    brand: brands[3], // Sony
    category: categories[2], // Smart watches
    image: "/products/sonywatch4.png",
  },

  // Accessories
  {
    id: 29,
    name: "Apple AirTag",
    price: 29,
    rating: 4.7,
    brand: brands[0], // Apple
    category: categories[3], // Accessories
    image: "/products/airtag.png",
  },
  {
    id: 30,
    name: "Apple Pencil 2",
    price: 129,
    rating: 4.8,
    brand: brands[0], // Apple
    category: categories[3], // Accessories
    image: "/products/applepincle2.png",
  },
  {
    id: 31,
    name: "Samsung Galaxy Buds2",
    price: 149,
    rating: 4.6,
    brand: brands[1], // Samsung
    category: categories[3], // Accessories
    image: "/products/samsungbuds2.png",
  },
  {
    id: 32,
    name: "Razer Mouse Pad",
    price: 49,
    rating: 4.5,
    brand: brands[2], // Razer
    category: categories[3], // Accessories
    image: "/products/razerpad.png",
  },
  {
    id: 33,
    name: "Sony Camera Bag",
    price: 79,
    rating: 4.4,
    brand: brands[3], // Sony
    category: categories[3], // Accessories
    image: "/products/sonybag.png",
  },
  {
    id: 34,
    name: "Canon Camera Strap",
    price: 29,
    rating: 4.3,
    brand: brands[4], // Canon
    category: categories[3], // Accessories
    image: "/products/canonstrap.png",
  },
  {
    id: 35,
    name: "Nikon Camera Bag",
    price: 69,
    rating: 4.2,
    brand: brands[5], // Nikon
    category: categories[3], // Accessories
    image: "/products/nikonbag.png",
  },
  {
    id: 36,
    name: "JBL Speaker Stand",
    price: 39,
    rating: 4.1,
    brand: brands[6], // JBL
    category: categories[3], // Accessories
    image: "/products/jblstand.png",
  },
  {
    id: 37,
    name: "Beats Case",
    price: 49,
    rating: 4.0,
    brand: brands[7], // Beats
    category: categories[3], // Accessories
    image: "/products/beatscase.png",
  },
  {
    id: 38,
    name: "Xiaomi Power Bank",
    price: 39,
    rating: 4.3,
    brand: brands[8], // Xiaomi
    category: categories[3], // Accessories
    image: "/products/xiaomipowerbank.png",
  },

  // Headphones
  {
    id: 39,
    name: "AirPods Pro 2",
    price: 249,
    rating: 4.8,
    brand: brands[0], // Apple
    category: categories[4], // Headphones
    image: "/products/airpodspro2.png",
  },
  {
    id: 40,
    name: "AirPods Max",
    price: 549,
    rating: 4.7,
    brand: brands[0], // Apple
    category: categories[4], // Headphones
    image: "/products/airpodsmax.png",
  },
  {
    id: 41,
    name: "Samsung Galaxy Buds Live",
    price: 169,
    rating: 4.6,
    brand: brands[1], // Samsung
    category: categories[4], // Headphones
    image: "/products/galaxybudslive.png",
  },
  {
    id: 42,
    name: "Razer Kraken V3",
    price: 99,
    rating: 4.5,
    brand: brands[2], // Razer
    category: categories[4], // Headphones
    image: "/products/razerkrakenv3.png",
  },
  {
    id: 43,
    name: "Sony WH-1000XM4",
    price: 349,
    rating: 4.9,
    brand: brands[3], // Sony
    category: categories[4], // Headphones
    image: "/products/sonywh.png",
  },
  {
    id: 44,
    name: "JBL Live 660NC",
    price: 199,
    rating: 4.4,
    brand: brands[6], // JBL
    category: categories[4], // Headphones
    image: "/products/jbllive.png",
  },
  {
    id: 45,
    name: "Beats Studio Pro",
    price: 349,
    rating: 4.3,
    brand: brands[7], // Beats
    category: categories[4], // Headphones
    image: "/products/beatsstudio.png",
  },
  {
    id: 46,
    name: "Xiaomi Buds 4 Pro",
    price: 129,
    rating: 4.2,
    brand: brands[8], // Xiaomi
    category: categories[4], // Headphones
    image: "/products/xiaomibuds4pro.png",
  },
  {
    id: 47,
    name: "Realme Buds Air 3",
    price: 79,
    rating: 4.1,
    brand: brands[9], // Realme
    category: categories[4], // Headphones
    image: "/products/realmebudsair3.png",
  },
  {
    id: 48,
    name: "AirPods 3",
    price: 179,
    rating: 4.4,
    brand: brands[0], // Apple
    category: categories[4], // Headphones
    image: "/products/airpods3.png",
  },

  // Cameras
  {
    id: 49,
    name: "Sony Alpha 1",
    price: 6499,
    rating: 4.9,
    brand: brands[3], // Sony
    category: categories[5], // Cameras
    image: "/products/sonya1.png",
  },
  {
    id: 50,
    name: "Sony Alpha 7C",
    price: 1799,
    rating: 4.8,
    brand: brands[3], // Sony
    category: categories[5], // Cameras
    image: "/products/sonya7c.png",
  },
  {
    id: 51,
    name: "Sony Alpha 7 IV",
    price: 2499,
    rating: 4.7,
    brand: brands[3], // Sony
    category: categories[5], // Cameras
    image: "/products/sonyalpha74.png",
  },
  {
    id: 52,
    name: "Sony Alpha 6600",
    price: 1199,
    rating: 4.6,
    brand: brands[3], // Sony
    category: categories[5], // Cameras
    image: "/products/sonya6600.png",
  },
  {
    id: 53,
    name: "Canon EOS R6",
    price: 2499,
    rating: 4.8,
    brand: brands[4], // Canon
    category: categories[5], // Cameras
    image: "/products/canonr6.png",
  },
  {
    id: 54,
    name: "Canon EOS R7",
    price: 1499,
    rating: 4.7,
    brand: brands[4], // Canon
    category: categories[5], // Cameras
    image: "/products/canonr7.png",
  },
  {
    id: 55,
    name: "Canon EOS 90D",
    price: 1199,
    rating: 4.6,
    brand: brands[4], // Canon
    category: categories[5], // Cameras
    image: "/products/canon90d.png",
  },
  {
    id: 56,
    name: "Canon RF 24-70mm",
    price: 2299,
    rating: 4.9,
    brand: brands[4], // Canon
    category: categories[5], // Cameras
    image: "/products/canonlens.png",
  },
  {
    id: 57,
    name: "Nikon Z6 II",
    price: 1999,
    rating: 4.8,
    brand: brands[5], // Nikon
    category: categories[5], // Cameras
    image: "/products/nikonz62.png",
  },
  {
    id: 58,
    name: "Nikon Z5",
    price: 1399,
    rating: 4.7,
    brand: brands[5], // Nikon
    category: categories[5], // Cameras
    image: "/products/nikonz5.png",
  },
  {
    id: 59,
    name: "Nikon D850",
    price: 2999,
    rating: 4.9,
    brand: brands[5], // Nikon
    category: categories[5], // Cameras
    image: "/products/nikon850.png",
  },
  {
    id: 60,
    name: "Sony NP-FZ100",
    price: 79,
    rating: 4.5,
    brand: brands[3], // Sony
    category: categories[5], // Cameras
    image: "/products/sonybattery.png",
  },

  // Additional Mobile phones
  {
    id: 61,
    name: "iPhone 14 Pro Max",
    price: 1099,
    rating: 4.8,
    brand: brands[0], // Apple
    category: categories[0], // Mobile phones
    image: "/products/iphone14promax.png",
  },
  {
    id: 62,
    name: "Samsung Galaxy Z Fold 5",
    price: 1799,
    rating: 4.7,
    brand: brands[1], // Samsung
    category: categories[0], // Mobile phones
    image: "/products/samsungzfold5.png",
  },
  {
    id: 63,
    name: "Samsung Galaxy Z Flip 5",
    price: 999,
    rating: 4.6,
    brand: brands[1], // Samsung
    category: categories[0], // Mobile phones
    image: "/products/samsungzflip5.png",
  },
  {
    id: 64,
    name: "Xiaomi 13T Pro",
    price: 799,
    rating: 4.5,
    brand: brands[8], // Xiaomi
    category: categories[0], // Mobile phones
    image: "/products/xiaomi13tpro.png",
  },
  {
    id: 65,
    name: "Realme GT 5",
    price: 699,
    rating: 4.4,
    brand: brands[9], // Realme
    category: categories[0], // Mobile phones
    image: "/products/realmegt5.png",
  },

  // Additional Laptops
  {
    id: 66,
    name: "MacBook Pro 13 M2",
    price: 1299,
    rating: 4.7,
    brand: brands[0], // Apple
    category: categories[1], // Laptops
    image: "/products/macpro13m2.png",
  },
  {
    id: 67,
    name: "Razer Blade 14",
    price: 2699,
    rating: 4.6,
    brand: brands[2], // Razer
    category: categories[1], // Laptops
    image: "/products/razerblade14.png",
  },
  {
    id: 68,
    name: "Sony VAIO SX12",
    price: 1599,
    rating: 4.5,
    brand: brands[3], // Sony
    category: categories[1], // Laptops
    image: "/products/sonyvaiosx12.png",
  },
  {
    id: 69,
    name: "Xiaomi Book Pro 14",
    price: 1199,
    rating: 4.4,
    brand: brands[8], // Xiaomi
    category: categories[1], // Laptops
    image: "/products/xiaomibook14.png",
  },
  {
    id: 70,
    name: "MacBook Air M1",
    price: 999,
    rating: 4.6,
    brand: brands[0], // Apple
    category: categories[1], // Laptops
    image: "/products/macairm1.png",
  },

  // Additional Smart watches
  {
    id: 71,
    name: "Apple Watch Series 7",
    price: 379,
    rating: 4.7,
    brand: brands[0], // Apple
    category: categories[2], // Smart watches
    image: "/products/applewatch7.png",
  },
  {
    id: 72,
    name: "Samsung Galaxy Watch 5 Pro",
    price: 449,
    rating: 4.6,
    brand: brands[1], // Samsung
    category: categories[2], // Smart watches
    image: "/products/galaxywatch5pro.png",
  },
  {
    id: 73,
    name: "Sony SmartWatch 3",
    price: 299,
    rating: 4.4,
    brand: brands[3], // Sony
    category: categories[2], // Smart watches
    image: "/products/sonywatch3.png",
  },
  {
    id: 74,
    name: "Xiaomi Watch S2",
    price: 179,
    rating: 4.3,
    brand: brands[8], // Xiaomi
    category: categories[2], // Smart watches
    image: "/products/xiaomiwatches2.png",
  },
  {
    id: 75,
    name: "Apple Watch Series 6",
    price: 349,
    rating: 4.5,
    brand: brands[0], // Apple
    category: categories[2], // Smart watches
    image: "/products/applewatch6.png",
  },

  // Additional Accessories
  {
    id: 76,
    name: "Apple Magic Keyboard",
    price: 99,
    rating: 4.6,
    brand: brands[0], // Apple
    category: categories[3], // Accessories
    image: "/products/applemagickeyboard.png",
  },
  {
    id: 77,
    name: "Samsung Galaxy Tab S9 Keyboard",
    price: 179,
    rating: 4.5,
    brand: brands[1], // Samsung
    category: categories[3], // Accessories
    image: "/products/samsungtabs9keyboard.png",
  },
  {
    id: 78,
    name: "Razer Keyboard",
    price: 149,
    rating: 4.7,
    brand: brands[2], // Razer
    category: categories[3], // Accessories
    image: "/products/razerkeyboard.png",
  },
  {
    id: 79,
    name: "Sony Camera Battery",
    price: 79,
    rating: 4.4,
    brand: brands[3], // Sony
    category: categories[3], // Accessories
    image: "/products/sonybattery.png",
  },
  {
    id: 80,
    name: "Canon Camera Lens",
    price: 599,
    rating: 4.8,
    brand: brands[4], // Canon
    category: categories[3], // Accessories
    image: "/products/canonlens.png",
  },

  // Additional Headphones
  {
    id: 81,
    name: "Apple AirPods 2",
    price: 159,
    rating: 4.5,
    brand: brands[0], // Apple
    category: categories[4], // Headphones
    image: "/products/airpods2.png",
  },
  {
    id: 82,
    name: "Samsung Galaxy Buds 2",
    price: 149,
    rating: 4.6,
    brand: brands[1], // Samsung
    category: categories[4], // Headphones
    image: "/products/samsungbuds2.png",
  },
  {
    id: 83,
    name: "Razer BlackShark V2",
    price: 99,
    rating: 4.5,
    brand: brands[2], // Razer
    category: categories[4], // Headphones
    image: "/products/razerblacksharkv2.png",
  },
  {
    id: 84,
    name: "Sony WH-1000XM4",
    price: 349,
    rating: 4.8,
    brand: brands[3], // Sony
    category: categories[4], // Headphones
    image: "/products/sonywh.png",
  },
  {
    id: 85,
    name: "JBL Tune 770NC",
    price: 149,
    rating: 4.5,
    brand: brands[6], // JBL
    category: categories[4], // Headphones
    image: "/products/jbltune.png",
  },

  // Additional Cameras
  {
    id: 86,
    name: "Canon EOS R5",
    price: 3899,
    rating: 4.9,
    brand: brands[4], // Canon
    category: categories[5], // Cameras
    image: "/products/canonr5.png",
  },
  {
    id: 87,
    name: "Nikon Z7 II",
    price: 2999,
    rating: 4.8,
    brand: brands[5], // Nikon
    category: categories[5], // Cameras
    image: "/products/nikonz72.png",
  },
  {
    id: 88,
    name: "Sony Alpha A7R IV",
    price: 3499,
    rating: 4.9,
    brand: brands[3], // Sony
    category: categories[5], // Cameras
    image: "/products/sonya7r4.png",
  },
  {
    id: 89,
    name: "Canon EOS R10",
    price: 979,
    rating: 4.6,
    brand: brands[4], // Canon
    category: categories[5], // Cameras
    image: "/products/canonr10.png",
  },
  {
    id: 90,
    name: "Nikon Z30",
    price: 699,
    rating: 4.5,
    brand: brands[5], // Nikon
    category: categories[5], // Cameras
    image: "/products/nikonz30.png",
  },

  // Final products to reach 100
  {
    id: 91,
    name: "iPhone 13 Pro",
    price: 899,
    rating: 4.7,
    brand: brands[0], // Apple
    category: categories[0], // Mobile phones
    image: "/products/iphone14pro.png",
  },
  {
    id: 92,
    name: "Samsung Galaxy A34",
    price: 399,
    rating: 4.4,
    brand: brands[1], // Samsung
    category: categories[0], // Mobile phones
    image: "/products/samsungs23.png",
  },
  {
    id: 93,
    name: "Razer Blade 17",
    price: 3299,
    rating: 4.7,
    brand: brands[2], // Razer
    category: categories[1], // Laptops
    image: "/products/razerblade18.png",
  },
  {
    id: 94,
    name: "Sony WH-1000XM3",
    price: 299,
    rating: 4.7,
    brand: brands[3], // Sony
    category: categories[4], // Headphones
    image: "/products/sonywh.png",
  },
  {
    id: 95,
    name: "Canon EOS 250D",
    price: 699,
    rating: 4.5,
    brand: brands[4], // Canon
    category: categories[5], // Cameras
    image: "/products/canon90d.png",
  },
  {
    id: 96,
    name: "Nikon D7500",
    price: 999,
    rating: 4.6,
    brand: brands[5], // Nikon
    category: categories[5], // Cameras
    image: "/products/nikon850.png",
  },
  {
    id: 97,
    name: "JBL Flip 6",
    price: 129,
    rating: 4.6,
    brand: brands[6], // JBL
    category: categories[3], // Accessories
    image: "/products/jbllive.png",
  },
  {
    id: 98,
    name: "Beats Powerbeats Pro",
    price: 249,
    rating: 4.7,
    brand: brands[7], // Beats
    category: categories[4], // Headphones
    image: "/products/beatsstudio.png",
  },
  {
    id: 99,
    name: "Xiaomi Redmi Note 12",
    price: 299,
    rating: 4.4,
    brand: brands[8], // Xiaomi
    category: categories[0], // Mobile phones
    image: "/products/xiaomi13pro.png",
  },
  {
    id: 100,
    name: "Realme 10",
    price: 249,
    rating: 4.3,
    brand: brands[9], // Realme
    category: categories[0], // Mobile phones
    image: "/products/realmegt3.png",
  },
];
