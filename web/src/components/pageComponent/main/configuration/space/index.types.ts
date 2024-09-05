export interface StoreListProps {
  isLoading: boolean;
  spaces: ISpace[];
  deleteStore: (id: string) => void;
  viewStoreById: (id: string) => void;
}

export interface ISpace {
  id?: string;
  name: string;
}
type StateType = "view" | "add" | "edit";
export interface IBaseStoreProps {
  state: StateType;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  form?: any;
}
