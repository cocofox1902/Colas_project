import { useEffect } from 'react';

function ScrollToTopOnMount() {
  useEffect(() => {
    window.addEventListener('click', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleScroll = () => {
    if (window.scrollY > 0) {
      window.scrollTo(0, 0);
    }
  };

  return null;
}

export default ScrollToTopOnMount;