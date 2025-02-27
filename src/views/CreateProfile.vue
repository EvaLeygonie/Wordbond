<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();
const name = ref('');
const age = ref('');
const bio = ref('');
const chosenAvatar = ref('');
const hobby = ref('');
const interests = ref([]);
const dropDown = ref(false);

const avatarPicture = ['avatar_1.png', 'avatar_2.png', 'avatar_3.png', 'avatar_4.png', 'avatar_5.png', 'avatar_6.png', 'avatar_7.png', 'avatar_8.png', 'avatar_9.png']
const createdProfile = () => {
    if (name.value && age.value && chosenAvatar.value) {
        const profileData = {
            name: name.value,
            age: age.value,
            bio: bio.value,
            avatar: chosenAvatar.value,
            hobby: hobby.value,
            interests: interests.value
        }
        console.log(profileData)
        router.push('/FindFriend')
    } else {
        alert ('Please fill in everything')
    }
}

const getAvatar = (avatar) => {
    chosenAvatar.value = avatar;
    dropDown.value = false
}

</script>

<template>
    <div class="profile-box">
     <h2>Create your profile!</h2>

     <label>Name:</label>
     <input type="text" v-model="name" placeholder="Name..." required /> 

     <label>Age:</label>
     <input type="text" v-model="age" placeholder="Age..." required>

     <label>Choose your interests:</label>
     <div class="chooseInterests">
        <label v-for="interest in ['Travel', 'Music', 'Gaming', 'Cooking', 'Reading', 'Sports']" :key="interest">
            <input type="checkbox" v-model="interests" :value="interest">
            {{ interest }}
        </label>
     </div>

     <label>Biograph:</label>
     <textarea v-model="bio" placeholder="Tell me something about you :)"></textarea>

     <label>Choose your Avatar:</label>
     <div class="avatar-dropdown">
        <div class="get-avatar" @click="dropDown = !dropDown">
            <img v-if="chosenAvatar" :src="`/bilder/${chosenAvatar}`" alt="Avatar">
        </div>
        <div v-if="dropDown" class="dropdown-menu">
            <img 
            v-for="avatar in avatarPicture"
            :key="avatar"
            :src="`/bilder/${avatar}`"
            :alt="avatar"
            @click="getAvatar(avatar)" 
            />  
        </div>    
     </div>

     <button @click="createdProfile">Create Profile!</button>
       
     </div>
     
     

</template>

<style scoped>
.profile-box {
    display: flex;
    flex-direction: column;
    align-items: center;
}

h2 {
    margin-top: 20px;
}

.chooseInterests {
    display: flex;
    flex-direction: row;
    gap: 10px;
    margin-bottom: 10px;
    margin-top: 5px;

}

.avatar-dropdown {
    position: relative;
    width: 200px;
    margin-bottom: 10px;
}

.get-avatar {
    padding: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 50px;
}

.get-avatar img {
    width: 40px;
    height: 40px;
}

.dropdown-menu {
    position: absolute;
    width: 100px;
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    justify-content: center;
}

.dropdown-menu img {
    width: 40px;
    height: 40px;
    object-fit: cover;

}


</style>