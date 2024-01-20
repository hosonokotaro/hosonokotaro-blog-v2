import { usePathname } from 'next/navigation';
import { useEffect, useRef } from 'react';

import googleAnalytics from '~/services/googleAnalytics';

const useGoogleAnalytics = () => {
  const pagePath = usePathname();
  const isLoadedGoogleAnalytics = useRef(false);

  useEffect(() => {
    if (!isLoadedGoogleAnalytics.current) {
      googleAnalytics(pagePath);
    }

    isLoadedGoogleAnalytics.current = true;
  }, [pagePath]);
};

export default useGoogleAnalytics;
