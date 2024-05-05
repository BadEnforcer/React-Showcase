
import React from 'react'
import { IoSearchOutline } from "react-icons/io5";
import {PiAndroidLogo} from "react-icons/pi";
import { IoCloseOutline } from "react-icons/io5";



const Navbar_Style_01:React.FC = () => {
    const [searchQuery, setSearchQuery] = React.useState<string>('');
    const [showMobileSearch, setShowMobileSearch] = React.useState<boolean>(false);
    const [isMouseOverSearchIcon, setIsMouseOverSearchIcon] = React.useState<boolean>(false);

    return (

        <nav className={'bg-[#191919]'}>
            {/*Desktop row*/}
            <div className={'hidden lg:flex grid-rows-1 mx-auto px-2'} id={'desktop-elements'}>
    <div className={'grid grid-cols-3'}>
        {/* LOGO */}
        <div id={'logo'} className={'grid col-span-1 col-start-1 justify-start text-white pt-2 pl-5'}
             onClick={() => setShowMobileSearch(true)}>
            <PiAndroidLogo size={35} className={'my-1.5 sm:mt-1'}/>
        </div>
        {/* LOGO */}

        <div id={'desktop-search-holder'}
             className={'relative col-span-1 col-start-2 text-center justify-end flex items-center'}>
            <input
                type={'text'} placeholder={'Start typing to search blogs.'}
                onChange={(e) => setSearchQuery(e.target.value)}
                defaultValue={searchQuery}
                className={'bg-[#161515] border-[1px] border-[#282828]  sm:w-[200px]  lg:w-[400px] h-8 my-3 placeholder:text-center placeholder:text-sm placeholder:text-neutral-500 rounded-xl hover:placeholder:text-neutral-400 text-neutral-100 pl-5 pr-3 text-sm hover:ring-1 hover:ring-neutral-700 focus:outline-none focus:ring-1 focus:ring-neutral-700 mr-2'}
            />
            {/*    Search button for Desktop  */}
            <span id={'searchLogo'}>
                <IoSearchOutline visibility={searchQuery === '' ? 'hidden' : ''}
                                 color={isMouseOverSearchIcon ? 'green' : 'gray'}
                                 onMouseEnter={() => setIsMouseOverSearchIcon(true)}
                                 onMouseLeave={() => setIsMouseOverSearchIcon(false)}
                                 size={19}
                                 cursor={'pointer'}
                                 className={`transition-colors duration-500`}/>
            </span>
        </div>
    </div>
</div>
            {/*Desktop row*/}

            {/*Mobile row*/}
            <div className={'grid-rows-1 lg:hidden'}>
                <div className={'grid grid-cols-2'}>
                    {/* LOGO */}
                    <div id={'logo'} className={'grid col-span-1 col-start-1 justify-start text-white pt-2 pl-5'}
                         onClick={() => setShowMobileSearch(true)}>
                        <PiAndroidLogo size={35} className={'my-1.5 sm:mt-1'}/>
                    </div>
                    {/* LOGO */}

                    {/*    mobile search open button */}
                    <div id={'mobile-search-opener'}
                         className={'flex relative col-start-2 col-span-1 pt-4 pr-7 pb-4 items-center justify-end'}
                         onClick={() => setShowMobileSearch(true)}>
                        <IoSearchOutline size={25} color={'gray'} className={'absolute'}/>
                    </div>



                    {/* search menu for Mobile devices */}
                    {showMobileSearch ?
                        (<>
                            <form>
                                <div
                                    className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur flex items-center justify-center ">
                                    <div className="bg-[#191919] rounded p-4 grid w-full h-auto grid-rows-2 ">
                                        {/*Card body */}
                                        <div id={'cancel-button'} className={'grid row-span-1 justify-end'}>
                                            <button onClick={() => setShowMobileSearch(false)} className={'text-white'}>
                                                <IoCloseOutline size={30}/>
                                            </button>
                                        </div>
                                        {/*Search bar */}
                                        <div id={'mobile-search-holder'}
                                             className={'relative grid row-span-1 text-center sm:flex sm:justify-end md:flex md:justify-center'}>

                            <span id={'searchLogo'}><IoSearchOutline visibility={searchQuery === '' ? '' : 'hidden'}
                                                                     color={'gray'}
                                                                     className={'absolute top-1/2 transform ml-5 -translate-y-2'}/></span>
                                            <input
                                                type={'text'} placeholder={'Start typing to search blogs.'}
                                                onChange={(e) => setSearchQuery(e.target.value)}
                                                defaultValue={searchQuery}
                                                className={'bg-[#161515] border-[1px] border-[#282828]  sm:w-full h-8 my-3 placeholder:text-center placeholder:text-sm placeholder:text-neutral-500 rounded-xl hover:placeholder:text-neutral-400 text-neutral-100 pl-5 pr-3 text-sm hover:ring-1 hover:ring-neutral-700 focus:outline-none focus:ring-1 focus:ring-neutral-700'}
                                            />
                                        </div>

                                        {/*Search button*/}
                                        <div
                                            className={'grid row-span-1 pt-2 pb-1.5 rounded-lg border border-[#282828] hover:border-green-400  '}>
                                            <button id={'mobile-search-form-submit-btn'} type={'submit'}
                                                    className={'text-md text-neutral-400 hover:text-green-400'}>Search
                                            </button>
                                        </div>
                                        <hr className={'mt-5 mb-2'}
                                            style={{backgroundColor: 'gray', height: '1px', border: 'none'}}/>
                                        <p className={'text-neutral-600 font-light text-[12px]'}>You will be redirected to a
                                            different subdomain.</p>
                                    </div>

                                </div>
                            </form>
                        </>) : null}


                </div>
            </div>
            {/*Mobile row*/}

        </nav>


    )
}


export default Navbar_Style_01;


