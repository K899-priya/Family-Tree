

const familyTree = {
  name: "Grandfather",
  role: "Head",
  img: "/gf.JPG",
  spouse: {
    name: "Grandmother",
    img: "/P2133336.JPG",
  },
  children: [
    {
      name: "Kamla Kant Singh", img: "/s1.jpeg",
      spouse: { name: "Ramita Devi", img: "/w1.jpeg" },
      children: [
        { name: "Kumari Preeti", img: "/c1.jpeg" },
        { name: "Kumari Priya", img: "/c2.jpeg" },
        { name: "Kumari Khushboo", img: "/c3.JPG" },
      ],
    },
    {
      name: "Bimal Knat Singh", img: "/s2.jpeg",
      spouse: { name: "Anita Devi", img: "/w2.JPG" },
      children: [
        { name: "Kumar Gaurav", img: "/c4.jpeg" },
        { name: "Avinav Kumar", img: "/c2.JPG" },
      ],
    },
    {
      name: "Mithilesh Kant Singh", img: "/s3.jpeg",
      spouse: { name: "Sarita Devi", img: "/w3.JPG" },
      children: [
        { name: "Amit Kumar", img: "/P2122568.JPG" },
        { name: "Shiwani Kumari", img: "/c7.JPG" },
      ],
    },
  ],
};

export default familyTree;