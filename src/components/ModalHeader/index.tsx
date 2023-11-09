import {
  Button,
  CloseButton,
  Grid,
  Input,
  Menu,
  Text,
  rem,
} from "@mantine/core";
import { IconChevronDown, IconSearch } from "@tabler/icons-react";
import { useState } from "react";
import classes from "./styles.module.css";

const ModalHeader = () => {
  const [value, setValue] = useState("");

  return (
    <Grid justify="space-between" align="center">
      <Grid.Col span="content">
        <Text fw={600} size="md">
          Voucher - Minimal coupon
        </Text>
      </Grid.Col>
      <Grid.Col span="content">
        <Grid>
          <Grid.Col span="content">
            <Input
              className={classes.input}
              placeholder="Search..."
              size="xs"
              value={value}
              onChange={(event) => setValue(event.currentTarget.value)}
              rightSectionPointerEvents="all"
              rightSection={
                value ? (
                  <CloseButton
                    aria-label="Clear input"
                    onClick={() => setValue("")}
                  />
                ) : (
                  <IconSearch
                    style={{ width: rem(18), height: rem(18) }}
                    stroke={1.5}
                  />
                )
              }
            />
          </Grid.Col>
          <Grid.Col span="content">
            <Menu withinPortal>
              <Menu.Target>
                <Button
                  className={classes.dropdown}
                  variant="outline"
                  color="gray"
                  size="xs"
                  px="xs"
                  rightSection={
                    <IconChevronDown
                      style={{ width: rem(18), height: rem(18) }}
                      stroke={1.5}
                    />
                  }
                >
                  Account
                </Button>
              </Menu.Target>
              <Menu.Dropdown>
                <Menu.Item>Account</Menu.Item>
              </Menu.Dropdown>
            </Menu>
          </Grid.Col>
        </Grid>
      </Grid.Col>
    </Grid>
  );
};

export default ModalHeader;
