/**
 * 转换千分位，保留小数位
 * @param {*} v：需转换的值 
 * @param {*} isNum：是否保留小数位
 * @param {*} dio：保留小数位数
 * @returns 
 */
export const numberFormatter = (v, isNum, dio) => {
    if(!v){
        return null
    }
    let [value,point] = v && v.toString().split('.')
    value = value && Number(value.replace(/,/g, ''))

    if(!Number.isNaN(Number(value))){
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
            let result: any = []
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
 *  数组转为树结构(递归)
 * @param {*} data 
 * @param {*} parentId 
 * @returns 
 * [{
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
export const deepTree = (data, parentId) => {
    let roots: any = [];
    
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

/**
 * 获取同一数组中，某一字段值相同的起始和结束的数据位置
 * @param {* -- 对象数组} arr 
 * @param {* -- 字段} field 
 * @param {* -- 对应值} value 
 * @returns 
 */
export const findRange = (arr, field, value) => {
    let startIndex = -1;
    let endIndex = -1;

    for(let i = 0; i < arr.length; i++) {
        if(arr[i][field] === value) {
            if(startIndex === -1) {
                startIndex = i
            }
            endIndex = i;
        }
    }

    return [startIndex, endIndex]
}

/**
 * 实现文件(blob流)下载
 * @param {* -- 文件流} data 
 * @param {* -- 文件名} fileName 
 */
export const downLoadBlobFile = async (data: string, fileName: string) => {
    let blob: string | Blob = data;

    if(typeof data === 'string') {
        blob = new Blob([data]);
    }

    let blobUrl = window.URL.createObjectURL(blob as Blob);
    let formatFileName = fileName || '模板文件.xlsx';

    // 创建下载对象
    const a = document.createElement('a');
    a.download = formatFileName;
    a.setAttribute('target', '_blank');
    a.href = blobUrl;
    a.click();
    a.remove();
}