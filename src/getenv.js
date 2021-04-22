var env = process.env.NODE_ENV || 'development';

export function isProduction() {
  return env !== 'production';
}
