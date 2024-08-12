'use client'

import { useSuspenseQuery } from '@tanstack/react-query'
import { useRouter } from 'next/navigation'
import { FC } from 'react'
import { Controller, SubmitHandler, useForm } from 'react-hook-form'
import { stripHtml } from 'string-strip-html'

import { genreOptions, useEditGenreMutation } from 'widgets/admin/api/editGenre'

import { SlugField } from 'features/admin/ui'
import { TextEditor } from 'features/textEditor'

import { IGenreEdit } from 'shared/api/genres'
import { generateSlug } from 'shared/lib/utils'
import { Button, Field, SkeletonLoader } from 'shared/ui'
import { Heading } from 'shared/ui/heading'

import styles from './editGenre.module.scss'

interface IEditGenre {
	readonly genreId: string
}

export const EditGenre: FC<IEditGenre> = ({ genreId }) => {
	const { data, isLoading } = useSuspenseQuery(genreOptions(genreId))
	const { mutate: editGenre, isPending } = useEditGenreMutation(genreId)

	const defaultValues = {
		name: data?.name || '',
		description: data?.description || '',
		slug: data?.slug || '',
		icon: data?.icon || '',
	} as IGenreEdit
	const onSubmit: SubmitHandler<IGenreEdit> = (data) => {
		editGenre(data)
	}

	const {
		control,
		handleSubmit,
		setValue,
		getValues,
		formState: { errors },
	} = useForm({ defaultValues, mode: 'onChange' })
	return (
		<div className="flex flex-col gap-10">
			<Heading title="Edit genre" />
			<form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
				{isLoading ? (
					<SkeletonLoader count={4} height={48} />
				) : (
					<>
						<div className="flex-center-between flex-wrap">
							<Controller
								control={control}
								name="name"
								rules={{ required: 'Name is required' }}
								render={({ field }) => (
									<Field
										placeholder="Name"
										{...field}
										error={errors.name}
										style={{ width: '31%' }}
									/>
								)}
							/>
							<div style={{ width: '31%' }}>
								<SlugField
									control={control}
									error={errors.slug}
									generate={() => {
										setValue('slug', generateSlug(getValues('name')))
									}}
								/>
							</div>
							<Controller
								control={control}
								name="icon"
								rules={{ required: 'Icon is required' }}
								render={({ field }) => (
									<Field
										placeholder="Icon"
										{...field}
										error={errors.icon}
										style={{ width: '31%' }}
									/>
								)}
							/>
						</div>
						<Controller
							control={control}
							name="description"
							rules={{
								validate: {
									required: (v) =>
										(v && stripHtml(v).result.length > 0) ||
										'Description is required',
								},
							}}
							render={({ field: { value, onChange } }) => (
								<TextEditor
									placeholder="Description"
									value={value}
									onChange={onChange}
									error={errors.description}
								/>
							)}
						/>
						<Button isLoading={isPending} type="submit">
							Update
						</Button>
					</>
				)}
			</form>
		</div>
	)
}
