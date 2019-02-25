<template>
    <section class="section-hero section-shaped my-0">
        <div class="shape shape-style-1">
            <span class="span-150"></span>
            <span class="span-50"></span>
            <span class="span-50"></span>
            <span class="span-75"></span>
        </div>
        <div class="container d-flex align-items-center">
           <div class="row contact-list">
               <div class="col-12">
                <h2 class="primary-text">Text Preview</h2>
                </div>
                <div class="col-12">
                     To: Jane Snow
                </div>
                
                <div class="media media-share col-12">
                    <a href="#/sharing"><img v-lazy="'img/brand/bolt.png'" class="mr-3 col-4">
                    <div class="media-body">
                        <h5 class="mt-0">Your Friend John Snow</h5>
                        <h6>Has requested a loan on this rainy day!</h6>
                        <h6>Would you like to help?</h6>
                    </div>
                    </a>
                </div>
                <div class="text-center col-12">
                    <base-button tag="a" href="#/success" class="mb-6 mt-5" type="success" icon="fa fa-bolt">
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
