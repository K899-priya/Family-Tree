

const familyTree = {
  name: "Grandfather",
  role: "Head",
  img: "/GF.jpeg",
  spouse: {
    name: "Grandmother",
    img: "/P2133336.JPG",
  },
  children: [
    {
      name: "Kamla Kant Singh", img: "/s1.jpeg",
      spouse: { name: "Ramita Devi", img: "/w1.png" },
      children: [
        { name: "Kumari Preeti", img: "/c1.jpeg" },
        { name: "Kumari Priya", img: "/c2.jpeg" },
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