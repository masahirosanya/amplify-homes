/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { ButtonProps, DividerProps, FlexProps, ImageProps, TextFieldProps, TextProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type RegistProfileOverridesProps = {
    RegistProfile?: PrimitiveOverrideProps<FlexProps>;
    Content?: PrimitiveOverrideProps<FlexProps>;
    Profile37853001?: PrimitiveOverrideProps<FlexProps>;
    "Your Profile"?: PrimitiveOverrideProps<TextProps>;
    Divider37853005?: PrimitiveOverrideProps<DividerProps>;
    Profile37853006?: PrimitiveOverrideProps<FlexProps>;
    image?: PrimitiveOverrideProps<ImageProps>;
    "Upload New Image"?: PrimitiveOverrideProps<TextProps>;
    Forms?: PrimitiveOverrideProps<FlexProps>;
    TextField37853010?: PrimitiveOverrideProps<TextFieldProps>;
    TextField37853011?: PrimitiveOverrideProps<TextFieldProps>;
    TextField37853012?: PrimitiveOverrideProps<TextFieldProps>;
    Divider37853013?: PrimitiveOverrideProps<DividerProps>;
    Button?: PrimitiveOverrideProps<ButtonProps>;
} & EscapeHatchProps;
export declare type RegistProfileProps = React.PropsWithChildren<Partial<FlexProps> & {
    overrides?: RegistProfileOverridesProps | undefined | null;
}>;
export default function RegistProfile(props: RegistProfileProps): React.ReactElement;
