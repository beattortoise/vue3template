 const Layout = () => import('@/layouts/index.vue');
const routes = [{
	path: "/",
    component: Layout,
    redirect: "/home",
    children: [
      {
        path: "home",
        name: "home",
        component: () => import('@/pages/home/index.vue'),
        meta: {
          title: "首页",
        },
      },
	]
}];

export default routes;
