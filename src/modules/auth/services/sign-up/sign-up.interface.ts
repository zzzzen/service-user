export interface ISignUp {
  signUp: (input: TSignUpInput) => Promise<TSignUpOutput>;
}

export type TSignUpInput = {
  name: string;
  company: string;
  email: string;
  password: string;
};

export type TSignUpOutput = {
  accessToken: string;
  refreshToken: string;
};
