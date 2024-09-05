import { EntryProduct } from "../../../components/pageComponent/main/products/entryProduct";
import { ViewProduct } from "../../../components/pageComponent/main/products/viewProduct";
import Requisition from "../../../components/pageComponent/main/requisition";
import { AddRequisition } from "../../../components/pageComponent/main/requisition/addRequisition";

export default function RequisitionPage() {
  return <Requisition />;
}

RequisitionPage.Add = AddRequisition;
RequisitionPage.View = ViewProduct;
RequisitionPage.Entry = EntryProduct;
