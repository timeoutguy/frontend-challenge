import Header from './components/Header';
import logo from './logo.svg';

function App() {
  return (
    <>
      <Header/>
      <div className="flex flex-col px-64 mt-24 justify-center center">
        <p className="text-justify text-lg text-gray-900"> Ea amet non minim pariatur proident ipsum quis fugiat esse irure velit. Duis laborum Lorem amet officia anim. Ipsum commodo id et voluptate excepteur est fugiat minim fugiat ut voluptate ad fugiat.</p>
        <input className="mt-8 border border-gray-600 rounded p-2" type="text" placeholder="Searching"/>
      </div>
    </>
  );
}

export default App;
