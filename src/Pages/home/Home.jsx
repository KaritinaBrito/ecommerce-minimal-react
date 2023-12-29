import Banner from "./Banner"
import BestSellers from "./BestSellers"
import Category from "./Category"
import Colletions from "./Colletions"
import Newletters from "./Newletters"
import Products from "./Products"

const Home = () => {
    return (
        <div>
            <Banner/>
            <Category/>
            <Products/>
            <Colletions/>
            <BestSellers/>
            <Newletters/>
        </div>
    )
}

export default Home