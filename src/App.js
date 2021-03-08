import React,{useEffect,useState} from 'react';
import './App.css';
import News from './News';
// import './styles/App.sass';

function App() {
  const [news, setNews] = useState([]);
  const [search, setSearch] = useState('');
  const [query, setQuery] = useState('india');
  const [cont, setcont] = useState('in');

  const url = `http://newsapi.org/v2/top-headlines?country=${cont}&apiKey=2c6e3653e2444fce821f8c67893dcbac`;
  const country_url = `https://restcountries.eu/rest/v2/name/${query}`;
 
  useEffect(() => {
    getCountry();
    getQuestion();
  }, [query])
  const getCountry = async () => {
    const response = await fetch(country_url);
    const data = await response.json();
    data.map(data1=>{
      setcont(data1.alpha2Code.toLowerCase());
    })
  }
  const getQuestion = async () => {
    const response = await fetch(url);
    const data = await response.json();
    setNews(data.articles);
    
  }
  const searchHandler = (e) =>{
  setSearch(e.target.value);
} 
const getSearch = (e) =>{
  e.preventDefault();
  setQuery(search);
}

  return (
    <div className="App">
      <form onSubmit={getSearch} className="search">
        <input type="text" className="searchBar" value={search} onChange={searchHandler} />
        <button className="searchButton" type="submit">Search</button>
      </form>
      
      {news.map((new1) => (
                <News key={new1.title} title={new1.title}  description={new1.description} imageurl = {new1.urlToImage}/>
            ))}
    </div>
  );
}

export default App;
