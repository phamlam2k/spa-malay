import { produce } from 'immer'
import { User } from 'src/types/custom-types'

export interface UserState {
  user: any
  setUser: (user: any) => unknown
}

const initialUser = {
  username: '',
  email: '',
  avatar_url: ''
}

const userStore = (set: any) => ({
  user: initialUser,
  setUser: (user: any) => {
    return set(
      produce((state: { userStore: { user: any } }) => {
        state.userStore.user = user
      })
    )
  }
})

export default userStore
