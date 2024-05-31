"use client";
import { useMenuContext } from "@/contexts/MenuContext";
import Menu from "@/components/ui/navigation/Menu";
import Nav from "@/components/ui/navigation/header/Nav";
import ThemeToggle from "@/components/ui/navigation/header/ThemeToggle";
import Logo from "@/components/ui/navigation/header/logo";


const UserInterface = () => {
    const{toggleMenu, isOpen} = useMenuContext();
 

    return (
        <>
            <header className={"fixed z-50 top-6 sm:top-12 lg:top-24 left-0 right-0"}>
                <div id={"header content"} className={"flex flex-row px-7 sm:px-12 md:px-24 justify-between"}>
                    <div id={"left"} className={"flex flex-row"}>
                        <Logo/>
                    </div>
                    <div id={"right"} className={"w-fit flex flex-row items-center justify-content space-x-6"}>
                        <ThemeToggle size={20}/>
                        <Nav size={40} toggle={toggleMenu} isOpen={isOpen}/>
                    </div>
                </div>
            </header>
            <Menu isOpen={isOpen} toggle={toggleMenu} />
        </>
    );
};

export default UserInterface;