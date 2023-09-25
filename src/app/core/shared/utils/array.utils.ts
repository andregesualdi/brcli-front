export class ArrayUtils {
    public static copiarArray(array: Array<any>): Array<any> {
        return JSON.parse(JSON.stringify(array));
    }
}