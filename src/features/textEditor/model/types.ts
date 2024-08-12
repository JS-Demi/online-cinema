import { EditorProps } from 'draft-js'
import { ChangeHandler, FieldError } from 'react-hook-form'

export interface ITextEditor extends Omit<EditorProps, 'editorState'> {
	readonly error?: FieldError | undefined
	readonly onChange: (...events: any[]) => void
	readonly value: string
}
