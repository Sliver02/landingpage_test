<template>
    <div class="article">
        <div class="article__header">
            <h3 class="article__title">{{article.title}}</h3>
            <img :src="require('../assets/img/card-' + article.url +'.png')" alt="">
        </div>
        <div class="article__text">
            {{article.text}}
        </div>
        <router-link :to="'/' + article.url">
            <div class="article__btn">
                read more
            </div>
        </router-link>
    </div>
</template>

<script>
export default {
    props: ['article'],
    
}
</script>