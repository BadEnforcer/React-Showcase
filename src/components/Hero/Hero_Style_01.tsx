import React from "react";

import { GoDatabase } from "react-icons/go";
import {TbWebhook} from "react-icons/tb";
import {IoLogoJavascript} from "react-icons/io";
import profileImg from '../../static/img/profile_placeholder.jpg'
import './Hero_Style_01.css'


const activeJobStyle:string = 'bg-[#161515]'
const inActiveJobStyle:string = 'bg-transparent'

const Hero_Style_01: React.FC = () => {
    const [activeJob, setActiveJob] = React.useState<number>(0)


    return (
        <div className={'grid grid-cols-1 lg:grid-cols-2'}>
            <div id={'left-container'}
                 className={'bg-[#1E1E1E] flex items-center justify-center h-screen border-b-[0.5px] lg:border-0'}>
                <div id={'left-data'} className={'flex flex-row flex-wrap'}>
                    <img src={profileImg}
                         className={'rounded-full w-[300px] h-[300px] lg:w-[250px] lg:h-[250px] ml-7 lg:ml-0  '}/>
                    <p className={'ml-4 content-center lg:hidden text-white text-[44px] ibm-plex-sans-bold mt-10'}>I'm<br/>Raj Dwivedi</p>
                    <p className={'ml-4 content-center hidden lg:block text-white text-[44px] ibm-plex-sans-bold mt-10'}>I'm<br/>Raj<br/> Dwivedi</p>
                </div>
            </div>


            <div id={'right-container'}
                 className={'bg-[#1E1E1E] lg:border-l-[1px] h-screen flex items-center justify-start'}>
                {/*In production set grid-rows-2*/}
                <div className={'grid grid-rows-1'}>
                    {/*Content*/}
                    <div id={'right-container-main-content'}

                         className={'row-start-1 lg:row-start-2 h-[90%] pl-6 pt-6 text-white ibm-plex-sans-bold'}>
                        <div><>

                            <div id={'right-container-mobile-text'} className={'lg:hidden'}>
                                <span className={'text-[20px]'}>I'm a </span><br/>
                                <span className={'text-yellow-500 text-[30px]'}>$</span>
                                <span className={'text-yellow-500 text-[30px]'}>{'{'}</span>
                                <span className={'text-[31px]'}>{'Backend Developer'}</span>
                                <span className={'text-yellow-500 text-[30px]'}>{'}'}</span>
                            </div>


                            <div id={'right-container-desktop-text'} className={'hidden lg:block'}>
                                <span className={'text-[40px]'}>I'm a </span>
                                <span className={'text-yellow-500 text-[40px]'}>$</span>
                                <span className={'text-yellow-500 text-[40px]'}>{'{'}</span>
                                <span className={'text-[38px]'}>{'Backend Developer'}</span>
                                <span className={'text-yellow-500 text-[40px]'}>{'}'}</span>
                            </div>
                            <span className={'text-[30px]'}>Specializing in</span><br/>
                            <span className={'text-yellow-500 text-[44px]'}>API </span>
                            <span className={'text-[30px]'}>Development </span>
                            <span className={'text-yellow-500 text-[25px]'}>&</span>
                            <br/>
                            <span className={'text-[30px]'}>System Security</span>
                            </>
                        </div>
                    </div>

                    {/*Switch buttons*/}
                    {/*<div className={'row-start-2 lg:row-start-1'} id={'job-description-buttons-container'}>*/}
                    {/*    <div className={'w-full pr-7 flex justify-end gap-x-4'}>*/}
                    {/*        <div className={'border-[1px] rounded-sm border-black mt-2'}>*/}
                    {/*            <button*/}
                    {/*                className={`border-black border-r-2 ${activeJob === 0 ? activeJobStyle : inActiveJobStyle}`}*/}
                    {/*                onClick={() => setActiveJob(0)}*/}
                    {/*            ><IoLogoJavascript size={35} color={'white'}/></button>*/}
                    {/*            <button*/}
                    {/*                className={`border-black ${activeJob === 1 ? activeJobStyle : inActiveJobStyle}`}*/}
                    {/*                onClick={() => setActiveJob(1)}*/}
                    {/*            ><GoDatabase floodColor={'white'} size={35} color={'white'}/></button>*/}
                    {/*        </div>*/}
                    {/*    </div>*/}
                    {/*</div>*/}
                </div>
            </div>


        </div>
                )


}

export default Hero_Style_01;