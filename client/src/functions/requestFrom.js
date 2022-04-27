

export const delay = (form,sec) => {
        return new Promise((resolve, reject) => {

            if (form.nickName != '') {
                setTimeout(() => {
                    resolve({status:200, value: JSON.stringify(form)})
                }, sec)
            } else {
                setTimeout(() => {reject('Bad Form')}, sec)
            }

    })
}


export const request = async (form) => {

        const response = await delay(form)
        return response



}
