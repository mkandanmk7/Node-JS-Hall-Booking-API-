require("dotenv").config();
const express = require("express");
const app = express();

app.use(express.json());

//room
const rooms = [
  {
    name: "Elite",
    seats: 100,
    amenities: "wifi,projection screen,AC",
    price: 1500,
    roomId: "abc",
    bookingDetails: [
      {
        customerName: "muthu",
        date: new Date("2021-11-14"),
        start: "07:00",
        end: "10:00",
        status: "confirmed",
      },
    ],
  },
  {
    name: "Premium",
    seats: 150,
    amenities: "wifi,projection screen,AC",
    price: 2500,
    roomId: "def",
    bookingDetails: [
      {
        customerName: "mayu",
        date: new Date("2021-11-15"),
        start: "15:00",
        end: "17:00",
        status: "Payment Pending",
      },
    ],
  },
];

app.get("/", (req, res) => {
  console.log("server is running successfully");
});

const port = process.env.PORT || 3001;

app.listen(port, () => {
  console.log(`server started at ${port}`);
});
