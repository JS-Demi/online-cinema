'use client'

import { FC } from 'react'

import { AdminDataItem } from 'entities/admin'

import { IAdminData } from 'shared/types'
import { SkeletonLoader } from 'shared/ui'

import styles from './adminDataList.module.scss'

interface IAdminDataList {
	readonly titles: string[]
	readonly isLoading: boolean
	readonly itemName: string
	readonly removeHandler: (_id: string) => void
	readonly data: IAdminData[]
}

export const AdminDataList: FC<IAdminDataList> = ({
	titles,
	isLoading,
	data,
	removeHandler,
	itemName,
}) => {
	return (
		<ul className={styles.ul}>
			<li className={styles.headerItem}>
				{titles.map((title) => (
					<div key={title}>{title}</div>
				))}
				<div>Actions</div>
			</li>
			{isLoading ? (
				<SkeletonLoader count={1} height={48} />
			) : data?.length ? (
				data?.map((user) => (
					<AdminDataItem
						data={user}
						key={user._id}
						removeHandler={removeHandler}
					/>
				))
			) : (
				<div className={styles.notFound}>{`${itemName} not found`}</div>
			)}
		</ul>
	)
}
