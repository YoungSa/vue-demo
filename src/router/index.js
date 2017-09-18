import Vue from 'vue'
import Router from 'vue-router'
import shouye from '@/components/shouye'
import lipinguan from '@/components/lipinguan'

Vue.use(Router)

export default new Router({
	 routes: [
	 
	    {
	      	path: '/',
	      	component: shouye
	    },
	     {
	      	path: '/lipinguan',
	      	component: lipinguan
	    }
	    
	 ]
})
