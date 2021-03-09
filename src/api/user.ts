import request from 'src/utils/request'
import {
  POST,
} from 'src/common'

export interface IUserLoginData {
  username: string
  password: string
}

export interface IUserPrvsetItem {
  id: number
  prvset_name: string
  prvset_desc: string
  prvset_editor_id: number
  update_at: string
  prvset_logo: string
  prvset_settings: string
}

export interface IResponseData<T> {
  message: string
  status: number
  data: T
}

export default {
  fetchLogin: async (data: IUserLoginData): Promise<IUserPrvsetItem> => {
    const url = '/user/v1/prelogin'
    const option = {
      url,
      data,
    }
    const res = await request(option)
    return res.data
  }
}