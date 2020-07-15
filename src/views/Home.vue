<template>
    <div class="home">
        <slider></slider>
        <articles></articles>
        <banners></banners>
    </div>
</template>

<script>
import slider from '../components/Slider.vue'
import articles from '../components/SectionArticles.vue'
import banners from '../components/SectionBanners.vue'

export default {
    name: 'Home',
    
    components: {
        slider,
        articles,
        banners,
    }
}
</script>