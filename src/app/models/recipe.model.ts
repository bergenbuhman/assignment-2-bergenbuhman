export interface Recipe {
  id: number;
  name: string;
  ingredients: string[];
  vegetarian: boolean;
  steps: string[];
  createdAt: Date;
}
