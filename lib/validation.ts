import { z } from "zod"

export const formSchema = z.object({
    title: z.string().min(3).max(100),
    description: z.string().min(20).max(1000),
    category: z.string().min(3).max(20),
    lin: z.string().url().refine(async (url) => {
        try {
            const res = await fetch(url, { method: "HEAD" })
            const contentType = res.headers.get("content-type")
            if (contentType?.startsWith("image/")) {
                return true
            }
            else {
                return false
            }
        } catch {
            return false
        }
    }),
    pitch: z.string().min(10).max(500)
})