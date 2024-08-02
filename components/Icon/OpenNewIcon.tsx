import { FC } from 'react'

interface OpenNewProps {
    color?: string
}

const OpenNewIcon: FC<OpenNewProps> = ({ color, ...rest }) => {
    const fill = color || '#000'

    return (
        <svg viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1122" width="200" height="200" {...rest}>
        <path 
            d="M896 576V810.666667a85.333333 85.333333 0 0 1-85.333333 85.333333H213.333333a85.333333 85.333333 0 0 1-85.333333-85.333333V213.333333a85.333333 85.333333 0 0 1 85.333333-85.333333h234.666667a21.333333 21.333333 0 0 1 21.333333 21.333333v42.666667a21.333333 21.333333 0 0 1-21.333333 21.333333H213.333333v597.333334h597.333334v-234.666667a21.333333 21.333333 0 0 1 21.333333-21.333333h42.666667a21.333333 21.333333 0 0 1 21.333333 21.333333z m-9.386667-426.666667l-11.52-11.52A32 32 0 0 0 853.333333 128h-277.333333a21.333333 21.333333 0 0 0-21.333333 21.333333v42.666667a21.333333 21.333333 0 0 0 21.333333 21.333333h174.506667l-360.106667 360.106667a21.333333 21.333333 0 0 0 0 30.293333l29.866667 29.866667a21.248 21.248 0 0 0 30.293333 0L810.666667 273.92v174.08a21.333333 21.333333 0 0 0 21.333333 21.333333h42.666667a21.333333 21.333333 0 0 0 21.333333-21.333333V170.666667a32 32 0 0 0-9.386667-21.76v0.426666z" 
                fill={fill} p-id="1123"></path></svg>
    
      )
}

export default OpenNewIcon
