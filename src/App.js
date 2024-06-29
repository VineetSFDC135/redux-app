import './App.css';
import User from './User';
function App() {
  const usrLst=[{id:'111',name:'aaa',age:10},
    {id:'222',name:'bbb',age:20},
    {id:'333',name:'ccc',age:30}];
  return (
    <div className="App">
     <h1>This is the header App component for User</h1>
     
     <User data={usrLst}></User>
    </div>
  );
}

export default App;
