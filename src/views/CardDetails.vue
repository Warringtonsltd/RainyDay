<template>
    <section class="section section-shaped section-lg my-0">
        <div class="shape shape-style-1 bg-gradient-default">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
        </div>
        <div class="container pt-lg-md">
            <div class="row justify-content-center">
                <div class="col-lg-5">
                    <card type="secondary" shadow
                          header-classes="bg-white pb-5"
                          body-classes="px-lg-5 py-lg-5"
                          class="border-0">
                        <template>
                        </template>
                        <template>
                            <div class="text-center text-muted mb-4">
                                <small>Please enter your card details</small>
                            </div>
                            <form role="form">
                                <base-input alternative
                                            class="mb-3"
                                            placeholder="Name of Cardholder"
                                            addon-left-icon="ni ni-single-02">
                                </base-input>
                                <base-input alternative
                                            class="mb-3"
                                            placeholder="Card Number"
                                            addon-left-icon="ni ni-credit-card">
                                </base-input>
                                
                                <div class="row">
                                    <div class="col-6">
                                        <base-input alternative
                                        class="mb-"
                                        placeholder="CVV"
                                        addon-left-icon="ni ni-credit-card">
                                        </base-input>
                                    </div>
                                <div class="col-6">
                                        <base-input alternative
                                        class="mb-"
                                        placeholder="Expiry Date"
                                        addon-left-icon="ni ni-calendar-grid-58">
                                        </base-input>
                                    </div>
                                </div>
                                <div class="text-center">
                                    <base-button tag="a" href="#/success" type="primary" class="my-4">Next</base-button>
                                </div>
                                <img src="img/icons/cards.png" style="max-width:300px">
                            </form>
                        </template>
                    </card>
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
