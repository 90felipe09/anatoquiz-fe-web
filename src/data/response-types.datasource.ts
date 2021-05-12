export interface GenericResponse {
    message: string
}

export interface GenericPacket {
    data: GenericResponse;
}

export interface PacketWithContent {
    data: ResponseWithContent;
}

export interface ResponseWithContent extends GenericResponse {
    content: any
}

export interface ErrorResponse {
    message: string,
    error: string
}

const GenericErrors = {
    UnnexpectedError : 'Unnexpected error',
    ResourceNotFound : 'Resource not found',
    ForbiddenOperation : 'Forbidden operation',
    MalformedRequest : 'Malformed request'
}

const AccountCreationErrors = {
    EmailInUse: 'Email already in use',
    UsernameInUse : 'Username already in use',
}

const AuthError = {
    PendingAccount : 'Conta pendente',
    ExpiredToken : 'Expired token',
    InvalidCredentials : 'Invalid credentials',
}

export const ErrorTypes = {
    GenericErrors,
    AccountCreationErrors,
    AuthError
}

