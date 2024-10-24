import { cn } from "@/lib/utils"
import { Link } from "react-router-dom"

interface IProps {
    to: string
    children: React.ReactNode
    className?: string
}

const Logo = ({ children, to, className }: IProps) => {
    return (
        <Link to={to} className={cn("text-xl font-bold tracking-wider md:text-xl", className)}>{children}</Link>
    )
}

export default Logo