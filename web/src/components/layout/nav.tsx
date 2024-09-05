import { NavLink } from "@mantine/core";
import {
  IconLayoutDashboard,
  IconBuildingStore,
  IconSettings,
  IconFileDescription,
  IconCategory,
} from "@tabler/icons-react";
import { NavLink as Link, useLocation } from "react-router-dom";
import { LinkType } from "./index.type";

const navs: LinkType[] = [
  {
    label: "Dashboard",
    url: "/",
    icon: IconLayoutDashboard,
    children: [],
  },
  {
    label: "Parking",
    url: "/parking",
    icon: IconFileDescription,
    children: [],
  },

  {
    label: "Configuration",
    url: "n/a",
    icon: IconSettings,
    children: [
      {
        label: "Spaces",
        url: "/configuration/spaces",
        icon: IconBuildingStore,
      },

      {
        label: "Types",
        url: "/configuration/vehicle-types",
        icon: IconCategory,
      },
    ],
  },
];

const Li = ({ items }: { items: LinkType[] }) => {
  const location = useLocation();
  return (
    <>
      {items.map((item: LinkType, index: number) => (
        <NavLink
          label={item.label}
          active={location.pathname === item.url}
          py={12}
          leftSection={<item.icon size="1rem" />}
          component={Link}
          key={index}
          to={item.url}
        >
          {item?.children?.length && <Li items={item.children} />}
        </NavLink>
      ))}
    </>
  );
};

export default function Links() {
  return <Li items={navs}></Li>;
}
