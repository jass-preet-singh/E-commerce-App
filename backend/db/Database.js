const mongoose = require("mongoose");

const connectDatabase = () => {
  mongoose
    .connect("mongodb+srv://maninder85151:IfY3Nv5dsIwSGvae@cluster0.gabmqyn.mongodb.net/E-CommerceDB", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then((data) => {
      console.log(`mongod connected with server: ${data.connection.host}`);
    });
};

// mongodb+srv://maninder85151:<password>@cluster0.gabmqyn.mongodb.net/E-CommerceDB

module.exports = connectDatabase