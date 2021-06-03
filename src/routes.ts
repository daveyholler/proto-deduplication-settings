import Dashboard from "./dashboard/dashboard";
import DashboardIndex from "./dashboard/index";
import Discover from "./discover/discover";
import AppSearch from "./enterprise_search/appSearch";
import Home from "./home/home";

enum SOLUTIONS {
  KIBANA = "kibana",
  OBSERVABILITY = "observability",
  ENTERPRISE_SEARCH = "enterpriseSearch",
}

export const orderedCategories = [
  {
    id: SOLUTIONS.KIBANA,
    icon: "logoKibana",
    label: "Kibana",
  },
  {
    id: SOLUTIONS.OBSERVABILITY,
    icon: "logoObservability",
    label: "Observability",
  },
  {
    id: SOLUTIONS.ENTERPRISE_SEARCH,
    icon: "logoEnterpriseSearch",
    label: "Enterprise Search",
  },
];

export const routes = [
  {
    category: SOLUTIONS.KIBANA,
    label: "Discover",
    path: "/discover",
    component: Discover,
  },
  {
    category: SOLUTIONS.KIBANA,
    label: "Dashboard",
    path: "/dashboard",
    component: DashboardIndex,
    routes: [
      {
        path: "/dashboard/:id",
        component: Dashboard,
      },
    ],
  },
  {
    category: SOLUTIONS.ENTERPRISE_SEARCH,
    label: "App Search",
    path: "/app-search",
    component: AppSearch,
  },
  {
    path: "/",
    component: AppSearch,
  },
];
