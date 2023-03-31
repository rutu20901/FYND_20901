<script>
export default{
    name:'products',
    props:['message'],

    methods:{
        goBack(){
            this.$router.push({path: "/aboutyou"})
        }
    }
}
</script>

<template>
    <div>
        <br>
        <h1>ProductCatalog</h1>
        <h1>{{ message }}</h1>

        First Name: {{ $route.query.inpFname1 }} <br>
        Last Name: {{ $route.query.inpLname1 }} <br>
        Pincode: {{ $route.query.inpPin1 }} <br>
        <table>
            <tr>
                <th>ProductName</th>
                <th>ProductCost</th>
            </tr>
            <tr>
                <td>Mouse</td>
                <td>2000</td>
            </tr>
        </table>
        <button v-on:click='goBack'>GoBack</button>
    </div>
</template>