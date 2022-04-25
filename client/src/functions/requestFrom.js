

export const delay = (form) => {
        return new Promise((resolve, reject) => {

            if (form.nickName != '') {
                setTimeout(() => {
                    resolve({status:200, value: JSON.stringify(form)})
                }, 1500)
            } else {
                setTimeout(() => {reject('Bad Form')}, 500)
            }

    })
}


export const request = async (form) => {

        const response = await delay(form)
        return response



}
