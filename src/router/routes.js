import MSite from "@/pages/MSite/MSite";
import Order from "@/pages/Order/Order";
import Profile from "@/pages/Profile/Profile";
import Search from "@/pages/Search/Search";
import Login from "@/pages/Login/Login";

export default [
  {
    path: '/msite',
    component: MSite,
    // 元对象，元对象仅在对应当前路径时才会存在，假如路径对应的是：login，则在$router中就不存在该属性
    meta: {
      isShow: true
    }
  },
  {
    path: '/order',
    component: Order,
    meta: {
      isShow: true
    }
  },
  {
    path: '/profile',
    component: Profile,
    meta: {
      isShow: true
    }
  },
  {
    path: '/search',
    component: Search,
    meta: {
      isShow: true
    }
  },
  {
    path: '/login',
    component: Login
  },
  {
    path: '/',
    redirect: '/msite'
  }
]