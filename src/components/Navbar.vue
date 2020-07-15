<template>
    <div class="navbar" :class="{'navbar--dark': scrollPosition > 100}">
      <router-link to="/" class="navbar__logo">
        <img :src="require('../assets/img/logo-playground-white.png')" alt=""> 
      </router-link>
      <i class="navbar__burger fa fa-bars" @click="toggleMenu()"></i>
      
      <transition name="slide-left">
        <div class="navbar__nav" v-if="showMenu">
            <router-link :to="'/'+link.url" 
                v-for="(link, index) in links" :key="index">
                    {{link.name}}
            </router-link>
        </div>
      </transition>
    </div>
</template>

<script>
import {mapState, mapMutations} from 'vuex';

export default {
    components: {
        
    },

    data() {
        return {
            scrollPosition: null,
            links: [
                {
                    url: 'we-are',
                    name: 'we are',
                },
                {
                    url: 'we-do',
                    name: 'we do',
                },
                {
                    url: 'careers',
                    name: 'careers',
                },
            ]
        }
    },

    methods: {
        ...mapMutations([
            'toggleMenu',
        ]),
        updateScroll() {
            this.scrollPosition = window.scrollY;
        },
        blockScroll(newValue) {
            // console.log(newValue);
            if (newValue === true) {
                document.querySelector('html').style.overflowY = 'hidden';
            } else {
                document.querySelector('html').style.overflowY = 'auto';
            }
        }
    },

    watch: {
        showMenu: function(newValue) {
            this.blockScroll(newValue);
        },
    },

    mounted() {
        window.addEventListener('scroll', this.updateScroll);
    },

    computed: {
        ...mapState([
            'showMenu',
        ]),
    },
}
</script>