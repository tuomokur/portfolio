import './css/normalize.css';
import './css/app.css';
import Nav from './components/Nav';
import ContentArea from './components/ContentArea';
import Footer from './components/Footer';

const App = () => {
  return (
    <div className="main-container">
      <Nav />
      <ContentArea />
      <Footer />
    </div>
  );
}

export default App;
