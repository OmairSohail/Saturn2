<template>
<div>
 
<!--Bulma Hero Full Screen-->
 <section class="hero  is-fullheight-with-navbar firsthero">
  <div class="hero-body">
    <div class="columns">
       <div class="column is-half">
           <p class="title is-1">Manages Your Office Work</p>
           <p class="subtitle ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores iure impedit sint recusandae placeat dicta ipsum dolore! Magni quam amet distinctio obcaecati adipisci unde quod sint, illo dolorem nostrum laboriosam! Ipsa a vitae quis reprehenderit, ipsam iusto similique ut nemo, nam cupiditate vel! Ipsum iure eligendi voluptatibus non ex sit!</p>
           <button class="button is-info is-rounded">Read More ..</button> 
       </div>
       <div class="column col-2">
        <!-- <template>
          <b-carousel :indicator-inside="false" class="carousel">
              <b-carousel-item v-for="(item, i) in 6" :key="i">
                  <span class="image">
                    <img :src="getImgUrl(i)">
                  </span>
              </b-carousel-item>
              <template slot="indicators" slot-scope="props">
                  <span class="al image">
                      <img :src="getImgUrl(props.i)" :title="props.i">
                  </span>
              </template>
          </b-carousel>
         </template>
      -->
       <img src="../assets/Saturn.png" />
       </div>
    </div>
  </div>
</section> 
<!--First Hero-->
<!--Second Hero-->
<section class="hero sponserhero">
  <div class="hero-body">
    <div class="container">
      <div class="container sponsers">
       <p class="title">Our Sponsers</p>
        <figure class="image is-128x128 ">
          <img src="../assets/vueschool.png"/>
          <img src="../assets/nativescript.png"/>
          <img src="../assets/vehikl.png"/>
        </figure>             
      </div>
    </div>
  </div>
</section>
<!--Second Hero Ends..-->
<!--Third Hero Starts-->
<section class="hero  is-fullheight-with-navbar">
  <div class="hero-body">
    <div class="container herobody">
               <div class="box card1">  
                      <figure class="image is-128x128">
                        <img src="https://bulma.io/images/placeholders/128x128.png" alt="Image">
                      </figure>
                        <p>            
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean efficitur sit amet massa fringilla egestas. Nullam condimentum luctus turpis.
                        </p>  
                </div>
    </div>
  </div>
</section>
<!--Third Hero Ends-->
</div>
</template>

<script>

export default {
   auth:false,
  components: {
    
  },
  methods:{
    
  }
}
</script>

<style>
.is-active .al img {
    filter: grayscale(0%);
}
.al img {
    filter: grayscale(100%);
}
.col-2{
  display: grid;
  place-items: center;
}
.columns{
  margin-left:1rem;
}
.firsthero{
  background-image: url('../assets/Background.jpg');
  background-position: center;
  background-size: cover;
}
.sponsers{
  display:flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
.sponserhero{
  background-color: rgb(70, 179, 236);
}
.card1{
  width:300px;
  display:grid;
  grid-template-rows: 130px 200px;
  grid-row-gap: 2rem;
  

}
</style>
