import { SvelteComponentTyped } from "svelte";

declare const __propDef: {
    props: {
        checked?: boolean;
        size?: string;
        name?: string;
        id?: string;
        labelId?: string;
        primaryColor?: string;
        secondaryColor?: string;
        duration?: number;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export declare type OutConnectorProps = typeof __propDef.props;
export declare type OutConnectorEvents = typeof __propDef.events;
export declare type OutConnectorSlots = typeof __propDef.slots;

export default class OutConnector extends SvelteComponentTyped<OutConnectorProps, OutConnectorEvents, OutConnectorSlots> {}
export {};