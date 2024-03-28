export interface ISignIn {
  signIn: (params: TSignInInput) => Promise<TSignInOutput>;
}

export type TSignInInput = {
  email: string;
  password: string;
};

export type TSignInOutput = {
  accessToken: string;
  refreshToken: string;
};
