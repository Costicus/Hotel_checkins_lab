use hotels;
db.dropDataBase();

db.bookings.insertMany([
    {
        name: "Costa", 
        email: "costa.yoga108@gmail.com",
        checked: 'true'
    }, 
    {
        name: "Colette", 
        email: "colette@gmail.com",
        checked: 'false'
    },
    {
        name: "Sova", 
        email: "pretty.meow.cat@gmail.com",
        checked: 'true'
    }
]);