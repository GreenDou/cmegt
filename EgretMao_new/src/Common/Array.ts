/**
 * Created by greendou on 15/9/14.
 */
module Common.Array{

    export function contains(list, element) {
        // 返回数组列表是否包含某元素
        return list.some(function (any) {
            return any === element;
        });
    }

}
