// To make it client component :for ui manupualation , hooks etc
"use client";
import { HoveredLink, Menu, MenuItem } from "@/components/ui/navbar-menu";
import { cn } from "@/utils/cn";
import { useState } from "react";

function NavbarSection() {
  return (
    <div className="">
      <div className="">
        <Navbar className="top-5" />
      </div>
    </div>
  );
}

function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
  return (
    <div
      className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50", className)}
    >
      <Menu setActive={setActive}>
        <MenuItem setActive={setActive} active={active} item="Home">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/">Home</HoveredLink>
          </div>
        </MenuItem>

        <MenuItem setActive={setActive} active={active} item="About"></MenuItem>
        <MenuItem
          setActive={setActive}
          active={active}
          item="Projects"
        ></MenuItem>
        <MenuItem
          setActive={setActive}
          active={active}
          item="Skills"
        ></MenuItem>
        <MenuItem
          setActive={setActive}
          active={active}
          item="Contact"
        ></MenuItem>
      </Menu>
    </div>
  );
}

export default NavbarSection;
