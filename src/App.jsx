import DynamicList from './Components/Dynamic-List-Component';
import data from './data'
function App() {
  return (
   <DynamicList data={data} type={'ol'}/>
  );
}

export default App;
