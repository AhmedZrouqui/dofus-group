import React from "react";
import Link from "next/link"

interface IProps{
    //props types go here
    links?: ILink[];
}

interface ILink{
    label: string,
    link: string
}

const Header: React.FC<IProps> = (props) => {

    const {links} = props
    
    return(
        <div className="container mx-auto py-6 flex justify-between">
            <div className="logo">
                <h4 className="text-xl font-medium">
                    LOGO
                </h4>
            </div>
            <div className="flex align-center">
                <ul className="flex gap-4">
                {
                    links &&
                    links.map((link: ILink, index: number) => (
                        <li key={index}>
                            <Link href={link.link}>
                                <a>
                                    {link.label}
                                </a>
                            </Link>
                        </li>
                    ))
                }
                </ul>
            </div>
        </div>
    )
}

Header.defaultProps = {
    links:[
        {
            label: "Home",
            link: "/"
        },
        {
            label: "About",
            link: "/"
        },
        {
            label: "Account",
            link: "/"
        }
    ]
}

export default Header