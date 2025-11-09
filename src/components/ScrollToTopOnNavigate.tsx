import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTopOnNavigate = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      // If there's a hash, try to scroll to the element with that ID
      const element = document.getElementById(hash.substring(1)); // Remove '#' from the hash
      if (element) {
        // Use a timeout to ensure the page has rendered and the element is in the DOM
        // before attempting to scroll. This can be crucial for dynamic content.
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100); 
      }
    } else {
      // Otherwise, scroll to the top of the page
      window.scrollTo(0, 0);
    }
  }, [pathname, hash]); // Re-run effect when pathname or hash changes

  return null;
};

export default ScrollToTopOnNavigate;