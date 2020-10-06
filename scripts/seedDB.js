const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Books collection and inserts the books below

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/reactgooglebooks"
);

const bookSeed = [
  {
    title: "My First Coding Book",
    authors: [
      "Kiki Prottsman"
    ],
    description: "Teach kids as young as 5 years old the basic programming skills necessary to code, including sequencing and loops, without a computer. It's never too early to learn computer coding. My First Coding Book is a playful introduction to offline coding and programming that will give young children a head start. Filled with puzzles, mazes, and games to teach the basic concepts of sequences, algorithms, and debugging, this book will help children develop critical thinking, logic, and other skills to cement lifelong computer literacy, which is extremely valuable and sought-after in today's world. With its unique approach and colorful and creative imagery, My First Coding Book makes learning and fun one and the same and will have children playing their way to programming proficiency. Supporting STEM education initiatives, computer coding teaches kids how to think creatively, work collaboratively, and reason systematically, and is quickly becoming a necessary and sought-after skill. DK's computer coding books are full of fun exercises with step-by-step guidance, making them the perfect introductory tools for building vital skills in computer programming.",
    thumbnail: "http://books.google.com/books/content?id=qbygDgAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
    href: "https://play.google.com/store/books/details?id=qbygDgAAQBAJ&source=gbs_api"
  },
  {
    title: "Information Coding Techniques",
    authors: [
      "J.S.Chitode"
    ],
    description: "Information Entropy FundamentalsUncertainty, Information and entropy - Source coding theorem - Huffman coding - Shannon fano coding - Discrete memory less channels - Channel capacity - Channel coding theorem - Channel capacity theorem.Data and Voice CodingDifferential pulse code modulation - Adaptive differential pulse code modulation - Adaptive subband coding - Delta modulation - Adaptive delta modulation - Coding of speech signal at low bit rates (Vocoders, LPC).Error Control CodingLinear block codes - Syndrome decoding - Minimum distance consideration - Cyclic codes - Generator polynomial - Parity check polynomial - Encoder for cyclic codes - Calculation of syndrome - Convolutional codes.Compression TechniquesPrinciples - Text compression - Static Huffman coding - Dynamic Huffman coding - Arithmetic coding - Image compression - Graphics interchange format - Tagged image file format - Digitized documents - Introduction to JPEG standards.Audio and Video CodingLinear predictive coding - Code excited LPC - Perceptual coding, MPEG audio coders - Dolby audio coders - Video compression - Principles - Introduction to H.261 & MPEG Video standards.",
    thumbnail: "http://books.google.com/books/content?id=3GGVSEHsNSgC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
    href: "http://books.google.com/books?id=3GGVSEHsNSgC&dq=coding&hl=&source=gbs_api"
  },
  {
    title: "Computer Coding 4 Kids",
    authors: [
      "Hinkler Books",
      "Virginia King"
    ],
    description: "Learning to code is worthwhile AND fun with this comprehensive guide! Computer Coding 4 Kids is the perfect way to give your child the support they need for this increasingly vital skill! With easy-to-follow explanations and games and challenges to reinforce learned skills, all designed by teachers and experts in the field, this book is an absolute must-have for the tech-savvy parent or guardian! Give your child the ultimate head-start in coding with Computer Coding 4 Kids!",
    thumbnail: "http://books.google.com/books/content?id=_Te7swEACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api",
    href: "https://books.google.com/books?id=_Te7swEACAAJ&dq=coding&hl=&source=gbs_api"
  },
  {
    title: "Source Coding Theory",
    authors: [
      "Robert M. Gray"
    ],
    description: "Source coding theory has as its goal the characterization of the optimal performance achievable in idealized communication systems which must code an information source for transmission over a digital communication or storage channel for transmission to a user. The user must decode the information into a form that is a good approximation to the original. A code is optimal within some class if it achieves the best possible fidelity given whatever constraints are imposed on the code by the available channel. In theory, the primary constraint imposed on a code by the channel is its rate or resolution, the number of bits per second or per input symbol that it can transmit from sender to receiver. In the real world, complexity may be as important as rate. The origins and the basic form of much of the theory date from Shan non's classical development of noiseless source coding and source coding subject to a fidelity criterion (also called rate-distortion theory) [73] [74]. Shannon combined a probabilistic notion of information with limit theo rems from ergodic theory and a random coding technique to describe the optimal performance of systems with a constrained rate but with uncon strained complexity and delay. An alternative approach called asymptotic or high rate quantization theory based on different techniques and approx imations was introduced by Bennett at approximately the same time [4]. This approach constrained the delay but allowed the rate to grow large.",
    thumbnail: "http://books.google.com/books/content?id=ey7UBwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
    href: "https://play.google.com/store/books/details?id=ey7UBwAAQBAJ&source=gbs_api"
  }
];

// db.Book.remove({})
db.Book.deleteMany({})
  .then(() => db.Book.collection.insertMany(bookSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
