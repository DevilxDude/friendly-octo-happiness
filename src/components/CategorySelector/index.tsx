import { useCallback, useEffect, useMemo, useState } from "react";
import getData, { Category } from "../../api/getData";
import Checkbox from "../Checkbox";

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

  return (
    <div>
      <Checkbox
        mt="md"
        fw={500}
        checked={allCategoriesSelected}
        onClick={toggleAllSelectedCategories}
        label="Choose sizes from all categories"
      />
    </div>
  );
};

export default CategorySelector;
