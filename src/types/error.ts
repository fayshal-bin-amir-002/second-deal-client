export type IErrorSources = {
  path: string | number;
  message: string;
}[];

export type IErrorResponse = {
  statusCode: number;
  message: string;
  errorSources: IErrorSources;
};
