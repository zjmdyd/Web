declare class ApiError extends Error {
    code: number;
}
declare class HttpError extends Error {
    statusCode: number;
}
declare function isApiError(error: Error): boolean;
declare let apiError: ApiError;
declare let httpError: HttpError;
