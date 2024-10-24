import Navbar from "./navbar"

interface IProps {
    children: React.ReactNode
}

const MainLayout = ({ children }: IProps) => {
    return (
        <div>
            <Navbar />
            {children}
        </div>
    )
}

export default MainLayout