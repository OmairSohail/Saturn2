<template>
<div class="container">
<p class="title">User Id : {{id}}</p>
</div>    
</template>

<script>
export default {
    auth:true,
    data(){
        return{
            id:this.$route.params.id
        }
    },
}
</script>

<style scoped>

</style>