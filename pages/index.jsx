import { Divider, Grid } from '@mantine/core';
import Assignments from '../components/main-page/Assignments';

import ChartComp from '../components/main-page/ChartComp';
import ClassSchedule from '../components/main-page/ClassSchedule';
import NotifsComp from '../components/main-page/NotifsComp';
import TimelineComp from '../components/main-page/TimelineComp';
import Unknown from '../components/main-page/Unknown';
import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <title>صفحه اصلی</title>
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
      </Head>
      <Divider
        mb='xl'
        label='آخرین وضعیت تحصیلی'
        labelPosition='center'
        size='md'
      />
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
        <Grid.Col sm={12} md={4}>
          <ClassSchedule />
        </Grid.Col>
        <Grid.Col sm={12} md={4}>
          <Assignments />
        </Grid.Col>
        <Grid.Col sm={12} md={4}>
          <Unknown />
        </Grid.Col>
      </Grid>

      <Divider
        mb='xl'
        mt='xl'
        label='اعلانات'
        labelPosition='center'
        size='md'
      />

      <NotifsComp />
    </>
  );
}
