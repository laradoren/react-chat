import axios from "core/axios";

export default {
    getAllById: id => axios.get('/messages?_id='+id)
}

