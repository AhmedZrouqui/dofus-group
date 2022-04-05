import React from "react";
import Header from "../Header";

interface IProps{ 
    //props types go here
}

const Layout: React.FC<IProps> = ({
    children
}) => {

    //Layout
    return(
        <div className="container mx-auto">
            <Header />
            {children}
        </div>
    )
}

export default Layout