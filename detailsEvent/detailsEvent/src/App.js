// import VideoEvent from "./event/VideoEvent"
import EventPost from './event/EventPost';
import Footer from './footer/Footer';
import Header from './header/Header';

function App() {
  return (
   <div className='details'>
   <Header/>
   {/* <VideoEvent/> */}
   <EventPost/>
   <Footer/>
   </div>
  );
}

export default App;
