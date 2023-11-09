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
import CategorySelector from "../CategorySelector";

const Modal: FC<ModalProps> = (props) => {
  const closeModal = useCallback(() => {
    if (props.onClose) {
      props.onClose();
    }
  }, [props]);

  return (
    <MantineModal
      centered
      size={900}
      radius="lg"
      closeOnClickOutside={false}
      {...props}
    >
      <Divider my="sm" color="gray.2" />

      <ModalHeader />

      <Divider mt="sm" color="gray.2" />

      <Grid>
        <Grid.Col span={3}>
          <Navbar />
        </Grid.Col>
        <Grid.Col span={9}>
          <CategorySelector />
        </Grid.Col>
      </Grid>

      <Divider mb="sm" color="gray.2" />

      <ModalFooter closeModal={closeModal} />
    </MantineModal>
  );
};

export default Modal;
