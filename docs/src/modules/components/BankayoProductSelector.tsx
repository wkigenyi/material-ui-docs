import * as React from 'react';
import { alpha } from '@mui/material/styles';
import Box, { BoxProps } from '@mui/material/Box';
import Chip from '@mui/material/Chip';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import IconImage from 'docs/src/components/icon/IconImage';
import ROUTES from 'docs/src/route';
import Link from 'docs/src/modules/components/Link';
import PageContext from 'docs/src/modules/components/PageContext';

interface ProductSubMenuProp extends BoxProps {
  icon: React.ReactNode;
  name: React.ReactNode;
  description: React.ReactNode;
  chip?: React.ReactNode;
}

function ProductSubMenu(props: ProductSubMenuProp) {
  const { icon, name, description, chip, sx = [], ...other } = props;
  return (
    <Box
      {...other}
      sx={[
        {
          width: '100%',
          display: 'flex',
          alignItems: 'center',
          gap: 2,
        },
        ...(Array.isArray(sx) ? sx : [sx]),
      ]}
    >
      <Box
        sx={[
          (theme) => ({
            '& circle': {
              fill: (theme.vars || theme).palette.grey[100],
            },
          }),
          (theme) =>
            theme.applyDarkStyles({
              '& circle': {
                fill: (theme.vars || theme).palette.primaryDark[700],
              },
            }),
        ]}
      >
        {icon}
      </Box>
      <Box sx={{ flexGrow: 1 }}>
        <Typography color="text.primary" variant="body2" fontWeight="700">
          {name}
        </Typography>
        <Typography color="text.secondary" variant="body2">
          {description}
        </Typography>
      </Box>
      {chip}
    </Box>
  );
}

const products = [
  {
    name: 'Bankayo System',
    href: ROUTES.materialDocs,
    id: 'material-ui',
  },
  {
    name: 'Bankayo Self Help App',
    href: ROUTES.joyDocs,
    id: 'joy-ui',
  },  
];

export default function BankayoProductSelector() {
  const pageContext = React.useContext(PageContext);

  return (
    <React.Fragment>
      <Box
        component="li"
        role="none"
        sx={(theme) => ({
          p: 2,
          pr: 3,
          borderBottom: '1px solid',
          borderColor: 'grey.100',
          ...theme.applyDarkStyles({
            borderColor: alpha(theme.palette.primary[100], 0.08),
          }),
        })}
      >
        <ProductSubMenu
          role="menuitem"
          icon={<IconImage name="product-core" />}
          name="BANKAYO Core"
          description="Fully fledged banking system for Microfinance Institutions AND SACCOs"
        />
        <Box sx={{ ml: '36px', pl: 2, pt: 1.5, position: 'relative' }}>
          <Stack
            direction={{ xs: 'column', sm: 'row' }}
            alignItems="flex-start"
            spacing={1}
            sx={{
              '& > .MuiChip-root': {
                position: 'initial',
                '&:hover': {
                  '& .product-description': {
                    opacity: 1,
                  },
                },
              },
            }}
          >
            {products.map((product) => (
              <Chip
                key={product.name}
                color={pageContext.productId === product.id ? 'primary' : undefined}
                variant={pageContext.productId === product.id ? 'filled' : 'outlined'}
                component={Link}
                href={product.href}
                label={product.name}
                clickable
                size="small"
              />
            ))}
          </Stack>
        </Box>
      </Box>
      <li role="none">
        <Link
          href={ROUTES.advancedComponents}
          sx={[
            {
              p: 2,
              pr: 3,
              borderBottom: '1px solid',
              borderColor: 'grey.100',
              width: '100%',
              '&:hover': {
                backgroundColor: 'grey.50',
              },
            },
            (theme) =>
              theme.applyDarkStyles({
                borderColor: alpha(theme.palette.primary[100], 0.08),
                '&:hover': {
                  backgroundColor: alpha(theme.palette.primaryDark[700], 0.4),
                },
              }),
          ]}
        >
          <ProductSubMenu
            role="menuitem"
            icon={<IconImage name="product-advanced" />}
            name="Fineract"
            description="Advanced and powerful components for complex use cases."
          />
        </Link>
      </li>
      <li role="none">
        <Link
          href={ROUTES.toolpadDocs}
          sx={[
            {
              p: 2,
              pr: 3,
              borderBottom: '1px solid',
              borderColor: 'grey.100',
              width: '100%',
              '&:hover': {
                backgroundColor: 'grey.50',
              },
            },
            (theme) =>
              theme.applyDarkStyles({
                borderColor: alpha(theme.palette.primary[100], 0.08),
                '&:hover': {
                  backgroundColor: alpha(theme.palette.primaryDark[700], 0.4),
                },
              }),
          ]}
        >
          <ProductSubMenu
            role="menuitem"
            icon={<IconImage name="product-toolpad" />}
            name="Mifos"
            description="Low-code admin builder."
            
          />
        </Link>
      </li>
    </React.Fragment>
  );
}
