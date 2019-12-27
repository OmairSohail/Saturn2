<template>
    <div>
        <navbar/>
       <!--Start Here-->
         <section class="hero is-primary">
                <div class="hero-body">
                    <div class="container">
                        <h1 class="title">
                            DashBoard
                        </h1>
                    </div>
                </div>
        </section>

        <section class="hero  is-medium">
            <div class="hero-body">
                <div class="container">
                <div class="columns">
                    <div class="column is-half">
                       <button class="button is-info" @click="authorize()">Autherize Trello</button>
                       <button class="button is-info" @click="getBoards()">Get Boards</button>
                       <button class="button is-info" @click="fetchSomething()">FetchTrello</button>
                       <button class="button is-info" @click="fetchlist()">Get Card</button>
                    </div>
                    <div class="column">
                       <p class="title">Trello Board Name</p>
                       <!--<p class="subtitle">{{boards[0][0].name}}</p>-->
                       <ol>
                           <li v-for="board in boards" :key="board.id">{{board}}</li>
                       </ol>
                       <hr>
                    <p class="title">Cards</p>
                    <template>
                        <b-table :data="table" :columns="columns"></b-table>
                    </template>
                    </div>
                </div>
                </div>
            </div>
            </section>
       <!--End Here--> 
    </div>
</template>

<script>
import navbar from '~/components/NavBar'
export default {
    data(){
        return{
            data:'',
            authenticationSuccess:'Trello Success',
            authenticationFailure:'Trello Failed',
            boards:[],
            lists:[],
            table:[],
            columns: [
                    {
                        field: 'id',
                        label: 'ID',
                        width: '40',
                        numeric: true
                    },
                    {
                        field: 'name',
                        label: 'Name',
                    },
                    {
                        field: 'closed',
                        label: 'Status',
                    },
                    {
                        field: 'subscribed',
                        label: 'Subscribed',
                        centered: true
                    },
                    {
                        field: 'softLimit',
                        label: 'SoftLimit',
                    }
                ]
        }
    },
    name:'success',
    components:{
        navbar
    },
    methods: {
        authorize(){
             window.Trello.authorize({
                type: 'popup',
                name: 'Getting Started Application',
                scope: {
                    read: 'true',
                    write: 'true' },
                expiration: 'never',
                success: this.authenticationSuccess,
                error: this.authenticationFailure
             })
             console.log(Trello.cards.get())
             //window.Trello.cards.get('/cards/', this.authenticationSuccess, this.authenticationFailure);
        },
        getBoards(){
            //Trello.boards.get('/1W2JfaiH', this.authenticationSuccess, this.authenticationFailure)

        },

         async fetchSomething() {
           const data = await this.$axios.$get('https://api.trello.com/1/members/me/boards?fields=name,url&key=d74154350094efbca33755a7acadac76&token=101bf7a6867750112dceff3add84ccd17ce5a3bfca0a2f1704104de5ba801be8')
            this.data = data
            let datainjson = JSON.stringify(data)
            console.log(datainjson)
            this.boards.push(data)

        },
        async fetchlist(){
            let data = await this.$axios.$get('https://api.trello.com/1/members/me/boards?fields=name&lists=all&list_fields=all,url&key=d74154350094efbca33755a7acadac76&token=101bf7a6867750112dceff3add84ccd17ce5a3bfca0a2f1704104de5ba801be8')
            let {lists} = data[0]
            this.data = this.lists.push(JSON.stringify(lists))
            this.table = [
                {'id': lists[0]['id'],'name': lists[0]['name'],'closed': lists[0]['closed'],'subscribed':lists[0]['subscribed']}

            ] 

            console.log(JSON.stringify(lists))

        }
   

    }
    
}
</script>

<style scoped>

</style>