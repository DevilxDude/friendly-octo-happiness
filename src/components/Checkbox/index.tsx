import { CheckboxProps, Checkbox as MantineCheckbox, rem } from "@mantine/core";
import classes from "./styles.module.css";
import { IconCheck, IconMinus } from "@tabler/icons-react";

const CheckboxIcon: CheckboxProps["icon"] = ({ indeterminate, ...others }) =>
  indeterminate ? <IconMinus {...others} /> : <IconCheck {...others} />;

const Checkbox = (props: CheckboxProps) => {
  return (
    <MantineCheckbox
      iconColor="primary"
      color="primary.0"
      radius={rem("3px")}
      icon={CheckboxIcon}
      className={classes.checkbox}
      {...props}
    />
  );
};

export default Checkbox;
