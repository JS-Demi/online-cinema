'use client'

import { useRouter } from 'next/navigation'
import { FC } from 'react'

import { IAdminData } from 'shared/types'
import { MdMaterialIcon } from 'shared/ui'

import styles from './adminDataItem.module.scss'

// import styles from './adminDataItem.module.scss'

interface IAdminDataItem {
	readonly data: IAdminData
	readonly removeHandler: (id: string) => void
}

export const AdminDataItem: FC<IAdminDataItem> = ({ data, removeHandler }) => {
	const router = useRouter()

	return (
		<li>
			{data.items.map((item) => (
				<div key={item}>{item}</div>
			))}
			<div className={styles.actions}>
				<button onClick={() => router.push(data.editUrl)}>
					<MdMaterialIcon icon={'MdEdit'} />
				</button>
				<button onClick={() => removeHandler(data._id)}>
					<MdMaterialIcon icon={'MdClose'} />
				</button>
			</div>
		</li>
	)
}
