import bcrypt from 'bcrypt';

async function hash(value: string): Promise<string> {
  const salt = await bcrypt.genSalt(10);
  return bcrypt.hashSync(value, salt);
}

async function compareHash(
  value: string,
  hashedValue: string
): Promise<boolean> {
  return bcrypt.compare(value, hashedValue);
}
