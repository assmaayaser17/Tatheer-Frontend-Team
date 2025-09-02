declare type DatabaseFields = {
  _id: string;
  createdAt: string;
  updatedAt: string;
};

declare type SuccessfulResponse<T> = {
  message: "success";
} & T;

declare type ErrorResponse = {
  error: string;
  statusCode: number;
  product:Product
};

declare type APIResponse<T> = SuccessfulResponse<T> | ErrorResponse;



