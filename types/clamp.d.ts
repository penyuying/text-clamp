export declare function clamp(element:HTMLElement, options:ClampOptions);

/**
 * 参数
 * 
 * @export
 * @interface ClampOptions
 */
export interface ClampOptions{
    clamp?:number=2;//最大行数
    useNativeClamp?:boolean=true;//是否修剪
    splitOnChars?:string|string[]=['.', '-', '–', '—', ' '] //Split on sentences (periods), hypens, en-dashes, em-dashes, and words (spaces).
    animate?: boolean=false;//是否显示动画
    truncationChar?: string='…';//修剪后显示的结束字符
    truncationHTML?:string;//修剪后显示的结束HTML
}