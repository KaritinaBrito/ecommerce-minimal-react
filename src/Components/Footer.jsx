import { Link } from "react-router-dom";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from "react-icons/fa";

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer>
            <div className="mx-auto ">
                {/* footer top */}
                <div className="mt-20 mb-10 flex flex-col md:flex-row items-start justify-between gap-8 xl:px-28 px-4">
                    <div className="md:w-[400px]">
                        <Link to={"/"}>
                            <img src="/src/assets/logoMain.png" alt="logo" />
                        </Link>
                        <p className="my-8 text-Black/75">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Blanditiis nisi, soluta assumenda aut nemo animi deleniti necessitatibus ea labore consequuntur!</p>
                        <div className="flex gap-6 items-center">
                            <FaFacebookF/>
                            <FaTwitter/>
                            <FaLinkedinIn />
                            <FaInstagram />
                        </div>
                    </div>

                    <div className="text-black">
                        <h4 className="font-semibold mb-3">CATALOG</h4>
                        <div className="space-y-2">
                            <Link to={"/"} className="text-sm block hover:text-orange-500">
                                Necklaces
                            </Link>
                            <Link to={"/"} className="text-sm block hover:text-orange-500">
                                Hoodies
                            </Link>
                            <Link to={"/"} className="text-sm block hover:text-orange-500">
                                Jewelry Box
                            </Link>
                            <Link to={"/"} className="text-sm block hover:text-orange-500">
                                T-Shirt
                            </Link>
                            <Link to={"/"} className="text-sm block hover:text-orange-500">
                                Jacket
                            </Link>
                        </div>
                    </div>

                    
                    <div className="text-black">
                        <h4 className="font-semibold mb-3">ABOUT US</h4>
                        <div className="space-y-2">
                            <Link to={"/"} className="text-sm block hover:text-orange-500">
                                Our Producers
                            </Link>
                            <Link to={"/"} className="text-sm block hover:text-orange-500">
                                Sitemap
                            </Link>
                            <Link to={"/"} className="text-sm block hover:text-orange-500">
                                FAQ
                            </Link>
                            <Link to={"/"} className="text-sm block hover:text-orange-500">
                                About Us
                            </Link>
                            <Link to={"/"} className="text-sm block hover:text-orange-500">
                                Terms & Conditions
                            </Link>
                        </div>
                    </div>

                    <div className="text-black">
                        <h4 className="font-semibold mb-3">CUSTOMER SERVICES</h4>
                        <div className="space-y-2">
                            <Link to={"/"} className="text-sm block hover:text-orange-500">
                                Contact Us
                            </Link>
                            <Link to={"/"} className="text-sm block hover:text-orange-500">
                                Track Your Order
                            </Link>
                            <Link to={"/"} className="text-sm block hover:text-orange-500">
                                Product Care & Repair
                            </Link>
                            <Link to={"/"} className="text-sm block hover:text-orange-500">
                                Book an Appointment
                            </Link>
                            <Link to={"/"} className="text-sm block hover:text-orange-500">
                                Terms & Conditions
                            </Link>
                        </div>
                    </div>
                    
                </div>
                
                {/* footer bottom */}
                <div className="bg-Black">
                    <p className="text-white text-center items-center py-3">© {currentYear} Coral, Inc.</p>
                </div>
            </div>
        </footer>
    )
}



export default Footer