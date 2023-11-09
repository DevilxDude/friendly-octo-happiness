import { FC, useCallback } from "react";
import { ModalProps, Modal as MantineModal, Divider } from "@mantine/core";
import ModalFooter from "../ModalFooter";
import ModalHeader from "../ModalHeader";

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
      <Divider my="sm" color="gray.2" />
      <Divider my="sm" color="gray.2" />
      <ModalFooter closeModal={closeModal} />
    </MantineModal>
  );
};

export default Modal;
