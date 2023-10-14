import React from "react";

interface SkillCardProps {
    name: string;
    description: string;
    period: string;
}

const SkillCard = ({ name, description, period }: SkillCardProps) => {
    return (
        <div className="w-full p-2 mob:p-4 rounded-lg transition-all ease-out duration-300 hover:bg-slate-50 hover:scale-105 cursor-pointer">
            <div className="flex justify-between items-end">
                <h1 className="text-3xl">{name ? name : "Heading"}</h1>
                <h5 className="text-1xl">{period ? period : "Heading"}</h5>
            </div>
            <p className="mt-5 opacity-40 text-xl">
                {description
                    ? description
                    : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. "}
            </p>
        </div>
    );
};

export default SkillCard;