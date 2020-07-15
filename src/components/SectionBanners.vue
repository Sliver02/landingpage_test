<template>
    <div class="banners">
        <div class="banners__card banners__card--dark" v-for="(banner, index) in banners" :key="index">
            <div class="banners__img">
                <img :src="require('../assets/img/banner-' + banner.url +'.jpg')" alt="">
            </div>
            <div class="banners__text">
                <h1 class="banners__title" v-html="banner.title"></h1>
                <p class="banners__desc" v-html="banner.desc"></p>
                <a :href="'/' + banner.url">
                    <div class="banners__button">
                        {{banner.link}} 
                        <i class="fa fa-chevron-right"></i>
                    </div>
                </a>
            </div>
        </div>
    </div>
</template>

<script>
import {mapState} from 'vuex';

export default {

    components: {

    },

    data() {
        return {
            
        }
    },

    computed: {
        ...mapState([
            'banners',
        ]),
    }
}
</script>