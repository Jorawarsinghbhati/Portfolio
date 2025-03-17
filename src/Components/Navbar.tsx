// "use client";
// import React, { useState } from "react";
// import { HoveredLink, Menu, MenuItem, ProductItem } from "./ui/Navbar-menu";
// import { cn } from "../lib/utils";
// import Link from "next/link";



// function Navbar({ className }: { className?: string }) {
//     const [active, setActive] = useState<string | null>(null);

//     return (
//         <div className="relative w-full flex justify-center"> {/* Ensures center alignment */}
//             <div className="fixed top-10 inset-x-0 max-w-2xl mx-auto z-50 text-center bg-black/80 px-4 py-2 rounded-full">
//                 <Menu setActive={setActive}>
//                     <HoveredLink href="/">
//                     <MenuItem setActive={setActive} active={active} item="Home" />
//                     </HoveredLink>
//                     <HoveredLink href="/Projects"> <MenuItem setActive={setActive} active={active} item="Projects" >
//                     </MenuItem>
//                     </HoveredLink>
//                     <HoveredLink href="/Skills">
//                     <MenuItem setActive={setActive} active={active} item="Skills"/>
//                     </HoveredLink>
//                     <HoveredLink href="/Details">
//                     <MenuItem setActive={setActive} active={active} item="Details"/>
//                     </HoveredLink>
//                 </Menu>
//             </div>
//         </div>
//     );
// }

// export default Navbar;
"use client";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem } from "./ui/Navbar-menu";

function Navbar({ className }: { className?: string }) {
    const [active, setActive] = useState<string | null>(null);

    return (
        <div className="relative w-full flex justify-center">
            <div className="fixed top-10 inset-x-0 max-w-2xl mx-auto z-50 text-center bg-gray-900/90 px-6 py-3 rounded-full shadow-lg border border-gray-700">
                <Menu setActive={setActive}>
                    <HoveredLink href="/">
                        <MenuItem setActive={setActive} active={active} item="Home">
                            <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent font-semibold ">
                                Home
                            </span>
                        </MenuItem>
                    </HoveredLink>
                    <HoveredLink href="/Projects">
                        <MenuItem setActive={setActive} active={active} item="Projects">
                            <span className="bg-gradient-to-r from-green-400 to-yellow-500 bg-clip-text text-transparent font-semibold">
                                Projects
                            </span>
                        </MenuItem>
                    </HoveredLink>
                    <HoveredLink href="/Skills">
                        <MenuItem setActive={setActive} active={active} item="Skills">
                            <span className="bg-gradient-to-r from-pink-400 to-red-500 bg-clip-text text-transparent font-semibold">
                                Skills
                            </span>
                        </MenuItem>
                    </HoveredLink>
                    <HoveredLink href="/Details">
                        <MenuItem setActive={setActive} active={active} item="Details">
                            <span className="bg-gradient-to-r from-teal-400 to-cyan-500 bg-clip-text text-transparent font-semibold">
                                Details
                            </span>
                        </MenuItem>
                    </HoveredLink>
                </Menu>
            </div>
        </div>
    );
}

export default Navbar;


