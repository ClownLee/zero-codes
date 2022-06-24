import { useStore } from 'vuex';
import moment from 'moment';
import sha256 from 'crypto-js/sha256'

export default {
  getHashId() {
    const store = useStore();
    const { phone, birthday } = store.state.base;
    return sha256(`${phone}${moment(birthday).valueOf()}${moment().valueOf()}`).toString();
  }
}