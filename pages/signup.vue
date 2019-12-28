<template>
<div>

<section class="hero is-fullheight-with-navbar">
  <div class="hero-body">
    <div class="columns">
      <div class="column is-two-thirds columnforlogin">
         <!--Login Box-->
         <div class="box loginbox">
            <article class="media">
                <div class="media-content">
                <p class="title">Create An Account..</p>
                    <b-field label="Username">
                        <b-input required v-model="name"></b-input>
                    </b-field>

                    <b-field label="Email">
                        <b-input type="email" maxlength="30" required v-model="email"></b-input>
                    </b-field>

                    <b-field label="Password">
                        <b-input type="password"  required v-model="password"></b-input>
                    </b-field>

                    <b-field label="Confirm">
                        <b-input  maxlength="30" type="password" required v-model="confirmpassword"></b-input>
                    </b-field>

                    <b-field>
                        <label class="checkbox">
                        <input type="checkbox" v-model="IsAgree">
                        I agree to the <nuxt-link to="/term&condition">terms and conditions</nuxt-link>
                        </label>
                    </b-field> 
                    <b-field>
                        <button @click="Signup" class="button is-info crbtn">Create Account</button>
                         <b-loading :is-full-page="isFullPage" :active.sync="isLoading" :can-cancel="true">
                            <b-icon
                                pack="fas"
                                icon="sync-alt"
                                size="is-large"
                                custom-class="fa-spin">
                            </b-icon>
                        </b-loading>
                    </b-field>
                </div>
            </article>
        </div>

      </div>

      <div class="column">
       <p class="title">Create Your Account To Get 3-in-1 Benefits</p>
       <ul>
           <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem, voluptatibus?</li>
           <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem, voluptatibus?</li>
           <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem, voluptatibus?</li>
       </ul>
      </div>
    </div>
  </div>
</section>
</div>   
</template>

<script>

import Swal from 'sweetalert2'
import firebase from '../config/firebaseinit'
export default {
    auth:'guest',
    data(){
        return{
           name:'',
           email:'',
           password:'',
           confirmpassword:'',
           IsAgree:true,
           isLoading:false,
           isFullPage:true
        }
    },
    components:{
      
    },
    methods:{
        Signup(){
             if(this.IsAgree == false)
              {
                        Swal.fire({
                            icon: 'error',
                            title: 'Terms & Conditions',
                            text: 'Please Agree Terms and Conditions First...',
                            footer: '<a href>Why do I have this issue?</a>'
                            })
              }else
              {
                
                  firebase
                  .auth()
                  .createUserWithEmailAndPassword(this.email,this.password)
                  .then(()=>{
                     Swal.fire('Account Successfully Created').then(()=>{
                         firebase
                        .auth()
                        .signInWithEmailAndPassword(this.email,this.password).then(()=>{
                           this.$router.push('/signup')
                        })
                         
                     })

                  }).catch((err)=>{
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
.loginbox{
    width:600px;
}
.crbtn{
    margin-top:1rem;
}
.columnforlogin{
    display: flex;
    align-items: center;
    justify-content: center;
}
</style>