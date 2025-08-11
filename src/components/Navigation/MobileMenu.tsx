"use client"
import React from 'react';
import { slide as Menu } from 'react-burger-menu';
import { CgMenu } from 'react-icons/cg';
import { GrBusinessService, GrCircleQuestion, GrFacebook, GrHelpBook, GrHome, GrInstagram, GrUserManager, GrYoutube } from "react-icons/gr";
import { IoCloseSharp } from 'react-icons/io5';


class MobileMenu extends React.Component {
    showSettings(event: any) {
        event.preventDefault();
    }

    render(): React.ReactNode {
        return (
            <Menu right customBurgerIcon={<CgMenu />} customCrossIcon={<IoCloseSharp className='w-24 h-24' />}>
                <div className='flex flex-col items-center justify-start mobile-menu'>
                    <div>
                        <a href="/">
                            <picture>
                                <img src="/designs/logoWhite.png" alt="Logo Doctor Marco Jardinez" />
                            </picture>
                        </a>
                    </div>

                    <div className='flex items-center gap-3 border-b border-indigo-200 py-5 '>
                        <GrHome className='h-8 w-8' /><a className="text-xl w-full" href="#hero">Inicio</a>
                    </div>
                    <div className='flex items-center gap-3 border-b border-indigo-200 py-5' >
                        <GrBusinessService className='h-8 w-8' /><a className="text-xl w-full" href="#services">Servicios</a>
                    </div>
                    <div className='flex items-center gap-3 border-b border-indigo-200 py-5' >
                        <GrUserManager className='h-8 w-8' /><a className="text-xl w-full" href="#about">Acerca de</a>
                    </div>
                    <div className='flex items-center gap-3 border-b border-indigo-200 py-5' >
                        <GrCircleQuestion className='h-8 w-8' /><a className="text-xl w-full" href="#questions">Preguntas Frecuentes</a>
                    </div>
                    <div className='flex items-center gap-3 border-b border-indigo-200 py-5' >
                        <GrHelpBook className='h-8 w-8' /><a className="text-xl w-full" href="#contact">Contacto</a>
                    </div>
                </div>

                <div className='absolute bottom-0 left-0 w-full flex items-center justify-center '>
                    <div className="flex gap-5 mt-5 w-full items-center justify-center pb-3">
                        <a href="https://www.facebook.com/profile.php?id=100093055686038">
                            <div className="media-icon w-12 rounded-lg aspect-square bg-indigo-700 flex items-center justify-center">
                                <GrFacebook className="h-full w-full p-2 fill-white" />
                            </div>
                        </a>

                        <a href="https://www.instagram.com/dr.marcojardinez/">
                            <div className="media-icon w-12 rounded-lg aspect-square bg-neutral-800 flex items-center justify-center">
                                <GrInstagram className="h-full w-full p-2 fill-white" />
                            </div>
                        </a>

                        <a href="https://www.youtube.com/channel/UCMH2lyyVnTi6R6ZRrCDTJ3Q">
                            <div className="media-icon w-12 rounded-lg aspect-square bg-red-600 flex items-center justify-center">
                                <GrYoutube className="h-full w-full p-2 fill-white" />
                            </div>
                        </a>
                    </div>
                </div>
            </Menu>
        );
    }
}


export { MobileMenu };

