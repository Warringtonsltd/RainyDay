<template>
    <section class="section pb-0 mt-5 section-components" >
        
        <nav class="navbar mt-4 navbar-expand-lg navbar-dark bg-primary"
         :class="[
            {[`bg-primary`]: 'primary'},
            {'navbar-transparent': true},
            {'navbar-expand-lg': false}
         ]">
        <div class="container">
            <slot name="container-pre"></slot>
            <slot name="brand">
                <a class="navbar-brand"  href="#" @click.prevent="onTitleClick">
                   How much cash would you like?
                </a>
            </slot>
        </div>
    </nav>
        <div>
            <div class="container mt-4">
                <div class="row">
                    <div class="col-lg-4 col-sm-6 mt-4">
                        
                        <label for="exampleFormControlSelect1">Select Currency</label>
                        <select class="form-control mb-2" id="exampleFormControlSelect1">
                            <option>Dolllars</option>
                            <option>Pounds</option>
                            <option>Euros</option>
                            <option>Other</option>
                        </select>
                        <base-input placeholder="Enter Amount">
                        </base-input>
                        
                        <div class="col-12 text-center mt-5">
                        <base-button class="btn-1" tag="a" href="#/source" type="primary">Next</base-button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
<script>
import Inputs from "./components/Inputs";
import CustomControls from "./components/CustomControls";
import Navigation from "./components/Navigation";
import JavascriptComponents from "./components/JavascriptComponents";
import Carousel from "./components/Carousel";
import Icons from "./components/Icons";
import Examples from "./components/Examples";
import DownloadSection from "./components/DownloadSection";

export default {
  name: "components",
  components: {
    Inputs,
    CustomControls,
    Navigation,
    JavascriptComponents,
    Carousel,
    Icons,
    Examples,
    DownloadSection
  }
};
</script>
