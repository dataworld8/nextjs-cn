import * as logos from "./LogoIcons"
import * as others from "./OtherIcons"

import type { FC } from "react"

type IconProps = React.HTMLAttributes<SVGElement>
type LogoType = keyof typeof logos
type OtherType = keyof typeof others

// todo: "@radix-ui/react-icons" 下的 icon 组件
type TodoType = 'Cross2Icon' | 'DotFilled' | 'MagnifyingGlassIcon' | 'ChevronDownIcon' | 'ChevronLeftIcon' | 'ChevronRightIcon' | 'CircleIcon' | 'FileIcon' | 'LaptopIcon'

interface IconsProp extends IconProps {
    name: IconName
    width?: string
    height?: string
}

const Icons: FC<IconsProp> = ({ name, ...rest }) => {
    const IconComponent: FC<IconProps> = logos[name as LogoType] || others[name as OtherType]

    if (!IconComponent) {
        return null
    }

    return <IconComponent {...rest} />
}

export type IconName = LogoType | OtherType | TodoType
export default Icons
