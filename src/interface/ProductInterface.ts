export interface ProductInterface {
  id: number;
  name: string;
  imageUrl: string[];
  offer: string;
  rating: string;
  mrp: string;
  price: string;
  discPercent: string;
  description: string;
  category: string;
  isOrderPlaced?: boolean;
  quantity?: number;
}
