import * as React from 'react';
import Grid from '@mui/material/Grid';
import AddRounded from '@mui/icons-material/AddRounded';
import { IconImageProps } from 'docs/src/components/icon/IconImage';
import { IconButton, Paper, Typography } from '@mui/material';
import Link from 'next/link';
import ClientCard from './ClientCard';


export const CORE_CUSTOMERS: Array<IconImageProps> = [
  {
    alt: 'Spotify logo',
    name: 'companies/spotify',
    width: 100,
    height: 52,
  },
  {
    alt: 'Amazon logo',
    name: 'companies/amazon',
    width: 80,
    height: 52,
  },
  {
    alt: 'Nasa logo',
    name: 'companies/nasa',
    mode: '',
    width: 52,
    height: 42,
  },
  {
    alt: 'Netflix logo',
    name: 'companies/netflix',
    mode: '',
    width: 80,
    height: 52,
  },
  {
    alt: 'Unity logo',
    name: 'companies/unity',
    width: 69,
    height: 52,
  },
  {
    alt: 'Shutterstock logo',
    name: 'companies/shutterstock',
    width: 100,
    height: 52,
  },
];

export const ADVANCED_CUSTOMERS: Array<IconImageProps> = [
  {
    alt: 'Southwest logo',
    name: 'companies/southwest',
    width: 130,
    height: 54,
    style: {
      marginTop: -10,
    },
  },
  {
    alt: 'Boeing logo',
    name: 'companies/boeing',
    width: 160,
    height: 86,
    style: {
      marginTop: -23,
    },
  },
  {
    alt: 'Apple logo',
    name: 'companies/apple',
    width: 29,
    height: 52,
    style: {
      marginTop: -21,
    },
  },
  {
    alt: 'Siemens logo',
    name: 'companies/siemens',
    mode: '',
    width: 119,
    height: 59,
    style: {
      marginTop: -13,
    },
  },
  {
    alt: 'Volvo logo',
    name: 'companies/volvo',
    width: 128,
    height: 52,
    style: {
      marginTop: -11,
    },
  },
  {
    alt: 'Deloitte logo',
    name: 'companies/deloitte',
    width: 97,
    height: 52,
    style: {
      marginTop: -12,
    },
  },
];

export const DESIGNKITS_CUSTOMERS: Array<IconImageProps> = [
  {
    alt: 'Spotify logo',
    name: 'companies/spotify',
    width: 100,
    height: 52,
  },
  {
    alt: 'Amazon logo',
    name: 'companies/amazon',
    width: 80,
    height: 52,
  },
  {
    alt: 'Apple logo',
    name: 'companies/apple',
    width: 29,
    height: 52,
  },
  {
    alt: 'Netflix logo',
    name: 'companies/netflix',
    mode: '',
    width: 80,
    height: 52,
  },
  {
    alt: 'Twitter logo',
    name: 'companies/twitter',
    mode: '',
    width: 31,
    height: 52,
  },
  {
    alt: 'Salesforce logo',
    name: 'companies/salesforce',
    mode: '',
    width: 50,
    height: 52,
  },
];

export const TEMPLATES_CUSTOMERS: Array<IconImageProps> = [
  {
    alt: 'Ebay logo',
    name: 'companies/ebay',
    width: 73,
    height: 52,
  },
  {
    alt: 'Amazon logo',
    name: 'companies/amazon',
    width: 80,
    height: 52,
  },
  {
    alt: 'Samsung logo',
    name: 'companies/samsung',
    mode: '',
    width: 88,
    height: 52,
  },
  {
    alt: 'Patreon logo',
    name: 'companies/patreon',
    width: 103,
    height: 52,
  },
  {
    alt: 'AT&T logo',
    name: 'companies/atandt',
    width: 71,
    height: 52,
  },
  {
    alt: 'Verizon logo',
    name: 'companies/verizon',
    width: 91,
    height: 52,
  },
];

export const CLIENTS = [
  {name:"LVSR",description:"Lake Victoria Serena Staff SACCO"},
  {name:"CENTURION",description:"CENTURION Staff SACCO"},
  {name:"MOTHERCARE",description:"MOTHERCARE P/S Staff SACCO"},
  {name:"JISSOSA",description:"JINJA SS Old Students SACCO"},
  {name:"LIA UGANDA",description:"Love In Action"},
  {name:"AQ",description:"AFRICAN QUEEN Staff SACCO"}
]

export default function ClientsGrid() {
  
  return (
    <Grid container spacing={4}>
      {CLIENTS.map((item) => (
        <Grid key={item.name} item xs={6} md={3}>
          <ClientCard client={item}/>
        </Grid>
      ))}
      <Grid item xs={6} md={3}>      <Paper
            variant="outlined"
            sx={(theme) => ({
              p: 2,
              display: 'flex',
              alignItems: 'center',
              height: '100%',
              borderStyle: 'dashed',
              borderColor: 'grey.300',
              ...theme.applyDarkStyles({
                borderColor: 'primaryDark.400',
              }),
            })}
          >
            <IconButton
              color="primary"
              sx={(theme) => ({
                mr: 2,
                border: '1px solid',
                borderColor: 'grey.300',
                ...theme.applyDarkStyles({
                  borderColor: 'primaryDark.400',
                }),
              })}
            >
              <AddRounded />
            </IconButton>
            <div>
              
              <Typography variant="body2" color="text.secondary">
                Join our list of happy customers {" "}
                <Link href={"/"}>
                  you can support MUI.
                </Link>
              </Typography> 
            </div>
          </Paper>
          </Grid>

    </Grid>
  );
}
