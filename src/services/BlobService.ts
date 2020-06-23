import RNFetchBlob from 'rn-fetch-blob';
import { getToken } from '../hooks/Auth';

type AllowedMethods =
  | 'POST'
  | 'GET'
  | 'DELETE'
  | 'PUT'
  | 'post'
  | 'get'
  | 'delete'
  | 'put';

interface Headers {
  [header: string]: any;
}

export class BlobService {
  protected readonly fetchBlob: typeof RNFetchBlob.fetch;
  protected readonly API_URL: string = 'https://falatu.herokuapp.com/api/v1';
  protected AUTH_TOKEN: string = '';
  public readonly wrap: typeof RNFetchBlob.wrap;

  constructor() {
    this.fetchBlob = RNFetchBlob.fetch;
    this.wrap = RNFetchBlob.wrap;
  }

  public async upload(
    method: AllowedMethods,
    url: string,
    headers: Headers,
    body: any
  ) {
    await this.getAuthorization();
    const headersWithAuth = { Authorization: this.AUTH_TOKEN, ...headers };
    return await this.fetchBlob(
      method,
      this.makeUrl(url),
      headersWithAuth,
      body
    );
  }

  private makeUrl(endpoint: string) {
    return this.API_URL + endpoint;
  }

  private async getAuthorization(): Promise<void> {
    this.AUTH_TOKEN = await getToken();
  }
}
