import { useState } from 'react';
import { TransferList, Group, Text, Checkbox } from '@mantine/core';

const ItemComponent = ({ data, selected }) => (
  <Group noWrap>
    <div style={{ flex: 1 }}>
      <Text size='sm' weight={500}>
        {data.label}
      </Text>
      <Text size='xs' color='dimmed' weight={400}>
        استاد : {data.professor}
      </Text>
      <Text size='xs' color='dimmed' weight={400}>
        کد ارائه : {data.code}
      </Text>
    </div>
    <Checkbox
      checked={selected}
      onChange={() => {}}
      tabIndex={-1}
      sx={{ pointerEvents: 'none' }}
    />
  </Group>
);

export default () => {
  const initialValues = [
    [
      {
        value: 'ریاضی عمومی',
        label: 'ریاضی عمومی',
        professor: 'محمد محمدی',
        code: '455',
        group: 'عمومی',
      },
      {
        value: 'مهارت های مسئله یابی',
        label: 'مهارت های مسئله یابی',
        professor: 'یاسر عرفات',
        code: '455',
        group: 'عمومی',
      },
      {
        value: 'ترتبیت بدنی',
        label: 'ترتبیت بدنی',
        professor: 'مجتبی خاتمی',
        code: '455',
        group: 'عمومی',
      },
      {
        value: 'برنامه نویسی سخت افزار',
        label: 'برنامه نویسی سخت افزار',
        professor: 'محمد رضایی',
        code: '455',
        group: 'تخصصی',
      },
      {
        value: 'برنامه نویسی موبایل',
        label: 'برنامه نویسی موبایل',
        professor: 'نیما همدانی',
        code: '455',
        group: 'تخصصی',
      },
      {
        value: 'کارآفرینی',
        label: 'کارآفرینی',
        professor: 'ابراهیم غلامی',
        code: '455',
        group: 'عمومی',
      },
      {
        value: 'زبان فنی',
        label: 'زبان فنی',
        professor: 'حسین روحانی',
        code: '455',
        group: 'تخصصی',
      },
      {
        value: 'فیزیک پیش نیاز',
        label: 'فیزیک پیش نیاز',
        professor: 'محمود احمدی زاده',
        code: '455',
        group: 'عمومی',
      },
    ],
    [],
  ];

  const [data, setData] = useState(initialValues);

  return (
    <TransferList
      value={data}
      onChange={setData}
      searchPlaceholder='جستجو ...'
      nothingFound='لیست خالی است'
      titles={['درس های موجود', 'درس های انتخاب شده']}
      breakpoint='sm'
      itemComponent={ItemComponent}
      listHeight={400}
    />
  );
};
