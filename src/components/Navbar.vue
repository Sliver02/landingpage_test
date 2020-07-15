<template>
    <div class="navbar" :class="{'navbar--dark': scrollPosition > 100}">

        <router-link to="/">
            <div class="navbar__logo" @click="closeMenu()">
                <img :src="require('../assets/img/logo-playground-white.png')" alt=""> 
            </div>
        </router-link>

      <i class="navbar__burger fa fa-bars" @click="toggleMenu()"></i>
      
      <transition name="slide-left">
        <div class="navbar__nav" v-if="showMenu">
            <div @click="closeMenu()" v-for="(link, index) in links" :key="index">
                <router-link :to="'/'+link.url">
                        {{link.name}}
                </router-link>
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

    mounted() {
        window.addEventListener('scroll', this.updateScroll);
    },

    methods: {
        ...mapMutations([
            'toggleMenu',
            'closeMenu',
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

    computed: {
        ...mapState([
            'showMenu',
        ]),
    },

    watch: {
        showMenu: function(newValue) {
            this.blockScroll(newValue);
        },
    },
}
</script>