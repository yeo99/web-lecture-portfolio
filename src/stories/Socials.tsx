import React from "react";
import Button from "./Button";

import data from "../../data/portfolio.json";

interface SocialProps{
    className: string;
}

const Socials = ({ className, }:SocialProps) => {
    return (
        <div className={`${className} flex flex-wrap mob:flex-nowrap`}>
            {data.socials.map((social, index) => (
                <Button key={index + 'socials'} onClick={() => window.open(social.link)}>
                    {social.title}
                </Button>
            ))}
        </div>
    );
};

export default Socials;