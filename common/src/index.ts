import z from "zod"

export const signupInput = z.object({
    username: z.string().email(),
    password: z.string().min(6),
    name: z.string().optional()

})

export const singinInput = z.object({
    username: z.string().email(),
    password: z.string().min(6)
})



export const createPostInput = z.object({
    title:z.string(),
    content: z.string()
})


export const updatePostInput = z.object({
    title: z.string(),
    content: z.string(),
    id:z.number()
})


export type SingupInput = z.infer<typeof signupInput>
export type SigninInput = z.infer<typeof singinInput>
export type CreatePostInput = z.infer<typeof createPostInput>
export type UpdatePostInput = z.infer<typeof updatePostInput>