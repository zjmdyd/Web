declare let title: HTMLHeadingElement;
declare let elm: HTMLParagraphElement;
declare let elms: NodeListOf<HTMLParagraphElement>;
type EventNames = 'click' | 'scroll' | 'mousemove';
declare function handleEvent(ele: Element | null, event: EventNames): void;
declare function btnEvent(e: string): void;
declare function handleClick(): void;
declare let btn: HTMLElement | null;
declare let removeBtn: HTMLElement | null;
