import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { LandingPage } from './pages/LandingPage';
import { CustomizationPage } from './pages/CustomizationPage';
import { CheckoutPage } from './pages/CheckoutPage';
import { OrderSuccessPage } from './pages/OrderSuccessPage';
import { AdminDashboardPage } from './pages/AdminDashboardPage';
import { LegalPage } from './pages/LegalPage';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';

function App() {
  const location = useLocation();
  const isAdmin = location.pathname.startsWith('/admin');
  const isCustomize = location.pathname === '/customize';
  const isCheckout = location.pathname.startsWith('/checkout');
  const isSuccess = location.pathname === '/success';
  const showNavbar = !isAdmin && !isCustomize && !isCheckout && !isSuccess;
  return (
    <>
      {showNavbar && <Navbar />}
      <main className="min-h-screen relative">
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<LandingPage />} />
            <Route path="/customize" element={<CustomizationPage />} />
            <Route path="/checkout" element={<CheckoutPage />} />
            <Route path="/success" element={<OrderSuccessPage />} />
            <Route path="/legal" element={<LegalPage />} />
            <Route path="/admin" element={<AdminDashboardPage />} />
          </Routes>
        </AnimatePresence>
      </main>
      {!isAdmin && !isCustomize && !isCheckout && !isSuccess && <Footer />}
    </>
  );
}

export default App;
