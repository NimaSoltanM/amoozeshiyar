import {
  Paper,
  Text,
  Divider,
  Group,
  Avatar,
  Box,
  Badge,
  Stack,
  Spoiler,
  ScrollArea,
} from '@mantine/core';

const Assignments = () => {
  return (
    <Paper shadow='xl' p='md' pb='xs' mih='21.7rem'>
      <Text mb='sm'>تکالیف</Text>
      <Divider mb='xl' />

      <ScrollArea style={{ height: 250 }}>
        <Box mb='lg'>
          <Stack spacing='xs' mb='xl'>
            <Group align='center'>
              <Avatar radius='xl' />
              <Text>محمد محمدی</Text>
              <Badge color='teal'>استاد</Badge>
            </Group>
            <Text size='sm' color='dimmed'>
              سلام. <br />
              برای جلسه بعد تحقیق ها فراموش نشود.
            </Text>
          </Stack>
        </Box>

        <Box>
          <Stack spacing='xs' mb='xl'>
            <Group align='center'>
              <Avatar radius='xl' />
              <Text>معین فحتیان</Text>
              <Badge color='red'>حراست</Badge>
            </Group>
            <Spoiler maxHeight={30} showLabel='نمایش' hideLabel='مخفی کردن'>
              <Text size='sm' color='dimmed'>
                برای دریافت کارت دانشجویی حتما یک قطعه عکس 3 در 4 و کپی شناسنامه
                به دفتر حراست مراجعه نمایید.
              </Text>
            </Spoiler>
          </Stack>
        </Box>

        <Box>
          <Stack spacing='xs' mb='xl'>
            <Group align='center'>
              <Avatar radius='xl' />
              <Text>معین فحتیان</Text>
              <Badge color='red'>حراست</Badge>
            </Group>
            <Spoiler maxHeight={30} showLabel='نمایش' hideLabel='مخفی کردن'>
              <Text size='sm' color='dimmed'>
                نکته دیگر ، شرط دریافت کارت دانشجویی تسویه حساب کامل با دانشگاه
                است ، و نیز از شنبه ورود دانشجویان به دانشکده بدون کارت دانشجویی
                ممنوع است.
              </Text>
            </Spoiler>
          </Stack>
        </Box>
      </ScrollArea>
    </Paper>
  );
};

export default Assignments;
