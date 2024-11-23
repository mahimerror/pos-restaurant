import Cart from "./components/Cart";
import Main from "./components/Main";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <div className="bg-[#E5E8ED] h-screen flex flex-col">
      <Navbar></Navbar>
      <div id="go" className="container w-11/12 mx-auto flex gap-8 flex-grow">
        <div className="left w-3/4">
          <Main></Main>
        </div>
        <div className="right w-1/4">
          <Cart></Cart>
        </div>
      </div>
    </div>
  );
};

export default App;