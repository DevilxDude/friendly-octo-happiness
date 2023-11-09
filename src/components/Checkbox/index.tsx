import { CheckboxProps, Checkbox as MantineCheckbox, rem } from "@mantine/core";
import classes from "./styles.module.css";

const Checkbox = (props: CheckboxProps) => {
  return (
    <MantineCheckbox
      iconColor="primary"
      color="primary.0"
      radius={rem("3px")}
      className={classes.checkbox}
      {...props}
    />
  );
};

export default Checkbox;
