import { Link } from "react-router-dom"

const Newletters = () => {
  return (
    <div className="bg-[#1E2832] bg-opacity-5 xl:px-28 px-4 py-16">
        <h2 className="title capitalize mb-8">Follow products and discounts on Instagram</h2>

        <div className="flex flex-wrap gap-4 items-center justify-center mb-20">
            <Link to={"/"}>
                <img src="/src/assets/img1.png" alt="image 1" />
            </Link>
            <Link to={"/"}>
                <img src="/src/assets/img2.png" alt="image 2" />
            </Link>
            <Link to={"/"}>
                <img src="/src/assets/img3.png" alt="image 3" />
            </Link>
            <Link to={"/"}>
                <img src="/src/assets/img4.png" alt="image 4" />
            </Link>
            <Link to={"/"}>
                <img src="/src/assets/img5.png" alt="image 5" />
            </Link>
            <Link to={"/"}>
                <img src="/src/assets/img6.png" alt="image 6" />
            </Link>
        </div>

        <div>
            <h2 className="title mb-8">Or subscribe to the newsletter</h2>
            <form className="md:w-1/2 mx-auto text-center">
                <input type="email" name="email" id="email" placeholder="Email address..." className="h-8 bg-transparent outline-none border-b-2 pl-2 border-black md:w-2/3 w-full mb-5 placeholder:text-black/50 mr-4"/>
                <button type="submit" className="bg-black text-white px-6 py-1 rounded-sm">Submit</button>
            </form>
        </div>
    </div>
  )
}

export default Newletters