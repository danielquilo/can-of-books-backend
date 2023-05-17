const mongoose = require("mongoose");
require ("dotenv").config();

mongoose.connect(process.env.DATABASE_URL);

const Book = require("./models/book");

async function seed() {
await Book.create({
name: "Rich Dad Poor Dad ",
description: "A Summary of Rich Dad Poor Dad by Robert Kiyosaki",
status:"In school we learn that mistakes are bad, and we are punished for making them. Yet, if you look at the way humans are designed to learn, we learn by making mistakes. We learn to walk by falling down. If we never fell down, we would never walk."});


await Book.create({ 
name:"White Noise",
description:"Don DeLillo",
status:"Jack Gladney is the creator and chairman of Hitler studies at the College-on-the-Hill. This is the story of his absurd life; a life that is going well enough, until a chemical spill from a train carriage releases an ‘Airborne Toxic Event’ and Jack is forced to confront his biggest fear – his own mortality. The combination of social satire and metaphysical dilemma that Don DeLillo uses to expose our rampant consumerism and media saturation makes White Noise an unmissable work of modern fiction."});

await Book.create({ 
name: "A Little Life by Hanya Yanagihara",
description:" Hanya Yanagihara",
status:"Shortlisted for the Booker Prize and celebrated as ‘the great gay novel’, Hanya Yanagihara’s immensely powerful story of brotherly love and the limits of human endurance has had a visceral impact on many a reader. Willem, Jude, Malcolm and JB meet at college in Massachusetts and form a firm friendship, moving to New York upon graduation. Over the years their friendships deepen and darken as they celebrate successes and face failures, but their greatest challenge is Jude himself – an increasingly broken man scarred by an unspeakable childhood. This is a book that will stay with you long after the last page."});

console.log("Create a couple books");
mongoose.disconnect();
}
seed();