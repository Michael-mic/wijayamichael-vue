<template>
    <div class="container">
        <h1 class="text-center">REGISTER</h1>
        <form>
    <div class="mb-3">
        <label for="exampleInputEmail1" class="form-label">Nama</label>
        <input type="email" class="form-control" id="" aria-describedby="">
    </div>
     <div class="mb-3">
        <label for="exampleInputPassword1" class="form-label">Email</label>
        <input type="password" class="form-control" id="exampleInputPassword1">
    </div>
    <div class="mb-3">
        <label for="exampleInputEmail1" class="form-label">HP</label>
        <input type="email" class="form-control" id="" aria-describedby="">
    </div>
    <div class="mb-3">
        <label for="exampleFormControlTextarea1" class="form-label">Alamat</label>
        <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
    </div>

    <div class="mb-3">
       
            <div class="form-check form-check-inline">
                <input class="form-check-input" type="radio" name="jk" id="rbl">
                <label class="form-check-label" for="rbl">
                    Laki-laki
                </label>
                </div>
                <div class="form-check form-check-inline">
                <input class="form-check-input" type="radio" name="jk" id="rbp" checked>
                <label class="form-check-label" for="rbp">
                    Perempuan
                </label>
    </div>
        </div>


    <div class="mb-3">
        <label class="form-label" for="exampleCheck1">Password</label>
        <input type="password" class="form-control" id="exampleCheck1">
    
    </div>
        <button type="submit" class="btn btn-success me-1">Register</button>
        <button type="reset" class="btn btn-warning">Reset</button>
    </form>
    </div>

    <router-link :to="{name: 'login'}">Login</router-link><br>
  <router-link :to="{path: '/'}">Home</router-link>
</template>
<script>
export default {
    name : 'Register'
}
</script>