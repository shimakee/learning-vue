<template>
    <div class="container">
        <form>
            <div class="row">
                <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3"
                v-if="!submitted">
                    <!-- Exercise 1 -->
                    <!-- Create a Signup Form where you retrieve the following Information -->
                    <p>
                        Name (First Name + Last Name)
                        <input type="text" v-model="firstName">
                        <input type="text" v-model="lastName">
                    </p>
                    <p>
                    Mail
                    <input type="text" v-model="mail">
                    </p>
                    <p>
                    Password
                    <input type="password" v-model="password">
                    </p>
                    <p>
                    Store Data? Yes
                    <input type="radio" value="true" v-model="storeData">
                    No
                    <input type="radio" value="false" v-model="storeData">
                    </p>

                    <!-- Exercise 2 -->
                    <!-- Only display the Form if it has NOT been submitted -->
                    <!-- Display the Data Summary ONCE the Form HAS been submitted -->
                    <button @click.prevent="submit(true)">Submit</button>

                    <!-- Exercise 3 -->
                    <!-- Edit the Example from above and create a custom "Full Name" Control -->
                    <!-- which still holds the First Name and Last Name Input Field -->
                    <!-- there is suppose to ba a fullname component -->
                </div>
            </div>
        </form>
        <hr>
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <div class="panel panel-default"
                v-if="submitted">
                    <div class="panel-heading">
                        <h4>Your Data</h4>
                    </div>
                    <div class="panel-body">
                        <p>Full Name: {{ firstName }} {{ lastName }}</p>
                        <p>Mail: {{ mail }}</p>
                        <p>Password: {{ password }}</p>
                        <p>Store in Database?: {{storeData}}</p>
                    </div>
                    <button @click.prevent="submit(false)">Submit</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data:function(){
            return{
                firstName: '',
                lastName:'',
                mail: '',
                password: '',
                storeData: true,
                submitted: false
            }
        }
        ,methods: {
            submit:function(value){
                this.submitted = value;
            }
        }
    }
</script>

<style>
</style>
