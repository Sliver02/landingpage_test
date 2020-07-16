<template>
    <div class="accordion">
        <div class="accordion__core" v-if="!loading">
            <div class="accordion__page" v-for="(article, index) in accordion" :key="index">
                <div class="accordion__header" @click="switchPage(index)" :class="{'is-active': pageIndex == index && showPage}">
                    <p class="accordion__title">
                        {{article.title}}
                        <i class="fa fa-chevron-up"></i>
                    </p>
                </div>

                <div class="accordion__text" v-if="pageIndex == index && clientWidth < 900">
                    <p v-for="(row, index) in article.content" :key="index">
                        {{row}}
                    </p>
                </div>
            </div>
        </div>

        <div class="accordion__tab" v-if="!loading">
            <div class="accordion__text" v-if="clientWidth >= 900">
                <p v-for="(row, index) in accordion[pageIndex].content" :key="index">
                    {{row}}
                </p>
            </div>
        </div>

        <span class="accordion__load" v-if="loading">
            <i class="fa fa-spinner fa-spin"></i>
        </span>
    </div>
</template>

<script>
import axios from 'axios'
import {mapState, mapMutations} from 'vuex';

export default {
    components: {

    },

    data() {
        return {
            accordion: [],
            clientWidth: null,
            loading: true,
        }
    },

    mounted() {
        window.addEventListener('resize', this.tabletSize);
        this.clientWidth = window.innerWidth;

        axios.get('accordion.json')
            .then(x => new Promise(resolve => 
                setTimeout(() => {
                    this.loading = true;
                console.log(this.loading)

                    resolve(x)
                }, 3000)
            ))
            .then((response) => {
                // dispatch({type:'FETCH_USERS_FULFILLED', payload:response.data});
                this.loading = false;
                this.accordion = response.data;
                console.log(this.loading)
            })
            .catch(() => {
                // dispatch({type:'FETCH_USERS_REJECTED', payload:err});
            })
    },

    methods: {
        ...mapMutations([
            'switchPage',
        ]),
        tabletSize() {
            this.clientWidth = window.innerWidth;
        },
    },

    computed: {
        ...mapState([
            'pageIndex',
            'showPage',
        ]),
    },
}
</script>