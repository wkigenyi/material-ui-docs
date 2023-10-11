import * as React from 'react';
import dynamic from 'next/dynamic';
import { useInView } from 'react-intersection-observer';
import Grid from '@mui/material/Grid';
import Box /* { BoxProps } */ from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Section from 'docs/src/layouts/Section';
import GradientText from 'docs/src/components/typography/GradientText';
import ProductsSwitcher from 'docs/src/components/home/ProductsSwitcher';
import { PrefetchStoreTemplateImages } from 'docs/src/components/home/StoreTemplatesBanner';
import { PrefetchDesignKitImages } from 'docs/src/components/home/DesignKits';
import SectionHeadline from 'docs/src/components/typography/SectionHeadline';
import { PrefetchLoanProductImages } from './LoanProductShowCasing';
import { PrefetchSavingsProductImages } from './SavingsProductShowCasing';
import { PrefetchShareProductImages } from './ShareProductShowCasing';
import { PrefetchChargesImages } from './ChargesCasing';
import { PrefetchReportingImages } from './ReportsShowCasing';
import { PrefetchOtherImages } from './OtherShowCasing';
/* 
function createLoading(sx: BoxProps['sx']) {
  return function Loading() {
    return (
      <Box
        sx={[
          (theme) => ({
            borderRadius: 1,
            bgcolor: 'grey.100',
            ...theme.applyDarkStyles({
              bgcolor: 'primaryDark.800',
            }),
          }),
          ...(Array.isArray(sx) ? sx : [sx]),
        ]}
      />
    );
  };
} */

/* const CoreShowcase = dynamic(() => import('./CoreShowcase'), {
  loading: createLoading({ height: 723, mt: { md: 2 } }),
}); */
/* const AdvancedShowcase = dynamic(() => import('./AdvancedShowcase'), {
  loading: createLoading({ height: 750, mt: { md: 2 } }),
}); */
// const StoreTemplatesBanner = dynamic(() => import('./StoreTemplatesBanner'));
const LoanProductShowCasing = dynamic(() => import('./LoanProductShowCasing'));
const SavingsProductShowCasing = dynamic(() => import('./SavingsProductShowCasing'));
const ShareProductShowCasing = dynamic(() => import('./ShareProductShowCasing'));
const ChargesShowCasing = dynamic(() => import('./ChargesCasing'));
const ReportShowCasing = dynamic(() => import('./ReportsShowCasing'));
const OtherShowCasing = dynamic(() => import('./OtherShowCasing'));

function ProductSuite() {
  const [productIndex, setProductIndex] = React.useState(0);
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0,
    rootMargin: '200px',
  });
  return (
    <Section bg="gradient" ref={ref}>
      <Grid container spacing={2}>
        <Grid item md={6}>
          <Box sx={{ maxWidth: 500 }}>
            <SectionHeadline
              overline="Products"
              title={
                <Typography variant="h2" sx={{ my: 1 }}>
                  Everything you need to run  <GradientText> Microfinance</GradientText>
                </Typography>
              }
              description="BANKAYO is built to with all the tools to enable you run your Microfinance efficiently."
            />
          </Box>
          <Box sx={{ mt: 4 }} />
          <ProductsSwitcher
            inView={inView}
            productIndex={productIndex}
            setProductIndex={setProductIndex}
          />
        </Grid>
        <Grid
          item
          xs={12}
          md={6}
          sx={productIndex === 0 ? { minHeight: { xs: 777, sm: 757, md: 'unset' } } : {}}
        >
          {inView && (
            <React.Fragment>
              <PrefetchStoreTemplateImages />
              <PrefetchDesignKitImages />
              <PrefetchLoanProductImages/>
              <PrefetchSavingsProductImages/>
              <PrefetchShareProductImages/>
              <PrefetchChargesImages/>
              <PrefetchReportingImages/>
              <PrefetchOtherImages/>
              {productIndex === 0 && <LoanProductShowCasing />}
              {productIndex === 1 && <SavingsProductShowCasing />}
              {productIndex === 2 && <ShareProductShowCasing />}
              {productIndex === 3 && <ChargesShowCasing />}
              {productIndex === 4 && <ReportShowCasing />}
              {productIndex === 5 && <OtherShowCasing />}
            </React.Fragment>
          )}
        </Grid>
      </Grid>
    </Section>
  );
}

export default ProductSuite;
