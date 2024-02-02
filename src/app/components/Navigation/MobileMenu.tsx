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
                        <a href="">
                            <picture>
                                <img src="/designs/logoWhite.png" alt="" />
                            </picture>
                        </a>
                    </div>

                    <div className='flex items-center gap-3 border-b border-indigo-200 py-5 '>
                        <GrHome className='h-8 w-8' /><a id="home" className="text-xl w-full" href="/">Inicio</a>
                    </div>
                    <div className='flex items-center gap-3 border-b border-indigo-200 py-5' >
                        <GrBusinessService className='h-8 w-8' /><a id="home" className="text-xl w-full" href="/">Servicios</a>
                    </div>
                    <div className='flex items-center gap-3 border-b border-indigo-200 py-5' >
                        <GrUserManager className='h-8 w-8' /><a id="home" className="text-xl w-full" href="/">Acerca de</a>
                    </div>
                    <div className='flex items-center gap-3 border-b border-indigo-200 py-5' >
                        <GrCircleQuestion className='h-8 w-8' /><a id="home" className="text-xl w-full" href="/">Preguntas Frecuentes</a>
                    </div>
                    <div className='flex items-center gap-3 border-b border-indigo-200 py-5' >
                        <GrHelpBook className='h-8 w-8' /><a id="home" className="text-xl w-full" href="/">Contacto</a>
                    </div>
                </div>

                <div className='absolute bottom-0 left-0 w-full flex items-center justify-center '>
                    <div className="flex gap-5 mt-5 w-full items-center justify-center pb-3">
                        <div className="media-icon w-12 rounded-lg aspect-square bg-indigo-700 flex items-center justify-center">
                            <GrFacebook className="h-full w-full p-2 fill-white" />
                        </div>
                        <div className="media-icon w-12 rounded-lg aspect-square bg-neutral-800 flex items-center justify-center">
                            <GrInstagram className="h-full w-full p-2 fill-white" />
                        </div>
                        <div className="media-icon w-12 rounded-lg aspect-square bg-red-600 flex items-center justify-center">
                            <GrYoutube className="h-full w-full p-2 fill-white" />
                        </div>
                    </div>
                </div>
            </Menu>
        );
    }
}


export { MobileMenu };

