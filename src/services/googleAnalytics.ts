const googleAnalytics = (pagePath: string) => {
  window.gtag(
    'config',
    process.env.NODE_ENV === 'production'
      ? process.env.NEXT_PUBLIC_ANALYTICS_ID || ''
      : '',
    {
      page_path: pagePath,
    }
  );
};

export default googleAnalytics;
