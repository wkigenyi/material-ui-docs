import * as React from 'react';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import InvertColorsRoundedIcon from '@mui/icons-material/InvertColorsRounded';
import HandymanRoundedIcon from '@mui/icons-material/HandymanRounded';
import NavigationRoundedIcon from '@mui/icons-material/NavigationRounded';
import ArticleRoundedIcon from '@mui/icons-material/ArticleRounded';
// import AccessibilityNewRounded from '@mui/icons-material/AccessibilityNewRounded';
import GradientText from 'docs/src/components/typography/GradientText';
import Section from 'docs/src/layouts/Section';
import SectionHeadline from 'docs/src/components/typography/SectionHeadline';
import InfoCard from 'docs/src/components/action/InfoCard';

const content = [
  {
    icon: <InvertColorsRoundedIcon fontSize="small" color="primary" />,
    title: 'Modern Customizable UI',
    description:
      "Built to make work easy for you. Start with what we have built, ask for customizations along the way",
  },
  {
    icon: <HandymanRoundedIcon fontSize="small" color="primary" />,
    title: 'Unlimited customization',
    description:
      'BANKAYO works for you. Let us discuss your operations and encapsulate them into BANKAYO',
  },
  {
    icon: <ArticleRoundedIcon fontSize="small" color="primary" />,
    title: 'Online documentation',
    description:
      'Stuck on how to carry out a task, checkout the online documentation',
  },
  {
    icon: <NavigationRoundedIcon fontSize="small" color="primary" />,
    title: 'Navigate easily and quickly',
    description:
      "BANKAYO is complex and robust, navigating it is easy and straight forward",
  },
];

function ValueProposition() {
  return (
    <Section>
      <SectionHeadline
        overline="Why choose BANKAYO?"
        title={
          <Typography variant="h2" sx={{ mt: 1, mb: { xs: 2, sm: 4 }, maxWidth: 500 }}>
            A <GradientText>delightful experience</GradientText> <br />
            for you and your clients
          </Typography>
        }
      />
      <Grid container spacing={3}>
        {content.map(({ icon, title, description }) => (
          <Grid key={title} item xs={12} sm={3}>
            <InfoCard title={title} icon={icon} description={description} />
          </Grid>
        ))}
      </Grid>
    </Section>
  );
}

export default ValueProposition;
