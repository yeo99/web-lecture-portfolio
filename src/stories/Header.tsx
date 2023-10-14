import { useRouter } from "next/router";
import React from "react";
import { Button } from "./Button";
import { Popover } from "@headlessui/react";
import data from "../../data/portfolio.json";

interface HeaderProps {

    handleWorkScroll: () => void;
    handleSkillScroll: () => void;
    handleContactScroll: () => void;

}

const Header = ({ handleWorkScroll = () => null, handleSkillScroll = () => null, handleContactScroll = () => null }: HeaderProps) => {
    const router = useRouter();
    return (
        <>
            <Popover className="block tablet:hidden mt-5">
                {({ open }) => (
                    <>
                        <div className="flex items-center justify-between p-2 laptop:p-0">
                            <h1
                                onClick={() => router.push("/")}
                                className="font-medium cursor-pointer p-2 laptop:p-0"
                            >
                                {data.name}.
                            </h1>
                            <h1
                                onClick={() => router.push("/")}
                                className="font-medium cursor-pointer p-2 laptop:p-0"
                            >
                                tmdcjf0312@naver.com
                            </h1>
                            <Popover.Button>
                                <img
                                    className="h-5"
                                    src={`/images/${"menu.svg"
                                        }`}
                                ></img>
                            </Popover.Button>
                        </div>
                        <Popover.Panel className="absolute right-0 z-10 w-11/12 p-4 bg-white shadow-md rounded-md">
                                <div className="grid grid-cols-1">
                                    <Button onClick={handleWorkScroll}>
                                        Work
                                    </Button>
                                    <Button onClick={handleSkillScroll}>
                                        Skill
                                    </Button>
                                    {data.showBlog && (
                                        <Button
                                            onClick={() => window.open(
                                                "https://ye0ye0.tistory.com/"
                                            )}
                                        >
                                            Blog
                                        </Button>
                                    )}
                                    <Button
                                        onClick={() =>
                                            window.open("mailto:tmdcjf0312@naver.com")
                                        }
                                    >
                                        Contact
                                    </Button>
                                </div>


                        </Popover.Panel>
                    </>
                )}
            </Popover>
            <div className="mt-10 flex flex-row items-center justify-between sticky bg-white top-0 z-10 hidden tablet:flex">
                <h1
                    onClick={() => router.push("/")}
                    className="font-medium cursor-pointer mob:p-2 laptop:p-0"
                >
                    {/* {data.name}. */}
                </h1>
                {/* <h1
                    onClick={() => router.push("/")}
                    className="font-medium cursor-pointer p-2 laptop:p-0"
                >
                    tmdcjf0312@naver.com
                </h1> */}
                    <div className="flex">
                        <Button onClick={handleWorkScroll}>Project</Button>
                        <Button onClick={handleSkillScroll}>Skill</Button>
                        {data.showBlog && (
                            <Button onClick={() => window.open(
                                "https://ye0ye0.tistory.com"
                            )}
                            >
                                Blog
                            </Button>
                        )}
                        <Button
                            onClick={() =>
                                window.open("mailto:tmdcjf0312@naver.com")
                            }
                        >
                            Contact
                        </Button>
                    </div>
            </div>
        </>
    );
};

export default Header;


// import React from 'react';

// import { Button } from './Button';
// import './header.css';

// type User = {
//   name: string;
// };

// interface HeaderProps {
//   user?: User;
//   onLogin: () => void;
//   onLogout: () => void;
//   onCreateAccount: () => void;
// }

// export const Header = ({ user, onLogin, onLogout, onCreateAccount }: HeaderProps) => (
//   <header>
//     <div className="wrapper">
//       <div>
//         <svg width="32" height="155" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
//           <g fill="none" fillRule="evenodd">
//             <path
//               d="M10 0h12a10 10 0 0110 10v12a10 10 0 01-10 10H10A10 10 0 010 22V10A10 10 0 0110 0z"
//               fill="#FFF"
//             />
//             <path
//               d="M5.3 10.6l10.4 6v11.1l-10.4-6v-11zm11.4-6.2l9.7 5.5-9.7 5.6V4.4z"
//               fill="#555AB9"
//             />
//             <path
//               d="M27.2 10.6v11.2l-10.5 6V16.5l10.5-6zM15.7 4.4v11L6 10l9.7-5.5z"
//               fill="#91BAF8"
//             />
//           </g>
//         </svg>
//         <h1>eddddd</h1>
//       </div>
//       <div>
//         {user ? (
//           <>
//             <span className="welcome">
//               Welcome, <b>{user.name}</b>!
//             </span>
//             <Button size="small" onClick={onLogout} label="Log out" />
//           </>
//         ) : (
//           <>
//             <Button size="small" onClick={onLogin} label="Log in" />
//             <Button primary size="small" onClick={onCreateAccount} label="Sign up" />
//           </>
//         )}
//       </div>
//     </div>
//   </header>
// );
