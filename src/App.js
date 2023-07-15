import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home";
import SingleProduct from "./components/SingleProduct/SingleProduct";
import SingleProduct1 from "./components/SingleProduct1/SingleProduct1";
import Newsletter from "./components/Footer/Newsletter/Newsletter";
import AppContext from "./utils/context";


function App() {
  return (
    <BrowserRouter>
      <AppContext>
        <Header/>
        <Routes>
          <Route path = "/"element ={< Home />} />
          <Route path="/product/:id" element={<SingleProduct />} />
          <Route path="/product1/:id" element={<SingleProduct1 />} />
        </Routes>

        <Newsletter/>
        <Footer/>
      </AppContext>

    </BrowserRouter>
  );

}
export default App;
