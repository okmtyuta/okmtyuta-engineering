// export class NotFoundError extends Error {
//   private errorCode: string;
//   constructor(errorCode: string, e?: string) {
//     super(e);
//     this.errorCode = errorCode;
//     this.name = new.target.name;

//     // Maintains proper stack trace for where our error was thrown (only available on V8)
//     if (Error.captureStackTrace) {
//       Error.captureStackTrace(this, this.constructor);
//     }
//   }
// }