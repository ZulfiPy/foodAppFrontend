import { Sheet, SheetTrigger, SheetContent, SheetTitle, SheetDescription } from "./ui/sheet";
import { Separator } from "./ui/separator";
import { Button } from "./ui/button";
import { CircleUserRound, Menu } from "lucide-react";
import { useAuth0 } from "@auth0/auth0-react";
import MobileNavLinks from "./MobileNavLinks";

const MobileNav = () => {
    const { isAuthenticated, loginWithRedirect, user } = useAuth0();

    return (
        <Sheet>
            <SheetTrigger>
                <Menu className="text-orange-500" />
            </SheetTrigger>
            <SheetContent className="space-y-3">
                <SheetTitle>
                    {isAuthenticated ?
                        (
                            <span>
                                <CircleUserRound className="text-orange-500" />
                                {user?.email}
                            </span>
                        ) : (
                            <span>Welcome to GymEats.com!</span>)}
                </SheetTitle>
                <Separator />
                <SheetDescription className="flex flex-col gap-4">
                    {isAuthenticated ? (
                        <MobileNavLinks />
                    ) : (
                        <Button
                            className="flex-1 font-bold bg-orange-500"
                            onClick={ async () => await loginWithRedirect()}
                        >
                            Log in
                        </Button>
                    )}
                </SheetDescription>
            </SheetContent>
        </Sheet >
    )
}

export default MobileNav;