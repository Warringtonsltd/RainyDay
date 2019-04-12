<template>
    <section class="section-hero section-shaped my-0">
        <div class="container d-flex align-items-center">
            <div class="col px-0">
                <div class="row justify-content-center align-items-center">
                    <div class="col-lg-7 text-center pt-lg">
                        <h2 class="h2-custom primary-text mb-0 mb-5 mt-1">Request Sent!</h2>
                          <div class="col-lg-3 order-lg-2">
                                <div class="card-profile-image">
                                    <a href="#">
                                        <img v-lazy="'img/brand/gift.png'" style="max-width:180px" class="">
                                    </a>
                                </div>
                            </div>
                    </div>
                </div>
                <div class="row justify-content-center align-items-center">
                    <div class="col-lg-7 text-center pt-lg"><div class="btn-wrapper">
                            <base-button tag="a"
                                         href="#/selectamount"
                                         class="mb-3 mb-sm-0"
                                         type="info"
                                         icon="fa fa-bolt">
                                Get Cash
                            </base-button>
                            <base-button tag="a"
                                         href="#/profile"
                                         class="mb-3 mb-sm-0"
                                         type="white"
                                         icon="fa fa-user">
                                My Account
                            </base-button>
                        </div>
                    </div>
                </div>
                <div class="row align-items-center">
                    <div class="col-sm-4 text-center">
                        <!-- <span class="alpha-7">Request sent</span> -->
                    </div>
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
