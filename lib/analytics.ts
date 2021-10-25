import splitbee from '@splitbee/web';
import { useEffect } from 'react';

export const useAnalytics = () => {
  useEffect(() => {
    if (process.env.NODE_ENV === 'production') {
      splitbee.init({
        token: process.env.NEXT_PUBLIC_SPLITBEE_TOKEN
      });
    }
  }, []);
};
