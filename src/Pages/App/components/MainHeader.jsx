import cx from "clsx";
import { useState } from "react";
import {
   Container,
   Avatar,
   UnstyledButton,
   Group,
   Text,
   Menu,
   Tabs,
   Burger,
   rem,
   useMantineTheme,
   Image,
   TextInput,
   Box,
   Flex,
   Modal,
   Divider,
   ActionIcon,
   Button,
   Input,
   RadioGroup,
   Radio,
   RangeSlider,
   NumberInput,
   Checkbox,
   CheckboxGroup,
   Grid,
   Title,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import {
   IconLogout,
   IconHeart,
   IconStar,
   IconMessage,
   IconSettings,
   IconPlayerPause,
   IconTrash,
   IconSwitchHorizontal,
   IconChevronDown,
   IconDownload,
   IconSearch,
} from "@tabler/icons-react";
import classes from "./MainHeader.module.css";
import { useNavigate } from "react-router-dom";

const user = {
   name: "Jane Spoonfighter",
   email: "janspoon@fighter.dev",
   image: "https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-5.png",
};

const genres = [
   "Action",
   "Adventure",
   "Animation",
   "Comedy",
   "Crime",
   "Documentary",
   "Drama",
   "Family",
   "Fantasy",
   "Horror",
   "Mystery",
   "Romance",
   "Sci-Fi",
   "Thriller",
   "War",
   "Western",
   "Biographical",
   "Historical",
   "Musical",
   "Sport",
   "Supernatural",
   "Spy",
   "Noir",
   "Experimental",
];

const countries = [
   "United States",
   "United Kingdom",
   "India",
   "France",
   "South Korea",
   "China",
   "Japan",
   "Germany",
   "Canada",
   "Australia",
   "Brazil",
   "Mexico",
   "Spain",
   "Italy",
   "Russia",
   "Argentina",
   "Sweden",
   "Denmark",
   "Norway",
   "Netherlands",
   "Turkey",
   "Thailand",
   "Iran",
   "Poland",
   "Belgium",
   "South Africa",
   "Egypt",
   "Philippines",
   "Greece",
   "Israel",
   // Add more countries as needed
];

export function MainHeader() {
   const theme = useMantineTheme();
   const nav = useNavigate();

   const [opened, { open, close }] = useDisclosure(false);
   const [userMenuOpened, setUserMenuOpened] = useState(false);

   const genreChecks = genres.map((genre) => (
      <Grid.Col span={3}>
         <Checkbox
            key={genre}
            value={genre}
            label={genre}
            radius={0}
            color={"#e6020c"}
            size={"sm"}
         />
      </Grid.Col>
   ));
   const countryChecks = countries.map((genre) => (
      <Grid.Col span={3}>
         <Checkbox
            key={genre}
            value={genre}
            label={genre}
            radius={0}
            color={"#e6020c"}
            size={"sm"}
         />
      </Grid.Col>
   ));

   return (
      <>
         <Modal
            opened={opened}
            onClose={close}
            withCloseButton={true}
            title={"Search movies and TV shows"}
            size={"lg"}
         >
            <Flex
               direction={"row"}
               justify={"space-between"}
               align={"center"}
               gap={8}
            >
               <TextInput
                  placeholder={"Search a movie or a TV show"}
                  w={"100%"}
                  h={36}
                  radius={0}
                  className={" rounded-none"}
               />
               <Button
                  w={120}
                  h={36}
                  color={"#e6020c"}
                  radius={0}
               >
                  Search
               </Button>
            </Flex>
            <Divider
               my={24}
               label={"OR"}
               labelPosition={"center"}
            />
            <Text
               size={"lg"}
               fw={500}
               mb={16}
            >
               Search by Filters
            </Text>
            <Flex
               direction={"row"}
               gap={"16"}
               justify={"space-between"}
               align={"center"}
            >
               <Group>
                  <Text fw={500}>Type:</Text>
                  <RadioGroup defaultValue={"movie"}>
                     <Flex
                        gap={16}
                        my={4}
                     >
                        <Radio
                           label={"Movie"}
                           color={"#e6020c"}
                           value={"movie"}
                           radius={0}
                        />
                        <Radio
                           radius={0}
                           label={"TV Show"}
                           color={"#e6020c"}
                           value={"show"}
                        />
                     </Flex>
                  </RadioGroup>
               </Group>

               <Group>
                  <Text fw={500}>Year:</Text>

                  <Flex
                     direction={"row"}
                     align={"center"}
                  >
                     <NumberInput
                        placeholder={"Start year"}
                        w={100}
                        size={"xs"}
                        radius={0}
                     />
                     <span className={"mx-4"}> - </span>
                     <NumberInput
                        size={"xs"}
                        placeholder={"End year"}
                        w={100}
                        radius={0}
                     />
                  </Flex>
               </Group>
            </Flex>
            <Divider my={16} />
            <Text
               fw={500}
               mb={8}
            >
               Genre:
            </Text>
            <CheckboxGroup>
               <Grid gutter={8}>{genreChecks}</Grid>
            </CheckboxGroup>
            <Divider my={16} />
            <Text
               fw={500}
               mb={8}
            >
               Country:
            </Text>
            <CheckboxGroup>
               <Grid gutter={8}>{countryChecks}</Grid>
            </CheckboxGroup>
            <Button
               color={"#e6020c"}
               h={36}
               radius={0}
               mt={24}
               fullWidth
            >
               Filter
            </Button>
         </Modal>
         <div className={classes.header}>
            <Container
               className={classes.mainSection}
               size="xl"
            >
               <Group justify="space-between">
                  <Image
                     src={"/Logonetflix.png"}
                     w={150}
                  />

                  <Flex
                     direction={"row"}
                     gap={16}
                     align={"center"}
                     justify={"space-between"}
                     w={250}
                     h={36}
                     px={8}
                     py={4}
                     className={
                        "  border-solid border-[1px] border-[#e6020d93] cursor-text bg-[#000000d0]"
                     }
                     onClick={open}
                  >
                     Search
                     <IconSearch size={20} />
                  </Flex>
                  <Menu
                     width={260}
                     position="bottom-end"
                     transitionProps={{ transition: "pop-top-right" }}
                     onClose={() => setUserMenuOpened(false)}
                     onOpen={() => setUserMenuOpened(true)}
                     withinPortal
                  >
                     <Menu.Target>
                        <UnstyledButton
                           className={cx(classes.user, {
                              [classes.userActive]: userMenuOpened,
                           })}
                        >
                           <Group gap={7}>
                              <Avatar
                                 src={user.image}
                                 alt={user.name}
                                 radius={0}
                                 size={36}
                              />

                              <IconChevronDown
                                 style={{ width: rem(12), height: rem(12) }}
                                 stroke={1.5}
                              />
                           </Group>
                        </UnstyledButton>
                     </Menu.Target>
                     <Menu.Dropdown
                        bg={"black"}
                        className={"border-none rounded-none"}
                     >
                        <Menu.Item
                           className={"rounded-none "}
                           leftSection={
                              <IconDownload
                                 style={{ width: rem(16), height: rem(16) }}
                                 color={theme.colors.red[6]}
                                 stroke={1.5}
                              />
                           }
                        >
                           Downloads
                        </Menu.Item>
                        <Menu.Item
                           className={"rounded-none"}
                           leftSection={
                              <IconStar
                                 style={{ width: rem(16), height: rem(16) }}
                                 color={theme.colors.yellow[6]}
                                 stroke={1.5}
                              />
                           }
                        >
                           Your List
                        </Menu.Item>

                        <Menu.Label>Settings</Menu.Label>

                        <Menu.Item
                           className={"rounded-none"}
                           leftSection={
                              <IconSwitchHorizontal
                                 style={{ width: rem(16), height: rem(16) }}
                                 stroke={1.5}
                              />
                           }
                        >
                           Switch User
                        </Menu.Item>
                        <Menu.Item
                           className={"rounded-none"}
                           leftSection={
                              <IconSettings
                                 style={{ width: rem(16), height: rem(16) }}
                                 stroke={1.5}
                              />
                           }
                        >
                           Account settings
                        </Menu.Item>
                        <Menu.Item
                           className={"rounded-none"}
                           leftSection={
                              <IconLogout
                                 style={{ width: rem(16), height: rem(16) }}
                                 stroke={1.5}
                              />
                           }
                        >
                           Logout
                        </Menu.Item>
                     </Menu.Dropdown>
                  </Menu>
               </Group>
            </Container>
         </div>
      </>
   );
}
