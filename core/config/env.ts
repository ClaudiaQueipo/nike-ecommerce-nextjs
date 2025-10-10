// Variables de entorno y configuración global
export const env = {
  betterAuth: {
    secret: process.env.BETTER_AUTH_SECRET!,
    url: process.env.BETTER_AUTH_URL!
  },
  database: {
    url: process.env.DATABASE_URL!
  }
}
