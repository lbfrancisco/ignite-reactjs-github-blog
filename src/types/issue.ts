import { User } from './user'

export type Issue = {
  login: Pick<User, 'login'>
  title: string
  body: string
  comments: number
  number: number
  updated_at: string
}
