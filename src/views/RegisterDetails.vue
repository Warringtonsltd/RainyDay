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
                            <div class="text-muted text-center mb-3">
                                Account Details
                            </div>
                        </template>
                        <template>
                            <div class="text-center text-muted mb-4">
                                <small>Please ensure your details are correct</small>
                            </div>
                            <form role="form">
                               
                                
                                <div class="row">
                                    <div class="col-12">
                                        <base-input alternative
                                        class="mb-"
                                        placeholder="Bank Name"
                                        addon-left-icon="ni ni-credit-card">
                                        </base-input>
                                    </div>
                                    <div class="col-12">
                                        <base-input alternative
                                                class="mb-3"
                                                placeholder="Account Beneficiary"
                                                addon-left-icon="ni ni-single-02">
                                        </base-input>
                                    </div>
                                    <div class="col-12">
                                        <base-input alternative
                                                    class="mb-3"
                                                    placeholder="Account name"
                                                    addon-left-icon="ni ni-credit-card">
                                        </base-input>
                                    </div>
                                    <div class="col-12">
                                        <base-input alternative
                                        class="mb-"
                                        placeholder="Swift Code/BIC"
                                        addon-left-icon="ni ni-calendar-grid-58">
                                        </base-input>
                                    </div>
                                    <div class="col-12">
                                        <base-input alternative
                                        class="mb-"
                                        placeholder="IBAN"
                                        addon-left-icon="ni ni-credit-card">
                                        </base-input>
                                    </div>
                                    <div class="col-12">
                                        <base-input alternative
                                        class="mb-"
                                        placeholder="ABA Routing Number"
                                        addon-left-icon="ni ni-calendar-grid-58">
                                        </base-input>
                                    </div>
                                </div>
                                <base-checkbox>
                                    <span>I agree with the
                                        <a href="#">Privacy Policy</a>
                                    </span>
                                </base-checkbox>
                                <div class="text-center">
                                    <base-button type="primary" class="my-4" tag="a" href="#/">Finish</base-button>
                                </div>
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
