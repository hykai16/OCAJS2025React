import { useEffect, useState } from 'react';
import './App.css';
import { getAllPokemon, getPokemon } from './utils/pokemon';
import Card from './components/Card';

function App() {
  const initialURL = "https://pokeapi.co/api/v2/pokemon";
  const [loading,setLoading] = useState(true);
  const [pokemonData,setPokemonData] = useState([]);
  const [nextURL, setNextURL] = useState("");
  const [prevURL, setPrevURL] = useState("");

  useEffect(() => {
    const fetchPokemonData = async () => {
      let res = await getAllPokemon(initialURL);
      loadPokemon(res.results);
      //console.log(res.results);
      setNextURL(res.next);
      setPrevURL(res.previous);
      setLoading(false);
    }
    fetchPokemonData();
  },[])

  const loadPokemon = async (data) => {
    let _pokemonData = await Promise.all(
    //const nums = [1, 2, 3];
    //const doubled = nums.map(n => n * 2); // [2, 4, 6]

      data.map((pokemon) => {
        let pokemonRecord = getPokemon(pokemon.url);
        //console.log(pokemonRecord);
        return pokemonRecord;
      })
    );
    setPokemonData(_pokemonData);
  }

  const handlePrevPage = async () => {
    if(!prevURL) return;
    setLoading(true);
    let data = await getAllPokemon(prevURL);
    await loadPokemon(data.results);
    setNextURL(data.next);
    setPrevURL(data.previous);
    setLoading(false);
  }

  const handleNextPage = async () => {
    setLoading(true);
    let data = await getAllPokemon(nextURL);
    console.log(data);
    await loadPokemon(data.results);
    setNextURL(data.next);
    setPrevURL(data.previous);
    setLoading(false);
  }

  return (
    <div className="App">
      {loading ? (
        <h1>ロード中</h1>
      ) : <>
        <div className='pokemonCardContainer'>
          {pokemonData.map((pokemon,i) => {
            return <Card key ={i} pokemon = {pokemon}/>;
          })}
        </div>
        <div className='btn'>
          <button onClick = {handlePrevPage}>前へ</button>
          <button onClick = {handleNextPage}>次へ</button>
        </div>
      </>}
    </div>
  );
}

export default App;
