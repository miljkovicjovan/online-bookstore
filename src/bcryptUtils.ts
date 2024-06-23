import bcrypt from 'bcryptjs';

// Hash password function
const hashPassword = async (password: string) => {
  const salt = await bcrypt.genSalt(10);
  return bcrypt.hash(password, salt);
};

// Export hashPassword function
export default hashPassword;