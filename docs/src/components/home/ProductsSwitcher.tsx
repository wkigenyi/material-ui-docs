import * as React from 'react';
import dynamic from 'next/dynamic';
import { Theme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import CreditScoreIcon from '@mui/icons-material/CreditScore'
import CreditCardOffIcon from '@mui/icons-material/CreditCardOff'
import PieChartIcon from '@mui/icons-material/PieChart'
import AssessmentIcon from '@mui/icons-material/Assessment'
import TuneIcon from '@mui/icons-material/Tune'
import SavingsIcon from '@mui/icons-material/Savings'
import { visuallyHidden } from '@mui/utils';
import useMediaQuery from '@mui/material/useMediaQuery';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import KeyboardArrowRightRounded from '@mui/icons-material/KeyboardArrowRightRounded';
// import IconImage from 'docs/src/components/icon/IconImage';
import Highlighter from 'docs/src/components/action/Highlighter';
import Link from 'docs/src/modules/components/Link';
import ROUTES from 'docs/src/route';

const SwipeableViews = dynamic(() => import('react-swipeable-views'), { ssr: false });

function ProductItem({
  label,
  icon,
  name,
  description,
  href,
}: {
  label: string;
  icon: React.ReactNode;
  name: React.ReactNode;
  description: React.ReactNode;
  href: string;
}) {
  return (
    <Box
      component="span"
      sx={{
        display: 'flex',
        p: 2,
        flexDirection: { xs: 'column', md: 'row' },
        alignItems: { md: 'center' },
        gap: 2.5,
      }}
    >
      <span>{icon}</span>
      <span>
        <Typography
          component="span"
          color="text.primary"
          variant="body2"
          fontWeight="bold"
          display="block"
        >
          {name}
        </Typography>
        <Typography
          component="span"
          color="text.secondary"
          variant="body2"
          fontWeight="regular"
          display="block"
          sx={{ my: 0.5 }}
        >
          {description}
        </Typography>
        <Link
          href={href}
          color="primary"
          variant="body2"
          fontWeight="bold"
          sx={{
            display: 'inline-flex',
            alignItems: 'center',
            '& > svg': { transition: '0.2s' },
            '&:hover > svg': { transform: 'translateX(2px)' },
          }}
          onClick={(event: React.MouseEvent<HTMLAnchorElement>) => {
            event.stopPropagation();
          }}
        >
          <span>Learn more</span>{' '}
          <Box component="span" sx={visuallyHidden}>
            {label}
          </Box>
          <KeyboardArrowRightRounded fontSize="small" sx={{ mt: '1px', ml: '2px' }} />
        </Link>
      </span>
    </Box>
  );
}

export default function ProductsSwitcher(props: {
  inView?: boolean;
  productIndex: number;
  setProductIndex: React.Dispatch<React.SetStateAction<number>>;
}) {
  const { inView = false, productIndex, setProductIndex } = props;
  const isBelowMd = useMediaQuery((theme: Theme) => theme.breakpoints.down('md'));
  const productElements = [
    <ProductItem
      label="by going to the loan products page"
      icon={<CreditScoreIcon/>}
      name="Customizable Loan Products"
      description="Loan products are the templates on which your client/group loans are based."
      href={ROUTES.productCore}
    />,
    <ProductItem
      label="by going to savings products page"
      icon={<SavingsIcon />}
      name={
        <Box component="span" sx={{ display: 'inline-flex', alignItems: 'center' }}>
          Savings Products
        </Box>
      }
      description="Savings products define templates for your clients savings accounts."
      href={ROUTES.productAdvanced}
    />,
    <ProductItem
      label="by going to the templates page"
      icon={<PieChartIcon />}
      name="Share products"
      description="Define templates for your share accounts"
      href={ROUTES.productTemplates}
    />,
    <ProductItem
      label="by going to the design-kits page"
      icon={<CreditCardOffIcon />}
      name="Product Charges"
      description="Configure your product charges"
      href={ROUTES.productDesignKits}
    />,
    <ProductItem
      label="by going to the design-kits page"
      icon={<AssessmentIcon />}
      name="Robust Accounting & Reporting"
      description="Accounting tools to streamline your financial reporting"
      href={ROUTES.productDesignKits}
    />,
    
    <ProductItem
      label="by going to the design-kits page"
      icon={<TuneIcon />}
      name="All the needed customizations"
      description="Generate transaction reciepts, Customer Self Help App"
      href={ROUTES.productDesignKits}
    />,
    
  ];
  return (
    <React.Fragment>
      <Box
        sx={{
          display: { md: 'none' },
          maxWidth: 'calc(100vw - 40px)',
          minHeight: { xs: 200, sm: 166 },
          '& > div': { pr: '32%' },
        }}
      >
        {isBelowMd && inView && (
          <SwipeableViews
            index={productIndex}
            resistance
            enableMouseEvents
            onChangeIndex={(index) => setProductIndex(index)}
          >
            {productElements.map((elm, index) => (
              <Highlighter
                key={index}
                disableBorder
                onClick={() => setProductIndex(index)}
                selected={productIndex === index}
                sx={{
                  width: '100%',
                  transition: '0.3s',
                  transform: productIndex !== index ? 'scale(0.9)' : 'scale(1)',
                }}
              >
                {elm}
              </Highlighter>
            ))}
          </SwipeableViews>
        )}
      </Box>
      <Stack spacing={1} sx={{ display: { xs: 'none', md: 'flex' }, maxWidth: 500 }}>
        {productElements.map((elm, index) => (
          <Highlighter
            key={index}
            disableBorder
            onClick={() => setProductIndex(index)}
            selected={productIndex === index}
          >
            {elm}
          </Highlighter>
        ))}
      </Stack>
    </React.Fragment>
  );
}
