export interface Product {
  id: number;
  code: string;
  name: string;
  brand: string;
  description: string;
  unitPrice: number;
  categoryId: number;
  imageURl: string;
  supplierId: number;
  active: boolean;
  purchases: number;
  views: number;
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
