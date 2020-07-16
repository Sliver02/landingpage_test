<template>
    <div class="accordion">
        <div class="accordion__core">
            <div class="accordion__page" v-for="(article, index) in accordion" :key="index">
                <div class="accordion__header" @click="switchPage(index)" :class="{'is-active': pageIndex == index && showPage}">
                    <p class="accordion__title">
                        {{article.title}}
                        <i class="fa fa-chevron-up"></i>
                    </p>
                </div>

                <div class="accordion__text" v-if="pageIndex == index && showPage && clientWidth < 900">
                    <p v-for="(row, index) in article.content" :key="index">
                        {{row}}
                    </p>
                </div>
            </div>
        </div>

        <div class="accordion__tab">
            <div class="accordion__text" v-if="showPage && clientWidth >= 900">
                <p v-for="(row, index) in accordion[pageIndex].content" :key="index">
                    {{row}}
                </p>
            </div>
        </div>
    </div>
</template>

<script>
import {mapState, mapMutations} from 'vuex';

export default {
    components: {
    },

    data() {
        return {
            clientWidth: null,
        }
    },

    mounted() {
        window.addEventListener('resize', this.tabletSize);
        this.clientWidth = window.innerWidth;

    },

    methods: {
        ...mapMutations([
            'switchPage',
        ]),
        tabletSize() {
        },
    },

    computed: {
        ...mapState([
            'pageIndex',
            'showPage',
            'accordion',
        ]),
    },
}
</script>