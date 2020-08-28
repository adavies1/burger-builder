export function filterEmptyValues (obj: Record<string, any>): Record<string, any> {
    const newObj = {} as Record<string, any>;

    Object.keys(obj).forEach(key => {
        if(obj[key] !== null && !isNaN(obj[key]) && obj[key] !== undefined) {
            newObj[key] = obj[key];
        }
    });

    return newObj;
}

export function UrlEncodeObj(obj: Record<string, any>): string {
    return new URLSearchParams(filterEmptyValues(obj)).toString();
}

export function transformObject(obj:Record<any,any>, transformFunc:(value:any) => any): any {
    const output:Record<any,any> = {};

    Object.keys(obj).forEach(key => {
        output[key] = transformFunc(obj[key])
    });

    return output;
};

