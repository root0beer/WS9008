import Card from "./components/Card";
import Drawer from "./components/Drawer";
import Header from "./components/Header"; //you can name it "Shapka", you can name it whatever next to import, coz that space reserved for your variable

function App() {
  return (
    <div className="wrapper clear">
      <Drawer />

      <Header />
      
      <div className="content p-40">
        {/**when you use outside macro css you can still use regular names for components. Write them first and then mention in scss file */}
        <div className="d-flex align-center justify-between mb-40">
          <h1>All sneakers</h1>
          <div className="search-block d-flex">
            <img src="/icons/search_icon.svg" alt="Search" />
            {/**In react its best to show alt="placeholerText" in case if the image doesnt load you will have smth showing there */}
            <input placeholder="Searching..." />
          </div>
        </div>

        <div className="d-flex">
          <Card />
          <Card />
          <Card />
          <Card />
          
        </div>
      </div>
    </div>
  );
}

export default App;
