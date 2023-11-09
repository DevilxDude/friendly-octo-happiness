import { Button, Center, rem } from "@mantine/core";
import { IconTicket } from "@tabler/icons-react";
import { FC } from "react";

export type OpenModalButtonProps = {
  onClick: () => void;
};

const OpenModalButton: FC<OpenModalButtonProps> = ({ onClick }) => {
  return (
    <Center h="100vh">
      <Button
        onClick={onClick}
        rightSection={
          <IconTicket
            style={{ width: rem(18), height: rem(18) }}
            stroke={1.5}
          />
        }
        pr={12}
      >
        Create Voucher
      </Button>
    </Center>
  );
};

export default OpenModalButton;
