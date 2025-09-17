import type { JSX, ReactNode } from "react"

export type LayoutProps = {
    header?: (() => ReactNode) | ReactNode | JSX.Element
    children: (() => ReactNode) | ReactNode | JSX.Element
    footer?: (() => ReactNode) | ReactNode | JSX.Element
}