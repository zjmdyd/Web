// 将一个父类断言为更加具体的子类
// 当类之间有继承关系时，类型断言也是很常见的
class ApiError extends Error {
    code: number = 0;
}
class HttpError extends Error {
    statusCode: number = 200;
}

function isApiError(error: Error) {
    if (typeof (error as ApiError).code === 'number') {
        return true;
    }
    return false;
}

let apiError = new ApiError()
console.log(isApiError(apiError))   // true

let httpError = new HttpError()
console.log(isApiError(httpError))  // false