<template>
    <div class="contact">
        <div class="contact__text">
            <h1 class="contact__title">
                contact<br>us.
            </h1>
            <td class="contact__info">
                <tr>Playground srl</tr>
                <tr>Via G. Mazzini 3/C</tr>
                <tr>Cernusco Sul Naviglio (Milano)</tr>
                <tr>-</tr>
                <tr>T +39 0240706003</tr>
            </td>
        </div>
        <form @submit.prevent="handleSubmit" class="contact__form" name="contact" action="POST" data-netlify="true" data-netlify-honeypot="bot-field">

            <div style="diplay: none;" hidden>
                <label>Don't fill this if u're human:  <input name="bot-field"> </label>
            </div>

            <input class="contact__name" placeholder="name" v-model="form.name" name="name" id="name" type="text">

            <input class="contact__surename" placeholder="second name" v-model="form.surename" name="surename" id="surename" type="text">

            <input class="contact__email" placeholder="email" v-model="form.email" name="email" id="email" type="email" required>

            <textarea class="contact__message" placeholder="message" v-model="form.message" name="message" id="message" type="text" required></textarea>

            <button class="contact__btn" type="submit">
                SEND <i class="fa fa-chevron-right"></i>
            </button>

        </form>
    </div>
</template>

<script>
export default {
    data() {
        return {
            form: {
                name: '',
                surename: '',
                subject: '',
                message: '',
            }
        }
    },

    methods: {
        encode(data) {
            return Object.keys(data)
            .map(key => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`)
            .join('&')
        },
        handleSubmit() {
            fetch('/', {
                method: 'post',
                headers: {
                    'Content-type': 'application/x-www-form-urlencoded'
                },
                body: this.encode({
                    'form-name': 'contact',
                    ...this.form
                })
            })
            .then(() => {
                console.log('success: message sent');
                alert('success: message sent');
            })
            .catch(e => {
                console.error(e);
                alert('error: message not sent');
            })
        },
    },
}
</script>