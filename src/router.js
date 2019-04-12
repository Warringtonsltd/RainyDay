import Vue from "vue";
import Router from "vue-router";
import AppHeader from "./layout/AppHeader";
import BlueHeader from "./layout/BlueHeader";
import FakeHeader from "./layout/FakeHeader";
import AppFooter from "./layout/AppFooter";
import Components from "./views/Components.vue";
import Home from "./views/Home.vue";
import Landing from "./views/Landing.vue";
import Dashboard from "./views/Dashboard.vue";
import SelectAmount from "./views/SelectAmount.vue";
import Source from "./views/Source.vue";
import CardDetails from "./views/CardDetails.vue";
import SuccessScreen from "./views/SuccessScreen.vue";
import SendRequest from "./views/SendRequest.vue";
import Contacts from "./views/contacts.vue";
import Sharing from "./views/Sharing.vue";
import Login from "./views/Login.vue";
import Register from "./views/Register.vue";
import RegisterBusiness from "./views/registerbusiness.vue";
import RegisterDetails from "./views/RegisterDetails.vue";
import Profile from "./views/Profile.vue";

Vue.use(Router);

export default new Router({
  linkExactActiveClass: "active",
  routes: [
    {
      path: "/",
      name: "home",
      components: {
        header: AppHeader,
        default: Home,
        footer: AppFooter
      }
    },
    {
      path: "/components",
      name: "components",
      components: {
        header: AppHeader,
        default: Components,
        footer: AppFooter
      }
    },
    {
      path: "/dashboard",
      name: "dashboard",
      components: {
        header: AppHeader,
        default: Dashboard,
        footer: AppFooter
      }
    },
    {
      path: "/selectamount",
      name: "selectamount",
      components: {
        header: BlueHeader,
        default: SelectAmount,
        footer: AppFooter
      }
    },
    {
      path: "/source",
      name: "source",
      components: {
        header: BlueHeader,
        default: Source,
        footer: AppFooter
      }
    },
    {
      path: "/contacts",
      name: "contacts",
      components: {
        header: FakeHeader,
        default: Contacts,
        footer: AppFooter
      }
    },
    {
      path: "/sharing",
      name: "sharing",
      components: {
        header: BlueHeader,
        default: Sharing,
        footer: AppFooter
      }
    },
    {
      path: "/success",
      name: "successcreen",
      components: {
        header: BlueHeader,
        default: SuccessScreen,
        footer: AppFooter
      }
    },
    {
      path: "/sendrequest",
      name: "sendrequest",
      components: {
        header: BlueHeader,
        default: SendRequest,
        footer: AppFooter
      }
    },
    {
      path: "/carddetails",
      name: "carddetails",
      components: {
        header: AppHeader,
        default: CardDetails,
        footer: AppFooter
      }
    },
    {
      path: "/landing",
      name: "landing",
      components: {
        header: AppHeader,
        default: Landing,
        footer: AppFooter
      }
    },
    {
      path: "/login",
      name: "login",
      components: {
        header: AppHeader,
        default: Login,
        footer: AppFooter
      }
    },
    {
      path: "/register",
      name: "register",
      components: {
        header: AppHeader,
        default: Register,
        footer: AppFooter
      }
    },
    {
      path: "/registerbusiness",
      name: "registerbusiness",
      components: {
        header: AppHeader,
        default: RegisterBusiness,
        footer: AppFooter
      }
    },
    {
      path: "/registerdetails",
      name: "registerdetails",
      components: {
        header: AppHeader,
        default: RegisterDetails,
        footer: AppFooter
      }
    },
    {
      path: "/profile",
      name: "profile",
      components: {
        header: AppHeader,
        default: Profile,
        footer: AppFooter
      }
    }
  ],
  scrollBehavior: to => {
    if (to.hash) {
      return { selector: to.hash };
    } else {
      return { x: 0, y: 0 };
    }
  }
});
