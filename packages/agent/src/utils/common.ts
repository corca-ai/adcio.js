export const devLog = (...args: any) => {
  if (
    (process.env.NEXT_PUBLIC_APP_ENV || process.env.NODE_ENV) !== "production"
  ) {
    console.log(...args);
  }
};
