import { Container, Title, Text, Button, Image } from "@mantine/core";
import classes from "./App.module.css";
import { Link, useNavigate } from "react-router-dom";

export default function Home() {
   const nav = useNavigate();

   return (
      <div className={classes.root}>
         <Container
            size="xl"
            m={0}
         >
            <div className={classes.inner}>
               <div className={classes.content}>
                  <Image
                     src={"/Logonetflix.png"}
                     w={250}
                  />

                  <Title
                     order={1}
                     className={classes.description}
                     mt={30}
                  >
                     Unlimited movies, TV shows, and more
                  </Title>

                  <Button
                     variant="gradient"
                     bg={"#e6020c"}
                     size="xl"
                     className={classes.control}
                     radius={0}
                     mt={40}
                     onClick={() => nav("/login")}
                  >
                     Log in
                  </Button>
               </div>
            </div>
         </Container>
      </div>
   );
}
