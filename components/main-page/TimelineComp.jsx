import { Timeline, Text, Paper } from '@mantine/core';

import { FaCheck } from 'react-icons/fa';
import { MdOutlinePendingActions } from 'react-icons/md';

const TimelineComp = () => {
  return (
    <Paper p='lg' shadow='xl'>
      <Timeline active={2} bulletSize={24} lineWidth={2} color='blue'>
        <Timeline.Item bullet={<FaCheck size={12} />} title='ترم 1'>
          <Text size='sm'>
            با معدل{' '}
            <Text component='span' color='blue'>
              19.20
            </Text>{' '}
            به پایان رسید
          </Text>
          <Text size='xs' mt={4} color='dimmed'>
            نیم سال 1 - 3991
          </Text>
        </Timeline.Item>

        <Timeline.Item bullet={<FaCheck size={12} />} title='ترم 2'>
          <Text size='sm'>
            با معدل{' '}
            <Text component='span' color='blue'>
              17.75
            </Text>{' '}
            به پایان رسید
          </Text>
          <Text size='xs' mt={4} color='dimmed'>
            نیم سال 2 - 3991
          </Text>
        </Timeline.Item>

        <Timeline.Item
          bullet={<FaCheck size={12} />}
          title='ترم 3'
          lineVariant='dashed'
        >
          <Text size='sm'>
            با معدل{' '}
            <Text component='span' color='blue'>
              18.10
            </Text>{' '}
            به پایان رسید
          </Text>
          <Text size='xs' mt={4} color='dimmed'>
            نیم سال 3 - 3993
          </Text>
        </Timeline.Item>

        <Timeline.Item
          bullet={<MdOutlinePendingActions size={16} />}
          title='ترم 4'
        >
          <Text size='xs' mt={4} color='dimmed'>
            نیم سال 4 - 4001
          </Text>
        </Timeline.Item>
      </Timeline>
    </Paper>
  );
};

export default TimelineComp;
