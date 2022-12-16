import { Grid } from '@mantine/core';

import ChartComp from '../components/main-page/ChartComp';
import TimelineComp from '../components/main-page/TimelineComp';

export default function Home() {
  return (
    <>
      <Grid>
        <Grid.Col sm={12} md={6}>
          <TimelineComp />
        </Grid.Col>
        <Grid.Col
          md={6}
          sx={{
            '@media (max-width: 755px)': {
              display: 'none',
            },
          }}
        >
          <ChartComp />
        </Grid.Col>
      </Grid>

      <h1>hell</h1>
    </>
  );
}
