import { Paper, Divider, Text, Skeleton } from '@mantine/core';

const Unknown = () => {
  return (
    <Paper shadow='xl' p='md' pb='xs' mih='21.7rem' mah='21.7rem' color='cyan'>
      <Text mb='sm'>در دست ساخت</Text>
      <Divider mb='xl' />
      <>
        <Skeleton animate={false} height={50} circle mb='xl' />
        <Skeleton animate={false} height={8} radius='xl' />
        <Skeleton animate={false} height={8} mt={6} radius='xl' />
        <Skeleton animate={false} height={8} mt={6} radius='xl' />
        <Skeleton animate={false} height={8} mt={6} radius='xl' />
        <Skeleton animate={false} height={8} mt={6} radius='xl' />
        <Skeleton animate={false} height={8} mt={6} width='70%' radius='xl' />
      </>
    </Paper>
  );
};

export default Unknown;
