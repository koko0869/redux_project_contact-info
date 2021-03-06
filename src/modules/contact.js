import { createAction, handleActions } from "redux-actions";
import produce from "immer";

const CHANGE_FIELD = "contact/CHANGE_FIELD";
const INITIALIZE_FORM = "contact/INITIALIZE_FORM";

const INSERT = "infos/INSERT";
const TOGGLE = "infos/TOGGLE";
const REMOVE = "infos/REMOVE";
const UPDATE = "infos/UPDATE";

//input ChangeFiled
export const changeField = createAction(
  CHANGE_FIELD,
  ({ form, key, value }) => ({
    form,
    key,
    value
  })
);
export const initializeForm = createAction(INITIALIZE_FORM, form => form);

//여기서 부터

let id = 4;
export const insert = createAction(INSERT, (username, phone) => ({
  id: id++,
  username: username,
  phone: phone,
  favorite: false
}));
export const toggle = createAction(TOGGLE, id => id);
export const remove = createAction(REMOVE, id => id);
export const update = createAction(UPDATE, (id, username, phone) => ({
  id,
  username,
  phone
}));

// export const insert = text => ({
//   type: INSERT,
//   info: {
//     id: id++,
//     text,
//     done: false
//   }
// });
// export const toggle = id => ({
//   type: TOGGLE,
//   id
// });
// export const remove = id => ({
//   type: REMOVE,
//   id
// });

//여기까지
const initialState = {
  register: {
    username: "",
    phone: ""
  },
  contacts: {
    search: ""
  },
  infos: [
    {
      id: 1,
      username: "test1",
      phone: "010-1234-1234",
      favorite: true
    },
    {
      id: 2,
      username: "test2",
      phone: "010-2222-2222",
      favorite: false
    },
    {
      id: 3,
      username: "test3",
      phone: "010-3333-3333",
      favorite: true
    }
  ]
};

const contact = handleActions(
  {
    [CHANGE_FIELD]: (state, { payload: { form, key, value } }) =>
      produce(state, draft => {
        draft[form][key] = value;
      }),
    [INITIALIZE_FORM]: (state, { payload: form }) => ({
      ...state,
      [form]: initialState[form]
    }),
    [INSERT]: (state, { payload: info }) =>
      produce(state, draft => {
        draft.infos.push(info);
      }),
    [TOGGLE]: (state, { payload: id }) =>
      produce(state, draft => {
        const info = draft.infos.find(info => info.id === id);
        info.favorite = !info.favorite;
      }),
    [REMOVE]: (state, { payload: id }) =>
      produce(state, draft => {
        const index = draft.infos.findIndex(info => info.id === id);
        console.log(index);
        draft.infos.splice(index, 1);
      }),
    [UPDATE]: (state, { payload: { id, username, phone } }) =>
      produce(state, draft => {
        const info = draft.infos.find(info => info.id === id);
        info.username = username;
        info.phone = phone;
      })
  },
  initialState
);

export default contact;
