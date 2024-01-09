import DynamicList from './Components/Dynamic-List-Component';
import data from './data'
function App() {
  return (
    // prop drilled data and type settings. change type to 'ul' / 'ol' for unordered list or ordered list
   <DynamicList data={data} type={'ol'}/>
  );
}

export default App;
