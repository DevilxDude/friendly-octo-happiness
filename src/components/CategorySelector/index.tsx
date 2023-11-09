import { useCallback, useEffect, useMemo, useState } from "react";
import getData, { Category } from "../../api/getData";
import Checkbox from "../Checkbox";
import { Grid, ScrollArea } from "@mantine/core";
import CategorySelect from "../CategorySelect";

const CategorySelector = () => {
  const [categories, setCategories] = useState<Array<Category>>([]);
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);

  useEffect(() => {
    /**
     * I know loading it inside useEffect isn't required.
     * I am creating this to make it easily usable if the
     * data from loaded form an API in the future.
     */
    const data = getData();

    setCategories(data);
  }, []);

  const allCategoriesSelected = useMemo(
    () =>
      categories.find((c) => !selectedCategories.includes(c.title)) ===
      undefined,
    [categories, selectedCategories]
  );

  const toggleAllSelectedCategories = useCallback(() => {
    if (allCategoriesSelected) {
      setSelectedCategories([]);
    } else {
      setSelectedCategories(categories.map((c) => c.title));
    }
  }, [allCategoriesSelected, categories]);

  const toggleCategory = useCallback((category: string) => {
    setSelectedCategories((current) => {
      if (current.includes(category)) {
        return current.filter((a) => a !== category);
      } else {
        return [...current, category];
      }
    });
  }, []);

  return (
    <div>
      <Checkbox
        my="md"
        fw={500}
        checked={allCategoriesSelected}
        onClick={toggleAllSelectedCategories}
        label="Choose sizes from all categories"
      />
      <ScrollArea h={400}>
        <Grid>
          {categories.map((category) => (
            <Grid.Col span={3}>
              <CategorySelect
                category={category}
                selected={selectedCategories.includes(category.title)}
                toggleSelect={toggleCategory}
              />
            </Grid.Col>
          ))}
        </Grid>
      </ScrollArea>
    </div>
  );
};

export default CategorySelector;
