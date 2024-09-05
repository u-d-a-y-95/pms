import { Flex, Title } from "@mantine/core";
import UserSetting from "./userSetting";

export default function Topbar() {
  return (
    <Flex justify="space-between" align="center" p="md" h={"100%"}>
      <div>
        <Title order={3}>PMS</Title>
      </div>
      <Flex gap="lg" align="center">
        <UserSetting />
      </Flex>
    </Flex>
  );
}
