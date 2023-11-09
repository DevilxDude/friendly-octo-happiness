import { FC } from "react";
import { ModalProps, Modal as MantineModal } from "@mantine/core";

const Modal: FC<ModalProps> = (props) => {
  return <MantineModal {...props} />;
};

export default Modal;
