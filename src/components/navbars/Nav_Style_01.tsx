
import React from 'react'
import { IoSearchOutline } from "react-icons/io5";
import {PiAndroidLogo} from "react-icons/pi";
import { IoCloseOutline } from "react-icons/io5";



const Nav_Style_01:React.FC = () => {
    const [searchQuery, setSearchQuery] = React.useState<string>('');
    const [showMobileSearch, setShowMobileSearch] = React.useState<boolean>(false);
    const [isMouseOverSearchIcon, setIsMouseOverSearchIcon] = React.useState<boolean>(false);

    return (
        // Using flex for sm and grid for md and above
        <nav className={'container mx-auto flex sm:flex md:grid grid-rows-1 px-2 bg-[#191919] '}>
            {/*    Desktop search bar */}
            <div className={' grid grid-cols-3'}>
                {/*Logo */}
                <div id={'logo'} className={'grid col-span-1 justify-start text-white pt-2 pl-5'}
                     onClick={() => setShowMobileSearch(true)}>
                    {/*Replace with your logo or name*/}
                    {/*<h1 className={'text-2xl pb-3 pt-2 sm:p-0 sm:m-0'}>Raj</h1>*/}
                    <PiAndroidLogo size={35} className={'my-1.5 sm:mt-1'}/>
                </div>

                {/*Search bar holder */}
                <div id={'desktop-search-holder'}
                     className={'relative grid col-span-1 text-center sm:block hidden sm:flex sm:justify-end md:flex md:justify-center'}>

                    <span id={'searchLogo'}><IoSearchOutline visibility={searchQuery === '' ? '' : 'hidden'}
                                                             color={'gray'}
                                                             size={19}
                                                             className={'absolute top-1/2 left-3 left-1/3 transform -translate-x-9 -translate-y-[9px]'}/></span>
                    <input
                        type={'text'} placeholder={'Start typing to search blogs.'}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        defaultValue={searchQuery}
                        className={'bg-[#161515] border-[1px] border-[#282828]  sm:w-[200px]  lg:w-[400px] h-8 my-3 placeholder:text-center placeholder:text-sm placeholder:text-neutral-500 rounded-xl hover:placeholder:text-neutral-400 text-neutral-100 pl-5 pr-3 text-sm hover:ring-1 hover:ring-neutral-700 focus:outline-none focus:ring-1 focus:ring-neutral-700'}
                    />
                {/*    Search button for Desktop  */}

                    <IoSearchOutline visibility={searchQuery === '' ? 'hidden' : ''}
                                     color={isMouseOverSearchIcon ? 'green' : 'gray'}
                                     onMouseEnter={() => setIsMouseOverSearchIcon(true)}
                                     onMouseLeave={() => setIsMouseOverSearchIcon(false)}
                                     size={19}
                                     cursor={'pointer'}
                                     className={`absolute top-1/2 right-3 transform -translate-y-[9px] translate-x-8 transition-colors duration-500`} />

                    {/*    */}
                </div>
            </div>

            {/*    mobile search open button */}
            <div className={'container mx-auto grid grid-rows-1 bg-[#191919] justify-end items-center'}>
                <div id={'mobile-search-opener'} className={'relative grid col-span-1 md:hidden pr-10 pb-4'} onClick={() => setShowMobileSearch(true)}>
                    <IoSearchOutline size={25} color={'gray'} className={'absolute'}/>
                </div>
            </div>

            {/* search menu for Mobile devices */}
            {showMobileSearch ?
                (<>
                    <form>
                        <div
                            className="fixed md:hidden inset-0 bg-black bg-opacity-50 backdrop-blur flex items-center justify-center ">
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
                                        className={'bg-[#161515] border-[1px] border-[#282828]  sm:w-[200px]  lg:w-[400px] h-8 my-3 placeholder:text-center placeholder:text-sm placeholder:text-neutral-500 rounded-xl hover:placeholder:text-neutral-400 text-neutral-100 pl-5 pr-3 text-sm hover:ring-1 hover:ring-neutral-700 focus:outline-none focus:ring-1 focus:ring-neutral-700'}
                                    />
                                </div>

                                {/*Search button*/}
                                <div
                                    className={'grid row-span-1 pt-2 pb-1.5 rounded-lg border border-[#282828] hover:border-green-400  '}>
                                    <button id={'mobile-search-form-submit-btn'} type={'submit'}
                                            className={'text-md text-neutral-400 hover:text-green-400'}>Search
                                    </button>
                                </div>
                                <hr className={'mt-5 mb-2'} style={{backgroundColor: 'gray', height: '1px', border:'none'}}/>
                                <p className={'text-neutral-600 font-light text-[12px]'}>You will be redirected to a different subdomain.</p>
                            </div>

                        </div>
                        </form>
                    </>) : null}
        </nav>

)
}


export default Nav_Style_01;
