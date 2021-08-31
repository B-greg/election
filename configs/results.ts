export interface ResultType {
  title: string;
  content: string;
  image: string;
}

export interface Results {
  [key: string]: ResultType;
}

const results: Results = {
  npa: {
    content: "",
    image: "",
    title: "NPA",
  },
  pcf: {
    content: "",
    image: "",
    title: "PCF",
  },
  lo: {
    content: "",
    image: "",
    title: "LO",
  },
  gulag: {
    content: "",
    image: "",
    title: "gulag",
  },
};

export default results;
