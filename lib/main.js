// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import IndexPage from './pages/index';
import App from './App';
import Layout from './components/layout';
import VueRouter from 'vue-router';
import VueResource from 'vue-resource';
import DetailPage from './pages/detail';
import CountDetailPage from './pages/detail/count';
import ForecastDetailPage from './pages/detail/forecast';
import AnalysisDetailPage from './pages/detail/analysis';
import PublishDetailPage from './pages/detail/publish';
import LibFlexible from 'lib-flexible';

Vue.use(VueResource);
Vue.use(VueRouter);
var router = new VueRouter({
	//html的history模式
	mode: 'history',
	routes: [{
		//根目录
		path: '/',
		component: IndexPage
	}, {
		path: '/detail',
		component: DetailPage,
		redirect: '/detail/count',
		children: [{
			path: 'count',
			component: CountDetailPage
		}, {
			path: 'forecast',
			component: ForecastDetailPage
		}, {
			path: 'analysis',
			component: AnalysisDetailPage
		}, {
			path: 'publish',
			component: PublishDetailPage
		}]
	}]
});

new Vue({
	el: '#app',
	//根节点的实例化对象里面
	router: router,
	template: '<Layout/>',
	components: { Layout: Layout }
});