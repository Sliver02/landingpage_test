<template>
    <div class="navbar" :class="{'navbar--dark': scrollPosition > 100}">

        <router-link to="/">
            <div class="navbar__logo" @click="scrollTo('slider')">
                <img :src="require('../assets/img/logo-playground-white.png')" alt=""> 
            </div>
        </router-link>

      <i class="navbar__burger fa fa-bars" @click="toggleMenu()"></i>
      
      <transition name="slide-left">
        <div class="navbar__nav" v-if="showMenu || clientWidth >= 600">
            <div v-for="(link, index) in links" :key="index" @click="clientWidth >= 600 ? scrollTo(link.url) : closeMenu(); scrollTo(link.url)" class="navbar__link">
                    {{link.name}}
            </div>
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
            clientWidth: null,
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
                {
                    url: 'contact',
                    name: 'contact us',
                },
            ]
        }
    },

    mounted() {
        window.addEventListener('scroll', this.updateScroll);
        window.addEventListener('resize', this.tabletSize);
        this.clientWidth = window.innerWidth;
    },

    methods: {
        ...mapMutations([
            'toggleMenu',
            'closeMenu',
        ]),
        updateScroll() {
            this.scrollPosition = window.scrollY;
        },
        tabletSize() {
            this.clientWidth = window.innerWidth;
        },
        blockScroll(newValue) {
            // console.log(newValue);
            if (newValue === true) {
                document.querySelector('html').style.overflowY = 'hidden';
            } else {
                document.querySelector('html').style.overflowY = 'auto';
            }
        },
        scrollTo(index) {
            document.querySelector('#'+index).scrollIntoView({behavior: "smooth", block: "center"});
        }
    },   

    computed: {
        ...mapState([
            'showMenu',
        ]),
    },

    watch: {
        showMenu: function(newValue) {
            this.blockScroll(newValue);
        },
        clientWidth: function(newValue) {
            if (newValue < 600) {
                this.closeMenu();
            }
        }
    },
}
</script>