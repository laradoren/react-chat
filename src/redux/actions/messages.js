import {messagesApi} from "utils/api";

const actions = {
    setMessages: (items) => ({
        type: "MESSAGES:SET_ITEMS",
        payload: items
    }),
    setLoading: (value) => ({
        type: "MESSAGES:SET_LOADING",
        payload: value
    }),
    fetchMessages: (dialogId) => dispatch => {
        dispatch(actions.setLoading(true));
        messagesApi.getAllById(dialogId).then(({data}) => {
            dispatch(actions.setMessages(data));
            dispatch(actions.setLoading(false));
        })
    }
}

export default actions;