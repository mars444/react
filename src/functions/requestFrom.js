export const delay = (form) => {
    if (form instanceof Object) {
        return new Promise(resolve => {setTimeout(() => resolve(JSON.stringify(form)), 2000)})
    }
    return new Promise((reject) => {setTimeout(() => reject('error'), 2000)})


}


export const request = async (form) => {
    console.log('Данные отправлены')
    const x = await delay(5)

    console.log(x)
    if(x) {
        console.log('succses')
    } else {
        console.error('false')
    }



    console.log('Данные получены')
}
