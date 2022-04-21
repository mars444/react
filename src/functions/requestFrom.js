

export const delay = (form) => {
        return new Promise((resolve, reject) => {setTimeout(() => {resolve(JSON.stringify(form)),reject('error')}, 2000)})

}


export const request = async (form, showSuccess, showError) => {

    await delay(form)


    if(form.nickName != '') {
        await showSuccess()
        return
    }

    await showError()

}
