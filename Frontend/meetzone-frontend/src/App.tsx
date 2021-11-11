import TopNavbar from './components/navbars/TopNavbar';
import FilterNavbar from './components/navbars/FilterNavbar';
import CurrentPage from './components/pages/CurrentPage';


function App() {
  return (
    <div className="App">
      <TopNavbar />
      <FilterNavbar />
      <CurrentPage />
    </div>
  );
}

export default App;
