

const familyTree = {
  name: "Grandfather",
  role: "Head",
  img: "/Family-Tree/GF.jpeg",
  spouse: {
    name: "Grandmother",
    img: "/Family-Tree/P2133336.JPG",
  },
  children: [
    {
      name: "Kamla Kant Singh", img: "/Family-Tree/s1.jpeg",
      spouse: { name: "Ramita Devi", img: "/Family-Tree/w1.png" },
      children: [
        { name: "Kumari Preeti", img: "/Family-Tree/c1.jpeg" },
        { name: "Kumari Priya", img: "/Family-Tree/c2.jpeg" },
        { name: "Kumari Khushboo", img: "/Family-Tree/c3.png" },
      ],
    },
    {
      name: "Bimal Knat Singh", img: "/Family-Tree/s2.png",
      spouse: { name: "Anita Devi", img: "/Family-Tree/w2.png" },
      children: [
        { name: "Kumar Gaurav", img: "/Family-Tree/c4.jpeg" },
        { name: "Avinav Kumar", img: "/Family-Tree/c5.png" },
      ],
    },
    {
      name: "Mithilesh Kant Singh", img: "/Family-Tree/s3.png",
      spouse: { name: "Sarita Devi", img: "/Family-Tree/w3.jpeg" },
      children: [
        { name: "Amit Kumar", img: "/Family-Tree/P2122568.JPG" },
        { name: "Shiwani Kumari", img: "/Family-Tree/c7.jpeg" },
      ],
    },
  ],
};

export default familyTree;