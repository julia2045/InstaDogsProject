import React from 'react';

const UseMedia = (media) => {
  const [match, setMatch] = React.useState(null);

  React.useEffect(() => {
    const mediaQuery = window.matchMedia(media);
    setMatch(mediaQuery.matches); // valor inicial

    function change() {
      setMatch(mediaQuery.matches);
    }

    // Escuta mudança no matchMedia
    mediaQuery.addEventListener('change', change);

    // Cleanup
    return () => {
      mediaQuery.removeEventListener('change', change);
    };
  }, [media]);

  return match;
};

export default UseMedia;
