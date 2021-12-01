import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./pages/home";
import Pricing from "./pages/pricing";
import User from "./pages/user";
import Web from "./pages/web";
import Post01 from "./post/post01"
import Post02 from "./post/post02"
import Post03 from "./post/post03"
import Post04 from "./post/post04"
import Post05 from "./post/post05"
import Post06 from "./post/post06"
import Post07 from "./post/post07"
import Post08 from "./post/post08"
import Post09 from "./post/post09"
import Combo1 from "./pages/combo1"
import Combo2 from "./pages/combo2"
import Combo3 from "./pages/combo3"
import Mua from "./pages/mua"
import KichHoat from "./pages/kichhoat"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' exact  element={<Home />} />
        <Route path='/pricing' exact element={<Pricing />} />
        <Route path='/user-research' exact element={<User/>} />
        <Route path='/web-development' exact element={<Web/>} />
        <Route path='/post01' exact element={<Post01/>}/>
        <Route path='/post02' exact element={<Post02/>}/>
        <Route path='/post03' exact element={<Post03/>}/>
        <Route path='/post04' exact element={<Post04/>}/>
        <Route path='/post05' exact element={<Post05/>}/>
        <Route path='/post06' exact element={<Post06/>}/>
        <Route path='/post07' exact element={<Post07/>}/>
        <Route path='/post08' exact element={<Post08/>}/>
        <Route path='/post09' exact element={<Post09/>}/>
        <Route path='/combo1' exact element={<Combo1/>}/>
        <Route path='/combo2' exact element={<Combo2/>}/>
        <Route path='/combo3' exact element={<Combo3/>}/>
        <Route path='/mua' exact element={<Mua/>}/>
        <Route path='/kichhoat' exact element={<KichHoat/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
