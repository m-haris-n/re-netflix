import React, { useState } from "react";
import StickyHeader from "./components/StickyHeader";
import {
   Anchor,
   Box,
   Button,
   Container,
   Flex,
   Grid,
   Image,
   Paper,
   Title,
} from "@mantine/core";
import { movieData } from "../../dummydata";
export default function App() {
   const [num, setNum] = useState(6);
   const [num2, setNum2] = useState(6);

   let latestMovies = movieData.slice(0, movieData.length);
   let latestMovies2 = movieData.slice(0, movieData.length);

   latestMovies = latestMovies.sort(
      (a, b) => new Date(a.release_date) - new Date(b.release_date)
   );

   latestMovies2 = latestMovies2.reverse();

   console.log(latestMovies);
   console.log(latestMovies2);

   latestMovies = latestMovies.slice(0, num);
   latestMovies2 = latestMovies2.slice(0, num2);
   console.log(latestMovies);
   console.log(latestMovies2);

   const movies = latestMovies.map((mov) => (
      <Grid.Col
         key={mov.id}
         span={{ base: 6, sm: 4, md: 3, lg: 2 }}
         h={"300px"}
      >
         <div className={"bg-white w-full h-full"}>
            <Image
               src={mov.poster_url}
               w={"100%"}
               h={"100%"}
            />
         </div>
      </Grid.Col>
   ));
   const movies2 = latestMovies2.map((mov) => (
      <Grid.Col
         key={mov.id}
         span={{ base: 6, sm: 4, md: 3, lg: 2 }}
         h={"300px"}
      >
         <div className={"bg-white w-full h-full"}>
            <Image
               src={mov.poster_url}
               w={"100%"}
               h={"100%"}
            />
         </div>
      </Grid.Col>
   ));

   return (
      <Box
         bg={"black"}
         pb={200}
      >
         <StickyHeader />
         <Image
            src={"frontposter.jpg"}
            w={"100%"}
         />
         <Container size={"xl"}>
            <section className={"flex flex-col items-center w-full gap-4"}>
               <Flex
                  direction={"row"}
                  justify={"space-between"}
                  align={"baseline"}
                  w={"100%"}
               >
                  <Title
                     order={2}
                     mt={32}
                  >
                     Latest Movies and TV Shows
                  </Title>
                  <Anchor
                     className={" inline-block float-right"}
                     c={"#e6020c"}
                  >
                     View all
                  </Anchor>
               </Flex>
               <Grid
                  columns={12}
                  gutter={16}
                  className={"w-full"}
               >
                  {movies}
               </Grid>
               <Button
                  color={"#e6020c"}
                  w={120}
                  onClick={() => {
                     num == 6 ? setNum(12) : setNum(6);
                  }}
               >
                  {num == 6 ? "Show more" : "Show less"}
               </Button>
            </section>
            <section className={"flex flex-col items-center w-full gap-4"}>
               <Flex
                  direction={"row"}
                  justify={"space-between"}
                  align={"baseline"}
                  w={"100%"}
               >
                  <Title
                     order={2}
                     mt={32}
                  >
                     Action and Adventure Movies
                  </Title>
                  <Anchor
                     className={" inline-block float-right"}
                     c={"#e6020c"}
                  >
                     View all
                  </Anchor>
               </Flex>
               <Grid
                  columns={12}
                  gutter={16}
                  className={"w-full"}
               >
                  {movies2}
               </Grid>
               <Button
                  color={"#e6020c"}
                  w={120}
                  onClick={() => {
                     num2 == 6 ? setNum2(12) : setNum2(6);
                  }}
               >
                  {num2 == 6 ? "Show more" : "Show less"}
               </Button>
            </section>
         </Container>
      </Box>
   );
}
