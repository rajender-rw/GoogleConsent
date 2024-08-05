export const pageview = (GA_MEASUREMENT_ID, url) => {
  try {
    if (window.gtag) {
      window.gtag("config", GA_MEASUREMENT_ID, {
        page_path: url,
      });
    }
} catch (error) {
  console.error(error);
}
};