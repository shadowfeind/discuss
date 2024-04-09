import { signIn, signOut } from "@/actions";
import { auth } from "@/auth";
import {
  Avatar,
  Button,
  Input,
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@nextui-org/react";
import Link from "next/link";

const header = async () => {
  const session = await auth();
  let authContent: React.ReactNode;

  if (session?.user) {
    authContent = (
      <Popover placement="bottom">
        <PopoverTrigger>
          <Avatar src={session.user.image ?? ""} />
        </PopoverTrigger>
        <PopoverContent>
          <div className="p-4">
            <form action={signOut}>
              <Button type="submit">Sign Out</Button>
            </form>
          </div>
        </PopoverContent>
      </Popover>
    );
  } else {
    authContent = (
      <>
        <NavbarItem>
          <form action={signIn}>
            <Button type="submit" variant="bordered" color="secondary">
              Sign In
            </Button>
          </form>
        </NavbarItem>
        <NavbarItem>
          <form action={signIn}>
            <Button type="submit" variant="flat" color="primary">
              Sign Up
            </Button>
          </form>
        </NavbarItem>
      </>
    );
  }

  return (
    <Navbar className="shadow mb-6">
      <NavbarBrand>
        <Link href={"/"} className="font-bold">
          Discuss
        </Link>
      </NavbarBrand>
      <NavbarContent>
        <NavbarItem>
          <Input />
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">{authContent}</NavbarContent>
    </Navbar>
  );
};

export default header;
