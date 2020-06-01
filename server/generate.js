var faker = require('faker');

var database = { venues: [] };

for (var i = 1; i <= 10; i++) {
    database.venues.push({
        id: i,
        businessOwner: faker.name.findName(),
        name: faker.company.companyName(),
        description: faker.lorem.sentences(),
        price: faker.commerce.price(),
        imageUrl: "https://source.unsplash.com/1600x900/?venue"
    });
}

console.log(JSON.stringify(database));