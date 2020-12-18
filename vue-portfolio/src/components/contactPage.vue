<template>
    <div>
        <section class="section">
            <div class="container-fliud">
                <h1>CONTACT</h1>
                <p>Learn more about Dane.</p>
                <button type="button" class="btn btn-primary btn-lg" data-toggle="modal" data-target=".bd-example-modal-lg">Contact</button>
            </div>
        </section>
        <section class="modal">
            <div class="modal fade bd-example-modal-lg" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
                <div class="modal-dialog modal-lg">
                    <div class="modal-content">
                        <Contact/>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
import Contact from'./contactUs'
export default {
    name:'contactPage',
    components:{
        Contact
    }  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
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
