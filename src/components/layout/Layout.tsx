import type { FC } from "react";
import type { LayoutProps } from "./Layout.types";

/**
 * A top-level layout component that renders a header, main, and footer.
 * Accepts a children prop that must be a function that returns a ReactNode
 * or a ReactNode directly.
 * @param {{ children: (() => ReactNode) | ReactNode, header?: (() => ReactNode) | ReactNode, footer?: (() => ReactNode) | ReactNode }} props
 */
export const Layout: FC<LayoutProps> = ({
  children,
  header,
  containerWidth = 1138,
  footer,
}) => {
  const headerElement =
    header && typeof header === "function" ? header() : header;
  const childrenElement =
    children && typeof children === "function" ? children() : children;
  const footerElement =
    footer && typeof footer === "function" ? footer() : footer;
  return (
    <div id="app-layout">
      {headerElement && (
        <header className="mb-10">
          <div style={{ maxWidth: containerWidth }} className={`px-10 py-4 m-auto`}>
            {headerElement}
          </div>
        </header>
      )}
      {childrenElement && (
        <main>
          <div style={{ maxWidth: containerWidth }} className={`px-10 py-4 m-auto`}>
            {childrenElement}
          </div>
        </main>
      )}
      {footerElement && (
        <footer>
          <div style={{ maxWidth: containerWidth }} className={`px-10 py-4 m-auto`}>
            {footerElement}
          </div>
        </footer>
      )}
    </div>
  );
};
