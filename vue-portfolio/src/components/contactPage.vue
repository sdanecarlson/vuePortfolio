<template>
    <div>
        <section class="section">
            <div class="container-fliud">
                <h1>CONTACT</h1>
                <p>Learn more about Dane.</p>
                  <form class="contact-form" @submit.prevent="sendEmail">
                    <label>Name </label>
                    <input type="text" name="user_name">
                    <label>Email </label>
                    <input type="email" name="user_email"><br>
                    <label>Message </label>
                    <textarea name="message" style="padding-top: 150px; width: 450px"></textarea>
                    <br><input type="submit" value="Send">
                </form>
            </div>
        </section>
    </div>
</template>

<script>
import emailjs from 'emailjs-com';

export default {
  methods: {
    sendEmail: (e) => {
      emailjs.sendForm('service_jgq5vmr', 'template_ol59ays', e.target, 'user_lNqsFNOGgahwP87OMuKwt')
        .then((result) => {
            console.log('SUCCESS!', result.status, result.text);
        }, (error) => {
            console.log('FAILED...', error);
        });
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.contact-form label{
    padding-left: 10px;
    padding-right: 10px;
}

.headerImage{
  width: 100%;
}

h1 {
  margin: 40px 0 0;
  font-size: 500%;
  font-weight: 800;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.section{
        padding-top: 10%;
        padding-bottom: 10%;
    }
</style>
