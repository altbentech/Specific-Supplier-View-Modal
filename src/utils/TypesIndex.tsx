export interface FormTextAreaProps {
    placeholder: string;
    value: string;
    name: string;
    onChange?: (name: string, value: string, segment?: string) => void;
    segment?: string;
    maxLength?: number;
    readOnly?: boolean;
    required?: boolean;
    type: string;
    tabIndex?: number;
}
