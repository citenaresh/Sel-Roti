const data = {
    users: [
      {
        name: 'Naresh',
        email: 'admin@example.com',
        password: bcrypt.hashSync('1234', 8),
        isAdmin: true,
      },
      {
        name: 'Neeva',
        email: 'user@example.com',
        password: bcrypt.hashSync('1234', 8),
        isAdmin: false,
      },
    ],
    products: [
      {
        name: 'Sel Roti',
        category: 'Main',
        image: '/images/selroti.jpg',
        price: 2.99,
        countInStock: 75,
        brand: 'Pokhareli',
        rating: 4.5,
        numReviews: 30,
        description: 'Best Ever seloti',
      },
      {
        name: 'Momo',
        category: 'Main',
        image: '/images/momo.jpg',
        price: 1.25,
        countInStock: 120,
        brand: 'Kathmandu',
        rating: 5.0,
        numReviews: 20,
        description: 'Delicious Momo',
      },
      {
        name: 'Samosa',
        category: 'Snack',
        image: '/images/samosa.jpg',
        price: 2.49,
        countInStock: 50,
        brand: 'Trident',
        rating: 4,
        numReviews: 20,
        description: 'The Best Snack',
      },
      {
        name: 'Devil Sauce',
        category: 'Condiment',
        image: '/images/sauce.jpg',
        price: 0.49,
        countInStock: 110,
        brand: 'The Hulk',
        rating: 5,
        numReviews: 15,
        description: 'Spiciest and tasty sauce',
      },
     
    ],
  };
  export default data;
  