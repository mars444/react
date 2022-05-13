export const calculationAge = dateBirthday => {

    if (dateBirthday) {
        const curDate = new Date()

        const timeDiff = Math.abs(dateBirthday.getTime() - curDate.getTime())

        const diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24 * 365))

        return diffDays
    }

}