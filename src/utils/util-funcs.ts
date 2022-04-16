import bcrypt, { hash } from 'bcryptjs'

export async function hashPassword(password: string) {
  return await hash(password, 10)
}

export function validatePassword(password: string, hashedPassword: string) {
  return bcrypt.compareSync(password, hashedPassword)
}
