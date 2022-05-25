export type Nullable<T> = T | null

export type NotNull<T> = T extends null ? never : T
