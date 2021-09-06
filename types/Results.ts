export interface ResultType {
  title: string;
  content: string;
  image: string;
}

export interface Results {
  [key: string]: ResultType;
}

export default Results;
