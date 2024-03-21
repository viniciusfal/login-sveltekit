import bcrypt from 'bcryptjs'

export interface User {
  user: {
    email: string
    password: string
  }
}

export async function load(): Promise<User> {
  const password_hash = await bcrypt.hash('123456', 6 )

  return {
    user: {
      email: 'johndoe@example.com',
      password: password_hash
    }
  }
}