import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name : 'Home',
    component: () => import('../views/index1.vue')
  },
  {
    path : '/oferta',
    name : "Oferta",
    component : () => import('../views/oferta.vue')
  },
  {
    path : '/register',
    name : "Register",
    component : () => import('../views/register.vue')
  },
  {
    path : '/cabinet',
    name : "Cabinet",
    component : () => import('../views/cabinet.vue')
  },
  {
    path : '/application',
    name : "Application",
    component : () => import('../views/application.vue')
  },
  {
    path : '/myedugeneralcontract',
    name : "MyEduGeneralContract",
    component : () => import('../views/myedugeneralcontract.vue')
  },
  {
    path : '/myinfo',
    name : "MyInfo",
    component : () => import('../views/myinfo.vue')
  },
  {
    path : '/mypaymentplan',
    name : "MyPaymentPlan",
    component : () => import('../views/mypaymentplan.vue')
  },
  {
    path : '/mypayments',
    name : "MyPayments",
    component : () => import('../views/mypayments.vue')
  },
  {
    path : '/mycontractinvoice',
    name : "MyContractInvoice",
    component : () => import('../views/mycontractinvoice.vue')
  },
  {
    path : '/choosechild',
    name : "ChooseChild",
    component : () => import('../views/choosechild.vue')
  },
  {
    path : '/childselectapplication',
    name : 'ChildSelectApplication',
    component : () => import('../views/childselectapplication.vue')
  },
  {
    path : '/application/edit/id=:id',
    name : "EditApplication",
    component : () => import('../views/editapplication.vue')
  },
  {
    path : '/getbyapplication/edit/id=:id',
    name : "EditGetByApplication",
    component : () => import('../views/getbyapplication.vue')
  },
  {
    path : '/application/edit/id=:id',
    name : "otherstudent",
    component : () => import('../views/otherstudent.vue')
  },
  {
    path : '/childinfo/view/code=:code',
    name : "ViewChildInfo",
    component : () => import('../views/childinfo.vue')
  },
  {
    path : '/application/view/id=:id',
    name : "ViewApplication",
    component : () => import('../views/viewapplication.vue')
  },
  {
    path : '/myedugeneralcontract/view/id=:id',
    name : "ViewMyEduGeneralContract",
    component : () => import('../views/viewmyedugeneralcontract.vue')
  },
  {
    path : '/courtapplication',
    name : "CourtApplication",
    component : () => import('../views/courtapplication.vue')
  },
  {
    path : '/courtapplication/edit/id=:id',
    name : "EditCourtApplication",
    component : () => import('../views/editcourtapplication.vue')
  },
  {
    path: '/index-1',
    name: 'Index-1',
    component: () => import('../views/index1.vue')
  },
  {
    path: '/index-2',
    name: 'Index-2',
    component: () => import('../views/index2.vue')
  },
  {
    path: '/index-3',
    name: 'Index-3',
    component: () => import('../views/index3.vue')
  },
  {
    path: '/index-4',
    name: 'Index-4',
    component: () => import('../views/index4.vue')
  },
  {
    path: '/index-5',
    name: 'Index-5',
    component: () => import('../views/index5.vue')
  },
  {
    path: '/index-6',
    name: 'Index-6',
    component: () => import('../views/index6.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
