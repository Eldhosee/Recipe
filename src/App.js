import React,{ useState } from "react";
import Footer from "./components/footer";
import Header from "./components/header";
import Loader from "./components/loader";
import Recipe from "./components/main";
import Search from "./components/search";
function App() {
  const [query, setQuery] = useState("");
  const [loading,setLoading]=useState(0);
  return (
    <div>
     <Header changeQuery={query=>setQuery(query)}/>
     {query?
      <div>
        <Search  changeQuery={query=>setQuery(query)} query={query}/>
      </div> 
      :
        <Recipe query={query} loading={loading} changeLoading={loading=>setLoading(loading)} />
      
    }
     
     <Footer/>
    </div>
  );
}

export default App;
