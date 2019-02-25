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
                                <small>Sign up as Business</small>
                            </div>
                            <div class="btn-wrapper text-center">
                                <base-button type="neutral" tag="a" href="#/register">
                                    Personal
                                </base-button>

                                <base-button type="neutral" tag="a" href="#/registerbusiness">
                                    Business
                                </base-button>
                            </div>
                        </template>
                        <template>
                            <div class="text-center text-muted mb-4">
                                <small>Or sign up with credentials</small>
                            </div>
                            <form role="form">
                                <base-input alternative
                                            class="mb-3"
                                            placeholder="Company Name"
                                            addon-left-icon="ni ni-single-02">
                                </base-input>
                               <base-input alternative
                                            class="mb-3"
                                            placeholder="EIN"
                                            addon-left-icon="ni ni-pin-3">
                                </base-input>
                                <base-input alternative
                                            class="mb-3"
                                            placeholder="Company Registration Number"
                                            addon-left-icon="ni ni-single-02">
                                </base-input>
                                <base-input alternative
                                            class="mb-3"
                                            placeholder="Salutation"
                                            addon-left-icon="ni ni-badge">
                                </base-input>
                                <base-input alternative
                                            class="mb-3"
                                            placeholder="First Name"
                                            addon-left-icon="ni ni-single-02">
                                </base-input>
                                 <base-input alternative
                                            class="mb-3"
                                            placeholder="Last Name"
                                            addon-left-icon="ni ni-single-02">
                                </base-input>
                                 <base-input alternative
                                            class="mb-3"
                                            placeholder="DOB"
                                            addon-left-icon="ni ni-single-02">
                                </base-input>
                                <base-input alternative
                                            class="mb-3"
                                            placeholder="Email"
                                            addon-left-icon="ni ni-email-83">
                                </base-input>
                                <base-input alternative
                                            class="mb-3"
                                            placeholder="Job Title"
                                            addon-left-icon="ni ni-badge">
                                </base-input>
                                 <base-input alternative
                                            class="mb-3"
                                            placeholder="Phone Country Code"
                                            addon-left-icon="ni ni-mobile-button">
                                </base-input>
                                <base-input alternative
                                            class="mb-3"
                                            placeholder="Phone number"
                                            addon-left-icon="ni ni-mobile-button">
                                </base-input>
                               
                                 <base-input alternative
                                            class="mb-3"
                                            placeholder="Address Line 1"
                                            addon-left-icon="ni ni-pin-3">
                                </base-input>
                                 <base-input alternative
                                            class="mb-3"
                                            placeholder="Address Line 2"
                                            addon-left-icon="ni ni-pin-3">
                                </base-input>
                                 <base-input alternative
                                            class="mb-3"
                                            placeholder="City"
                                            addon-left-icon="ni ni-pin-3">
                                </base-input>
                                 <base-input alternative
                                            class="mb-3"
                                            placeholder="State"
                                            addon-left-icon="ni ni-square-pin">
                                </base-input>
                                <base-input alternative
                                            class="mb-3"
                                            placeholder="Zip Code"
                                            addon-left-icon="ni ni-square-pin">
                                </base-input>
                                <base-input alternative
                                            class="mb-3"
                                            placeholder="Country"
                                            addon-left-icon="ni ni-map-big">
                                </base-input>
                                <base-input alternative
                                            type="password"
                                            placeholder="Password"
                                            addon-left-icon="ni ni-lock-circle-open">
                                </base-input>
                                <div class="text-muted font-italic">
                                    <small>password strength:
                                        <span class="text-success font-weight-700">strong</span>
                                    </small>
                                </div>
                                <base-checkbox>
                                    <span>I agree with the
                                        <a href="#">Privacy Policy</a>
                                    </span>
                                </base-checkbox>
                                <div class="text-center">
                                    <base-button type="primary" tag="a" href="#/registerdetails" class="my-4">Next</base-button>
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
