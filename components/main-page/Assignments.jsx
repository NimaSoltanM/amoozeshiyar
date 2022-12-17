import {
  Paper,
  Text,
  Divider,
  Group,
  Avatar,
  Box,
  Stack,
  Spoiler,
  ScrollArea,
} from '@mantine/core';

const Assignments = () => {
  function addZero(i) {
    if (i < 10) {
      i = '0' + i;
    }
    return i;
  }

  const d = new Date();
  let h = addZero(d.getHours());
  let m = addZero(d.getMinutes());
  let time = h + ':' + m;

  const assignmentsData = [
    {
      id: 1,
      teacher: 'محمد محمدی',
      message:
        'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است',
    },
    {
      id: 2,
      teacher: 'رامین رضوانی',
      message:
        'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. ',
    },
  ];

  return (
    <Paper shadow='xl' p='md' pb='xs' mih='21.7rem'>
      <Text mb='sm'>رویدادها</Text>
      <Divider mb='xl' />

      <ScrollArea style={{ height: 250 }}>
        {assignmentsData.map((assignment) => (
          <Box key={assignment.id}>
            <Stack spacing='xs' mb='xl'>
              <Group align='center' position='apart'>
                <Group>
                  <Avatar radius='xl' />
                  <Text>{assignment.teacher}</Text>
                </Group>

                <Text size='sm' color='dimmed'>
                  {time}
                </Text>
              </Group>
              <Spoiler maxHeight={30} showLabel='نمایش' hideLabel='مخفی کردن'>
                <Text size='sm' color='dimmed'>
                  {assignment.message}
                </Text>
              </Spoiler>
            </Stack>
          </Box>
        ))}
      </ScrollArea>
    </Paper>
  );
};

export default Assignments;
