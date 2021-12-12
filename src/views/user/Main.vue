<template>
    <div>
        <layout-main>
          <div class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
        <h1 class="h2">User</h1>
          </div>
          <div class="row row-cols-1 row-cols-md-4 row-cols-sm-2 g-3">
            <div v-for="user in dataUsers" :key="user.id" class="col card" style="width: 18rem ;">
            <img src="/profile.png" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">{{ user.company.name}}</h5>
                  <address class="card-text">
                  <strong>{{ user.Username }}</strong>
                  <br>
                  {{user.address.street}}, {{user.address.suite}}<br>
                  {{user.address.city}}, {{user.address.zipcode}} <br>
                  <abbr title="phone">{{user.phone}}</abbr><br>
                  <strong>{{user.username}}</strong><br>
                  {{user.email}}
                  </address>
            <a href="#" class="btn btn-primary">Go somewhere</a>
          </div>
    </div>
          </div>
        </layout-main>
    </div>
</template> 

<script>
import LayoutMain from '@/views/LayoutMain'

export default {
  components: {
    LayoutMain
  },
  methods:{
    getUsers(){
      fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => response.json())
      .then(json => {
          this.dataUsers = json;
      })
      .catch(error => {
        console.log(error);
      })
    }
  },
  data() {
    return {
      dataUsers: null,
      data2: null,
      data3: ""
    }
  },
  mounted() {
    this.getUsers();
  }
}
</script>