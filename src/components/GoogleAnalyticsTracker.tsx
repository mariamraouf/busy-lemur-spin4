import { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';

// Your Google Analytics Measurement ID
const GA_TRACKING_ID = 'G-RX8CN7DK6H';

const GoogleAnalyticsTracker = () => {
  const location = useLocation();
  const isInitialMount = useRef(true); // To track initial mount

  useEffect(() => {
    if (window.gtag) {
      // Always send a page_view event when the location changes or on initial mount
      // The 'config' call in index.html should handle initial setup, but this ensures an event is sent.
      window.gtag('event', 'page_view', {
        page_title: document.title,
        page_location: window.location.href,
        page_path: location.pathname + location.search,
      });

      // If it's the initial mount, also ensure the config is set (redundant but safe)
      if (isInitialMount.current) {
        window.gtag('config', GA_TRACKING_ID, {
          page_path: location.pathname + location.search,
        });
        isInitialMount.current = false;
      }
    }
  }, [location]); // Re-run this effect whenever the location changes

  return null; // This component doesn't render anything
};

export default GoogleAnalyticsTracker;