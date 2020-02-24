export interface Product {
  id: number;
  code: string;
  name: string;
  description: string;
  unitPriceNew: number;
  unitPriceSold: number;
  color: string,
  size: string,
  sale: boolean;
  reductionPercent: number;
  imagePath: string;
  supplierId: number;
  activation: boolean;
  totalStock: number;
  totalPurcharsed: number;
  numberOfViews: number;
  quantity: number;
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
