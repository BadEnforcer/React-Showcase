import React, {useEffect} from "react";
import {useLocation} from "react-router-dom";

import { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'

function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(' ')
}

type ActiveLinkType = {
    id: string;
    name: string;
};


const nav_links_data = [
    {
        name: 'Home',
        href: '/',
        id: 'home-link'
    },
    {
        name: 'Projects',
        href: '/projects',
        id: 'projects-link'
    },
    {
        name: 'CV',
        href: '/cv',
        id: 'cv-link'
    },
    {
        name: 'Contact ',
        href: '/contact-me',
        id: 'contact-page-link'
    }

]

const activeLinkStyle = 'text-white rounded-xl text-sm border-[1px] border-neutral-500 ';
const inactiveLinkStyle = 'text-neutral-500 text-sm hover:border-neutral-500 hover:border-[1px]  hover:rounded-xl hover:text-white';

const NavLinks_Style_01: React.FC = () => {
    const [activeLink, setActiveLink] = React.useState<ActiveLinkType>({id: '', name:''});

    const location = useLocation();
    
    // update an active link on page change
    useEffect(() => {
        const currentPath = location.pathname;
        nav_links_data.map((link) => {
            if (currentPath === link.href) {
                setActiveLink({id:link.id, name:link.name});
                console.log('active link is: ', activeLink)
            }
        })
        
    }, [location.pathname, activeLink]);


    return (
        <>
        <div className={`w-full bg-[#191919] h-auto`}>
            {/* DESKTOP */}
                <div className={'hidden sm:hidden lg:flex justify-between text-white mx-4'} id={'desktop-nav-links'}>

                    <>
                        {nav_links_data.map((link) => {
                            return (
                                <>
                                    <a href={link.href} id={link.id} key={link.id}
                                       className={`flex items-center text-center mx-1 my-2 px-3 py-[0.2px]  ${location.pathname === link.href ? activeLinkStyle : inactiveLinkStyle}`}>{link.name}</a>
                                </>

                            )
                        })}
                    </>
                </div>
            {/* DESKTOP END */}

            {/* MOBILE */}
            <>
                <div className={'sm:block md:block lg:hidden'} id={'mobile-nav-links'}>
                    <div className={'flex justify-center'}>
                        <>
                            <Menu as="div" className=" inline-block text-center">
                                <div>
                                    <Menu.Button
                                        className="justify-center w-24 rounded-xl bg-[#161515] px-3 py-1 mb-3 text-white ring-1 ring-[#282828] hover:bg-white hover:text-gray-700">
                                        {activeLink.name}
                                    </Menu.Button>
                                </div>
                                <Transition
                                    as={Fragment}
                                    enter="transition ease-out duration-100"
                                    enterFrom="transform opacity-0 scale-95"
                                    enterTo="transform opacity-100 scale-100"
                                    leave="transition ease-in duration-75"
                                    leaveFrom="transform opacity-100 scale-100"
                                    leaveTo="transform opacity-0 scale-95"
                                >
                                    <Menu.Items
                                        className="absolute right-1/2 transform translate-x-1/2 z-10 mt-2 w-56 sm:w-72 origin-top rounded-md bg-[#191919] shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                                        <div className="py-1">
                                            {nav_links_data.map((link) => {
                                                if (link.name === activeLink['name']) return null

                                                return (
                                                    <Menu.Item>
                                                        {({active}) => (
                                                            <>
                                                                <div className={'py-1'}>
                                                                    <a
                                                                        href={link.href}
                                                                        id={link.id}
                                                                        key={link.id}
                                                                        className={classNames(
                                                                            active ? 'text-white' : 'text-white',
                                                                            'block px-4 py-2 text-sm'
                                                                        )}
                                                                    >
                                                                        {link.name}
                                                                    </a>
                                                                </div>
                                                            </>
                                                        )}
                                                    </Menu.Item>
                                                )
                                            })}
                                        </div>
                                    </Menu.Items>
                                </Transition>


                            </Menu>
                        </>
                    </div>
                </div>
            </>
        </div>
        </>)
}

export default NavLinks_Style_01;





