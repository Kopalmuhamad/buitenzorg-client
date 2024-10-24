import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/atom/accordion"

import {
    Sheet,
    SheetContent,
    SheetTrigger,
} from "@/components/atom/sheet"
import { Button } from "../atom/button"
import { MenuIcon } from "lucide-react"
import { Link } from "react-router-dom"
import { ModeToggle } from "./mode-toggle"

const categories = [
    {
        title: "shirt",
        href: "/shirt"
    },
    {
        title: "pants",
        href: "/pants"
    },
    {
        title: "jacket",
        href: "/jacket"
    },
    {
        title: "t-shirt",
        href: "/t-shirt"
    },
    {
        title: "accessories",
        href: "/accessories"
    },
]

const NavbarLinkMobile = () => {
    return (
        <Sheet>
            <SheetTrigger asChild className="md:hidden">
                <Button size={'icon'} variant={"outline"}>
                    <MenuIcon />
                </Button>
            </SheetTrigger>
            <SheetContent side={'left'} className="h-full flex flex-col justify-between">
                <Accordion type="single" collapsible>
                    <AccordionItem value="item-1">
                        <Link to={'/'} className="flex flex-1 items-center justify-between py-4 text-sm font-medium transition-all hover:font-semibold">Home</Link>
                    </AccordionItem>
                    <AccordionItem value="item-1">
                        <AccordionTrigger>Category</AccordionTrigger>
                        <AccordionContent>
                            <ul className="space-y-3">
                                {categories.map((category) => (
                                    <li key={category.title}>
                                        <Link to={category.href} className="flex w-full hover:font-semibold transition-all">{category.title}</Link>
                                    </li>
                                ))}
                            </ul>
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-1">
                        <Link to={'/'} className="flex flex-1 items-center justify-between py-4 text-sm font-medium transition-all hover:font-semibold">Featured Products</Link>
                    </AccordionItem>
                    <AccordionItem value="item-1">
                        <Link to={'/'} className="flex flex-1 items-center justify-between py-4 text-sm font-medium transition-all hover:font-semibold">On Sale</Link>
                    </AccordionItem>
                    <AccordionItem value="item-1">
                        <Link to={'/'} className="flex flex-1 items-center justify-between py-4 text-sm font-medium transition-all hover:font-semibold">About</Link>
                    </AccordionItem>
                </Accordion>
                <ModeToggle />
            </SheetContent>
        </Sheet>

    )
}

export default NavbarLinkMobile