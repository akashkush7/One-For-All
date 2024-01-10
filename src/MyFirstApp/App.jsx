import React from 'react';
import NavBar from './NavBar';
import { Route, Routes, Navigate } from 'react-router-dom';
import Common from "./Common";
import Services from "./Services"
import Contact from './Contact';
import Data, { OperatingSystems, Jobs, Hosting, Shops, BookHotels, OrderFood, BankingOffers, Training, Games, Degrees, ebooks, Travel, HomeInfo, AboutInfo } from "./Api";

const App = () => {
    return (
        <>
            <NavBar />
            <Routes>
                <Route exact path='/' element={<Common name={HomeInfo.name} url={HomeInfo.url} btnname={HomeInfo.btnname} about={HomeInfo.about} />} />
                <Route exact path='/services' element={<Services name={Data} title="Our Services" about="Explore all Services" />} />
                <Route exact path='/services/os' element={<Services name={OperatingSystems} title={Data[0].title} about={Data[0].about} />} />
                <Route exact path='/services/jobs' element={<Services name={Jobs} title={Data[7].title} about={Data[7].about} />} />
                <Route exact path='/services/hosting' element={<Services name={Hosting} title={Data[11].title} about={Data[11].about} />} />
                <Route exact path='/services/shops' element={<Services name={Shops} title={Data[1].title} about={Data[1].about} />} />
                <Route exact path='/services/bookhotels' element={<Services name={BookHotels} title={Data[3].title} about={Data[3].about} />} />
                <Route exact path='/services/orderfood' element={<Services name={OrderFood} title={Data[4].title} about={Data[4].about} />} />
                <Route exact path='/services/bankoffers' element={<Services name={BankingOffers} title={Data[5].title} about={Data[5].about} />} />
                <Route exact path='/services/training' element={<Services name={Training} title={Data[6].title} about={Data[6].about} />} />
                <Route exact path='/services/games' element={<Services name={Games} title={Data[8].title} about={Data[8].about} />} />
                <Route exact path='/services/edegrees' element={<Services name={Degrees} title={Data[9].title} about={Data[9].about} />} />
                <Route exact path='/services/ebooks' element={<Services name={ebooks} title={Data[10].title} about={Data[10].about} />} />
                <Route exact path='/services/travel' element={<Services name={Travel} title={Data[2].title} about={Data[2].about} />} />
                <Route exact path='/contact' element={<Contact />} />
                <Route exact path='/about' element={<Common name={AboutInfo.name} url={AboutInfo.url} btnname={AboutInfo.btnname} about={AboutInfo.about} />} />
                <Route path="*" element=<Navigate to="/" replace={true} /> />
            </Routes>
        </>
    );
};

export default App