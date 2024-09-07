import { AppShell } from "@mantine/core";
import Topbar from "./header";
import Links from "./nav";

import { Main } from "./main";

const Layout = () => {
  return (
    <AppShell
      header={{ height: 60 }}
      navbar={{ width: 300, breakpoint: "sm" }}
      padding="md"
    >
      <AppShell.Header h={60}>
        <Topbar />
      </AppShell.Header>
      <AppShell.Navbar>
        <AppShell.Section grow mt={5}>
          <Links />
        </AppShell.Section>
      </AppShell.Navbar>
      <AppShell.Main className="flex flex-col">
        <Main />
      </AppShell.Main>
    </AppShell>
  );
};

export default Layout;
