import "@mantine/core/styles.css";
import { Button, MantineProvider, rem } from "@mantine/core";
import { theme } from "./theme";
import { IconTicket } from "@tabler/icons-react";
import classes from "./App.module.css";
import Modal from "./components/Modal";
import { useCallback, useState } from "react";

export default function App() {
  const [opened, setOpened] = useState(false);

  const handleOpen = useCallback(() => {
    setOpened(true);
  }, []);

  const handleClose = useCallback(() => {
    setOpened(false);
  }, []);

  return (
    <MantineProvider theme={theme}>
      <div className={classes.container}>
        <Button
          onClick={handleOpen}
          rightSection={
            <IconTicket
              style={{ width: rem(18), height: rem(18) }}
              stroke={1.5}
            />
          }
          pr={12}
        >
          <div className={classes.okay}>okay</div>
          Create Voucher
        </Button>
      </div>
      <Modal opened={opened} onClose={handleClose}>
        Modal Content
      </Modal>
    </MantineProvider>
  );
}
