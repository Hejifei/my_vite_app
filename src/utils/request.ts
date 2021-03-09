import instance from './interceptor'
import {
    Toast,
} from 'vant';
import {
    AxiosResponse,
    AxiosError,
    AxiosRequestConfig,
} from 'axios'
import {POST, FETCH_TIMEOUT} from 'src/common'

interface IRequestOption extends AxiosRequestConfig {
    showLoadingBar?: boolean
    useFormData?: boolean
}

function request (option: IRequestOption): any {
    let {
        url,
        data = {},
        headers = {},
        method = POST,
        /**
         * Show loading bar when fetching
         */
        showLoadingBar = true,
        /**
         * Set fetch body of form(default: json string)
         */
        useFormData = false,
        /**
         * Timeout for fetch
         */
        timeout = FETCH_TIMEOUT,
    } = option

    headers['X-Request-Id'] = '-4e58c409-7f50-4cae-8739-a646c76995b5'
    if (showLoadingBar) {
        Toast.loading({
            message: '加载中...',
            forbidClick: true,
        })
    }


    return new Promise((resolve, reject) => {
        instance({
            url,
            method,
            data,
            timeout,
            headers,
        })
        .then((res: AxiosResponse)=>{
            if (showLoadingBar) {
                Toast.clear();
            }
            resolve(res)
        })
        .catch(async (err: AxiosError) => {
            if (showLoadingBar) {
                Toast.clear();
            }
            let message = '请求失败'
            let status = 400
            try {
                const resData = JSON.parse(err.request.response)
                message = resData?.message || '请求失败'
                status = resData.status || 400
            } catch (err) {
                console.error({err})
            }
            reject({
                message,
                status,
            })
        })
    })
}

export default request
