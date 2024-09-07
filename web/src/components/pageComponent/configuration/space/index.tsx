import { SpaceList } from "./spaceList";
import { ISpace } from "./index.types";
import {
  useDeleteSpace,
  useGetSpaces,
} from "../../../../hooks/apis/configuration/space";
import { PageHeader } from "../../../base/pageHeader";

export const Spaces = () => {
  const { data: res, isFetching, isLoading } = useGetSpaces();
  const { mutate: deleteMutate } = useDeleteSpace();

  const deleteSpace = (id: string) => {
    deleteMutate(id);
  };

  const spaces = res?.data || [];

  return (
    <>
      <PageHeader title="Spaces" addBtnPath="./add" />
      <SpaceList
        loading={isLoading || isFetching}
        spaces={spaces as ISpace[]}
        deleteStore={deleteSpace}
      />
    </>
  );
};
