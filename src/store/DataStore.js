import { defineStore } from 'pinia'
import { ref } from 'vue'
import axios from 'axios'
export const useDataStore = defineStore('dataStore', () => {
    const arrUsers = ref([])
    const resData = ref([])
    let objProfile = ref({})
    let arrPhotos = ref([])
    let post = ref({
        id: '',
        title: '',
        body: ''
    })

    const userFilter = (user, event) => {
        if (event) {
            event.preventDefault()
        }
        arrUsers.value = arrUsers.value.filter(p => p.id !== user.id)
    }

    const GetUsers = async () => {
        try {
            resData.value = await axios.get('https://jsonplaceholder.typicode.com/users')
        } catch (err) {
            console.error(err.toJSON())
        }
        for (const element of resData.value.data) {
            arrUsers.value.push(element)
        }
    }

    const GetProfile = async (id) => {
        try {
            resData.value = await axios.get(`https://jsonplaceholder.typicode.com/posts?userId=${id}`)
        } catch (err) {
            console.error(err.toJSON())
        }
        objProfile.value = resData.value.data
        console.log(objProfile.value)
    }
    const GetAlbums = async (id) => {
        let num = Number(id)
        console.log('start')
        while (num < Number(id) + 3) {
            resData.value = await axios.get(`https://jsonplaceholder.typicode.com/photos?albumId=${num}`,{
                params: {
                    _limit: 5
                   }
            })
            arrPhotos.value.push(resData.value.data)
            num++
        }
        console.log(arrPhotos.value)
    }
    const CreatePost = () =>{
        post.value.id = Math.random()
        objProfile.value.push(post.value)
        objProfile.value.reverse()
        post.value = {
            id: '',
            title: '',
            body: ''
        }
    }
    const DeletePost = (post) =>{
        objProfile.value = objProfile.value.filter(p => p.id !== post.id)
    }
    return {
        post,
        CreatePost,
        DeletePost,
        GetAlbums,
        GetUsers,
        GetProfile,
        arrUsers,
        userFilter,
        arrPhotos,
        objProfile
    }
})