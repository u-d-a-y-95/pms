import { Avatar, Menu } from "@mantine/core";
import { IconLogout, IconMessageCircle, IconUser } from "@tabler/icons-react";

export default function UserSetting() {
  return (
    <Menu shadow="md" width={200} position="bottom-end" withArrow offset={1}>
      <Menu.Target>
        <Avatar color="cyan" radius="xl">
          MK
        </Avatar>
      </Menu.Target>

      <Menu.Dropdown>
        <Menu.Item leftSection={<IconUser size={14} />}>Profile</Menu.Item>
        <Menu.Item leftSection={<IconMessageCircle size={14} />}>
          Notifications
        </Menu.Item>

        <Menu.Divider />

        <Menu.Item leftSection={<IconLogout size={14} />} onClick={() => {}}>
          Logout
        </Menu.Item>
      </Menu.Dropdown>
    </Menu>
  );
}
