import { Menu } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet";
import { Separator } from "@radix-ui/react-separator";
import { Button } from "./ui/button";

const MobileNav = () => {
  return (
    <Sheet>
      <SheetTrigger>
        <Menu className="text-orange-500" />
      </SheetTrigger>
      <SheetContent>
        <SheetTitle>
          <span>WELCOME TO MernEats.com !!!</span>
        </SheetTitle>
        <Separator />
        <SheetDescription className="flex">
          <Button className="flex-1 font-bold bg-orange-500">LOG IN</Button>
        </SheetDescription>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
