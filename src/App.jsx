import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import HomePage from './pages/Home';
import KontaktPage from './pages/Kontakt';
import ImpressumPage from './pages/Impressum';
import DatenschutzPage from './pages/Datenschutz';
import MemberPage from './pages/Member';
import SpendenPage from './pages/Spenden';
import VisionPage from './pages/Vision';
import UmbauPage from './pages/Umbau';
import EventPage from './pages/Event';
import FotogaleriePage from './pages/Fotogalerie';
import Teaser5Page from './pages/Teaser5';
import KoopPage from './pages/Koop';
import VirtualPage from './pages/Virtual';

import './App.css';

const router = createBrowserRouter ([
  { path: '/', element: <HomePage /> },
  { path: '/kontakt', element: <KontaktPage /> },
  { path: '/impressum', element: <ImpressumPage /> },
  { path: '/datenschutz', element: <DatenschutzPage /> },
  { path: '/mitglied-werden', element: <MemberPage /> },
  { path: '/spenden', element: <SpendenPage /> },
  { path: '/vision', element: <VisionPage /> },
  { path: '/umbauarbeiten', element: <UmbauPage /> },
  { path: '/veranstaltungen', element: <EventPage /> },
  { path: '/fotogalerie', element: <FotogaleriePage /> },
  { path: '/teaser5', element: <Teaser5Page /> },
  { path: '/Kooperationspartner_innen', element: <KoopPage /> },
  { path: '/rundgang', element: <VirtualPage /> },
]);

function App() {
  return (
    <RouterProvider router={router} />
  )
}

export default App;
