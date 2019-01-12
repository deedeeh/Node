const faker = require('faker/locale/en_GB');

for(let i = 0; i < 10; i++) {
  const randomProductName = faker.commerce.productName();
  const randomPrice = parseFloat(faker.commerce.price());
  console.log(`Product: ${randomProductName} - £${randomPrice}`);
}

