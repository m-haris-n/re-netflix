import { Box, Image, Portal, rem, Text } from "@mantine/core";
import { useHeadroom } from "@mantine/hooks";
import { MainHeader } from "./MainHeader";

export default function StickyHeader() {
   const pinned = useHeadroom({ fixedAt: 120 });

   return (
      <>
         <Portal>
            <Box
               style={{
                  position: "fixed",
                  top: 0,
                  left: 0,
                  right: 0,
                  height: rem(60),

                  transform: `translate3d(0, ${pinned ? 0 : rem(-110)}, 0)`,
                  transition: "transform 400ms ease",
               }}
            >
               <MainHeader />
            </Box>
         </Portal>
      </>
   );
}
