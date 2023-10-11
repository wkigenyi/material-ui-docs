import * as React from 'react';
import { useInView } from 'react-intersection-observer';
import Paper from '@mui/material/Paper';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import AddRounded from '@mui/icons-material/AddRounded';
import Grid from '@mui/material/Grid';
// import SponsorCard from 'docs/src/components/home/SponsorCard';
import Link from 'docs/src/modules/components/Link';
import ROUTES from 'docs/src/route';
import ClientCard from './ClientCard';

/* const GOLDs = [
  {
    src: '/static/sponsors/tidelift.svg',
    srcSet: '/static/sponsors/tidelift.svg',
    name: 'Tidelift',
    description: 'Enterprise-ready open-source software.',
    href: 'https://tidelift.com/subscription/pkg/npm-material-ui?utm_source=npm-material-ui&utm_medium=referral&utm_campaign=homepage',
  },
  {
    src: 'https://avatars.githubusercontent.com/u/1262264?size=40',
    srcSet: 'https://avatars.githubusercontent.com/u/1262264?s=80 2x',
    name: 'Text-em-all',
    description: 'The easy way to message your group.',
    href: 'https://www.text-em-all.com/?utm_source=MUI&utm_medium=referral&utm_content=homepage',
  },
  {
    src: 'https://images.opencollective.com/spotify/f37ea28/logo/40.png',
    srcSet: 'https://images.opencollective.com/spotify/f37ea28/logo/80.png 2x',
    name: 'Spotify',
    description: 'Music service to access to millions of songs.',
    href: 'https://open.spotify.com?utm_source=MUI&utm_medium=referral&utm_content=homepage',
  },
  {
    src: '/static/sponsors//megafamous.png',
    name: 'MegaFamous',
    description: 'Buy Instagram followers & likes.',
    href: 'https://megafamous.com/?utm_source=MUI&utm_medium=referral&utm_content=homepage',
  },
  {
    src: 'https://images.opencollective.com/dialmycalls/f5ae9ab/avatar/40.png',
    srcSet: 'https://images.opencollective.com/dialmycalls/f5ae9ab/avatar/80.png 2x',
    name: 'DialMyCalls',
    description: 'Send text messages, calls to thousands.',
    href: 'https://www.dialmycalls.com/?utm_source=MUI&utm_medium=referral&utm_content=homepage',
  },
  {
    src: 'https://images.opencollective.com/goread_io/eb6337d/logo/40.png',
    srcSet: 'https://images.opencollective.com/goread_io/eb6337d/logo/80.png 2x',
    name: 'Goread.io',
    description: 'Instagram followers, likes, views, comments.',
    href: 'https://goread.io/?utm_source=MUI&utm_medium=referral&utm_content=homepage',
  },
  {
    src: 'https://images.opencollective.com/icons8/7fa1641/logo/40.png',
    srcSet: 'https://images.opencollective.com/icons8/7fa1641/logo/80.png 2x',
    name: 'Icons8',
    description: 'Icons, illustrations, design tools, and more.',
    href: 'https://icons8.com?utm_source=MUI&utm_medium=referral&utm_content=homepage',
  },
];
 */
const CLIENTS = [
  {name:"LVSR",description:"Lake Victoria Serena Staff SACCO"},
  {name:"CENTURION",description:"CENTURION Staff SACCO"},
  {name:"MOTHERCARE",description:"MOTHERCARE P/S Staff SACCO"},
  {name:"JISSOSA",description:"JINJA SS Old Students SACCO"},
  {name:"LIA UGANDA",description:"Love In Action"},
  {name:"AFRICAN QUEEN",description:"AFRICAN QUEEN Staff SACCO"}
]

export default function BankayoClients() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0,
    rootMargin: '500px',
  });
  return (
    <div ref={ref}>
      {/* <Typography
        component="h3"
        variant="h6"
        fontWeight="bold"
        sx={(theme) => ({
          mt: 4,
          mb: 1.5,
          background: `linear-gradient(90deg, ${(theme.vars || theme).palette.warning[500]} 50%, ${
            (theme.vars || theme).palette.warning[700]
          } 100%)`,
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          ...theme.applyDarkStyles({
            background: `linear-gradient(90deg, ${
              (theme.vars || theme).palette.warning[400]
            } 50%, ${(theme.vars || theme).palette.warning[700]} 100%)`,
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }),
        })}
      >
        Gold
      </Typography> */}
      <Grid container spacing={{ xs: 2, md: 3 }}>
        {CLIENTS.map((item) => (
          <Grid item key={item.name} xs={12} sm={6} md={4} lg={3}>
            <ClientCard inView={inView} item={item} />
          </Grid>
        ))}
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <Paper
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
              aria-label="Sponsor MUI"
              component="a"
              href={ROUTES.goldSponsor}
              target="_blank"
              rel="noopener noreferrer"
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
              <Typography variant="body2" color="text.primary" fontWeight="bold">
                Let BANKAYO work for you
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Find out how{' '}
                <Link href={ROUTES.goldSponsor} target="_blank" rel="noopener noreferrer">
                  Book a demo today.
                </Link>
              </Typography>
            </div>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}
