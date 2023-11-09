export type Category = {
  title: string;
  dimension: {
    width: number;
    height: number;
  };
};

const data: Array<Category> = [
  {
    title: "Amazing Vacation Photos!",
    dimension: {
      width: 1080,
      height: 1920,
    },
  },
  {
    title: "Throwback to a Fun Weekend",
    dimension: {
      width: 1280,
      height: 720,
    },
  },
  {
    title: "Family Reunion Memories",
    dimension: {
      width: 1920,
      height: 1080,
    },
  },
  {
    title: "Special Day",
    dimension: {
      width: 720,
      height: 1280,
    },
  },
  {
    title: "Exciting News Announcement!",
    dimension: {
      width: 1080,
      height: 720,
    },
  },
  {
    title: "Recipe of the Day: Chocolate Cake",
    dimension: {
      width: 1920,
      height: 720,
    },
  },
  {
    title: "Hiking Adventures in the Mountains",
    dimension: {
      width: 1280,
      height: 1080,
    },
  },
  {
    title: "Weekend Getaway with Friends",
    dimension: {
      width: 720,
      height: 1920,
    },
  },
  {
    title: "Cat Image",
    dimension: {
      width: 1080,
      height: 1280,
    },
  },
  {
    title: "Healthy Eating Tips and Tricks",
    dimension: {
      width: 720,
      height: 720,
    },
  },
  {
    title: "Latest Trends",
    dimension: {
      width: 1280,
      height: 1280,
    },
  },
  {
    title: "Photography",
    dimension: {
      width: 1920,
      height: 1920,
    },
  },
  {
    title: "DIY Home Decor Ideas",
    dimension: {
      width: 1080,
      height: 1080,
    },
  },
  {
    title: "Product Launch Event Teaser",
    dimension: {
      width: 720,
      height: 720,
    },
  },
  {
    title: "Morning Coffee",
    dimension: {
      width: 1280,
      height: 720,
    },
  },
  {
    title: "Fashion Season",
    dimension: {
      width: 1920,
      height: 1280,
    },
  },
  {
    title: "Inspiring",
    dimension: {
      width: 1080,
      height: 1920,
    },
  },
  {
    title: "Fitness Tips",
    dimension: {
      width: 720,
      height: 1280,
    },
  },
  {
    title: "Cooking Class Announcement",
    dimension: {
      width: 1280,
      height: 1080,
    },
  },
  {
    title: "Upcoming Event Highlights",
    dimension: {
      width: 1920,
      height: 720,
    },
  },
];

const getData = () => {
  return data;
};

export default getData;
