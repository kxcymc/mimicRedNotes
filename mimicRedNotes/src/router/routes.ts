// 配置children的path一定要写全！拼接好父级的路径！否则路径错误

const constantRoutes = [
  {
    path: "/",
    redirect: "/explore",
  },
  {
    path: "/explore",
    component: () => import("@/views/ExplorePage.vue"),
    name: "explore",
    meta: {
      title: "发现",
    },
  },
  {
    path: "/notification",
    component: () => import("@/views/NotificationPage.vue"),
    name: "notification",
    meta: {
      title: "通知",
    },
  },
  {
    path: "/user/profile/",
    component: () => import("@/views/UserProfilePage.vue"),
    name: "userProfile",
    meta: {
      title: "个人信息",
    },
  },
  {
    path: "/404",
    component: () => import("@/views/404Page.vue"),
    name: "404",
    meta: {
      title: "无法访问",
      selected: false,
    },
  },
  {
    path: "/:patchMatch(.*)*",
    redirect: "/404",
    name: "Any",
    meta: {
      title: "链接错误重定向",
      selected: false,
    },
  },
];

export default constantRoutes;
