import banner from '../../../public/banner.png';
import { FaBagShopping } from "react-icons/fa6";

const Banner = () => {
    return (
        <div className="bg-primaryBG py-12 xl:px-28 px-4">
            <div className='flex py-28 flex-col md:flex-row-reverse justify-between items-center gap-14'>
                <div className="md:w-1/2">
                    <img src={banner} alt="banner ia¿mage" className="mx-auto h-full md:h-[562px] md:w-[442px] w-full"/>
                </div>
                <div className='md:w-1/2 px-8'>
                    <h1 className='text-5xl font-light mb-5'>Collections</h1>
                    <p className='text-xl mb-7'>You can explore ans shop many differnt collection from various barands here.</p>
                    <button className='bg-Black hover:bg-orange-500 px-6 py-2 text-white rounded-sm font-semibold flex gap-2 items-center'>
                        <FaBagShopping />Shop Now
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Banner