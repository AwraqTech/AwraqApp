export const fakeProductsData = Array.from({ length: 300 }, (_, index) => ({
    id: (index + 1).toString(),
    image: require('@/public/images/dummyImage.webp'),
    title: `منتج رقم ${index + 1}`,
    category: index % 2 === 0 ? 'قهوة' : 'شاي',
    sku: `SKU-${Math.random().toString(36).substring(2, 12).toUpperCase()}`,
    price: (Math.floor(Math.random() * 100) + 10), // Random price between 10 and 110
    inventory: Math.floor(Math.random() * 1000) + 1, // Random inventory between 1 and 1000
  }));
  