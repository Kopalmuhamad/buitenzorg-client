import CartDropdown from "../moleculs/cart-dropdown"
import { ModeToggle } from "../moleculs/mode-toggle"
import ProfileDropdown from "../moleculs/profile-dropdown"

const NavbarDropdownContainer = () => {
    return (
        <div className="flex items-center justify-center gap-x-2 md:gap-x-6">
            <ModeToggle className="hidden md:flex" />
            <CartDropdown />
            <ProfileDropdown />
        </div>
    )
}

export default NavbarDropdownContainer