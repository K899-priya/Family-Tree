

const familyTree = {
  name: "Grandfather",
  role: "Head",
  img: "/family-tree/GF.jpeg",
  spouse: {
    name: "Grandmother",
    img: "/family-tree/P2133336.JPG",
  },
  children: [
    {
      name: "Kamla Kant Singh", img: "/family-tree/s1.jpeg",
      spouse: { name: "Ramita Devi", img: "/family-tree/w1.png" },
      children: [
        { name: "Kumari Preeti", img: "/family-tree/c1.jpeg" },
        { name: "Kumari Priya", img: "/family-tree/c2.jpeg" },
        { name: "Kumari Khushboo", img: "/c3.png" },
      ],
    },
    {
      name: "Bimal Knat Singh", img: "/s2.png",
      spouse: { name: "Anita Devi", img: "/w2.png" },
      children: [
        { name: "Kumar Gaurav", img: "/c4.jpeg" },
        { name: "Avinav Kumar", img: "/c5.png" },
      ],
    },
    {
      name: "Mithilesh Kant Singh", img: "/s3.png",
      spouse: { name: "Sarita Devi", img: "/w3.jpeg" },
      children: [
        { name: "Amit Kumar", img: "/P2122568.JPG" },
        { name: "Shiwani Kumari", img: "/c7.jpeg" },
      ],
    },
  ],
};

export default familyTree;