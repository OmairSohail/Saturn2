<template>
<div>

<section class="hero is-black is-fullheight-with-navbar">
  <div class="hero-body">
   
    <div class="box loginbox">
      <article class="media article_media">
        <div class="media-content">
           <div class="container image-container">
               <figure class="image is-128x128">
                    <img src="@/assets/Saturn.png">
                </figure>
           </div>
           <hr>
           <div class="container fieldsbox">
               <b-field label="Email :">
                    <b-input placeholder="Email" size="is-large" v-model="email" rounded required></b-input>
                </b-field>
                <b-field label="Password :">
                    <b-input placeholder="Password" type="Password" size="is-large" v-model="password" rounded required ></b-input>
                </b-field>
                <b-field>
                    <button class="button is-black is-fullwidth is-rounded is-large loginbtn" @click="login()">Login</button>
                </b-field>
                <b-field class="has-text-centered">
                    <nuxt-link to="/forgot-password" class="content">Forgot Password ...?</nuxt-link>
                </b-field>
           </div>      
               <!--<nuxt-link to="/signup" class="content donthaveaccount" >Dont Have An Account ?? Click Here ...</nuxt-link>-->       
        </div>
     </article>
   </div>
    
  </div>
</section>
</div>    
</template>

<script>

import firebase from '../config/firebaseinit'
import Swal from 'sweetalert2'
export default {
    auth:false,
    data(){
        return{
            email:'',
            password:'',
            loggedin:false
        }
    },
    components:{
       
    },
    methods:{
        login(){
            if(this.email !== '' && this.password !== '')
            {
                firebase
                .auth()
                .signInWithEmailAndPassword(this.email,this.password)
                .then(()=>{
                  Swal.fire(
                    'Logged In',  
                    'You Successfully Logged In',
                    'success'
                    ).then(()=>{
                        //console.log(firebase.auth().currentUser)
                        
                        this.$auth.loginWith('local',{
                                data: {
                                        username: this.email,
                                        password: this.password
                                    }
                        })

                        this.$router.push({  
                            path:`/`
                            })
                    })
                })
                .catch((err)=>{
                  Swal.fire({
                            icon: 'error',
                            title: err.message
                            })
                })
            }
        }
    }
}
</script>

<style scoped>
.hero-body{
   display:flex;
   justify-content: center;
   align-items: center;
}
.loginbox{
 width:500px;
 height:800px;
}

.image-container{
    display:flex;
    justify-content: center;
    align-items: center;
    height:250px;
}
.fieldsbox > *{
 margin:1rem;
}

.loginbtn{
    margin-top: 3rem;
}

.article_media{
    height:inherit;
}

</style>