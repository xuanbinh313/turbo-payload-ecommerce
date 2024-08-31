import { cn } from "@/app/_lib/utils"
import { type Header } from "@/payload-types";
import { CMSLink } from "../Link";

interface MainNavProps {
    className?: string;
    header: Header | null
}

export function MainNav({
    className,
    header,
    ...props
}: MainNavProps) {
    const navItems = header?.navItems || null
    return (
        <nav
            className={cn("flex items-center space-x-4 lg:space-x-6", className)}
            {...props}
        >
            {navItems?.map(({ link }) => (
                <CMSLink
                    className="text-sm font-medium transition-colors hover:text-primary"
                    {...link}
                />))}
        </nav>
    )
}