import { createRouter, createWebHistory, RouteLocationNormalized } from 'vue-router';
import routes from './routes';

const router = createRouter({
	history: createWebHistory(),
	routes
});

const setTitle = (to: RouteLocationNormalized) => {
	// 设置页面标题
	document.title = (to.meta && (to.meta.title as string)) || '管理后台';
};

// 路由拦截
router.beforeEach(to => {
	setTitle(to);
});

export default router;
