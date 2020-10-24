import Vue from "vue";
import {
  Button,
  Form,
  FormItem,
  Input,
  Header,
  Aside,
  Main,
  Container,
  RadioGroup,
  RadioButton,
  Menu,
  MenuItemGroup,
  Submenu,
  MenuItem,
  Tooltip,
  Row,
  Col,
  Card,
  Table,
  TableColumn,
  Slider,
  Tag,
  Tree,
  PageHeader,
  Dialog,
  Pagination,
  Link,
  Message,
  Radio,
  Notification,
  Loading,
} from "element-ui";
Vue.component(Message);
Vue.prototype.$notify = Notification;
Vue.prototype.$message = Message;
Vue.prototype.$loading = Loading.service;
Vue.use(Radio);
Vue.use(Link);
Vue.use(Pagination);
Vue.use(Dialog);
Vue.use(PageHeader);
Vue.use(Tree);
Vue.use(Tag);
Vue.use(Slider);
Vue.use(Table);
Vue.use(TableColumn);
Vue.use(Form);
Vue.use(Input);
Vue.use(FormItem);
Vue.use(Button);
Vue.use(Header);
Vue.use(Aside);
Vue.use(Main);
Vue.use(Container);
Vue.use(RadioGroup);
Vue.use(RadioButton);
Vue.use(Menu);
Vue.use(MenuItemGroup);
Vue.use(Submenu);
Vue.use(MenuItem);
Vue.use(Tooltip);
Vue.use(Row);
Vue.use(Col);
Vue.use(Card);
