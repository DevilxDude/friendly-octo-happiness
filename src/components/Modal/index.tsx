import { FC, useCallback } from "react";
import {
  ModalProps,
  Modal as MantineModal,
  Divider,
  Grid,
} from "@mantine/core";
import ModalFooter from "../ModalFooter";
import ModalHeader from "../ModalHeader";
import Navbar from "../Navbar";

const Modal: FC<ModalProps> = (props) => {
  const closeModal = useCallback(() => {
    if (props.onClose) {
      props.onClose();
    }
  }, [props]);

  return (
    <MantineModal
      centered
      size={800}
      radius="lg"
      closeOnClickOutside={false}
      {...props}
    >
      <Divider my="sm" color="gray.2" />

      <ModalHeader />

      <Divider mt="sm" color="gray.2" />

      <Grid>
        <Grid.Col span="content">
          <Navbar />
        </Grid.Col>
      </Grid>

      <Divider mb="sm" color="gray.2" />

      <ModalFooter closeModal={closeModal} />
    </MantineModal>
  );
};

export default Modal;
