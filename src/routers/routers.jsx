import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '../pages/home';
import Contact from '../pages/contact';
import About from '../apis/GET_about';
import Civilization from '../apis/GET_civilization';
import History from '../apis/GET_history';
import NotFound from '../pages/404';
import Art from '../apis/GET_art';
import { Footer, NavigationBar } from '../components/templates';

const Routers = (index) => {

    const template = index?.index?.result?.items;
    const navbar = index?.index?.result?.sites;

    return(
        <div className="div">
        <BrowserRouter>
            <NavigationBar index={navbar}/>
                <Routes>
                    <Route path='/' element={<Home index={template} />} />
                    <Route path='/history' element={<History />} />
                    <Route path='/civilization' element={<Civilization />} />
                    <Route path='/art' element={<Art />} />
                    <Route path='/about' element={<About />} />
                    <Route path='/contact' element={<Contact index={navbar}/>} />
                    <Route path='*' element={<NotFound />} />
                </Routes>
            <Footer/>
        </BrowserRouter>
        </div>
    )
}

export default Routers;