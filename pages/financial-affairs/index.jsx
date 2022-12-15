import {
  Button,
  Group,
  Paper,
  Table,
  TextInput,
  RingProgress,
  Text,
  Center,
  ThemeIcon,
} from '@mantine/core';
import { useState } from 'react';
import { FaCheck } from 'react-icons/fa';

const index = () => {
  const [paidFee, setPaidFee] = useState(1000000);
  const [wantedFee, setWantedFee] = useState(2000000);
  const [enteredPrice, setEnteredPrice] = useState(0);

  const elements = [
    {
      code: 3991,
      status: 'مجاز به انتخاب واحد / ثبت معتبر انتخاب واحد توسط دانشجو',
      staticFee: '540,000',
      variableFee: '1,700,000',
      totalFee: '2,240,000',
    },
    {
      code: 3992,
      status: 'ثبت نام عادي / ممتاز',
      staticFee: '540,000',
      variableFee: '1,460,000',
      totalFee: '2,000,000',
    },
    {
      code: 4001,
      status: 'مجاز به انتخاب واحد / ثبت معتبر انتخاب واحد توسط دانشجو',
      staticFee: '270,000',
      variableFee: '2,200,000',
      totalFee: '2,470,000',
    },
    {
      code: 4002,
      status: 'مجاز به انتخاب واحد / ثبت معتبر انتخاب واحد توسط دانشجو',
      staticFee: '540,000',
      variableFee: '1,800,000',
      totalFee: '2,340,000',
    },
  ];

  const rows = elements.map((element) => (
    <tr key={element.code}>
      <td>{element.code}</td>
      <td>{element.status}</td>
      <td>{element.staticFee}</td>
      <td>{element.variableFee}</td>
      <td>{element.totalFee}</td>
    </tr>
  ));

  const feeHandler = () => {
    if (enteredPrice > 2000000 || paidFee >= 3000000) {
      alert('چه خبره دوست عزیز !?');
      return;
    }
    setPaidFee((paidFee) => (paidFee += +enteredPrice));
  };

  return (
    <>
      <Paper p='md' mb='xl'>
        <Group position='apart'>
          <Group>
            <p>مبلغ پدرداخت شده : {paidFee}</p>
            <p>مبلغ قابل پرداخت : {wantedFee}</p>
            <Text color={paidFee < wantedFee ? 'red' : 'indigo'}>
              {paidFee < wantedFee ? 'بدهکار' : 'بستانکار'}
            </Text>
          </Group>
          <Group>
            <TextInput
              onChange={(event) => setEnteredPrice(event.target.value)}
              placeholder='قابلی نداره'
            />
            <Button variant='outline' color='indigo' onClick={feeHandler}>
              پرداخت
            </Button>
          </Group>
          <RingProgress
            roundCaps
            size={150}
            thickness={17}
            label={
              <Text size='xs' align='center'>
                {(paidFee / wantedFee) * 100 >= 100 ? (
                  <Center>
                    <ThemeIcon
                      color='indigo'
                      variant='light'
                      radius='xl'
                      size='3.5rem'
                    >
                      <FaCheck size={35} />
                    </ThemeIcon>
                  </Center>
                ) : (
                  'هنوز مونده'
                )}
              </Text>
            }
            sections={[{ value: (paidFee / wantedFee) * 100, color: 'indigo' }]}
          />
        </Group>
      </Paper>
      <Table striped highlightOnHover>
        <thead>
          <tr>
            <th>کد ترم</th>
            <th>آخرین وضعیت دانشجو در ترم</th>
            <th>شهریه ثابت</th>
            <th>شهریه متغیر</th>
            <th>جمع شهریه ثابت و متغیر</th>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </Table>
    </>
  );
};

export default index;
