import {
   TextInput,
   PasswordInput,
   Checkbox,
   Anchor,
   Paper,
   Title,
   Text,
   Container,
   Group,
   Button,
   Image,
} from "@mantine/core";
import classes from "./Login.module.css";
import { useNavigate } from "react-router-dom";

export default function Login() {
   const nav = useNavigate();

   return (
      <div className={classes.root}>
         <Container
            size={420}
            my={40}
            styles={{
               root: {
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
               },
            }}
         >
            <Image
               src="/Logonetflix.png"
               w="250"
            />
            <Text
               size="sm"
               ta="center"
               mt={24}
            >
               Do not have an account yet?{" "}
               <Anchor
                  size="sm"
                  component="button"
                  c={"#e6020c"}
               >
                  Create account
               </Anchor>
            </Text>

            <Paper
               withBorder
               bg={"black"}
               shadow="md"
               p={30}
               mt={24}
               radius={0}
            >
               <TextInput
                  label="Email"
                  placeholder="you@mantine.dev"
                  radius={0}
                  w={300}
                  required
               />
               <PasswordInput
                  label="Password"
                  placeholder="Your password"
                  radius={0}
                  w={300}
                  required
                  mt="md"
               />
               <Group
                  justify="space-between"
                  mt="lg"
               >
                  <Checkbox
                     label="Remember me"
                     radius={0}
                     color={"#e6020c"}
                  />
                  <Anchor
                     component="button"
                     size="sm"
                     c={"#e6020c"}
                  >
                     Forgot password?
                  </Anchor>
               </Group>
               <Button
                  radius={0}
                  fullWidth
                  mt="xl"
                  bg={"#e6020c"}
                  onClick={() => nav("/app")}
               >
                  Sign in
               </Button>
            </Paper>
         </Container>
      </div>
   );
}
