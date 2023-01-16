import Bill from './Components/Bill';
import MenuList from './Components/MenuList';
import { data } from './data';

function App() {
  return (
    <div className="flex flex-col md:flex-row flex-wrap px-8">
      <MenuList data={data} />
      <Bill />
    </div>
  );
}

export default App;
