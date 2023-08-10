export default interface Watch {
  _id: string;
  model: string;
  description: string;
  imagePath: string;
  category: string;
  material: string;
  refNumber: number;
  releaseDate: number;
  price: number;
  isUsed: boolean;
  hasPapers: boolean;
  hasBox: boolean;
}
