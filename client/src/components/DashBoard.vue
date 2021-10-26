<template>
    <div class="main">
        <button @click="this.$router.push('/admin/products')">PRODUCTS</button>
        <button @click="this.$router.push('/admin/cp')" class="add">+</button>
    </div>
</template>

<script>
export default {
 name: "DashBoard",
}
</script>

<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@200;300;400;500;600&display=swap");
$primary: #257afd;

.main
{
    display: flex;
    justify-content: center;
    align-items: center;
    button{
        width: 250px;
        height: 60px;
        outline: 0;
        border: none;
        border-radius: 5em;
        font-family: 'Montserrat';
        font-size: 21px;
        font-weight: 500;
        color: white;
        background: $primary;
        margin: 0.25em;
        transition: all 0.15s;
        cursor: pointer;
        &:hover{
            border-radius: 11px;
        }
    }
    .add
    {
        font-size: 35px;
    }
}
</style>