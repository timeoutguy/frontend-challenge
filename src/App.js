import axios from 'axios';
import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Table from './components/Table';

function App() {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState('');
  const [dataFiltered, setDataFiltered] = useState(data);

  useEffect(async () => {
    const response = await axios.get('https://randomuser.me/api/?results=50');
    setData(response.data.results);
    setDataFiltered(response.data.results);
  }, []);

  useEffect(() => {
    const value = search.toLowerCase();
    let result = [];

    result = data.filter((data) => data.name.first.toLowerCase().search(value) != -1
      || data.name.last.toLowerCase().search(value) != -1);

    setDataFiltered(result);
  }, [search]);

  return (
    <>
      <Header />
      <div className="flex flex-col px-64 py-4 mt-20">
        <p className="text-justify text-lg text-gray-900"> Ea amet non minim pariatur proident ipsum quis fugiat esse irure velit. Duis laborum Lorem amet officia anim. Ipsum commodo id et voluptate excepteur est fugiat minim fugiat ut voluptate ad fugiat.</p>
        <input className="mt-8 border border-gray-600 rounded p-2" type="text" placeholder="Searching" value={search} onChange={(e) => setSearch(e.target.value)} />
        <Table data={dataFiltered} />
      </div>
    </>
  );
}

export default App;
