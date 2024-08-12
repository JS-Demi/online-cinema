'use client'

import {
	ContentState,
	EditorState,
	convertFromRaw,
	convertToRaw,
} from 'draft-js'
import draftToHtml from 'draftjs-to-html'
import htmlToDraft from 'html-to-draftjs'
import { FC, useEffect, useState } from 'react'
import { Editor } from 'react-draft-wysiwyg'
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css'

import { ITextEditor } from '../model/types'
import styles from './textEditor.module.scss'

export const TextEditor: FC<ITextEditor> = (props) => {
	const { onChange, placeholder, error, value } = props
	const [editorState, setEditorState] = useState(() => {
		if (value) {
			const blocksFromHtml = htmlToDraft(value)

			const contentState = ContentState.createFromBlockArray(
				blocksFromHtml.contentBlocks,
				blocksFromHtml.entityMap
			)

			return EditorState.createWithContent(contentState)
		}
		return EditorState.createEmpty()
	})

	const onEditorStateChange = (newEditorState: EditorState) => {
		setEditorState(newEditorState)

		return onChange(
			draftToHtml(convertToRaw(newEditorState.getCurrentContent()))
		)
	}
	return (
		<div className={styles.editorWrapper}>
			<label>
				<span>{placeholder}</span>
				<div className={styles.wrapper}>
					<Editor
						toolbarClassName={styles.toolbar}
						editorClassName={styles.editor}
						editorState={editorState}
						onEditorStateChange={onEditorStateChange}
						spellCheck
						toolbar={{
							options: ['inline', 'list'],
							inline: {
								inDropdown: false,
								className: undefined,
								component: undefined,
								dropdownClassName: undefined,
								options: ['bold', 'italic', 'underline', 'strikethrough'],
							},

							list: {
								inDropdown: false,
								options: ['unordered', 'ordered'],
							},
						}}
					/>
				</div>
				{error && <div className={styles.error}>{error.message}</div>}
			</label>
		</div>
	)
}
