import Api from './Api'
export default {
  searchUser (params) {
    return Api().get('users/' + params.username)
  }
}
