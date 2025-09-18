import type { FC, HTMLAttributes } from "react";
import type { ButtonProps } from "./Button.types";

import premiumBg from '/icons/premium-btn.svg'
import  buttonStyles from './Button.module.scss';

/**
 * A button component that renders a premium or collection button with a background image
 * and a text node.
 *
 * @param {boolean} [active=false] - Whether the button is active or not.
 * @param {HTMLAttributes<HTMLButtonElement>} props - Additional props passed to the button element.
 * @returns {JSX.Element} - The rendered button component.
 */
export const Button: FC<HTMLAttributes<HTMLButtonElement> & ButtonProps> = ({active = false, ...props}) => {


    const {style}: HTMLAttributes<HTMLButtonElement['style']> = {
        style: {
            backgroundImage: `url(${premiumBg})`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'auto',
            backgroundPosition: 'center'
        }
    }
    return (
        <button style={active ? style : {}} className={`cursor-pointer px-8 bg-[#19191E] text-white py-2 text-center ${buttonStyles.button}`} {...props} >
            {props.text}

        </button>
    )
}