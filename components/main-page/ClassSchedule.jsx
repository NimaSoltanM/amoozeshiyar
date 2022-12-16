import {
  Paper,
  Notification,
  Box,
  Group,
  Grid,
  Stack,
  Text,
  Flex,
  Badge,
  ActionIcon,
  Divider,
} from '@mantine/core';

import { GoLocation } from 'react-icons/go';

const ClassSchedule = () => {
  const scheduleData = [
    {
      sHour: '15:30',
      eHour: '18:00',
      field: 'کامپیوتر و فناوری اطلاعات',
      badgeColor: 'blue',
      title: 'محیط های چند رسانه ای',
      professor: 'رامین رضوانی',
      location: 'سایت 5',
    },
    {
      sHour: '11:00',
      eHour: '12:30',
      field: 'عمومی',
      badgeColor: 'yellow',
      title: 'تربیت بدنی',
      professor: 'اصغر عبدالملکی',
      location: 'تختی',
    },
  ];

  return (
    <Paper shadow='xl' p='md'>
      <Text mb='sm'>کلاس های امروز</Text>
      <Divider mb='xl' />
      <Box>
        {scheduleData.map((schedule) => (
          <Group spacing='xs' mb='xl'>
            <Flex
              mih={50}
              gap='0'
              justify='center'
              align='flex-end'
              direction='column'
              wrap='nowrap'
            >
              <Text>{schedule.sHour}</Text>
              <Text color='dimmed'>{schedule.eHour}</Text>
            </Flex>
            <Stack spacing='6px'>
              <Badge color={schedule.badgeColor}>{schedule.field}</Badge>
              <Text size='sm'>{schedule.title}</Text>
              <Text size='sm' color='dimmed'>
                {schedule.professor}
              </Text>
              <Text size='sm'>
                <GoLocation />{' '}
                <Text component='span' color='dimmed'>
                  {schedule.location}
                </Text>
              </Text>
            </Stack>
          </Group>
        ))}
      </Box>
    </Paper>
  );
};

export default ClassSchedule;
