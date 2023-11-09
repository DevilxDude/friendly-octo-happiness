import "@mantine/core/styles.css";
import { MantineProvider } from "@mantine/core";
import { theme } from "./theme";
import Modal from "./components/Modal";
import { useCallback, useState } from "react";
import OpenModalButton from "./components/OpenModalButton";

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
      <OpenModalButton onClick={handleOpen} />
      <Modal opened={opened} onClose={handleClose} />
    </MantineProvider>
  );
}
