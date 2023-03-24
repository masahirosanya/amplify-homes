/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { FlexProps, ImageProps, TextProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type UserProfileOverridesProps = {
    UserProfile?: PrimitiveOverrideProps<FlexProps>;
    ProfileCard?: PrimitiveOverrideProps<FlexProps>;
    image?: PrimitiveOverrideProps<ImageProps>;
    Name37853063?: PrimitiveOverrideProps<FlexProps>;
    Name37853064?: PrimitiveOverrideProps<TextProps>;
    Address?: PrimitiveOverrideProps<FlexProps>;
    address?: PrimitiveOverrideProps<TextProps>;
    Email?: PrimitiveOverrideProps<FlexProps>;
    email?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type UserProfileProps = React.PropsWithChildren<Partial<FlexProps> & {
    overrides?: UserProfileOverridesProps | undefined | null;
}>;
export default function UserProfile(props: UserProfileProps): React.ReactElement;
