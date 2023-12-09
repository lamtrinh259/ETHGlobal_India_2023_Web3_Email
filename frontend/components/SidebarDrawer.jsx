import { useState } from "react";
import Link from "next/link";
import { Sidebar, Menu, MenuItem } from "react-pro-sidebar";
import { BsEnvelope } from "react-icons/bs";
import { BsChatDots } from "react-icons/bs";
export default function SidebarDrawer() {
  const [open, setOpen] = useState(false);
  return (
    <Sidebar
      collapsed={true}
      className="fixed top-0 left-0 z-40 w-20  "
      backgroundColor={"black"}
    >
      <Menu
        menuItemStyles={{
          button: {},
        }}
      >
        <MenuItem component={<Link href="/mail" />}>
          <BsEnvelope color="white" size={25} />
        </MenuItem>
        <MenuItem component={<Link href="/chat" />}>
          {" "}
          <BsChatDots color="white" size={25} />
        </MenuItem>
      </Menu>
    </Sidebar>
  );
}
