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
            id:this.$route.params.name
        }
    },
    computed:{
        user(){
            let id = firebase.auth().currentUser.uid
            this.id = id

        }
    }

}
</script>

<style scoped>

</style>