<template>
    <div class="slider">
    
        <div class="slider__slide" 
            v-for="(slide, index) in slides" :key="index"
            :class="{'is-active': imgIndex === index, 
                    'is-prev': imgPrev === index}"    
        >
            <div class="slider__mask"
                :class="{'is-active': imgIndex === index, 
                        'is-prev': imgPrev === index}"
            >
                <div class="slider__img-wrap">
                    <img :src="require('../assets/img/slide-' + slide.img +'.jpg')" >
                </div>
            </div>

            <transition name="fade-out" mode="out-in">
                <div class="slider__text" v-show="imgIndex === index">
                    <h1 class="slider__title" v-html="slide.title"></h1>
                    <p class="slider__desc" v-html="slide.text"></p>
                </div>
            </transition>
        </div>

        <div class="slider__btn slider__btn--left" @click="prevSlide()">
            <i class="fas fa-chevron-left"></i>
        </div>
        <div class="slider__btn slider__btn--right" @click="nextSlide()">
            <i class="fas fa-chevron-right"></i>
        </div>

        <div class="slider__point-wrap">
            <div class="slider__point" 
                v-for="(slide, index) in slides" :key="index"
                :class="{'is-active': imgIndex === index}"
                @click="selectSlide(index)"
            >
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
            imgIndex: 0,
            imgTotal: null,
            imgPrev: null,
            startTimer: 8, // secondi per cambiare automaticamente slide
            resetTimer: 12, // secondi per cambiare automaticamente slide
            nextTimer: this.startTimer,
            timer: undefined,
            sliderPause: false,
        }
    },

    mounted() {
        this.imgTotal = this.slides.length -1;
        this.imgPrev = this.imgTotal;

        this.startSlide(this.startTimer);
    },

    methods: {
        updatePrev() {
            clearInterval(this.timer);
            this.startSlide(this.startTimer);
            this.imgPrev = this.imgIndex;
        },
        
        startSlide(newTime) {
            this.nextTimer = newTime;
            this.sliderPause = false;

            this.timer = setInterval(() => {
                if (this.imgIndex < this.imgTotal) {
                    this.updatePrev();
                    this.imgIndex += 1;
                } else {
                    // console.log('band reset');
                    this.updatePrev();
                    this.imgIndex = 0;
                }
            }, this.nextTimer * 1000);
        },

        stopSlide() {
            this.updatePrev();
            this.nextTimer = 0;
            clearInterval(this.timer);

            this.timer = setTimeout(() => {
                this.startSlide(4);
            }, this.resetTimer * 1000);
        },

        nextSlide() {
            // console.log('next');
            if (this.imgIndex < this.imgTotal) {
                this.stopSlide();
                this.imgIndex += 1;
            } else {
                this.stopSlide();
                this.imgIndex = 0;
            }
        },

        prevSlide() {
            // console.log('prev');
            if (this.imgIndex > 0) {
                this.stopSlide();
                this.imgIndex -= 1;
            } else {
                this.stopSlide();
                this.imgIndex = this.imgTotal;
            }
        },

        selectSlide(selectedId) {
            this.stopSlide();
            this.imgIndex = selectedId;
        },
    },

    computed: {
        ...mapState([
            'slides',
        ]),
    },

    watch: {
        
    },
}
</script>