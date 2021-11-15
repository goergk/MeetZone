import TopNavbar from './components/navbars/TopNavbar';
import FilterNavbar from './components/navbars/FilterNavbar';
import Page from './components/pages/PagesRoutes';


function App() {
  return (
    <div className="App">
      <TopNavbar />
      <FilterNavbar />
      <Page />
    </div>
  );
}

export default App;
