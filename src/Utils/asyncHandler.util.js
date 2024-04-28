export const asyncHandler = (requestHandler) => {
  return (req, res, next) => {
    Promise.resolve(requestHandler(req, res, next)).cath((Error) =>
      next(Error)
    );
  };
};
