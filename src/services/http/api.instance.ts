import axios, {
  type AxiosInstance,
  type AxiosError,
  type AxiosRequestConfig,
} from 'axios'

// Define the Axios instance
const apiInstance: AxiosInstance = axios.create({
  baseURL: process.env.BASE_URL,
  timeout: 15000, // Adjust timeout as needed
  headers: {
    'x-api-key': process.env.API_KEY,
  },
})

// Define the number of retries
const MAX_RETRIES = 3
const RETRY_DELAY = 100 // 1 second delay between retries

// Function to intercept and retry failed requests
const interceptRequests = (axiosInstance: AxiosInstance): void => {
  let retries = 0

  axiosInstance.interceptors.response.use(
    undefined,
    async (error: AxiosError) => {
      const { config, response } = error

      if (
        response &&
        response.status >= 500 &&
        response.status < 600 &&
        retries < MAX_RETRIES
      ) {
        retries++
        // eslint-disable-next-line @typescript-eslint/promise-function-async
        return await new Promise(resolve =>
          setTimeout(resolve, RETRY_DELAY),
        ).then(() => axiosInstance(config as AxiosRequestConfig<any>))
      }

      return await Promise.reject(error)
    },
  )
}

// Apply interceptor to Axios instance
interceptRequests(apiInstance)

export default apiInstance
