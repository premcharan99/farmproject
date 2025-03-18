
import { ProductType } from "@/components/products/ProductCard";

export const products: ProductType[] = [
  {
    id: 1,
    name: "Organic Baby Spinach",
    price: 4.99,
    category: "Vegetables",
    image: "https://images.unsplash.com/photo-1576045057995-568f588f82fb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    isOrganic: true,
    isSeasonal: true
  },
  {
    id: 2,
    name: "Heirloom Tomatoes",
    price: 5.99,
    category: "Vegetables",
    image: "https://images.unsplash.com/photo-1582284540020-8acbe03f4924?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    isOrganic: true,
    isSeasonal: true
  },
  {
    id: 3,
    name: "Fresh Strawberries",
    price: 6.99,
    category: "Fruits",
    image: "https://images.unsplash.com/photo-1601004890684-d8cbf643f5f2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    isOrganic: true,
    isSeasonal: true
  },
  {
    id: 4,
    name: "Organic Free-Range Eggs",
    price: 7.49,
    category: "Eggs",
    image: "https://images.unsplash.com/photo-1598965675045-45c7c640ef0c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    isOrganic: true
  },
  {
    id: 5,
    name: "Artisanal Sourdough Bread",
    price: 8.99,
    category: "Specialty Items",
    image: "https://images.unsplash.com/photo-1549931319-a545dcf3bc7c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    isNew: true
  },
  {
    id: 6,
    name: "Grass-Fed Ground Beef",
    price: 12.99,
    category: "Meat",
    image: "https://images.unsplash.com/photo-1551135049-8a33b5883817?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    isOrganic: true
  },
  {
    id: 7,
    name: "Organic Avocados",
    price: 3.49,
    category: "Fruits",
    image: "https://images.unsplash.com/photo-1519162808019-7de1683fa2ad?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    isOrganic: true,
    isSeasonal: true
  },
  {
    id: 8,
    name: "Raw Wildflower Honey",
    price: 14.99,
    category: "Specialty Items",
    image: "https://images.unsplash.com/photo-1587049633312-d628ae50a8ae?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    isOrganic: true
  },
  {
    id: 9,
    name: "Fresh Green Beans",
    price: 3.99,
    category: "Vegetables",
    image: "https://images.unsplash.com/photo-1567375698348-5d9d5add1ef9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    isOrganic: true,
    isSeasonal: true
  },
  {
    id: 10,
    name: "Organic Whole Milk",
    price: 5.99,
    category: "Dairy",
    image: "https://images.unsplash.com/photo-1563636619-e9143da7973b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    isOrganic: true
  },
  {
    id: 11,
    name: "Artisanal Goat Cheese",
    price: 9.99,
    category: "Dairy",
    image: "https://images.unsplash.com/photo-1486297678162-eb2a19b0a32d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    isNew: true
  },
  {
    id: 12,
    name: "Fresh Blueberries",
    price: 7.99,
    category: "Fruits",
    image: "https://images.unsplash.com/photo-1498557850523-fd3d118b962e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    isOrganic: true,
    isSeasonal: true
  }
];

export const categories = [
  { id: 'all', name: 'All Products' },
  { id: 'vegetables', name: 'Vegetables' },
  { id: 'fruits', name: 'Fruits' },
  { id: 'dairy', name: 'Dairy' },
  { id: 'eggs', name: 'Eggs' },
  { id: 'meat', name: 'Meat' },
  { id: 'specialty', name: 'Specialty Items' }
];

export const filters = {
  diet: [
    { id: 'vegan', name: 'Vegan' },
    { id: 'vegetarian', name: 'Vegetarian' },
    { id: 'gluten-free', name: 'Gluten-Free' },
    { id: 'dairy-free', name: 'Dairy-Free' }
  ],
  characteristics: [
    { id: 'organic', name: 'Organic' },
    { id: 'local', name: 'Locally Grown' },
    { id: 'seasonal', name: 'Seasonal' },
    { id: 'non-gmo', name: 'Non-GMO' }
  ],
  price: [
    { id: 'under-5', name: 'Under $5' },
    { id: '5-10', name: '$5 to $10' },
    { id: '10-20', name: '$10 to $20' },
    { id: 'over-20', name: 'Over $20' }
  ]
};

export const productDetails = {
  1: {
    name: "Organic Baby Spinach",
    price: 4.99,
    category: "Vegetables",
    images: [
      "https://images.unsplash.com/photo-1576045057995-568f588f82fb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1582284540020-8acbe03f4924?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1567375698348-5d9d5add1ef9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
    ],
    isOrganic: true,
    isSeasonal: true,
    description: "Our baby spinach is grown using organic methods, ensuring tender, sweet leaves that are perfect for salads or light cooking. Packed with nutrients like iron, calcium, and vitamins A and C, this versatile green is harvested at the peak of freshness.",
    nutritionInfo: {
      servingSize: "100g",
      calories: 23,
      protein: "2.9g",
      fat: "0.4g",
      carbs: "3.6g",
      fiber: "2.2g",
      vitamins: ["Vitamin A", "Vitamin C", "Vitamin K", "Folate", "Iron"]
    },
    growingMethod: "Grown in our nutrient-rich soil using organic compost and natural pest management. Our spinach fields are watered with pure well water and harvested by hand to ensure quality.",
    pricingOptions: [
      { type: "Single Bunch", price: 4.99, unit: "bunch" },
      { type: "Family Pack", price: 8.99, unit: "1.5 lbs" },
      { type: "Weekly Subscription", price: 18.99, unit: "4 bunches/month" }
    ],
    farmer: {
      name: "Maria Rodriguez",
      image: "https://images.unsplash.com/photo-1607746882042-944635dfe10e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
      location: "North Field"
    },
    relatedProducts: [2, 9, 12]
  }
};
