<template>
    <div class="page flex justify-center">
        <main class="loginbox  flex flex-row rounded-6">

            <div class="leftpart flex-initial bg-zinc-900 flex">
               <header class="flex-auto w-20 p-2">
                    <h3 class="text-zinc-400">MIKROTIK</h3>
               </header>
               <div class="flex-auto w-65">
                <div class="mt-10">
                    <img src="../assets/anim-2.gif" class="imgAnim1gif">
                </div>
                <div class="cardPlaystore flex justify-center w-60 p-2">
                    <img src="../assets/playstore.png" class="imgPlaystore">
                    <div class="mt-2">
                        <p class="text-gray-500">Télecharger sur</p>
                        <h6 class="text-white text-xl">Google Play Store</h6>
                    </div>
                </div>
               </div>
            </div>

            <div class="rightpart flex-none bg-orange-600">
                <router-link to="/login">
                    <button class=" btnSignIn border-2 rounded-lg text-white ml-36 mt-2 text-sm">Se connecter</button><br><br><br>
                </router-link>
                <p class="flex justify-center text-white font-bold text-sm">Bienvenue!</p>
                <p class="flex justify-center text-sm">Connectez vous à votre compte</p><br>
                <form class="max-w-60 mx-auto">
                <div class="mb-5">
                    <label for="name" class="block mb-2 text-sm text-gray-900 dark:text-white">Nom complet</label>
                    <input type="text" id="name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Entrer votre nom complet" required />
                    <p class="text-xs text-blue-700">Nom invalide</p>
                </div>
                <div class="mb-5">
                    <label for="phoneNumber" class="block mb-2 text-sm  text-gray-900 dark:text-white">Contact</label>
                    <input type="number" id="phoneNumber" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Entrer votre contact" required />
                    <p class="text-xs text-blue-700">contact invalide</p>
                </div>
                <div class="mb-5">
                    <label for="email" class="block mb-2 text-sm  text-gray-900 dark:text-white">Your email</label>
                    <input type="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@flowbite.com" required />
                    <p class="text-xs text-blue-700">Email invalide</p>
                </div>
                <div class="mb-5">
                    <label for="password" class="block mb-2 text-sm  text-gray-900 dark:text-white">Your password</label>
                    <input type="password" id="password" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                    <p class="text-xs text-blue-700">Mot de passe incorrect</p>
                </div>
                <button type="submit" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">S'inscrire</button>
                </form>

            </div>
        </main>
    </div>
</template>
<script>
</script>
<style scoped>
.page{
    height: 100vh;
    align-items: center;
    background-image: url(../assets/bg-1.jpg);
}
.loginbox{
    width:784px;
    min-height: 500px;
    height: max-content;
    box-shadow: 0 0 16px rgba(0, 0, 0, 0.25);
}
.rightpart{
    width: 260px;
}
.leftpart{
    width: 524px;
}
.imgAnim1gif{
    width: 280px !important;
    height: 280px !important;
}
.imgPlaystore{
    width: 64px !important;
    height: 64px !important;
}
.cardPlaystore{
    border: solid 1px white;
    height: 78px;
    border-radius: 10px;
}
.cardPlaystore:hover{
    background-color: rgb(204, 198, 198);
    cursor: pointer;
}
.cardPlaystore:hover h6{
    color: black;
}
.cardPlaystore:hover p{
    color: rgb(54, 54, 54);
}
.btnSignIn:hover{
 background-color: blue;
 color: white;
}
.btnSignIn{
    width: 100px;
}
</style>