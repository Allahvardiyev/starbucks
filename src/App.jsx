import Header from "./Components/Header/Header";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./Components/page/Home/Home";
import Menu from "./Components/page/Menu/Menu";
import Rewards from "./Components/page/Rewards/Rewards";
import Gift from "./Components/page/Gift/Gift";
import Footer from "./Components/Footer/Footer";
import Featured from "./Components/page/Menu/Featured/Featured";
import Previous from "./Components/page/Menu/Previous/Previous";
import Favorites from "./Components/page/Menu/Favorites/Favorites";
import Menu2 from "./Components/page/Menu/Menu2/Menu2";
import { ProductProvider } from "./context/api";
import MenuDetails from "./Components/page/Menu/Menu2/MenuDetails";
import { CartProvider } from "react-use-cart";
import UseCart from "./Components/UseCart/UseCart";
import Signin from "./Components/page/Signin/Signin";
import FindStore from "./Components/findStore/FindStore";
import Joinnow from "./Components/page/Joinnow/Joinnow";



const App = () => {
  return (
    <>
     <ProductProvider>
        <CartProvider>
          <div>
            <Header />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/menu/:item" element={<Menu />}>
                <Route index element={<Menu2 />} />
                  <Route path="featured" element={<Featured />} />
                <Route path="previous" element={<Previous />} />
                <Route path="favorites" element={<Favorites />} /> 
              
              </Route>

              <Route path="menu-details/:id" element={<MenuDetails />} />
              <Route path="/rewards" element={<Rewards />} />
              <Route path="/usecartdetails" element={<UseCart />} />

              <Route path="/gift" element={<Gift />} />
              <Route path="/signin" element={<Signin/>}/>
              <Route path="/findstore" element={<FindStore/>}/>
              <Route path="/join" element={<Joinnow/>}/>
            </Routes>
            <Footer />
          </div>
        </CartProvider>
      </ProductProvider>
    </>
  );
};

export default App;
