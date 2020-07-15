<template>
    <div class="home">
        <slider></slider>
        
        <div class="home__article-section">
            <article-card v-for="(article, index) in articles" :key="index" :article="article"></article-card>
        </div>

        <div class="home__banner-section">
            <banner-card v-for="(banner, index) in banners" :key="index" :banner="banner" :index="index"></banner-card>
        </div>

        <div class="home__accordion-section">
            <accordion></accordion>
        </div>

        <div class="home__contact-section">
            <contact></contact>
        </div>
    </div>
</template>

<script>
import slider from '../components/Slider.vue'
import articleCard from '../components/ArticleCard.vue'
import bannerCard from '../components/BannerCard.vue'
import accordion from '../components/Accordion.vue'
import contact from '../components/Contact.vue'
import {mapState} from 'vuex';

export default {
    name: 'Home',
    
    components: {
        slider,
        articleCard,
        bannerCard,
        accordion,
        contact,
    },

    methods: {

    },

    computed: {
        ...mapState([
            'showPage',
            'selectedPage',
            'articles',
            'banners',
        ]),
    }
}
</script>