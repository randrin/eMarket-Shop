export interface Product {
  id: number;
  code: string;
  name: string;
  description: string;
  unitPriceNew: number;
  unitPriceSold: number;
  sale: boolean;
  reductionPercent: number;
  imagePath: string;
  supplierId: number;
  activation: boolean;
  totalStock: number;
  totalPurcharsed: number;
  numberOfViews: number;
  _links: {
    self: {
      href: string;
    },
    product: {
      href: string;
    },
    category: {
      href: string;
    }
  }
}
