const base = import.meta.env.BASE_URL;

const familyTree = {
  name: "Grandfather",
  role: "Head",
  img: `${base}GF.jpeg`,

  spouse: {
    name: "Grandmother",
    img: `${base}P2133336.JPG`,
  },

  children: [
    {
      name: "Kamla Kant Singh",
      img: `${base}s1.jpeg`,
      spouse: {
        name: "Ramita Devi",
        img: `${base}w1.png`,
      },
      children: [
        { name: "Kumari Preeti", img: `${base}c1.jpeg` },
        { name: "Kumari Priya", img: `${base}c2.jpeg` },
        { name: "Kumari Khushboo", img: `${base}c3.png` },
      ],
    },

    {
      name: "Bimal Kant Singh",
      img: `${base}s2.png`,
      spouse: {
        name: "Anita Devi",
        img: `${base}w2.png`,
      },
      children: [
        { name: "Kumar Gaurav", img: `${base}c4.jpeg` },
        { name: "Avinav Kumar", img: `${base}c5.png` },
      ],
    },

    {
      name: "Mithilesh Kant Singh",
      img: `${base}s3.png`,
      spouse: {
        name: "Sarita Devi",
        img: `${base}w3.jpeg`,
      },
      children: [
        { name: "Amit Kumar", img: `${base}P2122568.JPG` },
        { name: "Shiwani Kumari", img: `${base}c7.jpeg` },
      ],
    },
  ],
};

export default familyTree;