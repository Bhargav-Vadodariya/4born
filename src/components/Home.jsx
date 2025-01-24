import Navbar from './mainpage/Navbar';
import Landingpage from './mainpage/Landingpage';
import Vision from './mainpage/Vision';
import Chooseus from './mainpage/Chooseus';
import Aboutus from './mainpage/Aboutus';
import Workprocess from './mainpage/Workprocess';
import Contactus from './mainpage/Contactus';
import Footer from './mainpage/Footer';


function Home() {
  return (
    <div>
      <Navbar />
      <Landingpage />
      <Vision />
      <Chooseus />
      <Aboutus />
      <Workprocess />
      <Contactus />
      <Footer />
    </div>
  );
}

export default Home;
