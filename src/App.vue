<template>
    <div id="app">
      <div id="nav">
            <!-- <router-link v-if="authenticated" to="/login" v-on:click.native="logout()" replace>Logout</router-link> -->
        </div>
        <router-view @authenticated="setAuthenticated" />
        <router-view name="header" ></router-view>
        <router-view name="footer"></router-view>
    </div>
</template>
<script>
import { FadeTransition } from "vue2-transitions";

export default {
  components: {
    FadeTransition
  },
  name: 'App',
        data() {
            return {
                authenticated: true,
                mockAccount: {
                    username: "edwin@gorainyday.com",
                    password: "password"
                }
            }
        },
        mounted() {
            if(!this.authenticated) {
                this.$router.replace({ name: "login" });
            }
        },
        methods: {
            setAuthenticated(status) {
                this.authenticated = status;
            },
            logout() {
                this.authenticated = false;
            }
        }
};
</script>
