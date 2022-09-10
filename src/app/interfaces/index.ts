export * from './models/base.interface';
export * from './models/user.interface';

export interface IAuthorizationHeaders {
  headers: {
    'Content-Type': string;
    Authorization: string;
  };
}

export type ApiResponseStatus = 'success' | 'error';
export type ApiResponseError = boolean;
export type ApiResponseMessage = string;
export type ResponseMetaVersion = number;
export type ResponseMetaPage = number;
export type ResponseMetaTotal = number;
export type ResponseMetaToken = string;
export type ResponseMetaRefresh = string;
export type ApiResponseMeta = {
  version?: ResponseMetaVersion;
  page?: ResponseMetaPage;
  total?: ResponseMetaTotal;
  token?: ResponseMetaToken;
  refresh?: ResponseMetaRefresh;
};

export interface IApiResponse<T> {
  status: ApiResponseStatus;
  error: ApiResponseError;
  message: ApiResponseMessage;
  data: T[];
  meta: ApiResponseMeta;
}

export type HandlerFunction<T> = (value: any) => void;

export type ASYNC_RESPONSE = Promise<IApiResponse<any>>;
export type ASYNC_RESPONSE_DATA<T> = Promise<IApiResponse<T>>;
