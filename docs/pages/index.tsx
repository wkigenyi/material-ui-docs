import * as React from 'react';
import NoSsr from '@mui/material/NoSsr';
import Divider from '@mui/material/Divider';
import Head from 'docs/src/modules/components/Head';
import AppHeader from 'docs/src/layouts/AppHeader';
import Hero from 'docs/src/components/home/Hero';
import References from 'docs/src/components/home/References';
import ProductSuite from 'docs/src/components/home/ProductSuite';
import ValueProposition from 'docs/src/components/home/ValueProposition';
// import DesignSystemComponents from 'docs/src/components/home/DesignSystemComponents';
import Testimonials from 'docs/src/components/home/Testimonials';
// import Sponsors from 'docs/src/components/home/Sponsors';
import HeroEnd from 'docs/src/components/home/HeroEnd';
import AppFooter from 'docs/src/layouts/AppFooter';
import BrandingCssVarsProvider from 'docs/src/BrandingCssVarsProvider';
import NewsletterToast from 'docs/src/components/home/NewsletterToast';
import AppHeaderBanner from 'docs/src/components/banner/AppHeaderBanner';

export default function Home() {
  return (
    <BrandingCssVarsProvider>
      <Head
        title="BANKAYO: Customizable software for Microfinance and SACCOs"
        description="BANKAYO provides an intuitive interface for building and managing Microfinance products"
      >
        {/* <script
          type="application/ld+json"
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Organization',
              name: 'MUI',
              url: 'https://mui.com/',
              logo: 'https://mui.com/static/logo.png',
              sameAs: [
                'https://twitter.com/MUI_hq',
                'https://github.com/mui/',
                'https://opencollective.com/mui',
              ],
            }),
          }}
        /> */}
      </Head>
      <NoSsr>
        <NewsletterToast />
      </NoSsr>
      <AppHeaderBanner />
      <AppHeader />
      <main id="main-content">
        <Hero />
        <References /* companies={CORE_CUSTOMERS} */ /> 
        <Divider sx={{mt:6}} /> 
        <ProductSuite />
        <Divider /> 
        <ValueProposition />
        <Divider />
        {/* <DesignSystemComponents />
        <Divider /> */}
        <Testimonials />
        <Divider />
        {/* <Sponsors />
        <Divider /> */}
        <HeroEnd />
        <Divider />
      </main>
      <AppFooter />
    </BrandingCssVarsProvider>
  );
}
