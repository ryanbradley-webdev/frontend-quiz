import { data } from '@/data/data'

type AllValuesOf<T> = T extends any ? T[keyof T] : never

export type Quiz = typeof data[number]

export type Questions = AllValuesOf<Quiz['questions']>
