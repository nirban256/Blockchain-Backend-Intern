const asyncHandler = (fn) => {
    return (req, res, next) => {
        Promise.resolve(fn(req, res, next)).catch((err) => next(err)); // if the promise is resolved then it will call the next function otherwise it will call the next function with the error.
    }
}

export { asyncHandler };