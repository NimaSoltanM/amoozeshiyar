import { Paper, Divider, Text, Center } from '@mantine/core';
import Image from 'next/image';

const Unknown = () => {
  return (
    <Paper shadow='xl' p='md' pb='xs' mih='21.7rem' mah='21.7rem'>
      <Text mb='sm'>در دست ساخت</Text>
      <Divider mb='xl' />
      <Center>
        <Image src='/images/cons.jpg' height={250} width={335} />
      </Center>
    </Paper>
  );
};

export default Unknown;
