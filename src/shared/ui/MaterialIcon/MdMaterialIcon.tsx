'use client'

import { FC } from 'react'
import { TMaterialIconName } from 'shared/types'
import * as MaterialIcons from 'react-icons/md'

interface IMdMaterialIcon {
	icon: TMaterialIconName
}

export const MdMaterialIcon: FC<IMdMaterialIcon> = ({ icon }) => {
	const IconComponent = MaterialIcons[icon] ?? MaterialIcons.MdOfflineBolt
	return <IconComponent />
}
