const mongoose=require("mongoose");
const Chat = require("./models/chat");

main().then(()=>{
    console.log("connection successful")
})
.catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/whatsapp');
};

 
let allchats=[
  {
    from: "rahul",
    to: "neha",
    msg: "Did you finish the assignment?",
    created_at: new Date(),
  },
  {
    from: "priya",
    to: "arjun",
    msg: "Call me when you reach home.",
    created_at: new Date(),
  },
  {
    from: "amit",
    to: "rohan",
    msg: "Bro, are we still going to the gym today?",
    created_at: new Date(),
  },
  {
    from: "sneha",
    to: "riya",
    msg: "Send me the recipe you mentioned!",
    created_at: new Date(),
  },
  {
    from: "kiran",
    to: "aditya",
    msg: "Class got cancelled, just letting you know.",
    created_at: new Date(),
  },
  {
    from: "meera",
    to: "sara",
    msg: "Don’t forget the meeting tomorrow morning.",
    created_at: new Date(),
  },
  {
    from: "dev",
    to: "ankit",
    msg: "Check your email, I sent the documents.",
    created_at: new Date(),
  },
  {
    from: "tara",
    to: "neha",
    msg: "Happy birthday! 🎉",
    created_at: new Date(),
  }
];

Chat.insertMany(allchats);
