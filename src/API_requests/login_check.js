import axios from 'axios';

export const API_url='Здесь будет ссылка на запрос в backend'


const $api=axios.post(API_url,{
    username_or_email: username_or_email,
    password: password,
})
export default $api;