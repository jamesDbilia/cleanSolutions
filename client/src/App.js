import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from 'react-router-dom';

import Industry from './pages/Industry';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import About from './pages/About';
// import AppShell from './common/AppShell';
// import Loader from './components/Loader';
import { Provider } from 'react-redux';
import store from './utils/store';
import Contact from './pages/Contact';
import Careers from './pages/Careers';
import CareerTable from './pages/CareerTable';
import ScrollToTop from './utils/ScreenPosition';
import Application from './pages/Application';
import ApplicationSuccess from './pages/ApplicationSuccess';
import ContactSuccess from './pages/ContactSuccess';

// const LoadingFallback = () => (
//   <AppShell>
//     <Loader />
//   </AppShell>
// );
const AppRoutes = () => (
  <>
    <ScrollToTop>
      <NavBar />
      {/* <Suspense fallback={<LoadingFallback />}> */}
      <Switch>
        <Route exact path='/contact'>
          <Contact />
        </Route>
        <Route exact path='/applicationSuccess'>
          <ApplicationSuccess />
        </Route>
        <Route exact path='/contactSuccess'>
          <ContactSuccess />
        </Route>

        <Route exact path='/listings'>
          <CareerTable />
        </Route>
        <Route exact path='/apply'>
          <Application />
        </Route>

        <Route exact path='/careers'>
          <Careers />
        </Route>
        <Route exact path='/industry'>
          <Industry />
        </Route>

        <Route exact path='/'>
          <About />
        </Route>
        {/* 
        <Redirect from='/*' to='/' /> */}
      </Switch>
      {/* </Suspense> */}
      <Footer />
    </ScrollToTop>
  </>
);

function App() {
  return (
    <Router>
      <Provider store={store}>
        <AppRoutes />
      </Provider>
    </Router>
  );
}

export default App;
