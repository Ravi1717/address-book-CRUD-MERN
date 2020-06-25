const mongoose = require("mongoose");

mongoose.connect(
  "mongodb+srv://ravi123:ravi123@cluster0-ap8ye.mongodb.net/<dbname>?retryWrites=true&w=majority",
  { useNewUrlParser: true, useUnifiedTopology: true },
  (err) => {
    if (!err) console.log("Mongodb connection succeeded.");
    else
      console.log(
        "Error while connecting MongoDB : " + JSON.stringify(err, undefined, 2)
      );
  }
);
