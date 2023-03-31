<template>
<div class="container4">
            <img src="..//assets/Resto.png" alt="" class="logo">
        <h1>Login</h1>
        <div class="login">
            
            <input type="text" placeholder="Email" /><br>
            <input type="password" placeholder="Password" /><br>
            
            <button>Login</button>
    
        </div>
    
</div>
</template>
<script>
import axios from 'axios';
export default{
    name:"Login",
    data(){
        return {
            email:'',
            password:''
        }
    }
      
    
}

</script>