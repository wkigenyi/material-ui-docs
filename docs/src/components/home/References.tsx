import * as React from 'react';
// import dynamic from 'next/dynamic';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Section from 'docs/src/layouts/Section';
import {
  CORE_CUSTOMERS,
  ADVANCED_CUSTOMERS,
  DESIGNKITS_CUSTOMERS,
  TEMPLATES_CUSTOMERS,
} from 'docs/src/components/home/CompaniesGrid';
// import ClientsGrid from './ClientsGrid';
import BankayoClients from './BankayoClients';

export { CORE_CUSTOMERS, ADVANCED_CUSTOMERS, DESIGNKITS_CUSTOMERS, TEMPLATES_CUSTOMERS };

// const CompaniesGrid = dynamic(() => import('./CompaniesGrid'));

export default function References() {
  return (
    <Section>
      <Box sx={{ minHeight: { xs: 236, sm: 144, md: 52 } }}>
        <BankayoClients  />
      </Box>
      <Typography
        textAlign="center"
        variant="body2"
        color="text.secondary"
        sx={{
          mt: 4,
          mx: 'auto',
          maxWidth: 400,
          minHeight: 42, // hard-coded to reduce CLS (layout shift)
        }}
      >
        We have worked with some of fastest growing cooperatives.
      </Typography>
    </Section>
  );
}
