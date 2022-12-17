import { Notification, Stack } from '@mantine/core';

const NotifsComp = () => {
  return (
    <div>
      <Stack>
        <Notification title='دستورالعمل آراستگی و شئون فرهنگی:' disallowClose>
          <p>بخشنامه آراستگی و شئون فرهنگی و رفتاری در دانشگاه آزاد اسلامی </p>
          <p>
            دستورالعمل آراستگی و شئون فرهنگی و رفتاری در دانشگاه آزاد اسلامی
          </p>
        </Notification>

        <Notification
          title='اخذ کارت ورود به جلسه امتحان میان ترم'
          disallowClose
        >
          دانشجویان محترم جهت اخذ کارت ورود به جلسه امتحان میان ترم از مسیر زیر
          اقدام نمایید. <br /> <br />
          1- منوی ثبت نام دروس دانشجو <br />
          2- زیر منوی مشاهده آخرین وضعیت ثبت نام (ترم جاری ) <br />
          3- دکمه چاپ کارت ورود به جلسه امتحان بین ترم <br />
          <br />
          توجه : شرط اخذ کارت تسویه کامل بدهی می باشد.
        </Notification>
      </Stack>
    </div>
  );
};

export default NotifsComp;
