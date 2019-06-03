<template>
    <header class="header-global">
        <base-nav class="navbar-main nav-custom" transparent type="" effect="light">
            <a slot="brand" class="navbar-brand mr-lg-5 text-primary" href="/">
                Cancel
            </a>
            <div slot="brand" class="navbar-brand-custom text-primary" href="/">
                 <input
                    placeholder="Search"
                    class="form-control custom-control"
                    aria-describedby="addon-right addon-left">
            </div>
            
        </base-nav>
    </header>
</template>
<script>
import BaseNav from "@/components/BaseNav";
import BaseDropdown from "@/components/BaseDropdown";

export default {
  components: {
    BaseNav,
    BaseDropdown
  }
};
</script>
<style>
</style>
