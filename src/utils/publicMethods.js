// 转换千分位
export const numberFormatter = (v, isNum, dio) => {
    if(!v){
        return null
    }
    let [value,point] = v && v.toString().split('.')
    value = value && Number(value.replace(/,/g, ''))
    if(Number(value) !== 'NaN'){
        value = `${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')
    }

    if(!isNum){
        if(point){
            if(dio){
                let pointValue = point.slice(0,dio)
                value = `${value}.${pointValue}`
            } else {
                value = `${value}.${point}`
            }
        }else if(v.toString().includes('.') && !isNum) {
            value = `${value}.`
        }
    }
    return value
}