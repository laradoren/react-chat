import axios from "core/axios";

export default {
    getAllDialogs: () => axios.get('/dialogs')
}

