import './../App.css';

import ContainerNavbar from '../components/Navbar/Navbar';
import FilesGrid from '../components/Grids/FilesGrid';
import Footer from '../components/Footer/Footer';
function DashboardPage() {

  return (
    <div className="Dashboard">
      <div>
        <ContainerNavbar/>
        <FilesGrid />
        <Footer/>
      </div>
    </div>
  );
}

export default DashboardPage;