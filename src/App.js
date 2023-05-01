import './App.css';
import FilesGrid from './components/Grids/FilesGrid';
import ContainerNavbar  from './components/Navbar/Navbar'
function App() {

  return (
    <div className="App">
      <ContainerNavbar />
      <div className='card mx-4 my-4'>
         <FilesGrid />
      </div>
    </div>
  );
}

export default App;
