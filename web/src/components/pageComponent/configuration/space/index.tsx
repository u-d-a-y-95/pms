import { useNavigate } from "react-router-dom";
import { SpaceList } from "./spaceList";
import { ISpace } from "./index.types";
import {
  useDeleteSpace,
  useGetSpaces,
} from "../../../../hooks/apis/configuration/space";
import { PageHeader } from "../../../base/pageHeader";

export const Spaces = () => {
  const navigate = useNavigate();

  const { data: res, isLoading, isFetching } = useGetSpaces();
  const { mutate: deleteMutate } = useDeleteSpace();

  const deleteSpace = (id: string) => {
    deleteMutate(id);
  };

  const viewStoreById = (id: string) => {
    navigate(`./view/${id}`);
  };

  const spaces = res?.data || [];

  return (
    <>
      <PageHeader title="Spaces" addBtnPath="" />
      <SpaceList
        spaces={spaces as ISpace[]}
        isLoading={isLoading || isFetching}
        deleteStore={deleteSpace}
        viewStoreById={viewStoreById}
      />
    </>
  );
};
