import type { FC } from "react";
import type { LayoutProps } from "./Layout.types";

/**
 * A top-level layout component that renders a header, main, and footer.
 * Accepts a children prop that must be a function that returns a ReactNode
 * or a ReactNode directly.
 * @param {{ children: (() => ReactNode) | ReactNode, header?: (() => ReactNode) | ReactNode, footer?: (() => ReactNode) | ReactNode }} props
 */
export const Layout: FC<LayoutProps> = ({ children, header, footer }) => {

  console.log('render', Layout.name);
  const headerElement =
    header && typeof header === "function" ? header() : header;
  const childrenElement =
    children && typeof children === "function" ? children() : children;
  const footerElement =
    footer && typeof footer === "function" ? footer() : footer;
  return (
    <div className="min-h-screen w-full bg-black text-white px-6 py-5">
      {headerElement && <header className="mb-10">{headerElement}</header>}
      {childrenElement && <main className="flex gap-6">{childrenElement}</main>}
      {footerElement && <footer>{footerElement}</footer>}
    </div>
  );
};
