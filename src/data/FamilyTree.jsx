

const familyTree = {
  name: "Grandfather",
  role: "Head",
  img: "/gf.jpg",
  spouse: {
    name: "Grandmother",
    img: "/gm.jpg",
  },
  children: [
    {
      name: "Son 1",
      spouse: { name: "Wife 1", img: "/w1.jpg" },
      children: [
        { name: "Child 1", img: "/c1.jpg" },
        { name: "Child 2", img: "/c2.jpg" },
      ],
    },
    {
      name: "Son 2",
      spouse: { name: "Wife 2", img: "/w2.jpg" },
      children: [
        { name: "Child 3", img: "/c3.jpg" },
      ],
    },
    {
      name: "Son 3",
      spouse: { name: "Wife 3", img: "/w3.jpg" },
      children: [
        { name: "Child 4", img: "/c4.jpg" },
      ],
    },
  ],
};

export default familyTree;