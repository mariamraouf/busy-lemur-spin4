import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

// Your Google Analytics Measurement ID
const GA_TRACKING_ID = 'G-RX8CN7DK6H';

const GoogleAnalyticsTracker = () => {
  const location = useLocation();

  useEffect(() => {
    // Ensure gtag is available globally
    if (window.gtag) {
      // Send a page_view event for the new page path
      window.gtag('config', GA_TRACKING_ID, {
        page_path: location.pathname + location.search,
        // You can also send other parameters like page_title if you manage it dynamically
        // page_title: document.title, 
      });
      // Optionally, you can also send a specific 'event' for page_view
      window.gtag('event', 'page_view', {
        page_title: document.title,
        page_location: window.location.href,
        page_path: location.pathname + location.search,
      });
    }
  }, [location]); // Re-run this effect whenever the location changes

  return null; // This component doesn't render anything
};

export default GoogleAnalyticsTracker;