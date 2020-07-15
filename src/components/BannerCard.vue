<template>
    <div class="banner" :class="{'banner--dark': index % 2 == 0}">
        <div class="banner__img">
            <img :src="require('../assets/img/banner-' + banner.url +'.jpg')" alt="">
        </div>
        <div class="banner__text">
            <h1 class="banner__title" v-html="banner.title"></h1>
            <p class="banner__desc" v-html="banner.desc"></p>
            <router-link :to="'/' + banner.url">
                <div class="banner__btn">
                    {{banner.btn}} 
                    <i class="fa fa-chevron-right"></i>
                </div>
            </router-link>
        </div>
    </div>
</template>

<script>
export default {
    props: ['banner', 'index'],

    components: {

    },

    data() {
        return {
            
        }
    },

}
</script>