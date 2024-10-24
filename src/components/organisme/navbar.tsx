import Logo from "../atom/logo"
import NavbarLinkDesktop from "../moleculs/navbar-link-desktop"
import NavbarLinkMobile from "../moleculs/navbar-link-mobile"
import NavbarDropdownContainer from "./navbar-dropdown-container"



const Navbar = () => {
    return (
        <nav className="w-full py-4 sticky top-0 left-0 right-0 bg-background z-50">
            <div className="container mx-auto flex items-center justify-between">
                <div className="flex items-center justify-start gap-x-4">
                    <NavbarLinkMobile />
                    <Logo to={'/'}>
                        <h1>Buitenzorg</h1>
                    </Logo>
                    <NavbarLinkDesktop />
                </div>
                <NavbarDropdownContainer />
            </div>
        </nav>
    )
}

export default Navbar