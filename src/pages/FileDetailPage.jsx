import './../App.css';

import ContainerNavbar from '../components/Navbar/Navbar';
import FileDetails from '../components/Detail/FileDetails'
import Footer from '../components/Footer/Footer';

function FileDetailPage() {

  return (
    <div className="FileDetailPage">
      <ContainerNavbar />
      <FileDetails />
      <Footer/>
    </div>
  );
}

export default FileDetailPage;