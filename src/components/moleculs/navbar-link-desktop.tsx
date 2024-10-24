import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    navigationMenuTriggerStyle,
} from "@/components/atom/navigation-menu"
import { Link } from "react-router-dom"

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

const NavbarLinkDesktop = () => {
    return (
        <NavigationMenu className="hidden md:flex">
            <NavigationMenuList>
                <NavigationMenuItem>
                    <Link to={'/'}>
                        <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                            Home
                        </NavigationMenuLink>
                    </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                    <NavigationMenuTrigger>Category</NavigationMenuTrigger>
                    <NavigationMenuContent>
                        <ul className="grid gap-3 p-4 grid-cols-1 md:grid-cols-2 w-[400px] ">
                            {categories.map((category) => (
                                <li key={category.title} className="p-2 pl-4 rounded-md hover:bg-muted font-semibold">
                                    <Link to={category.href} className="capitalize w-full flex text-sm">{category.title}</Link>
                                </li>
                            ))}
                        </ul>
                    </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                    <Link to={'/'}>
                        <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                            Featured Product
                        </NavigationMenuLink>
                    </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                    <Link to={'/'}>
                        <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                            On Sale
                        </NavigationMenuLink>
                    </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                    <Link to={'/'}>
                        <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                            About
                        </NavigationMenuLink>
                    </Link>
                </NavigationMenuItem>
            </NavigationMenuList>
        </NavigationMenu>
    )
}

export default NavbarLinkDesktop
