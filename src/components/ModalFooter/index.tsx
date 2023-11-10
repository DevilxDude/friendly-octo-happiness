import { FC } from "react";
import { Button, Grid, rem } from "@mantine/core";
import { IconArrowLeft } from "@tabler/icons-react";
import classes from "./styles.module.css";

export type ModalFooterProps = {
  closeModal: () => void;
};

const ModalFooter: FC<ModalFooterProps> = ({ closeModal }) => {
  return (
    <Grid justify="space-between" align="center" px="lg" pb="sm">
      <Grid.Col span="content">
        <Button
          className={classes.backButton}
          onClick={closeModal}
          variant="transparent"
          size="compact-sm"
          leftSection={
            <IconArrowLeft
              style={{ width: rem(18), height: rem(18) }}
              stroke={1.5}
            />
          }
        >
          Back
        </Button>
      </Grid.Col>
      <Grid.Col span="content">
        <Button size="sm" px="xs" onClick={closeModal}>
          Confirm
        </Button>
      </Grid.Col>
    </Grid>
  );
};

export default ModalFooter;
