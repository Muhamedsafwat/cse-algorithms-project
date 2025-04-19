// --------- Imports --------- //
import { brands } from "./brands";
import { categories } from "./categories";
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
  },
  {
    id: 2,
    name: "iPhone 14",
    price: 799,
    rating: 4.7,
    brand: brands[0], // Apple
    category: categories[0], // Mobile phones
  },
  {
    id: 3,
    name: "Samsung Galaxy S23 Ultra",
    price: 1199,
    rating: 4.8,
    brand: brands[1], // Samsung
    category: categories[0], // Mobile phones
  },
  {
    id: 4,
    name: "Samsung Galaxy S23",
    price: 799,
    rating: 4.6,
    brand: brands[1], // Samsung
    category: categories[0], // Mobile phones
  },
  {
    id: 5,
    name: "Xiaomi 13 Pro",
    price: 899,
    rating: 4.5,
    brand: brands[8], // Xiaomi
    category: categories[0], // Mobile phones
  },
  {
    id: 6,
    name: "Xiaomi 13",
    price: 699,
    rating: 4.4,
    brand: brands[8], // Xiaomi
    category: categories[0], // Mobile phones
  },
  {
    id: 7,
    name: "Realme GT 3",
    price: 599,
    rating: 4.3,
    brand: brands[9], // Realme
    category: categories[0], // Mobile phones
  },
  {
    id: 8,
    name: "Realme GT Neo 5",
    price: 499,
    rating: 4.2,
    brand: brands[9], // Realme
    category: categories[0], // Mobile phones
  },
  {
    id: 9,
    name: "iPhone 13",
    price: 699,
    rating: 4.6,
    brand: brands[0], // Apple
    category: categories[0], // Mobile phones
  },
  {
    id: 10,
    name: "Samsung Galaxy A54",
    price: 449,
    rating: 4.3,
    brand: brands[1], // Samsung
    category: categories[0], // Mobile phones
  },

  // Laptops
  {
    id: 11,
    name: "MacBook Pro 16",
    price: 2499,
    rating: 4.9,
    brand: brands[0], // Apple
    category: categories[1], // Laptops
  },
  {
    id: 12,
    name: "MacBook Air M2",
    price: 1199,
    rating: 4.8,
    brand: brands[0], // Apple
    category: categories[1], // Laptops
  },
  {
    id: 13,
    name: "Razer Blade 18",
    price: 3499,
    rating: 4.7,
    brand: brands[2], // Razer
    category: categories[1], // Laptops
  },
  {
    id: 14,
    name: "Razer Blade 15",
    price: 2499,
    rating: 4.6,
    brand: brands[2], // Razer
    category: categories[1], // Laptops
  },
  {
    id: 15,
    name: "Sony VAIO SX14",
    price: 1799,
    rating: 4.5,
    brand: brands[3], // Sony
    category: categories[1], // Laptops
  },
  {
    id: 16,
    name: "Xiaomi Book Pro 16",
    price: 1299,
    rating: 4.4,
    brand: brands[8], // Xiaomi
    category: categories[1], // Laptops
  },
  {
    id: 17,
    name: "MacBook Pro 14",
    price: 1999,
    rating: 4.8,
    brand: brands[0], // Apple
    category: categories[1], // Laptops
  },
  {
    id: 18,
    name: "Razer Blade Stealth 13",
    price: 1799,
    rating: 4.5,
    brand: brands[2], // Razer
    category: categories[1], // Laptops
  },
  {
    id: 19,
    name: "Sony VAIO Z",
    price: 2499,
    rating: 4.6,
    brand: brands[3], // Sony
    category: categories[1], // Laptops
  },
  {
    id: 20,
    name: "Xiaomi Book Air 13",
    price: 999,
    rating: 4.3,
    brand: brands[8], // Xiaomi
    category: categories[1], // Laptops
  },

  // Smart watches
  {
    id: 21,
    name: "Apple Watch Series 8",
    price: 399,
    rating: 4.8,
    brand: brands[0], // Apple
    category: categories[2], // Smart watches
  },
  {
    id: 22,
    name: "Apple Watch Ultra",
    price: 799,
    rating: 4.9,
    brand: brands[0], // Apple
    category: categories[2], // Smart watches
  },
  {
    id: 23,
    name: "Samsung Galaxy Watch 6 Pro",
    price: 449,
    rating: 4.7,
    brand: brands[1], // Samsung
    category: categories[2], // Smart watches
  },
  {
    id: 24,
    name: "Samsung Galaxy Watch 6",
    price: 299,
    rating: 4.6,
    brand: brands[1], // Samsung
    category: categories[2], // Smart watches
  },
  {
    id: 25,
    name: "Sony SmartWatch 5",
    price: 349,
    rating: 4.5,
    brand: brands[3], // Sony
    category: categories[2], // Smart watches
  },
  {
    id: 26,
    name: "Xiaomi Watch S1 Pro",
    price: 199,
    rating: 4.4,
    brand: brands[8], // Xiaomi
    category: categories[2], // Smart watches
  },
  {
    id: 27,
    name: "Apple Watch SE",
    price: 249,
    rating: 4.6,
    brand: brands[0], // Apple
    category: categories[2], // Smart watches
  },
  {
    id: 28,
    name: "Samsung Galaxy Watch 5",
    price: 279,
    rating: 4.5,
    brand: brands[1], // Samsung
    category: categories[2], // Smart watches
  },
  {
    id: 29,
    name: "Sony SmartWatch 4",
    price: 299,
    rating: 4.4,
    brand: brands[3], // Sony
    category: categories[2], // Smart watches
  },
  {
    id: 30,
    name: "Xiaomi Watch S1",
    price: 149,
    rating: 4.3,
    brand: brands[8], // Xiaomi
    category: categories[2], // Smart watches
  },

  // Accessories
  {
    id: 31,
    name: "Apple AirTag",
    price: 29,
    rating: 4.7,
    brand: brands[0], // Apple
    category: categories[3], // Accessories
  },
  {
    id: 32,
    name: "Apple Pencil 2",
    price: 129,
    rating: 4.8,
    brand: brands[0], // Apple
    category: categories[3], // Accessories
  },
  {
    id: 33,
    name: "Samsung Galaxy Buds Pro",
    price: 229,
    rating: 4.6,
    brand: brands[1], // Samsung
    category: categories[3], // Accessories
  },
  {
    id: 34,
    name: "Razer Mouse Pad",
    price: 49,
    rating: 4.5,
    brand: brands[2], // Razer
    category: categories[3], // Accessories
  },
  {
    id: 35,
    name: "Sony Camera Bag",
    price: 79,
    rating: 4.4,
    brand: brands[3], // Sony
    category: categories[3], // Accessories
  },
  {
    id: 36,
    name: "Canon Camera Strap",
    price: 29,
    rating: 4.3,
    brand: brands[4], // Canon
    category: categories[3], // Accessories
  },
  {
    id: 37,
    name: "Nikon Camera Bag",
    price: 89,
    rating: 4.5,
    brand: brands[5], // Nikon
    category: categories[3], // Accessories
  },
  {
    id: 38,
    name: "JBL Speaker Stand",
    price: 39,
    rating: 4.4,
    brand: brands[6], // JBL
    category: categories[3], // Accessories
  },
  {
    id: 39,
    name: "Beats Carrying Case",
    price: 49,
    rating: 4.3,
    brand: brands[7], // Beats
    category: categories[3], // Accessories
  },
  {
    id: 40,
    name: "Xiaomi Power Bank",
    price: 39,
    rating: 4.6,
    brand: brands[8], // Xiaomi
    category: categories[3], // Accessories
  },

  // Headphones
  {
    id: 41,
    name: "Apple AirPods Pro 2",
    price: 249,
    rating: 4.8,
    brand: brands[0], // Apple
    category: categories[4], // Headphones
  },
  {
    id: 42,
    name: "Apple AirPods Max",
    price: 549,
    rating: 4.7,
    brand: brands[0], // Apple
    category: categories[4], // Headphones
  },
  {
    id: 43,
    name: "Samsung Galaxy Buds Live",
    price: 169,
    rating: 4.6,
    brand: brands[1], // Samsung
    category: categories[4], // Headphones
  },
  {
    id: 44,
    name: "Razer Kraken V3",
    price: 99,
    rating: 4.5,
    brand: brands[2], // Razer
    category: categories[4], // Headphones
  },
  {
    id: 45,
    name: "Sony WH-1000XM5",
    price: 399,
    rating: 4.9,
    brand: brands[3], // Sony
    category: categories[4], // Headphones
  },
  {
    id: 46,
    name: "JBL Live 660NC",
    price: 199,
    rating: 4.6,
    brand: brands[6], // JBL
    category: categories[4], // Headphones
  },
  {
    id: 47,
    name: "Beats Studio Pro",
    price: 349,
    rating: 4.7,
    brand: brands[7], // Beats
    category: categories[4], // Headphones
  },
  {
    id: 48,
    name: "Xiaomi Redmi Buds 4 Pro",
    price: 79,
    rating: 4.4,
    brand: brands[8], // Xiaomi
    category: categories[4], // Headphones
  },
  {
    id: 49,
    name: "Realme Buds Air 3",
    price: 69,
    rating: 4.3,
    brand: brands[9], // Realme
    category: categories[4], // Headphones
  },
  {
    id: 50,
    name: "Apple AirPods 3",
    price: 179,
    rating: 4.6,
    brand: brands[0], // Apple
    category: categories[4], // Headphones
  },

  // Cameras
  {
    id: 51,
    name: "Sony Alpha A7 IV",
    price: 2499,
    rating: 4.9,
    brand: brands[3], // Sony
    category: categories[5], // Cameras
  },
  {
    id: 52,
    name: "Canon EOS R6",
    price: 2299,
    rating: 4.8,
    brand: brands[4], // Canon
    category: categories[5], // Cameras
  },
  {
    id: 53,
    name: "Nikon Z6 II",
    price: 1999,
    rating: 4.8,
    brand: brands[5], // Nikon
    category: categories[5], // Cameras
  },
  {
    id: 54,
    name: "Sony Alpha A7C",
    price: 1799,
    rating: 4.7,
    brand: brands[3], // Sony
    category: categories[5], // Cameras
  },
  {
    id: 55,
    name: "Canon EOS R7",
    price: 1499,
    rating: 4.7,
    brand: brands[4], // Canon
    category: categories[5], // Cameras
  },
  {
    id: 56,
    name: "Nikon Z5",
    price: 1399,
    rating: 4.6,
    brand: brands[5], // Nikon
    category: categories[5], // Cameras
  },
  {
    id: 57,
    name: "Sony Alpha A6600",
    price: 1199,
    rating: 4.6,
    brand: brands[3], // Sony
    category: categories[5], // Cameras
  },
  {
    id: 58,
    name: "Canon EOS 90D",
    price: 1199,
    rating: 4.5,
    brand: brands[4], // Canon
    category: categories[5], // Cameras
  },
  {
    id: 59,
    name: "Nikon D850",
    price: 2999,
    rating: 4.9,
    brand: brands[5], // Nikon
    category: categories[5], // Cameras
  },
  {
    id: 60,
    name: "Sony Alpha A1",
    price: 6499,
    rating: 4.9,
    brand: brands[3], // Sony
    category: categories[5], // Cameras
  },

  // Additional Mobile phones
  {
    id: 61,
    name: "iPhone 14 Pro Max",
    price: 1099,
    rating: 4.8,
    brand: brands[0], // Apple
    category: categories[0], // Mobile phones
  },
  {
    id: 62,
    name: "Samsung Galaxy Z Fold 5",
    price: 1799,
    rating: 4.7,
    brand: brands[1], // Samsung
    category: categories[0], // Mobile phones
  },
  {
    id: 63,
    name: "Samsung Galaxy Z Flip 5",
    price: 999,
    rating: 4.6,
    brand: brands[1], // Samsung
    category: categories[0], // Mobile phones
  },
  {
    id: 64,
    name: "Xiaomi 13T Pro",
    price: 799,
    rating: 4.5,
    brand: brands[8], // Xiaomi
    category: categories[0], // Mobile phones
  },
  {
    id: 65,
    name: "Realme GT 5",
    price: 699,
    rating: 4.4,
    brand: brands[9], // Realme
    category: categories[0], // Mobile phones
  },

  // Additional Laptops
  {
    id: 66,
    name: "MacBook Pro 13 M2",
    price: 1299,
    rating: 4.7,
    brand: brands[0], // Apple
    category: categories[1], // Laptops
  },
  {
    id: 67,
    name: "Razer Blade 14",
    price: 2699,
    rating: 4.6,
    brand: brands[2], // Razer
    category: categories[1], // Laptops
  },
  {
    id: 68,
    name: "Sony VAIO SX12",
    price: 1599,
    rating: 4.5,
    brand: brands[3], // Sony
    category: categories[1], // Laptops
  },
  {
    id: 69,
    name: "Xiaomi Book Pro 14",
    price: 1199,
    rating: 4.4,
    brand: brands[8], // Xiaomi
    category: categories[1], // Laptops
  },
  {
    id: 70,
    name: "MacBook Air M1",
    price: 999,
    rating: 4.6,
    brand: brands[0], // Apple
    category: categories[1], // Laptops
  },

  // Additional Smart watches
  {
    id: 71,
    name: "Apple Watch Series 7",
    price: 379,
    rating: 4.7,
    brand: brands[0], // Apple
    category: categories[2], // Smart watches
  },
  {
    id: 72,
    name: "Samsung Galaxy Watch 5 Pro",
    price: 449,
    rating: 4.6,
    brand: brands[1], // Samsung
    category: categories[2], // Smart watches
  },
  {
    id: 73,
    name: "Sony SmartWatch 3",
    price: 299,
    rating: 4.4,
    brand: brands[3], // Sony
    category: categories[2], // Smart watches
  },
  {
    id: 74,
    name: "Xiaomi Watch S2",
    price: 179,
    rating: 4.3,
    brand: brands[8], // Xiaomi
    category: categories[2], // Smart watches
  },
  {
    id: 75,
    name: "Apple Watch Series 6",
    price: 349,
    rating: 4.5,
    brand: brands[0], // Apple
    category: categories[2], // Smart watches
  },

  // Additional Accessories
  {
    id: 76,
    name: "Apple Magic Keyboard",
    price: 99,
    rating: 4.6,
    brand: brands[0], // Apple
    category: categories[3], // Accessories
  },
  {
    id: 77,
    name: "Samsung Galaxy Tab S9 Keyboard",
    price: 179,
    rating: 4.5,
    brand: brands[1], // Samsung
    category: categories[3], // Accessories
  },
  {
    id: 78,
    name: "Razer Keyboard",
    price: 149,
    rating: 4.7,
    brand: brands[2], // Razer
    category: categories[3], // Accessories
  },
  {
    id: 79,
    name: "Sony Camera Battery",
    price: 79,
    rating: 4.4,
    brand: brands[3], // Sony
    category: categories[3], // Accessories
  },
  {
    id: 80,
    name: "Canon Camera Lens",
    price: 599,
    rating: 4.8,
    brand: brands[4], // Canon
    category: categories[3], // Accessories
  },

  // Additional Headphones
  {
    id: 81,
    name: "Apple AirPods 2",
    price: 159,
    rating: 4.5,
    brand: brands[0], // Apple
    category: categories[4], // Headphones
  },
  {
    id: 82,
    name: "Samsung Galaxy Buds 2",
    price: 149,
    rating: 4.6,
    brand: brands[1], // Samsung
    category: categories[4], // Headphones
  },
  {
    id: 83,
    name: "Razer BlackShark V2",
    price: 99,
    rating: 4.5,
    brand: brands[2], // Razer
    category: categories[4], // Headphones
  },
  {
    id: 84,
    name: "Sony WH-1000XM4",
    price: 349,
    rating: 4.8,
    brand: brands[3], // Sony
    category: categories[4], // Headphones
  },
  {
    id: 85,
    name: "JBL Tune 770NC",
    price: 149,
    rating: 4.5,
    brand: brands[6], // JBL
    category: categories[4], // Headphones
  },

  // Additional Cameras
  {
    id: 86,
    name: "Canon EOS R5",
    price: 3899,
    rating: 4.9,
    brand: brands[4], // Canon
    category: categories[5], // Cameras
  },
  {
    id: 87,
    name: "Nikon Z7 II",
    price: 2999,
    rating: 4.8,
    brand: brands[5], // Nikon
    category: categories[5], // Cameras
  },
  {
    id: 88,
    name: "Sony Alpha A7R IV",
    price: 3499,
    rating: 4.9,
    brand: brands[3], // Sony
    category: categories[5], // Cameras
  },
  {
    id: 89,
    name: "Canon EOS R10",
    price: 979,
    rating: 4.6,
    brand: brands[4], // Canon
    category: categories[5], // Cameras
  },
  {
    id: 90,
    name: "Nikon Z30",
    price: 699,
    rating: 4.5,
    brand: brands[5], // Nikon
    category: categories[5], // Cameras
  },

  // Final products to reach 100
  {
    id: 91,
    name: "iPhone 13 Pro",
    price: 899,
    rating: 4.7,
    brand: brands[0], // Apple
    category: categories[0], // Mobile phones
  },
  {
    id: 92,
    name: "Samsung Galaxy A34",
    price: 399,
    rating: 4.4,
    brand: brands[1], // Samsung
    category: categories[0], // Mobile phones
  },
  {
    id: 93,
    name: "Razer Blade 17",
    price: 3299,
    rating: 4.7,
    brand: brands[2], // Razer
    category: categories[1], // Laptops
  },
  {
    id: 94,
    name: "Sony WH-1000XM3",
    price: 299,
    rating: 4.7,
    brand: brands[3], // Sony
    category: categories[4], // Headphones
  },
  {
    id: 95,
    name: "Canon EOS 250D",
    price: 699,
    rating: 4.5,
    brand: brands[4], // Canon
    category: categories[5], // Cameras
  },
  {
    id: 96,
    name: "Nikon D7500",
    price: 999,
    rating: 4.6,
    brand: brands[5], // Nikon
    category: categories[5], // Cameras
  },
  {
    id: 97,
    name: "JBL Flip 6",
    price: 129,
    rating: 4.6,
    brand: brands[6], // JBL
    category: categories[3], // Accessories
  },
  {
    id: 98,
    name: "Beats Powerbeats Pro",
    price: 249,
    rating: 4.7,
    brand: brands[7], // Beats
    category: categories[4], // Headphones
  },
  {
    id: 99,
    name: "Xiaomi Redmi Note 12",
    price: 299,
    rating: 4.4,
    brand: brands[8], // Xiaomi
    category: categories[0], // Mobile phones
  },
  {
    id: 100,
    name: "Realme 10",
    price: 249,
    rating: 4.3,
    brand: brands[9], // Realme
    category: categories[0], // Mobile phones
  },
];
