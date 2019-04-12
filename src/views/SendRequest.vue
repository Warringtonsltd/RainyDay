<template>
    <section class="section-hero section-shaped my-0">
        <div class="shape shape-style-1">
            <span class="span-150"></span>
            <span class="span-50"></span>
            <span class="span-50"></span>
            <span class="span-75"></span>
            <span class="span-100"></span>
            <span class="span-75"></span>
            <span class="span-50"></span>
            <span class="span-100"></span>
            <span class="span-50"></span>
            <span class="span-100"></span>
        </div>
        <div class="container d-flex align-items-center">
            <div class="col px-0 text-center">
                <div class="row justify-content-center align-items-center">
                    <div class="col-lg-7 text-center pt-lg">
                        <h2 class="h2-custom mb-0 mb-5 primary-text" style="margin-top:-60px">Send your request</h2>
                         <div class="nav-wrapper text-center">
                             <img v-lazy="'img/icons/logos.png'" style="width:90%;" />
                        </div>
                    </div>
                <base-button tag="a" href="#/contacts" class="mb-6 mt-3" type="primary" icon="fa fa-bolt">
                    Request Cash
                </base-button>
            </div>
        </div>
        </div>
    </section>
</template>
<script>
export default {};
</script>
<style>
</style>
