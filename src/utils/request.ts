import axios, { AxiosRequestConfig } from 'axios'

export async function post(url: string, body?: any, options?: AxiosRequestConfig): Promise<any> {
    return await new Promise(function (resolve, reject) {
        axios.post(url, body, options)
            .then(function (response) {
                // handle success
                resolve(response.data)
            })
            .catch(function (error) {
                // handle error
                console.log(`Post :: ${error.toString()} — ${url}\nDescription : ${error?.response?.data?.error}`)
                reject(error)
            })
    })
}

export async function get(url: string, options?: AxiosRequestConfig): Promise<any> {
    return await new Promise(function (resolve, reject) {
        axios.get(url, options)
            .then(function (response) {
                // handle success
                resolve(response.data)
            })
            .catch(function (error) {
                // handle error
                console.log(`Get :: ${error.toString()} — ${url}\nDescription : ${error?.response?.data?.error}`)
                reject(error)
            })
    })
}

export async function del(url: string, options?: AxiosRequestConfig): Promise<any> {
    return await new Promise(function (resolve, reject) {
        axios.delete(url, options)
            .then(function (response) {
                // handle success
                resolve(response.data)
            })
            .catch(function (error) {
                // handle error
                console.log(`Delete :: ${error.toString()} — ${url}\nDescription : ${error?.response?.data?.error}`)
                reject(error)
            })
    })
}

export async function put(url: string, body: any, options?: AxiosRequestConfig): Promise<any> {
    return await new Promise(function (resolve, reject) {
        axios.put(url, body, options)
            .then(function (response) {
                // handle success
                resolve(response.data)
            })
            .catch(function (error) {
                // handle error
                console.log(`Put :: ${error.toString()} — ${url}\nDescription : ${error?.response?.data?.error}`)
                reject(error)
            })
    })
}

export async function patch(url: string, body?: any, options?: AxiosRequestConfig): Promise<any> {
    return await new Promise(function (resolve, reject) {
        axios.patch(url, body, options)
            .then(function (response) {
                // handle success
                resolve(response.data)
            })
            .catch(function (error) {
                // handle error

                console.log(error)
                console.log(`Patch :: ${error.toString()} — ${url}\nDescription : ${error?.response?.data?.error}`)
                reject(error)
            })
    })
}