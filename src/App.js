import React,{ useState } from "react";
import Footer from "./components/footer";
import Header from "./components/header";
import Recipe from "./components/main";
import Search from "./components/search";
function App() {
  const [query, setQuery] = useState("");
 
  return (
    <div>
     <Header changeQuery={query=>setQuery(query)}/>
     {query?
      <div>
        <Search  changeQuery={query=>setQuery(query)} query={query}/>
      </div> 
      :
      <Recipe query={query}/>
    }
     
     <Footer/>
    </div>
  );
}

export default App;
