import { ProductItem } from "./ProductItem";
import { Client } from "./client";

export class Cart {
    public name: string;
    public items: Map<number, ProductItem> = new Map();
    public client: Client;

    constructor(name: string) {
      this.name = name;
    }
}
