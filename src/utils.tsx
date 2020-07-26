export function transformObject(obj:Record<any,any>, transformFunc:(value:any) => any): any {
    const output:Record<any,any> = {};

    Object.keys(obj).forEach(key => {
        output[key] = transformFunc(obj[key])
    });

    return output;
};

