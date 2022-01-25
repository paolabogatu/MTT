import {
  faTasks,
  faUserCircle,
  faChartLine,
  faCloudSunRain,
} from "@fortawesome/free-solid-svg-icons";

const MENU_ITEMS = [
  {
    title: "Dashboard",
    icon: faChartLine,
    path: "/dashboard",
  },
  {
    title: "Projects",
    icon: faTasks,
    path: "/projects",
  },
  {
    title: "Day Off",
    icon: faCloudSunRain,
    path: "/day-off",
  },
  {
    title: "User",
    icon: faUserCircle,
    path: "/user",
  },
];

export default MENU_ITEMS;
