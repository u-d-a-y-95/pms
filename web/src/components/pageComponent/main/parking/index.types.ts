export interface ProductListProps {
  isLoading: boolean;
  products: IProduct[];
  deleteProduct: (id: string) => void;
  viewProductById: (id: string) => void;
  navigateToEntryProduct: (id: string) => void;
}

export interface IProduct {
  id?: string;
  availableQty: number;
  description: string;
  itemCategoryId: string;
  itemName: string;
}
type StateType = "view" | "add" | "edit";
export interface IBaseStoreProps {
  state: StateType;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  form?: any;
}
