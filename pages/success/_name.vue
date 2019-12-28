<template>
<div class="container">

</div>    
</template>

<script>
import firebase from 'firebase'
export default {
    auth:true,
    data(){
        return{
            name:this.$route.params.name
        }
    },
    computed:{
        user(){
            let id = firebase.auth().currentUser.uid
            this.name = id

        }
    }

}
</script>

<style scoped>

</style>