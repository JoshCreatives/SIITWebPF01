import './index.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import QuickAccess from './components/QuickAccess';
import Blog from './components/Blog';
import Features from './components/Features';
import AdmissionRequirements from './components/AdmissionRequirements';
import OnlineApplication from './components/OnlineApplication';
import AlternativePayment from './components/AlternativePayment';
import FinancialAid from './components/FinancialAid';
import EnrollmentBanner from './components/EnrollmentBanner';
import VideoShowcase from './components/VideoShowcase';
import PresidentBanner from './components/PresidentBanner';
import CollegePrograms from './components/CollegePrograms';
import SeniorHighPrograms from './components/SeniorHighPrograms';
import CampusLife from './components/CampusLife';
import BlogPage from './components/BlogPage';
import History from './components/History';
import Footer from './components/Footer';
import Administration from './components/Administration';
import AlumniStories from './components/AlumniStories';
import AlumniAssociation from './components/AlumniAssociation';
import QualityManagement from './components/QualityManagement';
import PresidentProfile from './components/PresidentProfile';
import CampusSafety from './components/CampusSafety';
import SIITFoundation from './components/SIITFoundation';
import BlogPostView from './components/BlogPostView';


function App() {
  // Get the current path
  const path = window.location.pathname;

  const renderContent = () => {
    if (path.startsWith('/blog/') && path !== '/blog') {
      return <BlogPostView />;
    }

    switch (path) {
      case '/admissions/requirements':
        return <AdmissionRequirements />;
      case '/admissions/apply':
        return <OnlineApplication />;
      case '/admissions/payment':
        return <AlternativePayment />;
      case '/admissions/financial-aid':
        return <FinancialAid />;
      case '/programs/college':
        return <CollegePrograms />;
      case '/programs/shs':
        return <SeniorHighPrograms />;
      case '/campus-life':
        return <CampusLife />;
      case '/blog':
        return <BlogPage />;
      case '/about/history':
        return <History />
      case '/about/administration':
        return <Administration />;
      case '/alumni/stories':
        return <AlumniStories />;
      case '/alumni/association':
        return <AlumniAssociation />;
      case '/about/quality':
        return <QualityManagement />;
      case '/about/president':
        return <PresidentProfile />;
      case '/about/safety':
        return <CampusSafety />;
      case '/about/foundation':
        return <SIITFoundation />;
      default:
        return (
          <>
            <Hero />
            <EnrollmentBanner />
            <PresidentBanner />
            <QuickAccess />
            <Blog />
            <VideoShowcase />
            <Features />
          </>
        );
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 text-gray-200">
      <Navbar />
      <main>
        {renderContent()}
      </main>
      <Footer />
      <footer className="bg-green-900 py-8">
        <div className="max-w-7xl mx-auto px-4 text-center text-gray-300">
          <p>© 2024 SIIT. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}


export default App;
