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

// 手写深拷贝
export const deepCopy = (data) => {
    // 判断是否是复杂类型
    if(data instanceof Object){
        // 判断是否是数组
        if(Array.isArray(data)){
            let result = []
            data.forEach(item => {
                result.push(deepCopy(item))
            })
            return result
        }else{
            let result = {}
            for(let i in data){
                result[i] = deepCopy(data[i])
            }
            return result
        }
    }
    // 简单数据类型直接输出
    return data
}

// 打乱数组排序
export const disruptSorting = (arr) => {
    let result = arr
    for(let i = 0; i<arr.length; i++){
        const sortIndex = Math.round(Math.random() * (arr.length - 1 - i)) + 1;
        [result[i], result[sortIndex]] = [result[sortIndex], result[i]]
    }
    return result
}

/**
 *[{
        id: 2,
        name: '部门B',
        parentId: 0
    },
    {
        id: 3,
        name: '部门C',
        parentId: 1
    },
    {
        id: 1,
        name: '部门A',
        parentId: 2
    }]} array 
 */
// 数组转为树结构(递归)
export const deepTree = (data, parentId) => {
    let roots = [];
    
    // 遍历数据数组
    data.forEach(function(node) {
        if(node.parentId === parentId){
            let childrenNode = deepTree(data,node.id)
            if(childrenNode.length){
                node.children = childrenNode
            }
            roots.push(node)
        }
    });
    return roots;
}