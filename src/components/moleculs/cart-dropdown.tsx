import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuTrigger,
} from "@/components/atom/dropdown-menu"
import { Button } from "../atom/button"
import { ShoppingBagIcon } from "lucide-react"
import { ScrollArea } from "@radix-ui/react-scroll-area"

const CartDropdown = () => {
    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant={"outline"} size={"icon"}>
                    <ShoppingBagIcon />
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
                <ScrollArea className="h-[200px] w-[350px] rounded-md border p-4">
                </ScrollArea>
            </DropdownMenuContent>
        </DropdownMenu>

    )
}

export default CartDropdown