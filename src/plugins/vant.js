import Vue from 'vue'

// 按需导入vant组件
import { Button, Cell, CellGroup, Field, Icon, NavBar, Tabbar, TabbarItem } from 'vant'

// 按需注册vant组件
Vue.use(Button)
Vue.use(Cell).use(CellGroup)
Vue.use(Field)
Vue.use(Icon)
Vue.use(NavBar)
Vue.use(Tabbar).use(TabbarItem)
