import React from "react";

interface WorkCardProps {

    img: string;
    name: string;
    description: string;
    onClick: () => void;
    workArr: Array<String | undefined>;
    stack: string;
}

const WorkCard = ({ img = '', name = '', description = '', onClick = () => null, workArr=[], stack='' }: WorkCardProps) => {
    return (
        <div
            className="overflow-hidden cursor-pointer rounded-lg p-2 laptop:p-4 first:ml-0"
            onClick={() => null}
        >
            <div
                className="overflow-hidden rounded-lg h-48 mob:h-auto group "
                style={{ height: "600px" }}
            >
                <div className="relative preserve-3d group-hover:my-rotate-y-180 w-full h-full duration-1000">
                    <div className="absolute top-0 left-0 backface-hidden h-full w-full ">
                        <img
                            alt={name}
                            className="h-full w-full object-cover"
                            src={`/images/${img
                                }.jpg`}
                        ></img>
                    </div>
                    <div
                        className="absolute my-rotate-y-180 backface-hidden w-full h-full bg-gray-100 overflow-hidden"
                    >
                        <div className="font-medium cursor-pointer mob:p-2 laptop:p-1">
                            <h1 className="mt-5 text-3xl font-medium">
                                {name ? name : "Project Name"}
                            </h1>
                            <h2 className="text-xl opacity-50">
                                {description ? description : "Description"}
                            </h2>
                            <div className="mt-5 font-small">
                                Stack: {stack}
                            </div>
                            <div className="mt-12 font-small">
                                {workArr.map((item, index) => (
                                    <div className="mt-1" key={index+'work'}>- {item}</div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>


            </div>

        </div>
    );
};

export default WorkCard;
