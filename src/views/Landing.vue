<template>
    <div>

        <div class="position-relative">
            <!-- shape Hero -->
            <section class="section-shaped my-0">
                <div class="shape shape-style-1 shape-default shape-skew">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
                <div class="container shape-container d-flex">
                    <div class="col px-0">
                        <div class="row text-center">
                            <div class="col-lg-12">
                                <h1 class="display-3  text-white">Rainy Day Cash
                                    <span>When you need it.</span>
                                </h1>
                                <p class="lead  text-white"> Request or make a cash transfer of $1,000 up-to $25,000 direct to your bank account from any valid credit card</p>
                                <div class="btn-wrapper">
                                    <base-button tag="a"
                                                 href="/"
                                                 class="mb-3 mb-sm-0"
                                                 type="white"
                                                 icon="ni ni-cloud-download-95">
                                        Download App
                                    </base-button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <!-- 1st Hero Variation -->
        </div>
        <section class="section section-lg pt-lg-0 mt--200">
            <div class="container">
                <div class="row justify-content-center">
                    <div class="col-lg-12">
                        <div class="row row-grid">
                            <div class="col-lg-4 text-center">
                                <card class="border-0" hover shadow body-classes="py-5">
                                    <a href="#">
                                        <img v-lazy="'img/brand/bolt.png'" class="landing-img">
                                    </a>
                                    <h6 class="text-primary text-uppercase">Get Cash Quickly</h6>
                                    <p class="description mt-3">Download App. Get Cash Quickly.</p>
                                    <div>
                                        <!-- <badge type="primary" rounded>design</badge>
                                        <badge type="primary" rounded>system</badge>
                                        <badge type="primary" rounded>creative</badge> -->
                                    </div>
                                    <base-button tag="a" href="#" type="primary" class="mt-4">
                                        Learn more
                                    </base-button>
                                </card>
                            </div>
                            <div class="col-lg-4 text-center">
                                <card class="border-0" hover shadow body-classes="py-5">
                                    <a href="#">
                                        <img v-lazy="'img/brand/gift.png'" class="landing-img">
                                    </a>
                                    <h6 class="text-primary text-uppercase">UP TO $25,000 PER DAY</h6>
                                    <p class="description mt-3">Transfer Cash Today!</p>
                                    <div>
                                        <!-- <badge type="success" rounded>business</badge>
                                        <badge type="success" rounded>vision</badge>
                                        <badge type="success" rounded>success</badge> -->
                                    </div>
                                    <base-button tag="a" href="#" type="primary" class="mt-4">
                                        Learn more
                                    </base-button>
                                </card>
                            </div>
                            <div class="col-lg-4 text-center">
                                <card class="border-0" hover shadow body-classes="py-5">
                                    <a href="#">
                                        <img v-lazy="'img/brand/lock.png'" class="landing-img">
                                    </a>
                                    <h6 class="text-primary text-uppercase">SAFE & SECURE</h6>
                                    <p class="description mt-3">We don’t save or sell your data.</p>
                                    <div>
                                        <!-- <badge type="warning" rounded>marketing</badge>
                                        <badge type="warning" rounded>product</badge>
                                        <badge type="warning" rounded>launch</badge> -->
                                    </div>
                                    <base-button tag="a" href="#" type="primary" class="mt-4">
                                        Learn more
                                    </base-button>
                                </card>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <!-- <section class="section section-lg">
            <div class="container">
                <div class="row row-grid align-items-center">
                    <div class="col-md-6 order-md-2">
                        <img src="img/theme/promo-1.png" class="img-fluid floating">
                    </div>
                    <div class="col-md-6 order-md-1">
                        <div class="pr-md-5">
                            <icon name="ni ni-settings-gear-65" class="mb-5" size="lg" type="success" shadow
                                  rounded></icon>
                            <h3>Awesome features</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis non lectus ut sapien blandit mollis vulputate ac nisl. Ut eu erat leo. Donec arcu enim, mattis in quam quis, gravida pellentesque enim.</p>
                            <ul class="list-unstyled mt-5">
                                <li class="py-2">
                                    <div class="d-flex align-items-center">
                                        <badge type="success" circle class="mr-3" icon="ni ni-settings-gear-65"></badge>
                                        <h6 class="mb-0">Carefully crafted components</h6>
                                    </div>
                                </li>
                                <li class="py-2">
                                    <div class="d-flex align-items-center">
                                        <badge type="success" circle class="mr-3" icon="ni ni-html5"></badge>
                                        <h6 class="mb-0">Amazing Loans</h6>
                                    </div>
                                </li>
                                <li class="py-2">
                                    <div class="d-flex align-items-center">
                                        <badge type="success" circle class="mr-3" icon="ni ni-satisfied"></badge>
                                        <h6 class="mb-0">Super friendly</h6>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section> -->
        

    </div>
</template>

<script>
export default {
  name: "home",
  components: {}
};
</script>
