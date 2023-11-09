import { FC, useCallback } from "react";
import { Category } from "../../api/getData";
import Checkbox from "../Checkbox";
import {
  AspectRatio,
  Box,
  Flex,
  Text,
  Tooltip,
  UnstyledButton,
  rem,
} from "@mantine/core";
import classes from "./styles.module.css";
import { IconPhoto } from "@tabler/icons-react";

export type CategorySelectProps = {
  selected: boolean;
  toggleSelect: (_: string) => void;
  category: Category;
};

const CategorySelect: FC<CategorySelectProps> = ({
  category,
  selected,
  toggleSelect,
}) => {
  const handleToggleSelect = useCallback(() => {
    toggleSelect(category.title);
  }, [category.title, toggleSelect]);

  return (
    <div>
      <div className={classes.root}>
        <Checkbox
          checked={selected}
          onClick={handleToggleSelect}
          classNames={{
            root: classes.checkboxWrapper,
            input: classes.checkbox,
          }}
          tabIndex={-1}
        />
        <AspectRatio ratio={1200 / 900} mx="auto">
          <UnstyledButton
            className={classes.control}
            data-checked={selected}
            onClick={handleToggleSelect}
          >
            <Box
              bg="primary"
              className={classes.preview}
              style={{
                aspectRatio:
                  category.dimension.width / category.dimension.height,
              }}
            />
          </UnstyledButton>
        </AspectRatio>
      </div>
      <Flex mt="sm" mb={rem("6px")} gap={rem("4px")} align="center">
        <IconPhoto
          style={{ width: rem(24), height: rem(24) }}
          stroke={1.5}
          color="var(--mantine-color-gray-6)"
        />
        <Tooltip label={category.title}>
          <Text size="xs" fw={500} truncate="end">
            {category.title}
          </Text>
        </Tooltip>
      </Flex>
      <Text size="xs" c="gray.6" fw={500} truncate="end">
        {category.dimension.width}x{category.dimension.height}
      </Text>
    </div>
  );
};

export default CategorySelect;
