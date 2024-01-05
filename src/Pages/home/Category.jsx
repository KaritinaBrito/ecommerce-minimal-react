import { Link } from "react-router-dom"
const companyLogo = [
    {id: 1, img: "/public/logo__01.png"},
    {id: 2, img: "/public/logo__02.png"},
    {id: 3, img: "/public/logo_03.png"},
    {id: 4, img: "/public/logo__04.png"},
    {id: 5, img: "/public/logo__05.png"},
]
const Category = () => {
    return (
        <div className="max-w-screen-2xl mx-auto container xl:px-28 px-4 py-28">
            <div className="flex items-center justify-around flex-wrap gap-4 py-5">
                {
                    companyLogo.map(({id, img}) => (
                        <div key={id}><img src={img} alt={`logo ${id}`}/></div>
                    ))
                }
            </div>
            <div className="mt-8 flex flex-col md:flex-row items-center gap-4">
                <p className="font-semibold uppercase md:-rotate-90 text-center bg-Black text-white md:p-1.5 p-2 rounded-sm inline-flex">Explore new and popular styles</p>
                <div>
                    <Link to="/"><img src="/public/company5.png" alt="company5" className="w-full hover:scale-105 transition-all duration-200"/></Link>
                </div>
                <div className="md:w-1/2">
                    <div className="grid grid-cols-2 gap-2">
                    <Link to="/"><img src="/public/company4.png" alt="company4" className="w-full hover:scale-105 transition-all duration-200"/></Link>
                    <Link to="/"><img src="/public/company3.png" alt="company3" className="w-full hover:scale-105 transition-all duration-200"/></Link>
                    <Link to="/"><img src="/public/company2.png" alt="company2" className="w-full hover:scale-105 transition-all duration-200"/></Link>
                    <Link to="/"><img src="/public/company1.png" alt="company1" className="w-full hover:scale-105 transition-all duration-200"/></Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Category