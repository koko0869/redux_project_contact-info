import { createAction, handleActions } from "redux-actions";
import produce from "immer";

const CHANGE_FIELD = "contact/CHANGE_FIELD";
const INITIALIZE_FORM = "contact/INITIALIZE_FORM";

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

const initialState = {
  register: {
    username: "",
    phone: ""
  },
  contacts: { search: "" }
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
    })
  },
  initialState
);

export default contact;
