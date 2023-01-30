export const throwError = (res, status = 500, message = "Internal server error.") => {
  res.status(status).json({ message, status })
}