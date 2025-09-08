import { Outlet } from "react-router-dom";
import Footer from "./footer/Footer";
import Header from "./header/Header";

function Root() {
  return (
    <div>
     <div className="max-w-6xl mx-auto">
       <Header />
      <Outlet />
     </div>

      <Footer />
    </div>
  );
}

export default Root;
