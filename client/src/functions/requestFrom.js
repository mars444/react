

export const delay = (sec) => {
    return new Promise((resolve, reject) => {

        setTimeout(() => {
            resolve({status:200})
        }, sec)

    })
}


export const request = async (form) => {

    const response = await delay(form)
    return response

}
