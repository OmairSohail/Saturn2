<template>
    <b-navbar>
        <template slot="brand">
            <b-navbar-item tag="nuxt-link" :to="{ path: '/' }">
                <img
                    src="@/assets/Saturn.png"
                    alt="Saturn Application"
                >
            </b-navbar-item>
        </template>
        <template slot="start">
            <b-navbar-item>
               <nuxt-link to="/"> Home </nuxt-link>
            </b-navbar-item>
            <b-navbar-item>
                <nuxt-link to="/docs">Documentation</nuxt-link>
            </b-navbar-item>
            <b-navbar-dropdown label="More">
                <b-navbar-item >
                    <nuxt-link to="/aboutus">About</nuxt-link>
                </b-navbar-item>
                <b-navbar-item>
                    <nuxt-link to="/contactus">Contactus</nuxt-link>
                </b-navbar-item>
            </b-navbar-dropdown>
        </template>

        <template slot="end">
            <b-navbar-item tag="div">
              
                    <nuxt-link v-if="!$auth.loggedIn" class="button is-dark" to="/signup">
                        <strong>Sign up</strong>
                    </nuxt-link>
                    <nuxt-link v-if="!$auth.loggedIn" class="button is-light" to="/login">
                        Log in
                    </nuxt-link>
                <p v-if="$auth.loggedIn">{{currentUser}}</p>
                <button v-if="$auth.loggedIn" class="button" @click="logout">Logout</button>

            </b-navbar-item>
        </template>
    </b-navbar>
</template>

<script>
import firebase from '~/config/firebaseinit'
export default {
    data(){
        return{
           
        }
    },
    name:'navbar',
    created(){
        if(firebase.auth().currentUser)
        {
            this.loggedin = true 
            this.currentUser = firebase.auth().currentUser.email
        }
    },
    methods:{
        logout(){
            firebase.auth().signOut().then(()=>{
                this.$router.push('/')
                this.loggedin = false
                this.currentUser = ''
                })
        }
    }
}
</script>

<style scoped>

</style>