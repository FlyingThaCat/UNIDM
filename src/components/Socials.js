import { Button } from "@/components/ui/button"
import { GitHubLogoIcon, InstagramLogoIcon, LinkedInLogoIcon } from "@radix-ui/react-icons"
import Link from "next/link"

export const Socials = () => {
    return(
        <div className="flex">
        <Button variant="outline" className="mr-2 rounded-xl" size="icon" asChild>
            <Link href="https://www.instagram.com/johntu_ts/" target="_blank">
                <InstagramLogoIcon className="h-4 w-4" />
            </Link>
        </Button>
        <Button variant="outline" className="mr-2 rounded-xl" size="icon" asChild>
            <Link href="https://www.linkedin.com/in/johntu874" target="_blank">
                <LinkedInLogoIcon className="h-4 w-4" />
            </Link>
        </Button>
        <Button variant="outline" size="icon" className="rounded-xl" asChild>
            <Link href="https://github.com/FlyingThaCat" target="_blank">
                <GitHubLogoIcon className="h-4 w-4" />
            </Link>
        </Button>
        </div>
    )
}