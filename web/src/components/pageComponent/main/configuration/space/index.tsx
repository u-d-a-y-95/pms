import {
  useDeleteStore,
  useGetSpaces,
} from "../../../../../hooks/apis/main/configuration/space";
import { Button, Title } from "@mantine/core";
import { IconFilter, IconPlus } from "@tabler/icons-react";
import { useNavigate } from "react-router-dom";
import { SpaceList } from "./spaceList";
import { ISpace } from "./index.types";

export const Space = () => {
  const navigate = useNavigate();

  const { data: res, isLoading, isFetching } = useGetSpaces();
  const { mutate: deleteMutate } = useDeleteStore();

  const deleteStore = (id: string) => {
    deleteMutate(id);
  };

  const viewStoreById = (id: string) => {
    navigate(`./view/${id}`);
  };

  const spaces = res?.data || [];

  return (
    <>
      <div className="flex justify-between">
        <Title order={3}>Spaces</Title>
      </div>
      <SpaceList
        spaces={spaces as ISpace[]}
        isLoading={isLoading || isFetching}
        deleteStore={deleteStore}
        viewStoreById={viewStoreById}
      />
    </>
  );
};
