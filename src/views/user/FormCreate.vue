<template>
    <div>
        <layout-main>
            <div class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 ml-5 border-bottom">
                <h1 class="h2">Create New User</h1>
            </div>
            <div v-if="datausers == null && errormessage !== null" class="alert alert-danger" role="alert">
                {{errormessage}}
            </div>

            <div v-if="successmessage == null" class="alert alert-danger" role="alert" >
                {{successmesagge}}
            </div>
            <div>
        <form @submit.prevent="createNewUser">
            <div class="mb-3">
                <label for="name" class="form-label">Name</label>
                <input v-model="user.name" type="text" class="form-control" id="name">
                <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
            </div>
            <div class="mb-3">
                <label for="username" class="form-label">Username</label>
                <input v-model="user.username" type="text" class="form-control" id="username">
            </div>
            <button type="submit" class="btn btn-primary">Simpan</button>
        </form>
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
  data() {
      return {
          user: {name: null, username: null},
          dataUsers: null,
          errormessage: null,
          successmessage: null
      }
  },
  methods: {
      createNewUser()
      {
          fetch("https://jsonplaceholder.typicode.com/users",
             {
                headers: {
                  'Content-type': 'application/json; charset=UTF-8',
                },
                method: 'POST',
                body: JSON.stringify(this.user)
             }
          )
            .then(response => response.json())
            .then(json => {
                if(json?.id !== undefined){
                    this.datausers = json;
                    this.errormessage = "User berhasil disimpan!";
                }else{               
                this.errormessage = "Data user tidak ditemukan!";
                }
            })
            .catch(error => {
                console.log(error);
                this.errormessage = "Gagal, silahkan coba lagi!"
            })
      }
  }
}
</script>