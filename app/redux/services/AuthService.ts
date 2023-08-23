import {LoginResponse, SigninRequest} from '../../entities/AuthObject';
import {HTTPClient} from '../../utils/HTTPClient';
import {LOGIN} from '../../utils/URL';

export const authService = HTTPClient.injectEndpoints({
  endpoints: build => ({
    login: build.mutation<any, any>({
      query: credentials => ({
        url: LOGIN,
        method: 'POST',
        body: credentials,
      }),
    }),
  }),
  overrideExisting: true,
});

export const {useLoginMutation} = authService;
