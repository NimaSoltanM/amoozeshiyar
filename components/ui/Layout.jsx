import { useState } from 'react';
import {
  AppShell,
  Navbar,
  Header,
  Footer,
  MediaQuery,
  Burger,
  useMantineTheme,
  Avatar,
  Divider,
  Box,
  Menu,
  ActionIcon,
  Modal,
  Center,
  Drawer,
  Stack,
  Paper,
  TextInput,
  PasswordInput,
  Button,
  useMantineColorScheme,
  Group,
} from '@mantine/core';
import { useForm } from '@mantine/form';

import {
  FaUserAlt,
  FaSignOutAlt,
  FaInfo,
  FaRegMoon,
  FaRegSun,
} from 'react-icons/fa';
import NavItems from '../Layout/navItems';

export default function AppShellDemo({ children }) {
  const theme = useMantineTheme();
  const [opened, setOpened] = useState(false);
  const [openedModal, setOpenedModal] = useState(false);
  const [openedDrawer, setOpenedDrawer] = useState(false);

  const clickHandler = () => {
    setOpenedModal(true);
  };

  const drawerHandler = () => {
    setOpenedDrawer(true);
  };

  const form = useForm({
    initialValues: {
      code: '',
      password: '',
      igapCode: '',
    },

    validate: {
      code: (value) =>
        value === '1234' ? null : 'فقط مقادیر گفته شده را وارد کنید',
      password: (value) =>
        value === '1234' ? null : 'فقط مقادیر گفته شده را وارد کنید',
      igapCode: (value) =>
        value === 'i1234' ? null : 'فقط مقادیر گفته شده را وارد کنید',
    },
  });

  const submitHandler = () => {
    if (form.isValid) {
      alert('مثلا وارد شدی');
    }
  };

  const { colorScheme, toggleColorScheme } = useMantineColorScheme();
  const dark = colorScheme === 'dark';

  return (
    <AppShell
      styles={{
        main: {
          background:
            theme.colorScheme === 'dark'
              ? theme.colors.dark[8]
              : theme.colors.gray[0],
        },
      }}
      navbarOffsetBreakpoint='sm'
      asideOffsetBreakpoint='sm'
      navbar={
        <Navbar
          p='md'
          hiddenBreakpoint='sm'
          hidden={!opened}
          width={{ sm: 150, lg: 250 }}
        >
          <NavItems />
        </Navbar>
      }
      header={
        <Header height={{ base: 50, md: 70 }} p='md'>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              height: '100%',
            }}
          >
            <MediaQuery largerThan='sm' styles={{ display: 'none' }}>
              <Burger
                opened={opened}
                onClick={() => setOpened((o) => !o)}
                size='sm'
                color={theme.colors.gray[6]}
                mr='xl'
              />
            </MediaQuery>

            <h3>دانشگاه سما</h3>

            <Group>
              <ActionIcon
                variant='outline'
                color={dark ? 'yellow' : 'blue'}
                onClick={() => toggleColorScheme()}
                title='تغییر تم صقحه'
              >
                {dark ? <FaRegSun size={18} /> : <FaRegMoon size={18} />}
              </ActionIcon>

              <Menu
                transition='rotate-right'
                transitionDuration={150}
                position='right'
                withArrow
              >
                <Menu.Target>
                  <ActionIcon variant='outline'>
                    <FaUserAlt size={16} />
                  </ActionIcon>
                </Menu.Target>

                <Menu.Dropdown>
                  <Menu.Item onClick={clickHandler} icon={<FaInfo size={14} />}>
                    مشخصات شما
                  </Menu.Item>
                  <Menu.Divider />
                  <Menu.Item
                    onClick={drawerHandler}
                    icon={<FaSignOutAlt size={14} />}
                    color='red'
                  >
                    خروج
                  </Menu.Item>
                </Menu.Dropdown>
              </Menu>
            </Group>
          </div>
        </Header>
      }
    >
      {children}

      <Modal
        opened={openedModal}
        onClose={() => setOpenedModal(false)}
        title='مشخصات شما'
      >
        <Box>
          <Center>
            <Avatar src='/images/avatar.jpg' size='xl' />
          </Center>

          <Divider mt='md' />

          <p>نام : رضا</p>
          <p>نام خانوادگی : رضایی</p>
          <p>شماره دانشجویی : 39945541042019</p>
        </Box>
      </Modal>

      <Drawer
        opened={openedDrawer}
        onClose={() => setOpenedDrawer(false)}
        padding='xl'
        size='100%'
        closeOnClickOutside={false}
      >
        <Box w='100%' height='100%'>
          <Center>
            <h1>ورود دوباره</h1>
          </Center>
          <Center>
            <Stack align='center'>
              <Paper shadow='xl' p='xl'>
                <form
                  onSubmit={form.onSubmit((values) => submitHandler(values))}
                >
                  <Stack spacing='lg'>
                    <TextInput
                      placeholder='1234'
                      label='کد دانشجویی'
                      withAsterisk
                      {...form.getInputProps('code')}
                    />
                    <PasswordInput
                      placeholder='1234'
                      label='رمز عبور'
                      withAsterisk
                      {...form.getInputProps('password')}
                    />
                    <TextInput
                      placeholder='i1234'
                      label='کد آی گپ'
                      description='برای اذیت و آزار شما ، کد فرستاده شده به آی گپ را نیز باید وارد کنید.'
                      withAsterisk
                      {...form.getInputProps('igapCode')}
                    />

                    <Button type='submit'>ورود</Button>
                  </Stack>
                </form>
              </Paper>
            </Stack>
          </Center>
        </Box>
      </Drawer>
    </AppShell>
  );
}
